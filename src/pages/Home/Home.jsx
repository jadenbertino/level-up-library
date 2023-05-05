import DiscountedBooks from './DiscountedBooks';
import Explore from './Explore';
import FeatureShowcase from './FeatureShowcase';
import Landing from './Landing';
import PopularBooks from './PopularBooks';

export default function Home() {
  return (
    <>
      <Landing />
      <main>
        <FeatureShowcase />
        <PopularBooks />
        <DiscountedBooks />
        <Explore />
      </main>
    </>
  );
}
