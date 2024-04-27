import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';

import LinkedIn from '../icons-redes/linkedin';
import YouTube from '../icons-redes/youtube';
import Instagram from '../icons-redes/instagram';
import Twitter from '../icons-redes/twitter';
import TikTok from '../icons-redes/tiktok';
import Discord from '../icons-redes/discord';
import Github from '../icons-redes/github';
import Twitch from '../icons-redes/twitch';
import Web from '../icons-redes/web';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

interface CreatorProps {
  params: any;
  slug: string;
}

export const metadata: Metadata = {
  title: 'FreedevTube | Creador',
  description: 'Conoce a los creadores de contenido de FreedevTube',
};

export default async function Creator({ params }: { params: CreatorProps }) {
  const session = await auth();
  if (!session) {
    return redirect('/login');
  }
  const supabase = createServerComponentClient({ cookies });

  const { slug } = params;

  const { data: creador, error } = await supabase
    .from('creadores')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!creador) {
    return {
      status: 404,
      content: <div>El creador no fue encontrado</div>,
    };
  }
  return (
    <>
      <section className="h-auto">
        <header className="w-full h-[300px]  flex flex-row bg-gray-900">
          <div className=" w-auto  text-center  rounded-full overflow-hidden relative top-20 left-6">
            <img
              src={creador?.url_imagen}
              alt={creador?.nombre}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="top-52 left-12 relative">
            <h1 className="text-4xl font-extrabold text-[#FCE307]">
              {creador?.nombre}
            </h1>
          </div>
        </header>

        <main className="mt-24 bg-gray-900 p-10 h-[220px] rounded-3xl">
          <div className="inline-block text-left ">
            <h2 className="text-3xl text-[#FCE307] font-bold">
              Sobre el creador
            </h2>
            <p className=" text-white text-2xl mt-3">{creador?.descripcion}</p>
          </div>
        </main>

        <footer className="mt-20 bg-gray-900 p-10 h-[200px] rounded-3xl">
          <div className="inline-block text-left ">
            <h2 className="text-3xl text-[#FCE307] font-bold">
              Sigue al creador de contenido en sus diferente redes sociales
            </h2>
          </div>

          <div className="flex items-center gap-5">
            {creador.linkedin ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <LinkedIn className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}

            {creador.youtube ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <YouTube className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}
            {creador.twitter ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <Twitter className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}

            {creador.instagram ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <Instagram className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}

            {creador.tiktok ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <TikTok className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}

            {creador.discord ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <Discord className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}

            {creador.github ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <Github className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}

            {creador.twitch ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.twitch}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <Twitch className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}

            {creador.web ? (
              <div className="flex flex-row gap-4 mt-4">
                <a
                  href={creador?.web}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer">
                  <div className="w-20 bg-gray-700 rounded-full h-20 overflow-hidden flex justify-center ">
                    <Web className="w-10 h-full" />
                  </div>
                </a>
              </div>
            ) : null}
          </div>
        </footer>
      </section>
    </>
  );
}
