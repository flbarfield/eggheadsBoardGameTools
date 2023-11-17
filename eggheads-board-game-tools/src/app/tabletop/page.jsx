'use client'

import Image from 'next/image'
import { useState } from 'react'

import DMImage from '../../../public/Images/Dungeon-Master.webp'

import Button from '@/Components/Button'

import CombatTracker from './Components/CombatTracker'
import NameGen from './Components/NameGen'
import Shops from './Components/Shops'
import QuickRef from './Components/QuickRef'
import Loot from './Components/Loot'
import WildMagic from './Components/WildMagic'
import RandomEncounters from './Components/RandomEncounters'
import QuickMaps from './Components/QuickMaps'
import NAButton from '@/Components/NAButton'
import DungeonDoors from './Components/DungeonDoors'

// DND 5E API:
// https://www.dnd5eapi.co/api/
// OBJ containing: {
//     "ability-scores": "/api/ability-scores",
//     "alignments": "/api/alignments",
//     "backgrounds": "/api/backgrounds",
//     "classes": "/api/classes",
//     "conditions": "/api/conditions",
//     "damage-types": "/api/damage-types",
//     "equipment": "/api/equipment",
//     "equipment-categories": "/api/equipment-categories",
//     "feats": "/api/feats",
//     "features": "/api/features",
//     "languages": "/api/languages",
//     "magic-items": "/api/magic-items",
//     "magic-schools": "/api/magic-schools",
//     "monsters": "/api/monsters",
//     "proficiencies": "/api/proficiencies",
//     "races": "/api/races",
//     "rule-sections": "/api/rule-sections",
//     "rules": "/api/rules",
//     "skills": "/api/skills",
//     "spells": "/api/spells",
//     "subclasses": "/api/subclasses",
//     "subraces": "/api/subraces",
//     "traits": "/api/traits",
//     "weapon-properties": "/api/weapon-properties"
// }

// Good example for a similar site with API use: https://open5e.com/




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
                <CombatTracker/>
            )
            case 'quickRef': return (
                <QuickRef/>
            )
            case 'shops': return (
                <Shops/>
            )
            case 'loot' : return (
                <Loot/>
            )
            case 'wildMagic': return (
                <WildMagic/>
            )
            case 'randomEncounters': return(
                <RandomEncounters/>
            )
            case 'quickMaps' : return (
                <QuickMaps/>
            )
            case 'nameGen' : return (
                <NameGen/>
            ) 
            case 'dungeonDoors' : return (
                <DungeonDoors/>
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
                    <li onClick={() => setActiveSelection('combat')}><NAButton  label={'Combat'}/></li>
                    <li onClick={() => setActiveSelection('quickRef')}><Button label={'Quick Reference'}/></li>
                </ul>
                <section>
                <h1>Randomizers:</h1>
                    <ul className='flex gap-5 flex-wrap mt-5'>
                        <li onClick={() => setActiveSelection('dungeonDoors')}><Button label={'Dungeon Doors'}/></li>
                        <li onClick={() => setActiveSelection('loot')}><NAButton label={'Loot'}/></li>
                        <li onClick={() => setActiveSelection('nameGen')}><NAButton label={'Name Generators'}/></li>
                        <li onClick={() => setActiveSelection('randomEncounters')}><Button label={'Random Encounters'}/></li>
                        <li onClick={() => setActiveSelection('quickMaps')}><NAButton label={'Quick Maps'}/></li>
                        <li onClick={() => setActiveSelection('shops')}><NAButton label={'Shops'}/></li>
                        <li onClick={() => setActiveSelection('wildMagic')}><Button label={'Wild Magic Surge'}/></li>
                    </ul>
                </section>
            </div>
        </section>
            {generateContent()}
        </section>
        </main>
    )
}
    