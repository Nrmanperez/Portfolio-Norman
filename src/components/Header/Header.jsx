import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

export const Header = () => {

  const user = {
    name: 'Norman',
    email: 'nperez@nicarao.agency',
    imageUrl:
      'https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2023/04/portafolio-programador.webp',
  }
  const navigation = [
    { id: 'home', name: 'Home', href: '#', current: false },
    { id: 'aboutme', name: 'About Me', href: '#', current: false },
    { id: 'skills', name: 'Skills', href: '#', current: false },
    { id: 'projects', name: 'Projects', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollTo = () => {
    scroll.scrollTo('skills', {
      duration: 500,
      smooth: true,
      offset: -80,
    });
  };

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50'>
        <Disclosure as="nav" className="bg-white shadow-sm shadow-black">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <a href='#' className='text-black font-black uppercase tracking-tighter text-4xl leading-10 transition ease-in-out hover:text-red-600 duration-300'>{user.name}</a>
                      </div>
                    </Menu>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <ScrollLink
                            key={item.id}
                            to={item.id}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            onClick={scrollTo}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-black hover:text-red-600',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </ScrollLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-9 w-9" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <ScrollLink 
                      key={item.name}
                      to={item.id}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      onClick={scrollTo}
                    >
                      <Disclosure.Button
                        className={classNames(
                          item.current ? 'text-white' : 'text-black hover:text-red-600',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </ScrollLink>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-800">{user.email}</div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  )
}
