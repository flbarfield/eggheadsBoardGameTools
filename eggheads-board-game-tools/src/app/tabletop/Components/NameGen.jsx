import Image from 'next/image'
import NameGenImg from '../../../../public/Images/characterCreation.webp'

//    Name Generators for 
//      towns
//      cities
//      NPCs

export default function NameGen () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Name Generator</h1>
            <Image className='rounded-md mx-auto' src={NameGenImg} width={800} height={500} placeholder='blur' alt="Character Creation Screen" />
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}