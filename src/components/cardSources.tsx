export default function ResourceCard() {
  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-white text-3xl font-bold mb-8 text-center">
        Descubre recursos Indispensables
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none bg-white rounded-lg shadow dark:bg-gray-800 border border-gray-200">
          <a>
            <img
              className="w-full h-auto rounded-t-lg"
              src="/recourseTech.es.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://recursostech.dev" target="_blank">
              <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              recursostech.dev
              </h5>
            </a>
            <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            ¿Hay streamers de programación? ¿Donde puedo deployar mi web?
              ¿Cómo configuro extensión, herramienta, etc 
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Explorar
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none bg-white rounded-lg shadow dark:bg-gray-800 border border-gray-200">
          <a href="#">
            <img
              className="w-full h-auto rounded-t-lg"
              src="/resources.dev.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://devresource.es" target="_blank">
              <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                devresource.es
              </h5>
            </a>
            <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
              Aquí encontrarás los mejores recursos para todo tipo de
              desarrolladores.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Explorar
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
