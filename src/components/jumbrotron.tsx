export default function JumbotronSection() {
  return (
    <section className="flex justify-between max-w-screen-xl px-4 py-8 mx-auto  lg:py-16 ">
      {/* container text  */}
      <div className="flex flex-col ">
        <h1 className="text-4xl">Aprende Todo En Un Solo Lugar</h1>

        <h3>
          Descubre, aprende y apoya, todo en un solo lugar Ya sea que estes
          empezando o llevas tiempo este sitio es para ti
        </h3>

        <h4>De la comunidad para la comunidad</h4>

        <a href="/" className="">
          Empezar
        </a>
      </div>

      {/* container carrousel */}
      <div className="flex"></div>
    </section>
  );
}
