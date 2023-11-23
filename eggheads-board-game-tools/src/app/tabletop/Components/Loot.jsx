import Image from 'next/image'
import LootImg from '../../../../public/Images/treasure.webp'
import Button from '@/Components/Button'
import Papa from 'papaparse'
import NAButton from '@/Components/NAButton'


export default function Loot () {
    let data = Papa.parse('../../../../src/csv/pickpocketLoot.csv')
    console.log(data)

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Loot</h1>
                <Image className='rounded-md mx-auto' src={LootImg} height={350} placeholder='blur' alt="Treasure box" />
                <ul className='flex flex-wrap gap-2'>
                    <li><Button label={'Pickpocket Loot'}/></li>
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
        </section>
    )
}