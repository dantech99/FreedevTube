import Carrousel from './carrousel';
import Button from '../button/button-primary';

export default function JumbotronSection() {
  return (
    <section className="flex justify-between items-center max-w-screen-xl px-4 mx-auto h-[450px] gap-4 ">
      {/* container text  */}
      <div className="flex flex-col w-auto ">
        <h1 className="text-4xl md:text-4xl xl:text-6xl font-extrabold">
          Aprende Todo En Un Solo Lugar
        </h1>

        <h3 className="mt-4 text-2xl">
          Descubre, aprende y apoya, todo en un solo lugar Ya sea que estes
          empezando o llevas tiempo este sitio es para ti
        </h3>


        <div className='mt-4'>
          <Button title='empezar' />
        </div>
      </div>

      {/* container carrousel */}
      <div className=" w-1/2 md:flex hidden">
        <Carrousel />
      </div>
    </section>
  );
}
