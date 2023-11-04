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
    let [buttonData, setButtonData] = useState([])
    let [generatedInfo, setGeneratedInfo] = useState('')

    async function populateButtons(e) {
        try {
            const res = await fetch(`https://www.dnd5eapi.co/api/${e.target.textContent.toLowerCase()}`)
            const data = await res.json()
            
            let i = 0
            let dataList = []
            while (i < data.count) {
                dataList.push(data.results[i].name)
                i++
            }
            setButtonData(dataList)
            
        } catch (error) {
            alert('Error retriving data. May be an issue with the API')
        }
    }

    async function populateBtnInfo (e) {
        try {
            const res = await fetch(`https://www.dnd5eapi.co/api/${e.target.textContent.toLowerCase()}`)
            const data = await res.json()



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
                    <li onClick={populateButtons}><Button label='Ability-Scores'/></li>
                    <li onClick={populateButtons}><Button label='Classes'/></li>
                    <li onClick={populateButtons}><Button label='Conditions'/></li>
                    <li onClick={populateButtons}><Button label='Feats'/></li>
                    <li onClick={populateButtons}><Button label='Languages'/></li>
                    <li onClick={populateButtons}><Button label='Skills'/></li>
                    <li onClick={populateButtons}><Button label='Rules'/></li>
                    <li onClick={populateButtons}><Button label='Traits'/></li>
                </ul>
            </section>
            <section className='border-t-cyan-200 border-t-2' id='generatedInfo'>
                <ul className='flex flex-wrap gap-1 py-5'>
                    {buttonData.map((item) => {
                        return (
                            <>
                                <li onClick={populateBtnInfo}><Button label={item}/></li>
                            </>
                        )
                    })}
                </ul>
                <section className='border-t-cyan-200 border-t-2 p-2'>
                    {generatedInfo} 
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
                </section>
                
                
            </section>
            
            
        </section>
    )
}