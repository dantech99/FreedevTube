
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import {createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"


export default async function Card() {

  const supabase = createServerComponentClient({cookies})

  const {data: creadores} = await supabase.from('creadores').select('*')
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl">
{creadores?.map((creador) => (
  <div
    className="max-w-[404px] bg-[#13203E] flex flex-col justify-center items-center mx-auto p-4 border-b-gray-800 rounded-lg "
    key={creador.id}
  >
    <img
      className="rounded-full aspect-square h-[226px] mb-6"
      src={creador.url_imagen}
      alt={creador.nombre}
    />
    <p className="font-extrabold text-yellow-500 text-xxl mb-6">{creador.nombre}</p>
    <p className=" text-sm px-4 mb-6">{creador.descripcion}</p>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4 w-full">
      <a href={creador.url_apoyar} className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2">
        Apoyar
      </a>
      <button className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Saber Más
      </button>
    </div>
  </div>
))}
</div>

  );
}
