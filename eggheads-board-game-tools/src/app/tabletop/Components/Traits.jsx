import Button from "@/Components/Button"
import { useState } from "react"

export default function Traits () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')

    async function populateContent (e) {
        try {
            const res = await fetch(`https://www.dnd5eapi.co/api/traits/${e.target.textContent.toLowerCase()}`)
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
                <Button label={'Artificers-Lore'}/>
            </li>   
            <li onClick={populateContent}>
                <Button label={'Brave'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Breath-Weapon'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Damage-Resistance'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Darkvision'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Black'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Blue'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Brass'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Bronze'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Copper'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Gold'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Green'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Red'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-Silver'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Draconic-Ancestry-White'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Dwarven-Combat-Training'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Dwarven-Resilience'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Elf-Weapon-Training'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Extra-Language'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Fey-Ancestry'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Gnome-Cunning'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Halfling-Nimbleness'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Hellish-Resistance'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'High-Elf-Cantrip'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Infernal-Legacy'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Keen-Senses'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Lucky'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Menacing'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Naturally-Stealthy'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Relentless-Endurance'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Savage-Attacks'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Skill-Versatility'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Stonecunning'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Tinker'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Tool-Proficiency'}/>
            </li> 
            <li onClick={populateContent}>
                <Button label={'Trance'}/>
            </li>
        </ul>
        <section className='border-t-cyan-200 border-t-2 p-2'>
                <h1>{currentHeader}</h1>
                <p className="mt-2 mb-2">{currentDesc} </p>
        </section>
        </div>
    )   
}