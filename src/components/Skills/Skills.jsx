export const Skills = () => {
  return (
    <section id="skills" className="p-5 mb-16">
      <div className="mb-16">
        <h2 className="text-center text-7xl">My Skills</h2>
      </div>
      <div className="container mx-auto">
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="flex-col">
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">React</p>
                <p>90%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">VueJS</p>
                <p>90%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">
                  Ruby on Rails
                </p>
                <p>85%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">
                  Bootstrap
                </p>
                <p>90%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">
                  PostgresQL
                </p>
                <p>85%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">PHP</p>
                <p>85%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">NodeJS</p>
                <p>80%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <span
                  data-progress="75%"
                  className="loader-liquid"
                  style={{ width: "80%" }}
                ></span>
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">
                  TailwindCSS
                </p>
                <p>90%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">NestJS</p>
                <p>77%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "77%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">
                  TypeScript
                </p>
                <p>70%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">
                  JavaScript
                </p>
                <p>95%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-lg font-bold dark:text-black">
                  Laravel
                </p>
                <p>88%</p>
              </div>
              <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="h-4 bg-red-500 rounded-full dark:bg-red-500"
                  style={{ width: "88%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
