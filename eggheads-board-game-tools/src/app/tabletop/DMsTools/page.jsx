'use client'

import Image from 'next/image'

import DMImage from '../../../../public/Images/Dungeon-Master.webp'
import Button from '@/Components/Button'

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
                    <ul className='mt-5 flex gap-5 flex-wrap'>
                        <li><Button label={'Combat'}/></li>
                        <li><Button label={'Quick Reference'}/></li>
                    </ul>
                    <section>
                    <h1>Randomizers:</h1>
                        <ul className='flex gap-5 flex-wrap mt-5'>
                            <li><Button label={'Shops'}/></li>
                            <li><Button label={'Loot'}/></li>
                            <li><Button label={'Wild Magic Surge'}/></li>
                            <li><Button label={'Random Encounters'}/></li>
                            <li><Button label={'Quick Maps'}/></li>
                            <li><Button label={'Name Generators'}/></li>
                        </ul>
                    </section>
                </div>
            </section>
            <section className='flex px-12 lg:basis-1/2 mb-10'>
                <Image className='rounded-md mx-auto' src={DMImage} width={800} height={500} placeholder='blur' alt="Image of a Dungeon Master" />
            </section>
        </section>
        </main>
    )
}