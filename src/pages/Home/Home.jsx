import './Home.css'; /* single css file for all Home components */
import Landing from './Landing'
import Highlights from './Highlights'
import Featured from './Featured'
// import CheapestBooks from './CheapestBooks'
// import Explore from './Explore'

export default function Home() {
  return (
    <>
    <Landing />
    <main>
      <Highlights />
      <Featured />
      {/* <CheapestBooks />
      <Explore /> */}
    </main>
    </>
  )
}
