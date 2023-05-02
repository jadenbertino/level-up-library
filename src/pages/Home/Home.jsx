import Landing from './Landing'
import FeatureShowcase from './FeatureShowcase'
import PopularBooks from './PopularBooks'
import DiscountedBooks from './DiscountedBooks'
import Explore from './Explore'

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
  )
}
