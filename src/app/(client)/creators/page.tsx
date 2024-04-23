import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Card from "@/components/creators/Card";
import Header from "@/components/headers/Header";

export default async function Creators() {
    const supabase = createServerComponentClient({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    if(session === null) {
      redirect('/login')
    }
    return(
        
        <main className="">
            <Header title="Creadores de Contenido" paragraph="Descubre y encuentra a los mejores creadores de contenido sobre
            programacion, diseño y cyberseguridad" />
            <Card />
        </main>
        
    )
}
