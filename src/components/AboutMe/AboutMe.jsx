import profileAboutMe from '../../assets/NORMAN_BACK.jpg'

export const AboutMe = () => {
  return (
    <section className="bg-white pt-24 pb-16">
      <div className="grid grid-cols-2 gap-4">
        <div className='flex justify-center items-center'>
          <div className='p-6'>
            <img src={profileAboutMe} className='rounded-2xl' style={{ width: '600px' }}  alt="About Me" />
          </div>
        </div>
        <div className='p-6'>
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti consequuntur quaerat, delectus, error, minus incidunt ut porro minima repudiandae odio voluptas aperiam? Soluta ratione deleniti quo provident laudantium cum!</p>
          <div>
            <ul>
              <li><span>Name:</span>Norman Perez</li>
              <li><span>Age:</span>29 years old</li>
              <li><span>Email:</span>perez.norman30@gmail.com</li>
              <li><span>Country:</span>Nicaragua</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
