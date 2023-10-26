import gameWall from '../../public/Images/boardGameWall.png'
import Footer from '../Components/Footer'
import Image from 'next/image'
import TextPill from '../Components/TextPill'

export default function Home() {
  return (
    <main>
       <section className='flex flex-col mt-12 gap-10 px-30 sm:px-0 md:px-20 lg:px-10 lg:flex-row lg:gap-0 xl:px-40'>
            <section className='flex flex-col gap-2 lg:basis-1/2'>
                <div className='flex flex-col px-12 gap-5 lg:justify-center'>
                    <h1>EggHead's Board Game Tools</h1>
                    <span>The one stop shop for all your game-aid needs!</span>
                    <p className='mt-5'>From boardgame collectors to tabletop RPG dungeon masters, welcome to "EggHead's Board Game Tools"! As lovers of the analog-gaming community, we know how important it is in this day and age to have a regular communal space where you can gather your loved ones around a table and share grand adventures with one another! But we've come to realize that games can often be bogged down with a large number of things to keep track of during game time.<br/><br/>That's why we hope to bring you a wide variety of tools to make your games more fun and seamless! And over all, more accessible to every-day non-gamers that are intimidated by the busy work of tracking money and victory points or can't keep their character sheets straight!</p>
                </div>
            </section>
            <section className='flex px-12 lg:basis-1/2'>
                <Image className='rounded-md mx-auto' src={gameWall} width={800} height={500} placeholder='blur' alt="Egghead Logo" />
            </section>
        </section>
        <h2 className='my-10 text-center'>Recent Updates:</h2>
        <section className='pt-5 flex flex-col md:flex-row md:flex-wrap'>
          <TextPill/>
          <TextPill/>
          <TextPill/>
        </section>
      <Footer/>
    </main>
  )
}
