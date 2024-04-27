import Link from "next/link";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

interface HeaderProps {
  title?: string;
  paragraph?: string;
  image?: string;
  creator?: string;
}

export default async function HeaderImage({
  title,
  paragraph,
  image,
  creator,
}: HeaderProps) {
  const supabase = createServerComponentClient({ cookies });

  const { data: creadores, error } = await supabase
    .from("creadores")
    .select("*")
    .eq("nombre", creator)
    .single();

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl">
    <section className="flex justify-center items-center container mx-auto px-4">
      <header className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl py-8 mx-auto lg:py-16 ">
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2 justify-center ">
          <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-yellow-500 col-span-2 break-words">
            {title}
          </h1>

          <p className="text-2xl text-balance break-all ">{paragraph}</p>
        </div>

        <div>
          <div className="w-4/4 bg-[#13203E] flex flex-col justify-center items-center mx-auto p-4 border-b-gray-800 rounded-lg ">
            <img
              className="rounded-full object-cover w-1/3 mb-6"
              src={creadores.url_imagen}
              alt={creadores.nombre}
            />
            <p className="font-extrabold text-white text-xxl mb-6">{creator}</p>
            <div className="flex flex-col p-4 w-full">
              <a
                href={creadores.url_apoyar}
                target="_blank"
                className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 mb-3"
              >
                Apoyar
              </a>
              <Link
                href={`http://localhost:3000/creators/${creadores.slug}`}
                className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 mb-3"
              >
                Saber Más
              </Link>

              <a
                href={creadores.web}
                target="_blank"
                className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 mb-3"
              >
                Conoce mas
              </a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
