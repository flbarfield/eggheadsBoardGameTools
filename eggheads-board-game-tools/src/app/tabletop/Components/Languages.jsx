import Button from "@/Components/Button"
import { useState } from "react"

export default function Languages () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')
    let [currentDescTwo, setCurrentDescTwo] = useState ('')

    async function populateContent (e) {
        try {
            const res = await fetch(`https://www.dnd5eapi.co/api/languages/${e.target.textContent.toLowerCase()}`)
            const data = await res.json()

            setCurrentHeader(data.name)
            setCurrentDesc(data.type)
            setCurrentDescTwo(data.typical_speakers)

        } catch (error) {
            setCurrentHeader('Error Retrieving Data. Problem with connected API.')
        }
    }

    return (
        <div className="border-t-cyan-200 border-t-2">
            <ul className='flex flex-wrap gap-1 py-5'>
                <li onClick={populateContent}>
                    <Button label={'Abyssal'}/>
                </li>   
                <li onClick={populateContent}>
                    <Button label={'Celestial'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Common'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Deep-Speech'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Draconic'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Dwarvish'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Elvish'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Giant'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Gnomish'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Goblin'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Halfling'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Infernal'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Orc'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Primordial'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Sylvan'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Undercommon'}/>
                </li> 
            </ul>
            <section className='border-t-cyan-200 border-t-2 p-2'>
                    <h1>{currentHeader}</h1>
                    <p className="text-center mt-2 mb-2">Type: {currentDesc} <br/> Typical Speakers: {currentDescTwo}</p>
            </section>
        </div>
    )   
}