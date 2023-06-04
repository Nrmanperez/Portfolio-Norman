/* eslint-disable react/prop-types */
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineClose } from 'react-icons/ai'

export const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
      <div className="bg-white rounded-lg max-w-2xl mx-4 sm:mx-auto z-10">
        <div className="p-4">
          <div className='flex justify-between'>
            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
            <AiOutlineClose onClick={onClose} size={30} />
          </div>
          <Carousel showArrows={true} showThumbs={false} dynamicHeight={true}>
            {project.imagesCart.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Project ${project.name}`} className="object-cover h-64 sm:h-96 mx-auto" />
              </div>
            ))}
          </Carousel>
          <p className="mt-4">{project.description}</p>
          <p className="mt-4">{project.description2}</p>
          <p className="mt-4">{project.description3}</p>
        </div>
        <div className='p-4'>
          <h3 className='text-2xl font-bold mb-4'>Technologies</h3>
          { project.technologies.map((technologie, index) => (
            <span key={index} className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">{technologie}</span>
          )) }
        </div>
        <div className="p-4 bg-gray-100">
        </div>
      </div>
    </div>
  );
};

export default Modal;
