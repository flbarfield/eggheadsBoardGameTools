import Button from "@/Components/Button"
import { useState } from "react"

export default function Classes () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')

    function populateContent () {
        //to do
    }

    return (
        <>
        <ul className='flex flex-wrap gap-1 py-5'>
            <li onClick={populateContent}>
                <Button label={'Barbarian'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'Bard'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Cleric'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Druid'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Fighter'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Monk'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Paladin'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Ranger'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Rogue'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Sorcerer'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Warlock'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Wizard'}/>
            </li> 
        </ul>
        <section className='border-t-cyan-200 border-t-2 p-2'>
                <h1>{currentHeader}</h1>
                <p className="text-center mt-2 mb-2">{currentDesc}</p>
        </section>
        </>
    )   
}