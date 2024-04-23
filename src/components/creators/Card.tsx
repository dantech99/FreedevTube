
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import {createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"
import Link from "next/link"


export default async function Card() {

  const supabase = createServerComponentClient({cookies})

  const {data: creadores} = await supabase.from('creadores').select('*')



return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl">
{creadores?.map((creador) => (
  <div
    className="w-full bg-[#13203E] flex flex-col justify-center items-center mx-auto p-4 border-b-gray-800 rounded-lg "
    key={creador.id}
  >
    <img
      className="rounded-full object-cover w-1/3 mb-6"
      src={creador.url_imagen}
      alt={creador.nombre}
    />
    <p className="font-extrabold text-yellow-500 text-xxl mb-6">{creador.nombre}</p>
    <div className="overflow-hidden h-full">
      <p className=" text-sm px-4 mb-6">{creador.descripcion}</p>
    </div>
    

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4 w-full">
      <a href={creador.url_apoyar} className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-500 rounded-lg hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2">
        Apoyar
      </a>
      <Link href={`/creators/${creador.slug}`} 
         className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Saber Más
      
      </Link>
    
    </div>
  </div>
))}
</div>

  );
}
