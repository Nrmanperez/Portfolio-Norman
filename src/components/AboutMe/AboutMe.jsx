import images from "../../assets/imgs";

export const AboutMe = () => {
  return (
    <section id="aboutme" className="bg-white pt-24 pb-16">
      <h2 className="text-5xl font-bold pb-11 text-center xl:hidden">
        About Me
      </h2>
      <div className="grid xl:grid-cols-2 gap-1">
        <div className="flex justify-center items-center">
          <div className="p-6">
            <img
              src={images.profileAboutMe}
              className="rounded-2xl"
              style={{ width: "600px" }}
              alt="About Me"
            />
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-5xl font-bold pb-11 text-center xl:text-left hidden xl:block">
            About Me
          </h2>
          <p className="pb-11 sm:text-2xl">
            I am a person in constant balance of my emotions, that helps me to
            react in the most productive way to the different impulses. I always
            focus on being clear about the objective I am pursuing at a work and
            professional level. On a personal level, I highly value moments of
            relaxation with my family members. I am a faithful believer in the
            construction of memories and experiences. I use this belief as my
            engine. The main part of my professional success, my work and
            business achievements are the vehicle on which I move to achieve
            everything that is needed to build these memories.
          </p>
          <p className="pb-11 sm:text-2xl">
            At the level of web development, I have managed to dilute myself
            efficiently in the universe of Frontend and Backend, as I have
            successfully led the creation of web applications from scratch where
            the logic and commercial design come from my own inspiration and the
            materialization of my client's abstract idea.
          </p>
          <div>
            <ul className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <li className="text-red-500 sm:text-2xl">Name:</li>
                <li className="text-red-500 sm:text-2xl">Age:</li>
                <li className="text-red-500 sm:text-2xl">Email:</li>
                <li className="text-red-500 sm:text-2xl">Phone:</li>
              </div>
              <div className="col-span-2">
                <li className="sm:text-2xl">Norman Perez</li>
                <li className="sm:text-2xl">30 years old</li>
                <li className="sm:text-2xl">perez.norman30@gmail.com</li>
                <li className="sm:text-2xl">(+505) 8295-6194</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
