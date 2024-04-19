import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/page";
import DiscoverPage from "@/components/discover/page";
export default function Home() {
  return (
    <>
       <Navbar />
      <div className="border-b border-slate-800"> {/* Línea divisora */}
      </div>
         <DiscoverPage/>  
         <DiscoverPage/>  
         <DiscoverPage/>       
      <Footer />
    </>
  );
}
