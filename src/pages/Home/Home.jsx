import Explore from './Explore';
import Highlights from './WhyChooseLibrary';
import Landing from './Landing';
import PopularBooks from './PopularBooks'
import DiscountedBooks from './DiscountedBooks';

import 'styles/pages/Home/Home.css'

export default function Home() {
  return (
    <>
      <Landing />
      <main id='home'>
        <Highlights />
        <PopularBooks />
        <DiscountedBooks />
        <Explore />
      </main>
    </>
  );
}
