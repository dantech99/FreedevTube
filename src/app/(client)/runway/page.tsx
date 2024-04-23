import React from 'react';

interface RunwayItemProps {
  imgSrc: string;
  title: string;
  url: string;
}

export default function Runway() {
  const resources = [
    {
      imgSrc: '/midudev.jpeg',
      title: 'CURSOS GRATUITOS',
      url: "/courses"
    },
    {
      imgSrc: '/midudev.jpeg',
      title: 'STREAMERS',
      url: '/creators'
    },
  ];

  return (
    <div className="lg:p-8 h-auto">
      <h1 className="text-yellow-300 text-3xl font-bold mb-8 text-center">
        ¿Qué quieres descubrir hoy?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center gap-5 h-screen">
        {resources.map((resource, index) => (
          <RunwayItem key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}

function RunwayItem({ imgSrc, title, url }: RunwayItemProps) {
  return (
    <div className="rounded-lg shadow bg-slate-800 border h-[400px] flex flex-col justify-center items-center">
      {/* contenedor de la imagen */}
      <div className="w-30 h-30 rounded-t-lg overflow-hidden">
        <img className="w-full h-full object-cover rounded-full" src={imgSrc} alt='' />
      </div>

      {/* contenedor del texto */}
      <div className="p-4 text-center">
        <a href={url} rel="noopener noreferrer">
          <h5 className="text-yellow-300 text-1xl font-bold mb-2 hover:text-yellow-600">{title}</h5>
        </a>
      </div>
    </div>
  );
}
