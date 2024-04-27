import React from 'react';

interface ResourceItemProps {
  imgSrc: string;
  title: string;
  description: string;
  url: string;
}

export default function ResourceCard() {
  const resources = [
    {
      imgSrc: '/recourseTech.es.png',
      title: 'recursostech.dev',
      description:
        '¿Hay streamers de programación? ¿Donde puedo deployar mi web? ¿Cómo configuro extensión, herramienta, etc',
      url: 'https://recursostech.dev',
    },
    {
      imgSrc: '/resources.dev.png',
      title: 'devresource.es',
      description:
        'Aquí encontrarás los mejores recursos para todo tipo de desarrolladores.',
      url: 'https://devresourc.es',
    },
    {
      imgSrc: '/freeset2.jpeg',
      title: 'Freesets',
      description:
        'Collection of free resources like icons, images, illustrations, components, libraries and more!',
      url: 'https://freesets.vercel.app',
    },
  ];

  return (
    <section className="lg:p-8 h-auto">
      <h1 className="text-white text-3xl font-bold mb-8 text-center">
        Descubre recursos indispensables
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center  gap-5  ">
        {resources.map((resource, index) => (
          <ResourceItem key={index} {...resource} />
        ))}
      </div>

    </section>
  );
}

function ResourceItem({ imgSrc, title, description, url }: ResourceItemProps) {
  return (
    <div className="rounded-lg shadow border h-[400px] flex flex-col ">
      {/* contenedor de la imagen  */}
      <div className="h-2/4 flex  justify-center items-end">
          <img
            className="w-full  rounded-t-lg"
            src={imgSrc}
            alt={title}
          />
      </div>

      {/* contenedor del texto  */}
      <div className="p-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-xl font-bold text-white">{title}</h5>
        </a>
        <p className="mb-2 text-sm text-white">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Explorar
        </a>
      </div>
    </div>
  );
}