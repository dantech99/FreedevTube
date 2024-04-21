export default function Card() {
  const Books = [
    {
      Name: "midu.dev",
      Image:
        "/midudev.jpeg",
      Description:
        "Te enseño Programación y Desarrollo Web. Creador de contenido en Twitch y YouTube.",
    },
    {
      Name: "mouredev",
      Image:
        "/moure.dev.jpg",
      Description:
        "Te enseño Programación y Desarrollo Web. Creador de contenido en Twitch y YouTube.",
    },



    {
      Name: "Afor_digital",
      Image:
        "/afor_digital.dev.jpg",
      Description:
        "Te enseño Programación y Desarrollo Web. Creador de contenido en Twitch y YouTube.",
    },
    {
      Name: "S4vitar",
      Image:
        "/s4vitar.dev.jpg",
      Description:
        "Te enseño Hacking y pentesting. Creador de contenido en Twitch y YouTube.",
    },
    {
      Name: "noelia",
      Image:
        "/noelia.dev.jpg",
      Description:
        "Te enseño Programación y Desarrollo Web. Creador de contenido en Twitch y YouTube.",
    },
    {
      Name: "Todo code",
      Image:
        "https://pbs.twimg.com/profile_images/876637609333846016/xNXo6TqN_400x400.jpg",
      Description:
        "Te enseño Programación y Desarrollo Web. Creador de contenido en Twitch y YouTube.",
    },
    {
      Name: "MelenitasDev",
      Image:
        "/melenitas.dev.png",
      Description:
        "Te enseño deasrrollo de videojuegos con unity. Creador de contenido en Twitch y Tiktok.",
    },
  ];

  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl">
        {Books.map((book, index) => (
          <div
            className="max-w-[404px] bg-[#13203E] flex flex-col justify-center items-center mx-auto p-4 border-b-gray-800 rounded-lg "
            key={index}
          >
            <img
              className="rounded-full aspect-square h-[226px] mb-6"
              src={book.Image}
              alt={book.Name}
            />
            <p className="font-extrabold text-yellow-500 text-xxl mb-6">{book.Name}</p>
            <p className=" text-sm px-4 mb-6">{book.Description}</p>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4 w-full">
              <button className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-2">
                Apoyar
              </button>
              <button className="inline-block px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Saber Más
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
