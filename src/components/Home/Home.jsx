import profile from '../../assets/norman.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Home = () => {

  return (
    <section 
      className="mt-16 xl:grid xl:grid-cols-2 sm:flex sm:flex-col sm:justify-center sm:items-center bg-black"
      style={{ height: `calc(100vh - 64px)` }}
    >
      <div className='xl:text-center xl:m-auto xl:w-auto sm:mt-16'>
        <div className='text-start mb-5'>
          <p className='text-white text-2xl'>Hello</p>
          <p className='text-white text-4xl'>I am <span className='text-red-500'>Norman </span>Perez</p>
        </div>
        <div>
          <h1 className="text-white text-6xl">
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
        <div className='mt-8 flex gap-3'>
          <a href="#" className='flex items-center justify-center w-12 h-12 border border-red-500 rounded-full'>
            <i>{<FaFacebookF color='red' size={24} />}</i>
          </a>
          <a href="#" className='flex items-center justify-center w-12 h-12 border border-red-500 rounded-full'>
            <i>{<FaTwitter color='red' size={24} />}</i>
          </a>
          <a href="#" className='flex items-center justify-center w-12 h-12 border border-red-500 rounded-full'>
            <i>{<FaInstagram color='red' size={24} />}</i>
          </a>
          <a href="#" className='flex items-center justify-center w-12 h-12 border border-red-500 rounded-full'>
            <i>{<FaLinkedin color='red' size={24} />}</i>
          </a>
        </div>
      </div>
      <div className='relative bottom-14 mt-20'>
        <img src={profile} alt="Profile Norman" className='xl:w-2/4 sm:w-full sm:h-1/3' style={{ minHeight: '62vh', maxHeight: '78vh' }} />
      </div>
    </section>
  )
}
