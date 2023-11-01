import Image from 'next/image'
import CombatImg from '../../../public/Images/Combat.jpeg'

//    Battle Section
//      Initiative/turn tracker
//      Monster/player Creator / insert monster/player


export default function CombatTracker () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Combat Tracker</h1>
            <Image className='rounded-md mx-auto' src={CombatImg} width={800} height={500} placeholder='blur' alt="Characters Fighting" />
            <section>
                <p className='text-center text-red-500'>Not Yet Implemented.</p>
            </section>
        </section>
    )
}