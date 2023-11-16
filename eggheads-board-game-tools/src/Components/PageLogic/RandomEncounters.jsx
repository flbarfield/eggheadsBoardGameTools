import Image from 'next/image'
import RandomEncImg from '../../../public/Images/randomAmbush.jpeg'
import Button from '../Button'
import { useState } from 'react'
import UrbanEnv from '@/app/tabletop/Components/urbanEnv'
import Link from 'next/link'

export default function RandomEncounters () {
    let [environment, setEnvironment] = useState('')

    function populateEnvData () {
        switch (environment) {
            case 'urban': return <UrbanEnv/>
            case 'forest': null
            break
            case 'swamp' : null
            break
            case 'tavern' : null
            break
            case 'seaTravel' : null
            break
            case 'jungle' : null
            break
            case 'longRest' : null
            break
            case '' : ''
        }
    }
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Random Encounters</h1>
            <Image className='rounded-md mx-auto' src={RandomEncImg} width={800} height={500} placeholder='blur' alt="Ambush in waiting" />
            <section className='mx-auto flex gap-5 flex-col'>
                <span className='text-center'>Choose the environment.</span>
                    <ul className='flex flex-wrap gap-2'>
                        <li onClick={() => setEnvironment('urban')}><Button label={'Urban'}/></li>
                        <li onClick={() => setEnvironment('forest')}><Button label={'Forest'}/></li>
                        <li onClick={() => setEnvironment('swamp')}><Button label={'Swamp'}/></li>
                        <li onClick={() => setEnvironment('tavern')}><Button label={'Tavern'}/></li>
                        <li onClick={() => setEnvironment('seaTravel')}><Button label={'Sea Travel'}/></li>
                        <li onClick={() => setEnvironment('jungle')}><Button label={'Jungle'}/></li>
                        <li onClick={() => setEnvironment('longRest')}><Button label={'Long Rest'}/></li>
                    </ul>
                    
                <section>
                    {populateEnvData()}
                </section>
                <p className='text-center text-red-500'>Not Yet Implemented.</p>
            </section>
            
        </section>
    )
}