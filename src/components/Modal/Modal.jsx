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
                    Se agregaron validaciones para las reglas y las condiciones
                    para que un usuario pueda ser elegible para el prestamo
                  </li>
                  <li className="mt-1">
                    Se creo un modal de configuraciones para donde se almacenan
                    en la base de datos cuando un producto es creado
                  </li>
                  <li className="mt-1">
                    Se implemento la API de google map embebido en las
                    aplicaciones de los formularios para los clientes donde cada
                    usuario podra registrar su ubicacion, por medio de
                    coordenadas o ingresando ciudad, codigo postal, estado, pais
                  </li>
                  <li className="mt-1">
                    Se implementaron nuevos flujos de acciones de trabajo donde
                    si se cumplan ciertas condiciones en los modelos se
                    ejecutaran acciones programadas dentro de la aplicacion
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
                    Creado un componente para listar los usuarios de una
                    empresa, donde el propietario de la empresa tendrá una
                    opción para suplantar al usuario.
                  </li>
                  <li className="mt-1">
                    Hemos creado un botón de descarga para las diferentes
                    plantillas, donde el propietario puede importar usuarios, y
                    tendrá la opción de descargar dos plantillas, una en formato
                    csv y otra en formato xlsx.
                  </li>
                  <li className="mt-1">
                    Se ha establecido la validación para crear VTO de tipo
                    especial aunque ya existan VTO de tipo normal aprobadas,
                    recortando el plazo de la VTO normal si la VTO especial se
                    aprueba dentro del mismo intervalo de tiempo.
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
