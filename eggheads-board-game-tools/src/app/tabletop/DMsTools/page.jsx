'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

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
    const [activeSelection, setActiveSelection] = useState('')

    //switch cases based on button click.
    function generateContent () {
        switch (activeSelection) {
            case '': return (
                <section id='dmContent' className='flex px-12 lg:basis-1/2 mb-10'>
                    <Image className='rounded-md mx-auto' src={DMImage} width={800} height={500} placeholder='blur' alt="Image of a Dungeon Master" />
                </section>
            )
            case 'combat': return (
                <section>
                    <h1>We combat now.</h1>
                </section>
            )
            case 'quickRef': return (
                <section>
                    <h1>We References now.</h1>
                </section>
            )
            case 'shops': return (
                <section>
                    <h1>We Shoppin' now</h1>
                </section>
            )
            case 'loot' : return (
                <section>
                    <h1>We Lootin' now</h1>
                </section>
            )
            case 'wildMagic': return (
                <section>
                    <h1>Magic go boom now</h1>
                </section>
            )
            case 'randomEncounters': return(
                <section>
                    <h1>Chance encounters, Ahoy!</h1>
                </section>
            )
            case 'quickMaps' : return (
                <section>
                    <h1>Lets draw us a pirate map...</h1>
                </section>
            )
            case 'nameGen' : return (
                <section>
                    <h1>Lets make some naaames!</h1>
                </section>
            )
        }
    }

    // original template
    return (
        <main>
        <section className='flex flex-col mt-12 gap-10 px-30 sm:px-0 md:px-20 lg:px-10 lg:flex-row lg:gap-0 xl:px-40'>
        <section className='flex flex-col gap-2 lg:basis-1/2'>
            <div className='flex flex-col px-12 gap-5 lg:justify-center'>
                <h1>DM's Tools</h1>
                <span>These tools were made with Dungeons and Dragons 5th Edition in mind.</span>
                <ul className='mt-5 flex gap-5 flex-wrap'>
                    <li onClick={() => setActiveSelection('combat')}><Button  label={'Combat'}/></li>
                    <li onClick={() => setActiveSelection('quickRef')}><Button label={'Quick Reference'}/></li>
                </ul>
                <section>
                <h1>Randomizers:</h1>
                    <ul className='flex gap-5 flex-wrap mt-5'>
                        <li onClick={() => setActiveSelection('shops')}><Button label={'Shops'}/></li>
                        <li onClick={() => setActiveSelection('loot')}><Button label={'Loot'}/></li>
                        <li onClick={() => setActiveSelection('wildMagic')}><Button label={'Wild Magic Surge'}/></li>
                        <li onClick={() => setActiveSelection('randomEncounters')}><Button label={'Random Encounters'}/></li>
                        <li onClick={() => setActiveSelection('quickMaps')}><Button label={'Quick Maps'}/></li>
                        <li onClick={() => setActiveSelection('nameGen')}><Button label={'Name Generators'}/></li>
                    </ul>
                </section>
            </div>
        </section>
            {generateContent()}
        </section>
        </main>
    )
}
    