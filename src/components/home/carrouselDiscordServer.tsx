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
    title: 'Midudev',
    description: 'Aprende y mejora en programcion Javascript',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlx2IGNSOFOUcQrMnD9MA2UvL5VIvTncU6ifK0rCWXA&s',

    image: 'https://midu.dev/favicon/apple-touch-icon.png',
    link: 'https://discord.gg/midudev',
  },
  {
    id: 3,
    title: 'todocode',
    description: 'Diviertete y aprende programacion',
    cover:
      'https://yt3.googleusercontent.com/ytc/AIdro_nw88ih3ViFwF9j9baXqeWOZfI3POnR_KhXpOhJCI0e9w=s900-c-k-c0x00ffffff-no-rj',

    image: 'https://yt3.googleusercontent.com/ytc/AIdro_nw88ih3ViFwF9j9baXqeWOZfI3POnR_KhXpOhJCI0e9w=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://discord.gg/69jEJ2P4',
  },
  {
    id: 4,
    title: 'S4vitar',
    description: 'Hacking y un monton de cosas',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV199GCpH3a8_Q3O3Q_ub7EvYbqjz_Jgn1P5lSHs3nQ&s',

    image: 'https://media.licdn.com/dms/image/D4E0BAQHOmXsXtkCL1g/company-logo_200_200/0/1681121318410/hack4u_logo?e=2147483647&v=beta&t=i4B3oZz5i50_2LTCsbmMUsYURUZq1DYl0VKzeKm6E7Q',
    link: 'https://discord.gg/Thb6bVbH',
  },
  {
    id: 5,
    title: 'Vamos a codear',
    description: 'Directos divertidos mientras aprende',
    cover:
      'https://i.blogs.es/4223f8/discord/1366_2000.jpg',

    image: './noelia.dev.jpg',
    link: 'https://discord.gg/Zcjevtj5',
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
            // <div className={styles.embla__slide} key={server.id}>
            <div className="rounded-lg border shadow h-[400px] " key={server.id}>
              <header className="h-1/2 w-full ">
                <img
                  src={server.cover}
                  alt=""
                  className="h-full w-full object-cover rounded-lg"
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
                  className="bg-[#FCE307] text-black p-2 w-28 h-10 text-center rounded-xl">
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
