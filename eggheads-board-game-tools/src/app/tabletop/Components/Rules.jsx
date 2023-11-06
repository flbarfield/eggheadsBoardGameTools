import Button from "@/Components/Button"
import { useState } from "react"

export default function Rules () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')

    async function populateContent (e) {
        // To do...going to be a time-consuming section

        // try {
        //     const res = await fetch(`https://www.dnd5eapi.co/api/languages/${e.target.textContent.toLowerCase()}`)
        //     const data = await res.json()

        //     setCurrentHeader(data.name)
        //     setCurrentDesc(data.type)
        //     setCurrentDescTwo(data.typical_speakers)

        // } catch (error) {
        //     setCurrentHeader('Error Retrieving Data. Problem with connected API.')
        // }
    }

    return (
        <>
            <ul className='flex flex-wrap gap-1 py-5'>
                <li onClick={populateContent}>
                    <Button label={'Adventuring'}/>
                </li>   
                <li onClick={populateContent}>
                    <Button label={'Appendix'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Combat'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Equipment'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Spellcasting'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Using-Ability-Scores'}/>
                </li> 
            </ul>
            <section className='border-t-cyan-200 border-t-2 p-2'>
                    <p className='text-center text-red-500'>Not Yet Implemented.</p>
            </section>
        </>
    )   
}