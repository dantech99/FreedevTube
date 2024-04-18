

export default function Footer() {
  return (
    <>
      <footer className="footer px-10 py-4 border-t bg-gray-900   fixed bottom-0 w-full">
        <aside className="items-center grid-flow-col">
          <p className="text-white font-bold">
            Freedev
             <span className="text-yellow-500">Tube</span>
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/dantech99/FreedevTube" target="_blank"  className="text-white font-bold">
            creado con mucho 💚 por Freedev
           <span className="text-yellow-500">Tube</span>
            </a> 
          </div>
        </nav>
      </footer>
    </>
  );
}

