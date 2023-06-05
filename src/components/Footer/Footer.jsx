import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const icons = {
  github: <FaGithubSquare/>,
  Linkedin: <AiFillLinkedin/>
}

export const Footer = () => {
  return (
    <footer className="min-h-full bg-gray-500 text-center">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center dark:text-gray-400">© 2023 Norman Perez. All Rights Reserved.
      </span>
      <ul className="flex justify-center items-center mt-3 md:mt-0">
        <li className='flex justify-center items-center'>
            <a href="https://github.com/Nrmanperez" className='text-black mr-6 md:mr-8' style={{ fontSize: '30px' }}>{icons.github}</a>
        </li>
        <li className='flex justify-center items-center'>
            <a href="https://www.linkedin.com/in/nrmanperez" className='text-black mr-6 md:mr-8' style={{ fontSize: '30px' }}>{icons.Linkedin}</a>
        </li>
      </ul>
    </div>
</footer>
  )
}
