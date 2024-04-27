
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Login from "../../../../components/home/login-button-redirect";

import { auth } from "@/auth";
import HeaderImage from "@/components/headers/HeaderImage";
import { redirect } from "next/navigation";

export const meta = {
  title: "Cursos gratuitos",
  description:
    "Encuentra los mejores cursos gratuitos dictados por los mejores creadores de contenido de programación, diseño y ciberseguridad",
  keywords: "cursos, programación, diseño, ciberseguridad",
};



interface CourseProps {
  params: any;
  slug: string;
}

export default async function Course({ params }: { params: CourseProps }) {
  const session = await auth();
  if (!session)
    return redirect("/login");

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

