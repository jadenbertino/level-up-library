import DiscountedBooks from './DiscountedBooks';
import Explore from './Explore';
import Landing from './Landing';
import PopularBooks from './PopularBooks';
import Highlights from './WhyChooseLibrary';

import '../../css/pages/Home/Home.css';

export default function Home() {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <PopularBooks />
        <DiscountedBooks />
        <Explore />
      </main>
    </>
  );
}
