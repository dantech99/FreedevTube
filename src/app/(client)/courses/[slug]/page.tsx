
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Login from "../../../../components/home/login-button-redirect";

import { auth } from "@/auth";
import HeaderImage from "@/components/headers/HeaderImage";


interface CourseProps {
  params: any;
  slug: string;
}

export default async function Course({ params }: { params: CourseProps }) {
  const session = await auth();
  if (!session)
    return (
      <section className="flex h-screen justify-center items-center flex-col gap-5">
        <div className="w-96 h-96 flex justify-center items-center border flex-col p-4 gap-10">
          <h1 className="text-2xl text-balance text-center">
            Para acceder al contenido inicia session primero
          </h1>
          <Login />
        </div>
      </section>
    );
  const supabase = createServerComponentClient({ cookies });

  const { slug } = params;

  const { data: curso, error } = await supabase
    .from("cursos")
    .select("*")
    .eq("slug_curso", slug)
    .single();

  if (!curso) {
    return {
      status: 404,
      content: <div>El curso no fue encontrado</div>,
    };
  }

  const { titulo, contenido, creador, url_video } = curso;

  const videoId = url_video.match(
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/
  )?.[1];

  // const supabase = createServerComponentClient({ cookies });


  // const { slug } = params;

  // const { data: cursos, error } = await supabase
  //   .from('cursos')
  //   .select('*')
  //   .eq('slug', slug)
  //   .single();

  // if (!cursos) {
  //   return {
  //     status: 404,
  //     content: <div>El curso no fue encontrado</div>,
  //   };
  // }

  return (

    <main className="container mx-auto px-4">
      <HeaderImage
        title={titulo}
        paragraph={contenido}
        creator={creador}
      />

      <section className="mb-24">
        <iframe className=" h-full w-full aspect-video" src={`https://www.youtube.com/embed/` + videoId}></iframe>

        <div>

        </div>
      </section>
    </main>
  );
}

