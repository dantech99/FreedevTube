
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



  return (

    <main className="container mx-auto px-4">
    <HeaderImage
      title={titulo}
      paragraph={contenido}
      creator={creador}
    />
  
    <section className="mb-24">
      <iframe className="h-full w-full aspect-video" src={`https://www.youtube.com/embed/` + videoId}></iframe>
    </section>
  
    <div>
      <h1 className="text-yellow-400 text-2xl font-bold mb-4">Sobre el curso</h1>
      <div className="mb-4">
        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus ipsam saepe vero perspiciatis, nesciunt porro? Labore natus, ipsam eaque quaerat aperiam esse reiciendis omnis. Vero architecto nulla repudiandae magni!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem similique doloremque ea saepe libero accusantium ad. Voluptates natus recusandae quam iusto, ex odio ipsam eligendi nesciunt? Totam labore officiis sit.</p>
      </div>
        <h1 className="text-yellow-400 text-2xl font-bold mb-4">temario y contenido del curso</h1>
      <div className="m-5">
           <h2 className="my-6">Introduccion</h2>
          <li className="mb-2 text-gray-500">lista nunero 1: proximamente</li>
          <li className="mb-2  text-gray-500">lista numero 2: proximamente</li>
          <li className="mb-2  text-gray-500">lista numero 3: proximamente</li>
      </div>
    </div>
  </main>
  
  );
}

