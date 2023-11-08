import Image from 'next/image'
import CombatImg from '../../../public/Images/Combat.jpeg'
import Button from '../Button'
import { useState } from 'react'

//    Battle Section
//      Initiative/turn tracker
//      Monster/player Creator / insert monster/player


export default function CombatTracker () {
    let [currentMonsterList, setCurrentMonsterList] = useState([])
    
    async function populateMonsters() {
        try {
            const res = await fetch('https://www.dnd5eapi.co/api/monsters')
            const data = await res.json()

            let count = 0
            let monsterList = []

            // (count < data.count) , when I'm running this for real.
            while (count < 5){
                monsterList.append.push(data.results[count].name)
                count++
            }
            console.log(monsterList)
            setCurrentMonsterList(monsterList)

            console.log(currentMonsterList)

        } catch (error) {
            console.log('Error Populating Monsters. Problem with API')
        }
    }

    populateMonsters()

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Combat Tracker</h1>
            <Image className='rounded-md mx-auto' src={CombatImg} width={800} height={500} placeholder='blur' alt="Characters Fighting" />
            <section className='flex flex-col mx-auto'>
                <div>
                    <i className='fa-solid fa-magnifying-glass mr-5'></i>
                    <input className='px-2' type="text" placeholder='Monster Search'/>
                    <Button label={'Add'}/>
                </div>
                <ul className='mh-50 overflow-scroll'>
                    {currentMonsterList}
                    <li><span>test</span></li>
                    <li><span>test</span></li>
                </ul>
            </section>
        </section>
    )
}