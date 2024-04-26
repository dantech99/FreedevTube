import Button from "../button/button-primary";

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
      title: 'Aprende y Comparte',
      description:
        'Explorar los mejores cursos dictados por los mejores creadores de contenido, explora un sin numero de recursos y comparte con otros lo aprendido.',
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
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl text-white">
                    {section.title}
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-[#FBFBFB] lg:mb-8 md:text-lg lg:text-xl">
                    {section.description}
                  </p>
                </div>

                <div>
                  <Button title="Descubrir" path="/creators" />
                  
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
                  src="/undraw_Engineering_team.png"
                  alt="mockup"
                />

              </div>

              <div className="place-self-end lg:col-span-7 lg:mr-40 lg:mb-10 flex justify-end flex-col ">
                <div className="flex flex-col justify-end items-end text-end">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl text-white text-balance">
                  {section.title}
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-[#FBFBFB] lg:mb-8 md:text-lg lg:text-xl">
                  {section.description}
                  </p>
                </div>

                <div className="flex justify-end">
                <Button title="Explorar" path="/courses" />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
