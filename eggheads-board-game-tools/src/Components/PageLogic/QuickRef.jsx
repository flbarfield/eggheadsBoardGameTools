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
    // let [data, setData] = useState('')

    // async function populateAbilityData() {
    //     try {
    //         let res = await fetch('https://www.dnd5eapi.co/api/ability-scores')
    //         let data = await res.json()         
    //         alert(setData(data.results))
   
    //     } catch (error) {
    //         console.log('Error retriving data. May be an issue with the API')
    //     }
    // }

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Quick Reference</h1>
            <Image className='rounded-md mx-auto' src={AfflictionsImg} width={800} height={500} placeholder='blur' alt="Affliction Warlock" />
            <section className='flex flex-wrap gap-3'>
                <Button label='Ability Scores'/>
                <Button label='Classes'/>
                <Button label='Conditions'/>
                <Button label='Feats'/>
                <Button label='Languages'/>
                <Button label='Skills'/>
                <Button label='Rules'/>    
                <Button label='Traits'/>  
            </section>
            <section id='generatedInfo'>

            </section>
            
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}