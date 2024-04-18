"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";

const navigation = [
  { name: 'Home', href: '', current: true },
  { name: 'Cursos', href: '#', current: false },
  { name: 'Creadores', href: '#', current: false },
  { name: 'About', href: '/', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const supabase = createClientComponentClient();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data || !data.session || !data.session.user) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };

    checkAuthStatus();
  }, [supabase.auth]);

  const handleAuthAction = async () => {
    if (isLoggedIn) {
      await supabase.auth.signOut();
      setIsLoggedIn(false);
    } else {
      await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: "http://localhost:3000/auth/callback",
        },
      });
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-900">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                <span className="font-bold">Freedev<a className="text-yellow-500">Tube</a></span>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <button className="w-40 h-10 gap-0 focus:outline-none text-black bg-yellow-500 rounded-lg py-2 transition duration-150 ease-in" onClick={handleAuthAction}>
                {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
              </button>
              {/* {isLoggedIn && (
                <Image width={80} height={40} src="/profile.png" alt="Perfil de usuario" className="w-10 h-10 gap-6  rounded-full m-4" />
              )} */}
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
                  item.href  ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
            <button className="w-full mt-4 focus:outline-none text-black bg-yellow-500 rounded-lg py-2 transition duration-150 ease-in" onClick={handleAuthAction}>
              {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
            </button>
            {/* {isLoggedIn && (
              <Image width={80} height={40} src="/profile.png" alt="Perfil de usuario" className="w-10 h-10 gap-6  rounded-full m-4" />
            )} */}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}
