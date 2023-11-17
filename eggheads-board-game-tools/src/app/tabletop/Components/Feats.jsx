import Button from "@/Components/Button"
import { useState } from "react"

export default function Feats () {
    let [currentHeader, setCurrentHeader] = useState ('')
    let [currentDesc, setCurrentDesc] = useState ('')

    async function populateContent (e) {
        try {
            const res = await fetch(`https://www.dnd5eapi.co/api/feats/${e.target.textContent.toLowerCase()}`)
            const data = await res.json()

            setCurrentHeader(data.name)
            setCurrentDesc(data.desc)

        } catch (error) {
            setCurrentHeader('Error Retrieving Data. Problem with connected API.')
        }
    }

    return (
        <div className="border-t-cyan-200 border-t-2">
            <ul className='flex flex-wrap gap-1 py-5'>
                <li onClick={populateContent}>
                    <Button label={'Grappler'}/>
                </li>   
            </ul>
            <section className='border-t-cyan-200 border-t-2 p-2'>
                <h1>{currentHeader}</h1>
                <p className="mt-2 mb-2">{currentDesc}</p>
            </section>
        </div>
    )   
}