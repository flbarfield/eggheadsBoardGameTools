import Navbar from '../Components/Navbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import Head from '../Components/Head'


// TO DOs:

// ---- TTRPG Section ----
//    Quick References
//      Status Affects
//    Monster Creator
//    Battle Section
//      Initiative/turn tracker
//    Character Creator
//    Name Generators for towns/cities/characters
//    DM Randomizors
//      Shops
//      Loot
//      Wild Magic Surge
//      Random Encounters
//      Quick Maps
//
// ---- Board Game Section ----
//    Add your current BGs to a list to see what you have
//      Randomly can choose one if players can't choose what to play
//
// ---- Miniature Section ----
//    Be able to upload your image of a terrain piece...Comes back with where to buy similar terrain pieces

export default function Home() {
  return (
    <main>
      <Head/>
      <Navbar/>
      <Body/>
      <Footer/>
    </main>
  )
}
