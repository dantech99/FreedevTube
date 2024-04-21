export default function Card() {
  const Books = [
    {
      Name: "midu.dev",
      Image:
        "https://yt3.googleusercontent.com/ytc/AIdro_kv84TB3x0uLWcJwfLWDX0rA9R_r22ckPwvpWxsS5x29eE=s900-c-k-c0x00ffffff-no-rj",
      Description:
        "Te enseño Programación y Desarrollo Web. Creador de contenido en Twitch y YouTube.",
    },
    {
      Name: "mouredev",
      Image:
        "https://yt3.googleusercontent.com/BrHvTVuz3HnKJx656FpXzm_B8il50fI281AC0PtrE7RgHazzPqmUudw7yUzqmnuFsaCp6YkTEQ=s900-c-k-c0x00ffffff-no-rj",
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
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl">
        {Books.map((book, index) => (
          <div
            className="max-w-[404px] bg-[#13203E] flex flex-col justify-center items-center mx-auto p-4 "
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
              <button className="bg-yellow-500 text-black text-md rounded-xl px-2 m-1 py-1">
                Apoyar
              </button>
              <button className="bg-yellow-500 text-black text-md rounded-xl px-2 m-1 py-1">
                Saber Más
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
