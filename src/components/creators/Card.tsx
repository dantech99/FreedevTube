import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import {createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"

export default async function Card() {

  const supabase = createServerComponentClient({cookies})

  const {data: creadores} = await supabase.from('creadores').select('*')
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl ">
        {creadores?.map((creador) => (
          <div
            className="max-w-[404px] w-auto bg-[#13203E] flex flex-col justify-center items-center mx-auto p-4 "
            key={creador.id}
          >
            <Image
              className="rounded-full aspect-square h-[226px] mb-6"
              src={creador.url_imagen}
              alt={creador.nombre}
              width={200}
              height={200}
            />
            <p className="font-extrabold text-yellow-500 text-xxl mb-6">{creador.nombre}</p>
            <p className=" text-sm px-4 mb-6">{creador.descripcion}</p>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4 w-full">
              <a href={creador.url_apoyar} className="bg-yellow-500 hover:bg-yellow-400 text-black text-md rounded-full px-2 m-1 py-1 text-center" target="_blank">
                Apoyar
              </a>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-md rounded-full px-2 m-1 py-1 text-center">
                Saber Más
              </button>
            </div>
          </div>
        ))}
      </div>

  );
}
