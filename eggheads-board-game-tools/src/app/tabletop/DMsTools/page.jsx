import Image from 'next/image'
import gameWall from '../../../../public/Images/boardGameWall.png'
//    Battle Section
//      Initiative/turn tracker
//      Monster/player Creator / insert monster/player
//    DM Randomizors
//      Shops
//      Loot
//      Wild Magic Surge
//      Random Encounters
//      Quick Maps
//    Quick References (will be shared with Player's Corner)
//      Status Affects
//    
//    Name Generators for 
//      towns
//      cities
//      NPCs

export default function DMsTools () {
    return (
        <main>
            <section className='flex flex-col mt-12 gap-10 px-30 sm:px-0 md:px-20 lg:px-10 lg:flex-row lg:gap-0 xl:px-40'>
            <section className='flex flex-col gap-2 lg:basis-1/2'>
                <div className='flex flex-col px-12 gap-5 lg:justify-center'>
                    <h1>DM's Tools</h1>
                    <span>These tools were made with Dungeons and Dragons 5th Edition in mind.</span>
                    <ul className='mt-5'>
                        <li>Combat</li>
                        <li>Randomizers</li>
                        <li>Quick Reference</li>
                        <ul className='hidden'>
                            <li>Shops</li>
                            <li>Loot</li>
                            <li>Wild Magic Surge</li>
                            <li>Random Encounters</li>
                            <li>Quick Maps</li>
                            <li>Name Generators</li>
                        </ul>
                    </ul>
                </div>
            </section>
            <section className='flex px-12 lg:basis-1/2'>
                <Image className='rounded-md mx-auto' src={gameWall} width={800} height={500} placeholder='blur' alt="Egghead Logo" />
            </section>
        </section>
        </main>
    )
}