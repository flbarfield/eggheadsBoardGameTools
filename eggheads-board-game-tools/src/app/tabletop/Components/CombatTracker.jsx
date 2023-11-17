import Image from 'next/image'
import CombatImg from '../../../../public/Images/Combat.jpeg'
import Button from '@/Components/Button'
import { useState } from 'react'

//    Battle Section
//      Initiative/turn tracker
//      Monster/player Creator / insert monster/player


export default function CombatTracker () {
    let [currentMonsterList, setCurrentMonsterList] = useState([])
    let [monsterText, setMonsterText] = useState('')
    let [monsterAC, setMonsterAC] = useState(null)
    let [monsterHealth, setMonsterHealth] = useState(null)
    let [monsterInit, setMonsterInit] = useState(null)
    
    async function populateMonsters() {
        try {
            const res = await fetch('https://www.dnd5eapi.co/api/monsters')
            const data = await res.json()

            let count = 0
            let monsterList = []

            while (count < data.count){
                monsterList.push(data.results[count].name)
                count++
            }

            setCurrentMonsterList(monsterList)

        } catch (error) {
            console.log('Error Populating Monsters. Problem with API')
        }
    }

    class QuickMonster {
        constructor (hp, ac, speed) {
            this.hp = hp
            this.ac = ac
            this.speed = speed
        }
    }



    populateMonsters()

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Combat Tracker</h1>
            <Image className='rounded-md mx-auto' src={CombatImg} width={800} height={500} placeholder='blur' alt="Characters Fighting" />
            <section className='flex flex-col mx-auto'>
                <div className='mb-5'>
                    <i className='fa-solid fa-magnifying-glass mr-5'></i>
                    <input className='px-2' type="text" placeholder='Monster Search'/>
                    <Button label={'Add'}/>
                </div>
                <ul className='max-h-44 overflow-scroll'>
                    {currentMonsterList.map((monster) => {
                        return (
                            <>
                            <li className='hover:bg-EggheadBlue hover:text-white cursor-pointer'><span>{monster}</span></li>
                            </>
                        )
                    })}
                </ul>
                <section className='mt-5'>
                    <h1 className='mb-5'>Initiative Tracker</h1>
                    <ul className='flex flex-col gap-2'>
                        <li><span>testCharacterOne | Initiative: 5 | AC: 15 | Health: 150</span></li>
                        <li><span>testCharacterTwo | Initiative: 1 | AC: 10 | Health: 35</span></li>
                    </ul>
                </section>
            </section>
        </section>
    )
}