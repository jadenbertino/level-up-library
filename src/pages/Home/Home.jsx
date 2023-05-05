import Explore from './Explore';
import Highlights from './WhyChooseLibrary';
import Landing from './Landing';
import FeaturedBooks from './PopularBooks'

import './Home.css'

export default function Home() {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <FeaturedBooks />
        <Explore />
      </main>
    </>
  );
}
