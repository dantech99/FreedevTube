import React from "../icons/react";
import Nextjs from "../icons/nextjs";
import JavaScript from "../icons/javascript";
import TypeScript from "../icons/typescript";
import CSS from "../icons/css";
import HTML5 from "../icons/html";
import Astro from "../icons/astro";
import Figma from "../icons/figma";
import Angular from "../icons/angular";
import Vue from "../icons/vue";

export default function Tecnology() {

  const tecnologies = [
    {
      name: "React",
      icon: <React className="w-auto h-full" />,
      description: "React es una biblioteca de JavaScript para construir interfaces de usuario.",
    },
    {
      name: "Nextjs",
      icon: <Nextjs className="w-auto h-full" />,
      description: "Vue es un marco de JavaScript progresivo para construir interfaces de usuario.",
    },
    {
      name: "JavaScript",
      icon: <JavaScript className="w-auto h-full" />,
      description: "Angular es un marco de JavaScript desarrollado por Google para construir aplicaciones web.",
    },
    {
      name: "TypeScript",
      icon: <TypeScript className="w-auto h-full" />,
      description: "Angular es un marco de JavaScript desarrollado por Google para construir aplicaciones web.",
    },
    {
      name: "CSS",
      icon: <CSS className="w-auto h-full" />,
      description: "Angular es un marco de JavaScript desarrollado por Google para construir aplicaciones web.",
    },
    {
      name: "HTML5",
      icon: <HTML5 className="w-auto h-full" />,
      description: "Angular es un marco de JavaScript desarrollado por Google para construir aplicaciones web.",
    },
    {
      name: "Astro",
      icon: <Astro className="w-auto h-full" />,
      description: "Angular es un marco de JavaScript desarrollado por Google para construir aplicaciones web.",
    },
    {
      name: "Figma",
      icon: <Figma className="w-auto h-full" />,
      description: "Angular es un marco de JavaScript desarrollado por Google para construir aplicaciones web.",
    },
    {
      name: "Angular",
      icon: <Angular className="w-auto h-full" />,
      description: "Angular es un marco de JavaScript desarrollado por Google para construir aplicaciones web.",
    },
    {
      name: "Vue",
      icon: <Vue className="w-auto h-full" />,
      description: "Angular es un marco de JavaScript desarrollado por Google para construir aplicaciones web.",
    },
  ]
  return (
    <div>
        <section className="max-w-screen-xl px-4 mx-auto h-[450px]">
          <header className="title text-center mb-8">
            <h3 className="text-white text-3xl font-bold ">
              Aprende totalmente gratis{" "}
            </h3>
            <h3 className="text-white text-3xl font-bold">
              las tecnologias del futuro
            </h3>
          </header>

          <main className="grid grid-cols-5 gap-5 mt-10 w-full h-auto ">
            {
              tecnologies.map((tecnology) => (
                  <div className="w-full flex items-center gap-3  p-5 h-24 mb-4 bg-blue-950 " key={tecnology.name}>
                    {tecnology.icon}
                    <h4 className="text-white text-lg font-bold">{tecnology.name}</h4>
                  </div>
              
              ))
            }
          </main>
        </section>
    </div>
  );
}
