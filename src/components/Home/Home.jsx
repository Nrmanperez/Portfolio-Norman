import profile from '../../assets/norman.png'

export const Home = () => {
  return (
    <section className="mt-16 grid grid-cols-2 bg-black"
      // className='mt-16 relative bg-[url("/home/norman/Documents/portafolio/Portfolio-Norman/src/assets/norman.jpg")] bg-cover bg-fixed bg-right w-full h-screen bottom-2'
    >
      <div className='text-center m-auto'>
        <div className='text-start'>
          <p className='text-white text-sm'>Hello</p>
          <p className='text-white text-3xl'>I am <span>Norman</span>Perez</p>
        </div>
        <div>
          <h1 className='text-white'>
            <span>I am</span>
            <span>
              <b>Web Developer</b>
            </span>
          </h1>
        </div>
        <div>
          <a href="#">
            <i></i>
          </a>
          <a href="#">
            <i></i>
          </a>
          <a href="#">
            <i></i>
          </a>
          <a href="#">
            <i></i>
          </a>
        </div>
      </div>
      <div className='relative bottom-14'>
        <img src={profile} alt="Profile Norman" className='max-h-screen w-full' />
      </div>
    </section>
  )
}
