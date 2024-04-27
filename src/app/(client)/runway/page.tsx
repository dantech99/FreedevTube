import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Runway | FreeDevTube',
  description: 'Descubre los cursos gratuitos y streamers más populares de FreeDevTube',
  keywords: 'cursos, streamers, gratis, FreeDevTube'

}


interface RunwayItemProps {
  imgSrc: string;
  title: string;
  url: string;
}

export default function Runway() {
  const resources = [
    {
      imgSrc: '/learn.png',
      title: 'CURSOS GRATUITOS',
      url: "/courses"
    },
    {
      imgSrc: '/streamer.png',
      title: 'STREAMERS',
      url: '/creators'
    },
  ];

  return (
    <div className="lg:p-8 h-auto">
      <h1 className="text-yellow-300 text-3xl font-bold mb-4 text-center">
        ¿Qué quieres descubrir hoy?
      </h1>

      <div className="flex justify-center items-center gap-5 h-screen">
        {resources.map((resource, index) => (
          <RunwayItem key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}

function RunwayItem({ imgSrc, title, url }: RunwayItemProps) {
  return (
    <div className="rounded-lg shadow bg-slate-800 border h-auto md:h-[450px] w-[350px] flex flex-col justify-start items-center">
      {/* contenedor de la imagen */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-4 flex items-center justify-center mt-20">
        <img className="w-full h-full object-cover" src={imgSrc} alt='' />
      </div>

      {/* contenedor del texto */}
      <div className="p-4 text-center">
        <a href={url} rel="noopener noreferrer">
          <h5 className="text-yellow-300 text-1xl font-bold mb-4 hover:text-yellow-600">{title}</h5>
        </a>
      </div>
    </div>
  );
}
