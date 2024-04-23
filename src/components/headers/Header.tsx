interface HeaderProps {
  title?: string;
  paragraph?: string; 
}

export default function Header({title, paragraph}: HeaderProps) {
  return (
    <header className="flex justify-between max-w-screen-xl  py-8 mx-auto lg:py-16 ">
      <div className="flex flex-col gap-4 ">
          <h1 className="text-6xl font-extrabold text-yellow-500 col-span-2">
            {title}
          </h1>
          <p className="text-2xl text-balance ">
            {paragraph}
          </p>
      </div>
    </header>
  );
}
