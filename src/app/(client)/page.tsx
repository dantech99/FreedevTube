import DiscoverPage from '@/components/home/discover';
import JumbotronSection from '@/components/home/jumbrotron';

import ResourceCard from '@/components/home/cardSources';
import Tecnology from '@/components/home/tecnology';
import CarrouselDiscordServer from '@/components/home/carrouselDiscordServer';

export default async function Home() {
  return (
    <>
      
      <JumbotronSection />
      <DiscoverPage />
      <Tecnology />
      <ResourceCard />
      <CarrouselDiscordServer />
    
    </>
  );
}
