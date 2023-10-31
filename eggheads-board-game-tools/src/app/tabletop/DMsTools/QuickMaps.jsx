import Image from 'next/image'
import ForestImg from '../../../../public/Images/fantasyForest.jpeg'

export default function QuickMaps () {
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Quick Maps</h1>
            <Image className='rounded-md mx-auto' src={ForestImg} width={800} height={500} placeholder='blur' alt="Forest Image" />
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}