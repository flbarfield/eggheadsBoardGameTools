import Image from 'next/image'
import AfflictionsImg from '../../../public/Images/afflictions.jpeg'
import Button from '../Button'
import { useState } from 'react'
import AbilityScores from '@/app/tabletop/Components/AbilityScore'
import Conditions from '@/app/tabletop/Components/Conditions'
import Feats from '@/app/tabletop/Components/Feats'
import Languages from '@/app/tabletop/Components/Languages'
import Rules from '@/app/tabletop/Components/Rules'
import Traits from '@/app/tabletop/Components/Traits'
import Skills from '@/app/tabletop/Components/Skills'

export default function QuickRef () {
    let [currentRefSelect, setCurrentRefSelect] = useState('')

    function generateSelectionButtons () {
        switch (currentRefSelect) {
            case 'abilityScores': return <AbilityScores/>
            case 'conditions': return <Conditions/>
            case 'feats' : return <Feats/>
            case 'languages' : return <Languages/>
            case 'skills' : return <Skills/>
            case 'traits' : return <Traits/>
            case 'rules' : return <Rules/>
        }
    }
    
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Quick Reference</h1>
            <Image className='rounded-md mx-auto' src={AfflictionsImg} width={800} height={500} placeholder='blur' alt="Affliction Warlock" />
            <section>
                <ul className='flex flex-wrap gap-3'>
                    <li onClick={() => setCurrentRefSelect('abilityScores')}><Button label='Ability-Scores'/></li>
                    <li onClick={() => setCurrentRefSelect('conditions')}><Button label='Conditions'/></li>
                    <li onClick={() => setCurrentRefSelect('feats')}><Button label='Feats'/></li>
                    <li onClick={() => setCurrentRefSelect('languages')}><Button label='Languages'/></li>
                    <li onClick={() => setCurrentRefSelect('skills')}><Button label='Skills'/></li>
                    <li onClick={() => setCurrentRefSelect('rules')}><Button label='Rules'/></li>
                    <li onClick={() => setCurrentRefSelect('traits')}><Button label='Traits'/></li>
                </ul>
            </section>
            <section className='border-t-cyan-200 border-t-2' id='generatedInfo'>
                {generateSelectionButtons()}
            </section>
        </section>
    )
}