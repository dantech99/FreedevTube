import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import {createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Header from "@/components/headers/Header"

export default async function Courses() {


  const supabase = createServerComponentClient({cookies})
  const {data: {session}} = await supabase.auth.getSession()

  if(session === null) {
    redirect('/login')
  }

  const {data: cursos} = await supabase.from('cursos').select('*')


  return (
    <main className="h-auto" role="main">
         <Header title="Cursos gratuitos" paragraph="Encuentra los mejores cursos gratuitos dictados por los mejores creadores de contenido de programación, diseño y ciberseguridad" />

         {cursos?.map((curso) => (
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" key={curso.id}>
                 <article className="border w-full bg-[#13203E]" role="article">
                   <header className="imagen h-auto  border">
                     <img src="/thumbnail.jpg" alt="imagen del curo" className="w-full object-cover h-auto" />
                   </header>
                   <main className="p-4">
                     <h2 className="text-2xl text-yellow-500">Curso</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam ut nam aspernatur sit ab nemo voluptatibus dolorem natus tenetur?</p>
                     <div className="tags flex mt-4 gap-2 text-xs">
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                     </div>
                   </main>
       
                   <footer className="p-4 flex items-center gap-3">
                     <div className="rounded-full w-14 border overflow-hidden">
                       <img src="/midudev.jpeg" alt="" className="w-full object-cover" />
                     </div>
                     
                     <h3 className="text-sm">creador por: midudev</h3>
                   </footer>
       
                 </article>
       
                 <article className="border w-full bg-[#13203E]" role="article">
                   <header className="imagen h-auto  border">
                     <img src="/thumbnail.jpg" alt="imagen del curo" className="w-full object-cover h-auto" />
                   </header>
                   <main className="p-4">
                     <h2 className="text-2xl text-yellow-500">Curso</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam ut nam aspernatur sit ab nemo voluptatibus dolorem natus tenetur?</p>
                     <div className="tags flex mt-4 gap-2 text-xs">
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                     </div>
                   </main>
       
                   <footer className="p-4 flex items-center gap-3">
                     <div className="rounded-full w-14 border overflow-hidden">
                       <img src="/midudev.jpeg" alt="" className="w-full object-cover" />
                     </div>
                     
                     <h3 className="text-sm">creador por: midudev</h3>
                   </footer>
       
                 </article>
       
                 <article className="border w-full bg-[#13203E]" role="article">
                   <header className="imagen h-auto  border">
                     <img src="/thumbnail.jpg" alt="imagen del curo" className="w-full object-cover h-auto" />
                   </header>
                   <main className="p-4">
                     <h2 className="text-2xl text-yellow-500">Curso</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam ut nam aspernatur sit ab nemo voluptatibus dolorem natus tenetur?</p>
                     <div className="tags flex mt-4 gap-2 text-xs">
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                     </div>
                   </main>
       
                   <footer className="p-4 flex items-center gap-3">
                     <div className="rounded-full w-14 border overflow-hidden">
                       <img src="/midudev.jpeg" alt="" className="w-full object-cover" />
                     </div>
                     
                     <h3 className="text-sm">creador por: midudev</h3>
                   </footer>
       
                 </article>

                 <article className="border w-full bg-[#13203E]" role="article">
                   <header className="imagen h-auto  border">
                     <img src="/python.jpg" alt="imagen del curo" className="w-full object-cover h-auto" />
                   </header>
                   <main className="p-4">
                     <h2 className="text-2xl text-yellow-500">Curso</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam ut nam aspernatur sit ab nemo voluptatibus dolorem natus tenetur?</p>
                     <div className="tags flex mt-4 gap-2 text-xs">
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                       <span className="bg-[#13171F] text-white p-2 rounded-2xl">tecnologia</span>
                     </div>
                   </main>
       
                   <footer className="p-4 flex items-center gap-3">
                     <div className="rounded-full w-14 border overflow-hidden">
                       <img src="/moure.dev.jpg" alt="" className="w-full object-cover" />
                     </div>
                     
                     <h3 className="text-sm">creador por: mouredev</h3>
                   </footer>
       
                 </article>
                 
               </div>
         ))}
  
    </main>
  )
}