import Button from "@/Components/Button"
import { useState } from "react"

export default function Conditions () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')

    async function populateContent (e) {
        try {
            const res = await fetch(`https://www.dnd5eapi.co/api/conditions/${e.target.textContent.toLowerCase()}`)
            const data = await res.json()

            setCurrentHeader(data.name)
            setCurrentDesc(data.desc)

        } catch (error) {
            setCurrentHeader('Error Retrieving Data. Problem with connected API.')
        }
    }

    return (
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'Blinded'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'Charmed'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Deafened'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Exhaustion'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Frightened'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Grappled'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Incapacitated'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Invisible'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Paralyzed'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Petrified'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Poisoned'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Prone'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Restrained'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Stunned'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Unconcious'}/>
            </li> 
            <section className='border-t-cyan-200 border-t-2 p-2'>
                <h1>{currentHeader}</h1>
                <p className="text-center mt-2 mb-2">{currentDesc}</p>
            </section>
        </ul>
    )   
}