import { redirect } from "next/navigation"
import Card from "@/components/creators/Card";
import Header from "@/components/headers/Header";

export default async function Creators() {
    return(
        
        <main className="">
            <Header title="Creadores de Contenido" paragraph="Descubre y encuentra a los mejores creadores de contenido sobre
            programacion, diseño y cyberseguridad" />
            <Card />
        </main>
        
    )
}
