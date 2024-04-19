export default function DiscoverPage() {
  interface DataSection {
    id: number;
    title: string;
    description: string;
    link: string;
    position: string;
  }

  const dataSection: DataSection[] = [
    {
      id: 1,
      title: 'Descubre y Encuentra',
      description:
        'A tus streamers, Youtubers y creadores de contenido favorito en un solo lugar, enterate de quién está aportando valor a la comunidad hispanohablante',
      link: '/',
      position: 'left',
    },
    {
      id: 2,
      title: 'Descubre y Encuentra',
      description:
        'A tus streamers, Youtubers y creadores de contenido favorito en un solo lugar, enterate de quién está aportando valor a la comunidad hispanohablante',
      link: '/',
      position: 'righ',
    },
  ];
  return (
    <section className="relative overflow-hidden">
      {dataSection.map((section) => (
        <div
          className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
          key={section.id}>
          {section.position === 'left' ? (
            <>
              <div className="place-self-start lg:col-span-7 lg:mr-40 lg:mb-10 flex justify-center flex-col">
                <div>
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                    Descubre y Encuentra
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                    A tus streamers, Youtubers y creadores de contenido favorito
                    en un solo lugar, enterate de quién está aportando valor a
                    la comunidad hispanohablante
                  </p>
                </div>

                <div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-blue-300">
                    Descubrir
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-5 ">
                <img
                  className="w-96 lg:w-719px h-auto py-0 px-39px rounded-xl"
                  src="/undraw_Online_media.png"
                  alt="mockup"
                />
              </div>
            </>
          ) : (
            <>
              <div className="hidden lg:block lg:col-span-5 ">
                <img
                  className="w-96 lg:w-719px h-auto py-0 px-39px rounded-xl"
                  src="/undraw_Online_media.png"
                  alt="mockup"
                />
              </div>

              <div className="place-self-end lg:col-span-7 lg:mr-40 lg:mb-10 flex justify-end flex-col">
                <div>
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                    Descubre y Encuentra
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                    A tus streamers, Youtubers y creadores de contenido favorito
                    en un solo lugar, enterate de quién está aportando valor a
                    la comunidad hispanohablante
                  </p>
                </div>

                <div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-blue-300">
                    Descubrir
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
