import DiscountedBooks from './DiscountedBooks';
import Explore from './Explore';
import FeatureShowcase from './FeatureShowcase';
import Landing from './Landing';
import PopularBooks from './PopularBooks';

import './Home.css';

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
