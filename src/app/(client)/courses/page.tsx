import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import {createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Header from "@/components/headers/Header"

import { auth } from '@/auth';
import Login from "../../../components/home/login-button-redirect";


export default async function Courses() {

  const supabase = createServerComponentClient({cookies})
  const session = await auth()
  const {data: cursos} = await supabase.from('cursos').select('*')
  const {data: technologias} = await supabase.from('technologias').select('*')
  if(!session) return redirect('/login')

    console.log(technologias);
    
  return (
    <main className="h-auto" role="main">
        <Header title="Cursos gratuitos" paragraph="Encuentra los mejores cursos gratuitos dictados por los mejores creadores de contenido de programación, diseño y ciberseguridad" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {cursos?.map((curso) => (
                <article className="border w-full bg-[#13203E] flex flex-col" role="article" key={curso.id}>
                  <header className="imagen h-auto  border">
                    <img src={curso.url_img} alt="imagen del curo" className="w-full h-auto" style={{maxHeight: "400px"}} />
                  </header>
                  <main className="p-4 flex-1">
                    <a href={`/courses/${curso.slug}`}  className="text-2xl text-yellow-400 hover:text-yellow-600">{curso.titulo}</a>
                    <p>{curso.contenido}</p>
                    <div className="tags flex mt-4 gap-2 text-xs">
                     {technologias?.map((technologia) => (
                      <div key={technologia.id}>
                            <span className="bg-[#13171F] text-white p-2 rounded-2xl" >{technologia.tech_name}</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">{technologia.tech_name}</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">{technologia.tech_name}</span>
                      </div>
                     ))}
                    </div>
                  </main>
      
                  <footer className="p-4 flex items-center gap-3">
                    <div className="rounded-full w-14 border overflow-hidden">
                      <img src="/midudev.jpeg" alt="" className="w-full h-full object-cover" />
                    </div>
                   
                       <h3 className="text-sm flex-1">creador por: midudev</h3>
                   
                  </footer>
      
                </article>
        ))}
        </div>
  
    </main>
  )
}
