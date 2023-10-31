import Image from 'next/image'
import WildMagicImg from '../../../../public/Images/spellcasting.jpeg'

export default function WildMagic () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Wild Magic Surges</h1>
            <Image className='rounded-md mx-auto' src={WildMagicImg} width={800} height={500} placeholder='blur' alt="Spellcaster" />
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}