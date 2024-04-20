import DiscoverPage from '@/components/home/discover';
import JumbotronSection from '@/components/home/jumbrotron';
import { AuthButtonServer } from '@/components/home/auth-button-server';

import ResourceCard from '@/components/home/cardSources';

export default function Home() {
  return (
    <> 
      <AuthButtonServer/>
      {/* jumbrotron */}
     
      <JumbotronSection />
      <DiscoverPage />
      <ResourceCard />
      </>
  );
}
