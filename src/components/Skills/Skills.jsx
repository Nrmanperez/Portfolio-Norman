
export const Skills = () => {
  return (
    <section className="mt-14 mb-14">
        <div>
            <h2 className="text-center text-7xl">My Skills</h2>
        </div>
        <div className="container mx-auto">
            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 md:gap-10">
                <div className="flex-col">
                    <div>
                        <div className="flex justify-between">
                            <p className="mb-1 text-lg font-medium dark:text-white">React</p>
                            <p>45%</p>
                        </div>
                        <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="h-4 bg-red-500 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="mb-1 text-lg font-medium dark:text-white">VueJS</p>
                            <p>45%</p>
                        </div>
                        <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="h-4 bg-red-500 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="mb-1 text-lg font-medium dark:text-white">Ruby on Rails</p>
                            <p>45%</p>
                        </div>
                        <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="h-4 bg-red-500 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="flex-col">
                    <div>
                        <div className="flex justify-between">
                            <p className="mb-1 text-lg font-medium dark:text-white">NodeJS</p>
                            <p>45%</p>
                        </div>
                        <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                            <span data-progress="75%" className="loader-liquid" style={{width: '45%'}}></span>
                            <div className="h-4 bg-red-500 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="mb-1 text-lg font-medium dark:text-white">TailwindCSS</p>
                            <p>45%</p>
                        </div>
                            <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="h-4 bg-red-500 rounded-full dark:bg-blue-500" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="mb-1 text-lg font-medium dark:text-white">NestJS</p>
                            <p>45%</p>
                        </div>
                        <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="h-4 bg-red-500 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
