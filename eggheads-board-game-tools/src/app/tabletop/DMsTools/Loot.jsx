import Image from 'next/image'
import LootImg from '../../../../public/Images/treasure.webp'

export default function Loot () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Loot</h1>
            <Image className='rounded-md mx-auto' src={LootImg} width={800} height={300} placeholder='blur' alt="Treasure box" />
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}