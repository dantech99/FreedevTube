import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { redirect } from "next/navigation"
import { cookies } from 'next/headers';
import Link from 'next/link';

interface CreatorProps {
  params: any;
  slug: string;
}

export default async function Creator({ params }: { params: CreatorProps }) {
  const supabase = createServerComponentClient({ cookies });
  const {data: {session}} = await supabase.auth.getSession()

  if(session === null) {
    redirect('/login')
  }

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
    <div className="h-screen  flex flex-col items-center justify-center">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={creador?.url_imagen}
            alt={creador?.nombre}
          />
        </div>
        <div className="border-r border-b border-l border-gray-900 lg:border-l-0 lg:border-t lg:border-gray-900 bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
          <div className="mb-8 text-center">
            <div className="mb-4">
              <img
                className="w-12 h-12 rounded-full inline-block mr-4"
                src={creador?.url_imagen}
                alt={creador?.nombre}
              />
              <div className="inline-block text-left">
                <h2 className="text-lg font-semibold text-white">{creador?.nombre}</h2>
                <p className="text-sm text-white">{creador?.descripcion}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-red-500 text-white px-4 py-2 mx-1"
            >
              Youtube
            </a>
            <a
              href={creador?.url_apoyar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-purple-500 text-white px-4 py-2 mx-1"
            >
              Twitch
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-pink-500 text-white px-4 py-2 mx-1"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
