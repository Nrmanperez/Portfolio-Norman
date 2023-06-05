import images from '../../assets/imgs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

export const Home = () => {

  return (
    <section 
      className="mt-16 xl:grid xl:grid-cols-2 sm:flex sm:flex-col sm:justify-center sm:items-center bg-black"
      
      id='home'
    >
      <div className='xl:text-center xl:m-auto xl:w-auto sm:mt-16'>
        <div className='text-center xl:text-start xl:mb-5'>
          <p className='text-white sm:text-2xl'>Hello</p>
          <p className='text-white sm:text-2xl'>I am <span className='text-red-500'>Norman </span>Perez</p>
        </div>
        <div className='text-center'>
          <h1 className="text-white sm:text-4xl 2xl:text-6xl">
            <span className="text-left">
              I am{' '}
              <span className="relative">
                <b>
                  {Array.from('Web Developer').map((letter, index) => (
                    <span
                      key={index}
                      className={`inline-block animate-fade-in-left animate-delay-${index} text-red-500`}
                      style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
                    >
                      {letter}
                    </span>
                  ))}
                </b>
              </span>
            </span>
          </h1>
        </div>
        <div className='mt-2 xl:mt-8 flex justify-center xl:justify-start gap-3'>
          <a href="https://github.com/Nrmanperez" className='flex items-center justify-center w-8 xl:w-12 h-8 xl:h-12 border border-red-500 rounded-full'>
            <i>{<FaGithubSquare color='red' size={24} />}</i>
          </a>
          <a href="https://www.linkedin.com/in/nrmanperez" className='flex items-center justify-center w-8 xl:w-12 h-8 xl:h-12 border border-red-500 rounded-full'>
            <i>{<FaLinkedin color='red' size={24} />}</i>
          </a>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src={images.profile} alt="Profile Norman" className='w-2/4' style={{ maxWidth: '406px', }} />
      </div>
    </section>
  )
}
