'use client'

export default function Footer() {
  return (
    <>
  <footer className="footer px-10 py-5 border-t bg-gray-900  bottom-0 w-full flex flex-col md:flex-row justify-between items-center">
   <aside className="text-white font-bold mb-4 md:mb-0">
    <p>
      Freedev <span className="text-yellow-500">Tube</span>
    </p>
   </aside>
  <nav>
    <a
      href="https://github.com/dantech99/FreedevTube"
      target="_blank"
      className="text-white font-bold flex flex-col md:flex-row items-center"
    >
      <span className="md:mr-2">creado con mucho 💚 por</span>
      <span className="text-yellow-600">
            Watercubz & Dantech99
      </span>
     </a>
     </nav>
   </footer>
    </>
  );
}

