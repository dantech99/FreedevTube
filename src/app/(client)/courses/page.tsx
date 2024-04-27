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


                    <img src={curso.portada} alt="imagen del curo" className="w-full h-auto object-cover" style={{maxHeight: "200px"}} />

                  </header>
                  <main className="p-4 flex-1">
                    <a href={`/courses/${curso.slug_curso}`}  className="text-2xl text-yellow-400 hover:text-yellow-600">{curso.titulo}</a>
                    <p>{curso.contenido}</p>
                    <div className="tags flex mt-4 gap-2 text-xs">
                    
                      <div className="flex gap-2" >
                        {
                          curso.tecnologia1 ? (
                            <span className="bg-[#978d2e] text-white p-2 rounded-2xl" >{curso.tecnologia1}</span>
                          ) : null
                        }
                        {
                          curso.tecnologia2 ? (
                            <span className="bg-[#2b2c88] text-white p-2 rounded-2xl" >{curso.tecnologia2}</span>
                          ) : null
                        }
                        {
                          curso.categoria ? (
                          <span className="bg-[#852929] text-white p-2 rounded-2xl">{curso.categoria}</span>  
                          ) : null
                        }

                      </div>
                     
                    </div>
                  </main>
      
                  <footer className="p-4 flex items-center gap-3">
                    <div className="rounded-full w-14 border overflow-hidden">
                      <img src={curso.img_creador} alt={curso.titulo} className="w-full h-full object-cover" />
                    </div>
                   
                       <h3 className="text-sm flex-1">creado por: {curso.creador}</h3>
                   
                  </footer>
      
                </article>
        ))}
        </div>
  
    </main>
  )
}
