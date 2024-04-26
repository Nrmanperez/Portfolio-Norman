/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg max-w-2xl mx-4 sm:mx-auto z-10">
        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
            <AiOutlineClose onClick={onClose} size={30} />
          </div>
          <Carousel showArrows={true} showThumbs={false} dynamicHeight={true}>
            {project.imagesCart.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Project ${project.name}`}
                  className="object-cover h-64 sm:h-96 mx-auto"
                />
              </div>
            ))}
          </Carousel>
          <p className="mt-4">{project.description}</p>
          <p
            className={`mt-4 ${
              project.name === "The Peak Beyond" ? "" : "font-bold"
            }`}
          >
            {project.description2}
          </p>
          {project.name === "The Peak Beyond" && (
            <p className="mt-4">{project.description3}</p>
          )}
          {project.name === "Decipher" && (
            <p className="mt-4">
              <>
                <ul>
                  <li className="mt-1">
                    Added validations for the rules and conditions for a user to
                    be eligible for the loan
                  </li>
                  <li className="mt-1">
                    A configuration modal was created for where to store in the
                    database when a product is created.
                  </li>
                  <li className="mt-1">
                    We implemented the google map API embedded in the form
                    applications for the applications of the forms for the
                    clients where each user will be able to user will be able to
                    register their location, by means of coordinates or by
                    entering city, zip code, state, country, etc.
                  </li>
                  <li className="mt-1">
                    New workflows were implemented where if certain conditions
                    are met in the models, programmed actions will be executed
                    within the application. programmed actions will be executed
                    within the application.
                  </li>
                </ul>
              </>
            </p>
          )}
          {project.name === "NARTT" && (
            <p className="mt-4">
              <>
                <ul>
                  <li className="mt-1">
                    Created a component to list the users of a company, where
                    the owner of the company will have an option to impersonate
                    the user.
                  </li>
                  <li className="mt-1">
                    We have created a download button for the different
                    templates, where the owner can import users, and will have
                    the option to download two templates, one in csv format and
                    one in xlsx format. csv format and another in xlsx format.
                  </li>
                  <li className="mt-1">
                    Validation has been established to create special type VTOs
                    even if there are already approved normal type VTOs. special
                    VTO even if there are already approved VTOs of normal type,
                    shortening the deadline of the normal VTO if the special VTO
                    is approved within the same approved within the same time
                    interval.
                  </li>
                </ul>
              </>
            </p>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-4">Technologies</h3>
          <div className="flex flex-wrap">
            {project.technologies.map((technologie, index) => (
              <span
                key={index}
                className="bg-red-100 text-red-800 text-xs font-medium m-auto px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
              >
                {technologie}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4 bg-gray-100"></div>
      </div>
    </div>
  );
};

export default Modal;
