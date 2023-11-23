import Image from 'next/image'
import LootImg from '../../../../public/Images/treasure.webp'
import Button from '@/Components/Button'
import NAButton from '@/Components/NAButton'
import { useState } from 'react'
import PickpocketLoot from './PickpocketLoot'
import InduvidualTreasure from './IndividualTreasure'
import TreasureHoard from './TreasureHoard'

export default function Loot () {
    let [lootType, setLootType] = useState('')

    function generateLootButtons () {
        switch (lootType) {
            case '': return ''
            case 'pickpocket': return <PickpocketLoot/>
            case 'individualTreasure': return <InduvidualTreasure/>
            case 'treasureHoard': return <TreasureHoard/>
        }
    }
    

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Loot</h1>
                <Image className='rounded-md mx-auto' src={LootImg} height={350} placeholder='blur' alt="Treasure box" />
                <ul className='flex flex-wrap gap-2'>
                    <li onClick={()=>setLootType('pickpocket')}><Button label={'Pickpocket Loot'}/></li>
                    <li onClick={()=>setLootType('individualTreasure')}><Button label={'Individual Treasure'}/></li>
                    <li onClick={()=>setLootType('treasureHoard')}><NAButton label={'Treasure Hoard'}/></li>
                </ul>
                {generateLootButtons()}
        </section>
    )
}