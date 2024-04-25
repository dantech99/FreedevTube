import DiscoverPage from '@/components/home/discover';
import JumbotronSection from '@/components/home/jumbrotron';


import ResourceCard from '@/components/home/cardSources';
import Tecnology from '@/components/home/tecnology';

export default function Home() {
  return (
    <>
      
      {/* jumbrotron */}
      <JumbotronSection />
      <DiscoverPage />
      <Tecnology />
      <ResourceCard />
      {/* <AuthButtonServer /> */}
    </>
  );
}
