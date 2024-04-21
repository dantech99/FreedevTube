export default function Header() {
  return (
    <section className="flex justify-between max-w-screen-xl px-4 py-8 mx-auto lg:py-16 ">
      <div className="flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl ">
          <h1 className="text-4xl font-extrabold text-yellow-500 col-span-2">
            Creadores de Contenido
          </h1>
          <p className="text-2xl md:col-span-2 lg:col-span-1 ">
            Descubre y encuentra a los mejores creadores de contenido sobre
            programacion, diseño y cyberseguridad
          </p>
        </div>
      </div>
    </section>
  );
}
