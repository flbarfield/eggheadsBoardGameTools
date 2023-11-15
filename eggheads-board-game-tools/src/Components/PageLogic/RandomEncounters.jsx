import Image from 'next/image'
import RandomEncImg from '../../../public/Images/randomAmbush.jpeg'
import Button from '../Button'

export default function RandomEncounters () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Random Encounters</h1>
            <Image className='rounded-md mx-auto' src={RandomEncImg} width={800} height={500} placeholder='blur' alt="Ambush in waiting" />
            <section className='mx-auto flex gap-5 flex-col'>
                <span className='text-center'>Choose the environment.</span>
                    <ul className='flex flex-wrap gap-2'>
                        <li><Button label={'Urban'}/></li>
                        <li><Button label={'Forest'}/></li>
                        <li><Button label={'Swamp'}/></li>
                        <li><Button label={'Tavern'}/></li>
                        <li><Button label={'Sea Travel'}/></li>
                        <li><Button label={'Jungle'}/></li>
                        <li><Button label={'Long Rest'}/></li>
                    </ul>
                
                <p className='text-center text-red-500'>Not Yet Implemented.</p>
            </section>
            
        </section>
    )
}