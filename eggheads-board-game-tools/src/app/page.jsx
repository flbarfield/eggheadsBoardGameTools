import gameWall from '../../public/Images/gameWall.png'
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
        <section className='text-center pt-5 flex flex-col mx-2 md:flex-row md:flex-wrap'>
          <TextPill header={'Release! Sort of.'} date={'11/18/2023'} desc1={'We\'re now online!'} desc2={'Now that we\'ve implemented a multitude of different random encounters and rule generators, we\'ve come to the conclusion that while we could wait until forever to release everything we\'ve ever dreamed of to help your game experiences, it would deprive YOU of using the wonderful tools we have available to you now!'} desc3={'While only the tabletop RPG section is the only main portion of this website available at this time, know that we have big plans, and be sure to check back often!'}/>
          <TextPill header={'Nothing here Yet! Just test boxes.'} date={'11/18/2023'} desc1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempore, expedita, molestias, necessitatibus similique ipsum veniam incidunt dolore hic placeat quae laborum? Saepe a recusandae minus omnis tempora, dolorum perferendis!'}/>
          <TextPill header={'Nothing here Yet! Just test boxes.'} date={'11/18/2023'} desc1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempore, expedita, molestias, necessitatibus similique ipsum veniam incidunt dolore hic placeat quae laborum? Saepe a recusandae minus omnis tempora, dolorum perferendis!'}/>
        </section>
    </main>
  )
}
