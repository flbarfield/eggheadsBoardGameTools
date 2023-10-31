'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

import DMImage from '../../../../public/Images/Dungeon-Master.webp'
import CombatImg from '../../../../public/Images/Combat.jpeg'
import AfflictionsImg from '../../../../public/Images/afflictions.jpeg'
import ForestImg from '../../../../public/Images/fantasyForest.jpeg'
import ItemShopImg from '../../../../public/Images/itemShop.webp'
import RandomEncImg from '../../../../public/Images/randomAmbush.jpeg'
import WildMagicImg from '../../../../public/Images/spellcasting.jpeg'
import LootImg from '../../../../public/Images/treasure.webp'
import NameGenImg from '../../../../public/Images/characterCreation.webp'

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
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <Image className='rounded-md mx-auto' src={DMImage} width={800} height={500} placeholder='blur' alt="Image of a Dungeon Master" />
                </section>
            )
            case 'combat': return (
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <h1>Combat Tracker</h1>
                    <Image className='rounded-md mx-auto' src={CombatImg} width={800} height={500} placeholder='blur' alt="Characters Fighting" />
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
            )
            case 'quickRef': return (
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <h1>Quick Reference</h1>
                    <Image className='rounded-md mx-auto' src={AfflictionsImg} width={800} height={500} placeholder='blur' alt="Affliction Warlock" />
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
            )
            case 'shops': return (
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <h1>Shops</h1>
                    <Image className='rounded-md mx-auto' src={ItemShopImg} width={800} height={500} placeholder='blur' alt="Image of an item shop" />
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
            )
            case 'loot' : return (
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <h1>Loot</h1>
                    <Image className='rounded-md mx-auto' src={LootImg} width={800} height={500} placeholder='blur' alt="Treasure box" />
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
            )
            case 'wildMagic': return (
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <h1>Wild Magic Surges</h1>
                    <Image className='rounded-md mx-auto' src={WildMagicImg} width={800} height={500} placeholder='blur' alt="Spellcaster" />
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
            )
            case 'randomEncounters': return(
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <h1>Random Encounters</h1>
                    <Image className='rounded-md mx-auto' src={RandomEncImg} width={800} height={500} placeholder='blur' alt="Ambush in waiting" />
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
            )
            case 'quickMaps' : return (
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <h1>Quick Maps</h1>
                    <Image className='rounded-md mx-auto' src={ForestImg} width={800} height={500} placeholder='blur' alt="Forest Image" />
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
            )
            case 'nameGen' : return (
                <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
                    <h1>Name Generator</h1>
                    <Image className='rounded-md mx-auto' src={NameGenImg} width={800} height={500} placeholder='blur' alt="Character Creation Screen" />
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
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
    