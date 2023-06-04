import { useState } from 'react'
import images from '../../assets/imgs'
import { Modal } from '../Modal/Modal'

export const Projects = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
      }

      const closeModal = () => {
        setIsOpen(false);
        setSelectedProject(null);
      }

    const products = [
        {
          id: 1,
          name: 'Giftnix',
          href: '#',
          imageSrc: images.giftnix,
          imageAlt: 'Project Giftnix',
          description: 'The main page of the NIntendoCardDelivery store was elaborated, adding the cards and design of the whole page, showing it in a pleasant way for the user.',
          description2: '',
          description3: '',
          imagesCart: [images.giftnix, images.giftnix2, images.giftnix3],
          technologies: ['NodeJS', 'NextJS', 'React']
        },
        {
          id: 2,
          name: 'The Peak Beyond',
          href: '#',
          imageSrc: images.tpb,
          imageAlt: 'Project TPB',
          description: 'Kiosk where you can navigate between different products, brands, product categories with promotions and featured products, as well as a shopping cart to create orders, a new view was implemented for the stores where the user can see all the products offered by the different stores specified by their categories.',
          description2: 'Management of kiosks and the products displayed in them for cannabis products stores, we implemented the integration of a new product where you can make purchases with new products.',
          description3: 'We introduced the logic to create the orders, store them in the database and be able to create all the necessary responses and send them to the different endpoints for implementation.',
          imagesCart: [images.tpb, images.tpb2, images.tpb3, images.tpb4],
          technologies: ['Angular', 'Ruby On Rails', 'VueJS', 'JavaScript', 'CSS', 'HTML', 'PostgresQL', 'Docker']
        },
        {
          id: 3,
          name: 'BioRaices',
          href: '#',
          imageSrc: images.bioraices,
          imageAlt: 'Project BioRaices',
          description: 'BioRaices is a project where users can view the different products, add them to the cart and make their purchases through a payment gateway.',
          description2: '',
          description3: '',
          imagesCart: [images.bioraices, images.bioraices2, images.bioraices3],
          technologies: ['Bootstrap', 'ExpressJS', 'React', 'JavaScript', 'NodeJS', 'HTML']
        },
        {
          id: 4,
          name: 'NATAB',
          href: '#',
          imageSrc: images.natab,
          imageAlt: 'Project NATAB',
          description: 'Project task management where the user can keep track of the time it will take to do these tasks, you can also create teams where each team will be assigned several projects, each project may have collaborators where they can have access to these projects and modify their status, there will also be a chat room where users can send messages to their collaborators.',
          description2: '',
          description3: '',
          imagesCart: [images.natab, images.natab2, images.natab3, images.natab4, images.natab5, images.natab6],
          technologies: ['PostgresQL', 'Docker', 'NodeJS', 'React', 'Chakra', 'HTML', 'NestJS']
        },
        {
            id: 5,
            name: 'Cripto App',
            href: '#',
            imageSrc: images.cripto,
            imageAlt: 'Project Cripto App',
            description: 'Web App that quotes the price of different types of cryptocurrencies and returns the updated price along with their prices and the lowest of the day.',
            description2: '',
            description3: '',
            imagesCart: [images.cripto, images.cripto2, images.cripto3, images.cripto4],
            technologies: ['Git', 'API Integration', 'React', 'JavaScript', 'CSS', 'HTML']
        },
        {
            id: 6,
            name: 'Drink Finder',
            href: '#',
            imageSrc: images.drink,
            imageAlt: 'Project Drink Finder',
            description: 'Web App that allows us to search information about the different drinks that are normally served in restaurants, bars, etc.., you can see their name, instructions, ingredients and quantity of ingredients so you can make them too.',
            description2: '',
            description3: '',
            imagesCart: [images.drink, images.drink2, images.drink3, images.drink4],
            technologies: ['Git', 'API Integration', 'React', 'JavaScript', 'CSS', 'HTML']
        },
      ]

    return (
        <section className="container mx-auto mb-16 mt-16">
            <div>
                <h2 className="text-center text-7xl">Portfolio</h2>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group" onClick={() => openModal(product)}>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{ height: '280px' }}>
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer"
                                />
                                </div>
                                <h3 className="mt-4 text-xl font-bold text-gray-700">{product.name}</h3>
                            </div>
                        ))}
                        <Modal isOpen={isOpen} onClose={closeModal} project={selectedProject} />
                    </div>
                </div>
            </div>
        </section>
    )
}
