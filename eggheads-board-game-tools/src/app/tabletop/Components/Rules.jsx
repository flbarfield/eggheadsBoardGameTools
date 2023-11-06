import Button from "@/Components/Button"
import { useState } from "react"

export default function Rules () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')

    function populateContent () {
        //to do
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
                    <h1>{currentHeader}</h1>
                    <p className="text-center mt-2 mb-2">{currentDesc}</p>
            </section>
        </>
    )   
}