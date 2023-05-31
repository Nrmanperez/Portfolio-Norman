import images from '../../assets/imgs'

export const Projects = () => {

    const products = [
        {
          id: 1,
          name: 'Giftnix',
          href: '#',
          imageSrc: images.giftnix,
          imageAlt: 'Project Giftnix',
        },
        {
          id: 2,
          name: 'The Peak Beyond',
          href: '#',
          imageSrc: images.tpb,
          imageAlt: 'Project TPB',
        },
        {
          id: 3,
          name: 'BioRaices',
          href: '#',
          imageSrc: images.bioraices,
          imageAlt: 'Project BioRaices',
        },
        {
          id: 4,
          name: 'NATAB',
          href: '#',
          imageSrc: images.natab,
          imageAlt: 'Project NATAB',
        },
        {
            id: 5,
            name: 'Cripto App',
            href: '#',
            imageSrc: images.cripto,
            imageAlt: 'Project Cripto App',
        },
        {
            id: 6,
            name: 'Drink Finder',
            href: '#',
            imageSrc: images.drink,
            imageAlt: 'Project Drink Finder',
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
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" style={{ height: '280px' }}>
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-700">{product.name}</h3>
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
