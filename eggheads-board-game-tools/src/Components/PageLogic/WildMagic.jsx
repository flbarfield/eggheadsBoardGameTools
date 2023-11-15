import Image from 'next/image'
import WildMagicImg from '../../../public/Images/spellcasting.jpeg'
import Button from '../Button'
import { useState, useRef } from 'react'

export default function WildMagic () {
    let [magicEffect, setMagicEffect] = useState('')
    let [diceRoll, setDiceRoll] = useState('')
    

    function generateRandomEffect () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

        switch (diceRoll) {
            case 1:
            case 2: 
                setMagicEffect('Click the random effect button at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.')
            break
            case 3:
            case 4: 
                setMagicEffect('For the next minute, you can see any invisible creature if you have line of sight to it.')
            break
            case 5:
            case 6: 
                setMagicEffect('A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears I minute later.')
            break
            case 7:
            case 8: 
                setMagicEffect('You cast Fireball as a 3rd-level spell centered on yourself.')
            break
            case 9:
            case 10: 
                setMagicEffect('You cast Magic Missile as a 5th-level spell.')
            break
            case 11:
            case 12: 
                setMagicEffect('Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.')
            break
            case 13:
            case 14: 
                setMagicEffect('You cast Confusion centered on yourself.')
            break
            case 15:
            case 16: 
                setMagicEffect('For the next minute, you regain 5 hit points at the start of each of your turns.')
            break
            case 17:
            case 18: 
                setMagicEffect('You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face')
            break
            case 19:
            case 20: 
                setMagicEffect('	You cast Grease centered on yourself.')
            break
            case 21:
            case 22: 
                setMagicEffect('Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.')
            break
            case 23:
            case 24: 
                setMagicEffect('Your skin turns a vibrant shade of blue. A Remove Curse spell can end this effect.')
            break
            case 25:
            case 26: 
                setMagicEffect('An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.')
            break
            case 27:
            case 28: 
                setMagicEffect('For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.')
            break
            case 29:
            case 30: 
                setMagicEffect('You teleport up to 60 feet to an unoccupied space of your choice that you can see.')
            break
            case 31:
            case 32: 
                setMagicEffect('You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.')
            break
            case 33:
            case 34: 
                setMagicEffect('Maximize the damage of the next damaging spell you cast within the next minute.')
            break
            case 35:
            case 36: 
                setMagicEffect('Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.')
            break
            case 37:
            case 38: 
                setMagicEffect('1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.')
            break
            case 39:
            case 40: 
                setMagicEffect('You regain 2d10 hit points.')
            break
            case 41:
            case 42: 
                setMagicEffect('You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.')
            break
            case 43:
            case 44: 
                setMagicEffect('For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.')
            break
            case 45:
            case 46: 
                setMagicEffect('You cast Levitate on yourself.')
            break
            case 47:
            case 48: 
                setMagicEffect('A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.')
            break
            case 49:
            case 50: 
                setMagicEffect('You can\'t speak for the next minute. Whenever you try, pink bubbles float out of your mouth.')
            break
            case 51:
            case 52: 
                setMagicEffect('A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile.')
            break
            case 53:
            case 54: 
                setMagicEffect('You are immune to being intoxicated by alcohol for the next 5d6 days.')
            break
            case 55:
            case 56: 
                setMagicEffect('Your hair falls out but grows back within 24 hours.')
            break
            case 57:
            case 58: 
                setMagicEffect('For the next minute, any flammable object you touch that isn\'t being worn or carried by another creature bursts into flame.')
            break
            case 59:
            case 60: 
                setMagicEffect('You regain your lowest-level expended spell slot.')
            break
            case 61:
            case 62: 
                setMagicEffect('For the next minute, you must shout when you speak.')
            break
            case 63:
            case 64: 
                setMagicEffect('You cast Fog Cloud centered on yourself.')
            break
            case 65:
            case 66: 
                setMagicEffect('Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.')
            break
            case 67:
            case 68: 
                setMagicEffect('You are frightened by the nearest creature until the end of your next turn.')
            break
            case 69:
            case 70: 
                setMagicEffect('Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.')
            break
            case 71:
            case 72: 
                setMagicEffect('You gain resistance to all damage for the next minute.')
            break
            case 73:
            case 74: 
                setMagicEffect('A random creature within 60 feet of you becomes poisoned for 1d4 hours.')
            break
            case 75:
            case 76: 
                setMagicEffect('You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.')
            break
            case 77:
                case 78: 
                setMagicEffect('You cast Polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell\'s duration.')
            break
            case 79:
            case 80: 
                setMagicEffect('Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.')
            break
            case 81:
            case 82: 
                setMagicEffect('You can take one additional action immediately.')
            break
            case 83:
            case 84: 
                setMagicEffect('Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.')
            break
            case 85:
            case 86: 
                setMagicEffect('You cast Mirror Image.')
            break
            case 87:
            case 88: 
                setMagicEffect('You cast Fly on a random creature within 60 feet of you.')
            break
            case 89:
            case 90: 
                setMagicEffect('You become invisible for the next minute. During that time, other creatures can\'t hear you. The invisibility ends if you attack or cast a spell.')
            break
            case 91:
            case 92: 
                setMagicEffect('If you die within the next minute, you immediately come back to life as if by the Reincarnate spell.')
            break
            case 93:
            case 94: 
                setMagicEffect('Your size increases by one size category for the next minute.')
            break
            case 95:
            case 96: 
                setMagicEffect('You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.')
            break
            case 97:
            case 98: 
                setMagicEffect('You are surrounded by faint, ethereal music for the next minute.')
            break
            case 99:
            case 0: 
                setMagicEffect('You regain all expended sorcery points.')
            break
        }
        

    }

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Wild Magic Surges</h1>
            <Image className='rounded-md mx-auto' src={WildMagicImg} width={800} height={500} placeholder='blur' alt="Spellcaster" />
            <div className='mx-auto' onClick={generateRandomEffect}>
                <Button label={'Random effect, GO!'}></Button>
            </div>
            <p className='text-center'>{diceRoll}<br /><br />{magicEffect}</p>
        </section>
    )
}