import React from "react";
import ReactIcon from "../icons/react";
import NextjsIcon from "../icons/nextjs";
import JavaScriptIcon from "../icons/javascript";
import TypeScriptIcon from "../icons/typescript";
import CSSIcon from "../icons/css";
import HTML5Icon from "../icons/html";
import AstroIcon from "../icons/astro";
import FigmaIcon from "../icons/figma";
import AngularIcon from "../icons/angular";
import VueIcon from "../icons/vue";

export default function Tecnology() {

  const tecnologies = [
    {
      name: "React",
      icon: <ReactIcon className="w-auto h-full" />,
      description: "React es una biblioteca de JavaScript para construir interfaces de usuario.",
    },
    {
      name: "Nextjs",
      icon: <NextjsIcon className="w-auto h-full" />,
      description: "Next.js es un marco de React que facilita la creación de aplicaciones web.",
    },
    {
      name: "JavaScript",
      icon: <JavaScriptIcon className="w-auto h-full" />,
      description: "JavaScript es un lenguaje de programación que se utiliza principalmente en el desarrollo web.",
    },
    {
      name: "TypeScript",
      icon: <TypeScriptIcon className="w-auto h-full" />,
      description: "TypeScript es una extensión de JavaScript que agrega tipos estáticos a la sintaxis del lenguaje.",
    },
    {
      name: "CSS",
      icon: <CSSIcon className="w-auto h-full" />,
      description: "CSS es un lenguaje de hojas de estilo utilizado para diseñar la presentación de documentos HTML.",
    },
    {
      name: "HTML5",
      icon: <HTML5Icon className="w-auto h-full" />,
      description: "HTML5 es la última evolución del estándar que define HTML.",
    },
    {
      name: "Astro",
      icon: <AstroIcon className="w-auto h-full" />,
      description: "Astro es un marco de trabajo para la creación de sitios web estáticos y dinámicos.",
    },
    {
      name: "Figma",
      icon: <FigmaIcon className="w-auto h-full" />,
      description: "Figma es una herramienta de diseño de interfaz de usuario basada en la web.",
    },
    {
      name: "Angular",
      icon: <AngularIcon className="w-auto h-full" />,
      description: "Angular es un marco de trabajo desarrollado por Google para crear aplicaciones web de una sola página.",
    },
    {
      name: "Vue",
      icon: <VueIcon className="w-auto h-full" />,
      description: "Vue.js es un marco de trabajo progresivo de JavaScript utilizado para construir interfaces de usuario.",
    },
  ]
  
  return (
    <div>
        <section className="max-w-screen-xl px-4 mx-auto">
          <header className="text-center mb-8">
            <h3 className="text-white text-3xl font-bold">
              Aprende totalmente gratis{" "}
            </h3>
            <h3 className="text-white text-3xl font-bold">
              las tecnologías del futuro
            </h3>
          </header>

          <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-10">
            {tecnologies.map((technology) => (
              <div
                className="flex flex-col items-center justify-center p-5 bg-slate-800 border border-white rounded-lg"
                key={technology.name}
              >
                {technology.icon}
                <h4 className="text-white text-lg font-bold mt-3">{technology.name}</h4>
              </div>
            ))}
          </main>
        </section>
    </div>
  );
}
