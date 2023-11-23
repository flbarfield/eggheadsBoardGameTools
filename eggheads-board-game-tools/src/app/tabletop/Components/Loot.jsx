import Image from 'next/image'
import LootImg from '../../../../public/Images/treasure.webp'
import Button from '@/Components/Button'
import NAButton from '@/Components/NAButton'
import { useState } from 'react'
import PickpocketLoot from './PickpocketLoot'

export default function Loot () {
    let [lootType, setLootType] = useState('')

    function generateLootButtons () {
        switch (lootType) {
            case '': return ''
            case 'pickpocket': return <PickpocketLoot/>
        }
    }
    

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Loot</h1>
                <Image className='rounded-md mx-auto' src={LootImg} height={350} placeholder='blur' alt="Treasure box" />
                <ul className='flex flex-wrap gap-2'>
                    <li onClick={()=>setLootType('pickpocket')}><Button label={'Pickpocket Loot'}/></li>
                    <li><NAButton label={'Individual Treasure CR 0-4'}/></li>
                    <li><NAButton label={'Individual Treasure CR 5-10'}/></li>
                    <li><NAButton label={'Individual Treasure CR 11-16'}/></li>
                    <li><NAButton label={'Individual Treasure CR 17+'}/></li>

                </ul>
                <ul className='flex flex-wrap gap-2 mt-5'>
                    <li><NAButton label={'Treasure Hoard CR 0-4'}/></li>
                    <li><NAButton label={'Treasure Hoard CR 5-10'}/></li>
                    <li><NAButton label={'Treasure Hoard CR 11-16'}/></li>
                    <li><NAButton label={'Treasure Hoard CR 17+'}/></li>
                </ul>   
                {generateLootButtons()}
        </section>
    )
}