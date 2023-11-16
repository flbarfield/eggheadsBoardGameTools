import Image from 'next/image'
import RandomEncImg from '../../../public/Images/randomAmbush.jpeg'
import Button from '../Button'
import { useState } from 'react'
import UrbanEnv from '@/app/tabletop/Components/urbanEnv'
import SwampEnv from '@/app/tabletop/Components/swampEnv'
import TavernEnv from '@/app/tabletop/Components/tavernEnv'
import SeaTravelEnv from '@/app/tabletop/Components/seaTravelEnv'
import JungleEnv from '@/app/tabletop/Components/jungleEnv'
import LongRestEnv from '@/app/tabletop/Components/longRestEnv'
import ForestEnv from '@/app/tabletop/Components/forestEnv'
import NAButton from '../NAButton'

export default function RandomEncounters () {
    let [environment, setEnvironment] = useState('')

    function populateEnvData () {
        switch (environment) {
            case 'urban': return <UrbanEnv/>
            case 'forest': return <ForestEnv/>
            case 'swamp' : return <SwampEnv/>
            case 'tavern' : return <TavernEnv/>
            case 'seaTravel' : return <SeaTravelEnv/>
            case 'jungle' : return <JungleEnv/>
            case 'longRest' : return <LongRestEnv/>
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
                        <li onClick={() => setEnvironment('forest')}><NAButton label={'Forest'}/></li>
                        <li onClick={() => setEnvironment('swamp')}><NAButton label={'Swamp'}/></li>
                        <li onClick={() => setEnvironment('tavern')}><NAButton label={'Tavern'}/></li>
                        <li onClick={() => setEnvironment('seaTravel')}><NAButton label={'Sea Travel'}/></li>
                        <li onClick={() => setEnvironment('jungle')}><NAButton label={'Jungle'}/></li>
                        <li onClick={() => setEnvironment('longRest')}><Button label={'Long Rest'}/></li>
                    </ul>
                    
                <section>
                    {populateEnvData()}
                </section>
            </section>
            
        </section>
    )
}