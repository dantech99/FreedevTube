import DiscoverPage from '@/components/home/discover';
import JumbotronSection from '@/components/home/jumbrotron';
import ResourceCard from '@/components/home/cardSources';

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
