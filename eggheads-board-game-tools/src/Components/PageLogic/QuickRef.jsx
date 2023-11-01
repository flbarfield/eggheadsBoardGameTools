import Image from 'next/image'
import AfflictionsImg from '../../../public/Images/afflictions.jpeg'

//    Quick References (will be shared with Player's Corner)
//      Status Affects
//    
// API for conditions: https://www.dnd5eapi.co/api/conditions
// https://www.dnd5eapi.co/api/conditions/blinded - displays condition desc

export default function QuickRef () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Quick Reference</h1>
            <Image className='rounded-md mx-auto' src={AfflictionsImg} width={800} height={500} placeholder='blur' alt="Affliction Warlock" />
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}