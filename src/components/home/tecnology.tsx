import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Tecnology() {
  const supabase = createServerComponentClient({ cookies });

  const { data: tecnologias } = await supabase.from("tecnologias").select("*");

  return (
    <div>
      {/* {tecnologias?.map((techology) => ( */}
        <section className="max-w-screen-xl px-4 mx-auto h-[450px]">
          <header className="title text-center mb-8">
            <h3 className="text-white text-3xl font-bold ">
              Aprende totalmente gratis{" "}
            </h3>
            <h3 className="text-white text-3xl font-bold">
              las tecnologias del futuro
            </h3>
          </header>

          <main className="flex">
           
          </main>
        </section>
      {/* ))} */}
    </div>
  );
}
