import { useState } from "react"

import Button from "@/Components/Button"

export default function AbilityScores () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')

    async function populateContent (e) {
        try {
            const res = await fetch(`https://www.dnd5eapi.co/api/ability-scores/${e.target.textContent.toLowerCase()}`)
            const data = await res.json()

            setCurrentHeader(data.full_name)
            setCurrentDesc(data.desc)

        } catch (error) {
            setCurrentHeader('Error Retrieving Data. Problem with connected API.')
        }
    }

    return (
        <div className='border-t-cyan-200 border-t-2'>
            <ul className='flex flex-wrap gap-1 py-5'>
                <li onClick={populateContent}>
                    <Button label={'CHA'}/>
                </li>   
                <li onClick={populateContent}>
                    <Button label={'CON'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'DEX'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'INT'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'STR'}/>
                </li> 
            </ul>
            <section className='border-t-cyan-200 border-t-2 p-2'>
                <h1>{currentHeader}</h1>
                <p className="text-center mt-2 mb-2">{currentDesc}</p>
            </section>
        </div>
    )   
}