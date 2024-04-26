"use client"
import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SignInClient } from '../auth/signin-button-client';
import { SignOut } from '../auth/signout-button';
import { useSession } from "next-auth/react"
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Cursos', href: '/courses', current: false },
  { name: 'Streamers', href: '/creators', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Faq', href: '/faq', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {

  const { data: session, status } = useSession()

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`bg-gray-900 ${
        isSticky
          ? 'fixed top-0 left-0 w-full bg-opacity-75 backdrop-filter backdrop-blur-lg z-10'
          : ''
      }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="font-bold text-2xl">
                    <a href="/">Freedev</a>
                    <a href="/" className="text-yellow-500">
                      Tube
                    </a>
                  </span>
                </div>
              </div>

              <div className="flex">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ml-4 md:flex items-center hidden ">
                {
                  session ? <SignOut /> : <SignInClient />
                }
                {
                  session ? (
                    <div className="ml-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden cborder-2 border-gray-600">
                        <img
                          src={session?.user?.image ?? ''}
                          alt={session?.user?.name ?? ''}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : null
                }
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="ml-4 flex items-center w-full ">
                {
                  session ? <SignOut /> : <SignInClient />
                }
                {
                  session ? (
                    <div className="ml-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
                        <img
                          src={session?.user?.image ?? ''}
                          alt={session?.user?.name ?? ''}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : null
                }
              </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar; // Aplicamos el HOC a nuestro componente Navbar
