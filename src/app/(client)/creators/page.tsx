import { redirect } from "next/navigation"
import Card from "@/components/creators/Card";
import Header from "@/components/headers/Header";

import Login from "../../../components/home/page";

import { auth } from '@/auth';

export default async function Creators() {
    const session = await auth()
    if(!session) return <section className="flex h-screen justify-center items-center flex-col gap-5">
    <div className="w-96 h-96 flex justify-center items-center border flex-col p-4 gap-10">
      <h1 className="text-2xl text-balance text-center">
        Para acceder al contenido inicia session primero
      </h1>
      <Login />
    </div>
    </section>
    return(
        
        <main className="">
            <Header title="Creadores de Contenido" paragraph="Descubre y encuentra a los mejores creadores de contenido sobre
            programacion, diseño y cyberseguridad" />
            <Card />
        </main>
        
    )
}
