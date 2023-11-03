import Image from 'next/image'
import AfflictionsImg from '../../../public/Images/afflictions.jpeg'
import Button from '../Button'
import { useEffect, useState } from 'react'

//    Quick References (will be shared with Player's Corner)
//      Status Affects
//    
// API for conditions: https://www.dnd5eapi.co/api/conditions
// https://www.dnd5eapi.co/api/conditions/blinded - displays condition desc

export default function QuickRef () {
    let [generatedInfoButtons, setGeneratedInfoButtons] = useState('')
    let [generatedInfo, setGeneratedInfo] = useState('')

    async function populateAbilityData() {
        try {
            const res = await fetch('https://www.dnd5eapi.co/api/ability-scores')
            const data = await res.json()
            
            // console.log(data.results[0].name)
            let i = 0
            while (i < data.count) {
                setGeneratedInfoButtons += ' ' + data.results[i].name
                i++
            }
            console.log(setGeneratedInfoButtons) 
            
   
        } catch (error) {
            alert('Error retriving data. May be an issue with the API')
        }
    }

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Quick Reference</h1>
            <Image className='rounded-md mx-auto' src={AfflictionsImg} width={800} height={500} placeholder='blur' alt="Affliction Warlock" />
            <section>
                <ul className='flex flex-wrap gap-3'>
                    <li onClick={populateAbilityData}><Button label='Ability Scores'/></li>
                    <li><Button label='Classes'/></li>
                    <li><Button label='Conditions'/></li>
                    <li><Button label='Feats'/></li>
                    <li><Button label='Languages'/></li>
                    <li><Button label='Skills'/></li>
                    <li><Button label='Rules'/></li>
                    <li><Button label='Traits'/></li>
                </ul>
            </section>
            <section id='generatedInfo'>
                <ul>
                    <p>{generatedInfoButtons}</p>
                </ul>
                {generatedInfo}
            </section>
            
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}