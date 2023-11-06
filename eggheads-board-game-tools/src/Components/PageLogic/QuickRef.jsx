import Image from 'next/image'
import AfflictionsImg from '../../../public/Images/afflictions.jpeg'
import Button from '../Button'
import { useState } from 'react'
import Classes from '@/app/tabletop/Components/Classes'
import AbilityScores from '@/app/tabletop/Components/AbilityScore'
import Conditions from '@/app/tabletop/Components/Conditions'
import Feats from '@/app/tabletop/Components/Feats'
import Languages from '@/app/tabletop/Components/Languages'
import Rules from '@/app/tabletop/Components/Rules'
import Traits from '@/app/tabletop/Components/Traits'
import Skills from '@/app/tabletop/Components/Skills'

// Notes to self...:
// unsure if there's a way that I can pass a reference from the top level buttons, onto next level buttons so that I can still continue down the chain of api calls as I genenerate more and more specific information. Aware that Classes/constructors can do this inherently, but is there some form of attribute I'm unaware of? Coming back to this portion of the app later.

// Hard coding this data in seperate components is certainly a sensible option too. Probably more so actually, populating a few buttons for each category is low effort combined with the benefit less api server pings, and the properties to obtain changes depending on the category. So I'm going to go this route

export default function QuickRef () {
    let [currentRefSelect, setCurrentRefSelect] = useState('')

    function generateSelectionButtons () {
        switch (currentRefSelect) {
            case 'classes' : return <Classes/>
            case 'abilityScores': return <AbilityScores/>
            case 'conditions': return <Conditions/>
            case 'feats' : return <Feats/>
            case 'languages' : return <Languages/>
            case 'skills' : return <Skills/>
            case 'traits' : return <Traits/>
            case 'rules' : return <Rules/>
        }
    }    


    // async function populateButtons(e) {
    //     try {
    //         const res = await fetch(`https://www.dnd5eapi.co/api/${e.target.textContent.toLowerCase()}`)
    //         const data = await res.json()
            
    //         let i = 0
    //         let dataList = []
    //         while (i < data.count) {
    //             dataList.push(data.results[i].name)
    //             i++
    //         }
    //         setButtonData(dataList)
            
    //     } catch (error) {
    //         alert('Error retriving data. May be an issue with the API')
    //     }
    // }

    // async function populateBtnInfo (e) {
    //     try {
    //         const res = await fetch(`https://www.dnd5eapi.co/api/feats/${e.target.textContent.toLowerCase()}`)
    //         const data = await res.json()
    //         setGeneratedInfo(data.desc)

    //     } catch (error) {
    //         alert('Error retriving data. May be an issue with the API')
    //     }
    // }
    
    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Quick Reference</h1>
            <Image className='rounded-md mx-auto' src={AfflictionsImg} width={800} height={500} placeholder='blur' alt="Affliction Warlock" />
            <section>
                <ul className='flex flex-wrap gap-3'>
                    <li onClick={() => setCurrentRefSelect('abilityScores')}><Button label='Ability-Scores'/></li>
                    <li onClick={() => setCurrentRefSelect('classes')}><Button label='Classes'/></li>
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
                <section className='border-t-cyan-200 border-t-2 p-2'>
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
                
                
            </section>
            
            
        </section>
    )
}