import profileAboutMe from '../../assets/NORMAN_BACK.jpg'

export const AboutMe = () => {
  return (
    <section className="bg-white pt-24 pb-16">
      <div className="grid grid-cols-2 gap-1">
        <div className='flex justify-center items-center'>
          <div className='p-6'>
            <img src={profileAboutMe} className='rounded-2xl' style={{ width: '600px' }}  alt="About Me" />
          </div>
        </div>
        <div className='p-6'>
          <h2 className='text-5xl font-bold pb-11'>About Me</h2>
          <p className='pb-11 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti consequuntur quaerat, delectus, error, minus incidunt ut porro minima repudiandae odio voluptas aperiam? Soluta ratione deleniti quo provident laudantium cum!</p>
          <div>
            <ul className='grid 2xl:grid-cols-2 grid-cols-1 gap-4'>
              <li className='text-2xl'><span className='text-red-500 text-2xl' style={{ marginRight: '52px' }}>Name:</span>Norman Perez</li>
              <li className='text-2xl'><span className='text-red-500 text-2xl' style={{ marginRight: '85px' }}>Age:</span>29 years old</li>
              <li className='text-2xl'><span className='text-red-500 text-2xl mr-14'>Email:</span>perez.norman30@gmail.com</li>
              <li className='text-2xl'><span className='text-red-500 text-2xl mr-14'>Phone:</span>(+505)-8295-6194</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
