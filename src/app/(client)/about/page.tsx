import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'FreedevTube | Desarrolladores',
    description: 'Conoce a los desarrolladores de FreedevTube',
 }

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Desarrolladores</h1>
            <div className="max-w-4xl w-full px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className=" rounded-lg overflow-hidden shadow border">
                            <div className="p-4">
                                <img src="/watercubz.dev.jpg" alt="Card 1" className="w-full rounded" />
                               <a href="https://github.com/watercubz" target='_blank'><h2 className="text-xl font-bold mb-2  hover:text-yellow-500">Watercubz</h2></a>
                                <p className="text-white">Desarrollador Backend</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className=" rounded-lg overflow-hidden shadow border">
                            <div className="p-4">
                                <img src="/dantech.dev.png" alt="Card 2" className="w-full rounded" />
                              <a href="https://github.com/dantech99" target='_blank'><h2 className="text-xl font-bold mb-2  hover:text-yellow-500">Dantech99</h2></a>
                                <p className="text-white">Desarrollador Frontend</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="shadow border rounded-lg overflow-hidden">
                            <div className="p-4">
                                <img src="/axol.dev.jpg" alt="Card 3" className="w-full rounded" />
                               <a href="https://github.com/AxolotlJ-Dev" target='_blank'> <h2 className="text-xl font-bold mb-2  hover:text-yellow-500">Axol</h2></a>
                                <p className="text-white">Desarrollador Frontend</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
