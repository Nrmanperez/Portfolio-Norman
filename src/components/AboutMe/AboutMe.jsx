import images from '../../assets/imgs'

export const AboutMe = () => {
  return (
    <section className="bg-white pt-24 pb-16">
      <h2 className='text-5xl font-bold pb-11 text-center xl:hidden'>About Me</h2>
      <div className="grid xl:grid-cols-2 gap-1">
        <div className='flex justify-center items-center'>
          <div className='p-6'>
            <img src={images.profileAboutMe} className='rounded-2xl' style={{ width: '600px' }}  alt="About Me" />
          </div>
        </div>
        <div className='p-6'>
          <h2 className='text-5xl font-bold pb-11 text-center xl:text-left hidden xl:block'>About Me</h2>
          <p className='pb-11 sm:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti consequuntur quaerat, delectus, error, minus incidunt ut porro minima repudiandae odio voluptas aperiam? Soluta ratione deleniti quo provident laudantium cum!</p>
          <div>
            <ul className='grid grid-cols-3 gap-4'>
              <div className="col-span-1">
                <li className='text-red-500 sm:text-2xl'>Name:</li>
                <li className='text-red-500 sm:text-2xl'>Age:</li>
                <li className='text-red-500 sm:text-2xl'>Email:</li>
                <li className='text-red-500 sm:text-2xl'>Phone:</li>
              </div>
              <div className="col-span-2">
                <li className='sm:text-2xl'>Norman Perez</li>
                <li className='sm:text-2xl'>29 years old</li>
                <li className='sm:text-2xl'>nperez@nicarao.agency</li>
                <li className='sm:text-2xl'>(+505)-8295-6194</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
