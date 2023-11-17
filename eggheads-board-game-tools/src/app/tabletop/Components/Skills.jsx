import Button from "@/Components/Button"
import { useState } from "react"

export default function Skills () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')

    async function populateContent (e) {
        try {
            const res = await fetch(`https://www.dnd5eapi.co/api/skills/${e.target.textContent.toLowerCase()}`)
            const data = await res.json()

            setCurrentHeader(data.name)
            setCurrentDesc(data.desc)

        } catch (error) {
            setCurrentHeader('Error Retrieving Data. Problem with connected API.')
        }
    }

    return (
        <div className='border-t-cyan-200 border-t-2'>
            <ul className='flex flex-wrap gap-1 py-5'>
                <li onClick={populateContent}>
                    <Button label={'Acrobatics'}/>
                </li>   
                <li onClick={populateContent}>
                    <Button label={'Animal-Handling'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Arcana'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Athletics'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Deception'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'History'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Insight'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Intimidation'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Investigation'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Medicine'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Nature'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Perception'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Performance'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Persuasion'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Religion'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Sleight-Of-Hand'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Stealth'}/>
                </li> 
                <li onClick={populateContent}>
                    <Button label={'Survival'}/>
                </li> 
            </ul>
            <section className='border-t-cyan-200 border-t-2 p-2'>
                    <h1>{currentHeader}</h1>
                    <p className="mt-2 mb-2">{currentDesc}</p>
            </section>
        </div>
    )   
}