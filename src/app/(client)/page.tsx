import DiscoverPage from '@/components/discover';
import JumbotronSection from '@/components/jumbrotron';
import ResourceCard from '@/components/cardSources';
export default function Home() {
  return (
    <>
      {/* jumbrotron */}
      <JumbotronSection />
      <DiscoverPage />
       <ResourceCard />
      </>
  );
}
