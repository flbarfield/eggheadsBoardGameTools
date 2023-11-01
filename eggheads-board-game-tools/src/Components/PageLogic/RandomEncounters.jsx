import Image from 'next/image'
import RandomEncImg from '../../../public/Images/randomAmbush.jpeg'

export default function RandomEncounters () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Random Encounters</h1>
            <Image className='rounded-md mx-auto' src={RandomEncImg} width={800} height={500} placeholder='blur' alt="Ambush in waiting" />
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}