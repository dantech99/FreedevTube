'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './styles.module.css';
import { useEffect } from 'react';

export const serverList = [
  {
    id: 1,
    title: 'MoureDev',
    description: 'Aprende Programacion y Desarrollo de Software',
    cover:
      'https://cdn-longterm.mee6.xyz/plugins/embeds/images/729672926432985098/9f41df388cbe4546ac47dec59e0da93c3203908917b1693d638c9814203b7a60.png',
    image:
      'https://cdn-longterm.mee6.xyz/plugins/embeds/images/729672926432985098/9f41df388cbe4546ac47dec59e0da93c3203908917b1693d638c9814203b7a60.png',
    link: 'https://discord.com/invite/mouredev',
  },
  {
    id: 2,
    title: 'Titulo 2',
    description: 'Descripcion 2',
    cover:
      'https://cdn-longterm.mee6.xyz/plugins/embeds/images/729672926432985098/9f41df388cbe4546ac47dec59e0da93c3203908917b1693d638c9814203b7a60.png',

    image: './video-library.png',
    link: 'https://discord.gg/123456',
  },
  {
    id: 3,
    title: 'Titulo 3',
    description: 'Descripcion 3',
    cover:
      'https://cdn-longterm.mee6.xyz/plugins/embeds/images/729672926432985098/9f41df388cbe4546ac47dec59e0da93c3203908917b1693d638c9814203b7a60.png',

    image: './video-library.png',
    link: 'https://discord.gg/123456',
  },
  {
    id: 4,
    title: 'Titulo 4',
    description: 'Descripcion 4',
    cover:
      'https://cdn-longterm.mee6.xyz/plugins/embeds/images/729672926432985098/9f41df388cbe4546ac47dec59e0da93c3203908917b1693d638c9814203b7a60.png',

    image: './video-library.png',
    link: 'https://discord.gg/123456',
  },
  {
    id: 5,
    title: 'Titulo 5',
    description: 'Descripcion 5',
    cover:
      'https://cdn-longterm.mee6.xyz/plugins/embeds/images/729672926432985098/9f41df388cbe4546ac47dec59e0da93c3203908917b1693d638c9814203b7a60.png',

    image: './video-library.png',
    link: 'https://discord.gg/123456',
  },
];

export default function CarrouselDiscordServer({ servers = serverList }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <section className="carrousel lg:p-8 h-auto">
      <header className="text-center mb-8">
        <h3 className="text-white text-3xl font-bold">
          únete a comunidadades con{' '}
        </h3>
        <h3 className="text-white text-3xl font-bold">
          gente apasionada como tu
        </h3>
      </header>

      <div className="overflow-hidden h-[400px]" ref={emblaRef}>
        <div className={styles.embla_container}>
          {servers.map((server) => (
            <div className={styles.embla__slide} key={server.id}>
              <header className="h-1/2 w-full bg-[#13203E]">
                <img
                  src={server.cover}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </header>
              <main className="h-1/5 w-full flex items-center gap-5 p-2">
                <div className="flex w-20 h-14 justify-center items-center rounded-full overflow-hidden">
                  <img
                    src={server.image}
                    alt={server.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col ">
                  <h2 className="text-2xl">{server.title}</h2>
                  <p>{server.description}</p>
                </div>
              </main>
              <footer className="w-auto h-2/6  flex flex-col justify-center items-center ">
                <a
                  href={server.link}
                  target="_blank"
                  className="bg-[#FCE307] text-black p-2 w-28 h-10 text-center rounded-3xl">
                  Unirte
                </a>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
