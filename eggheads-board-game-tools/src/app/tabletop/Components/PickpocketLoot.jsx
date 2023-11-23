import Button from "@/Components/Button"
import { useState } from "react"

export default function PickpocketLoot () {
    let [loot, setLoot] = useState('')

    function generateRandomLoot () {
        let roll = (Math.floor(Math.random() * 66))

        switch (roll) {
            case 1: 
                setLoot('26cp')
            break
            case 2: 
                setLoot('5sp')
            break
            case 3:
                setLoot('3gp')
            break
            case 4: 
                setLoot('59cp and 2sp')
            break
            case 5:
                setLoot('11sp and 1gp')
            break
            case 6: 
                setLoot('a clove of garlic')
            break
            case 7:
                setLoot('a vial of ink worth 8sp')
            break
            case 8: 
                setLoot('hardtack')
            break
            case 9:
                setLoot('an explosive rune, dealing 2d4 fire damage')
            break
            case 10: 
                setLoot('a palm-sized glass sphere')
            break
            case 11:
                setLoot('a wooden comb')
            break
            case 12: 
                setLoot('fragments of a shattered sword')
            break
            case 13:
                setLoot('a deck of tarot cards')
            break
            case 14: 
                setLoot('map of a nearby castle')
            break
            case 15:
                setLoot('map of the local area')
            break
            case 16: 
                setLoot('a tin spoon')
            break
            case 17:
                setLoot('a mess kit')
            break
            case 18: 
                setLoot('lacy undergarments')
            break
            case 19:
                setLoot('spectacles worth 50gp')
            break
            case 20: 
                setLoot('a spool of thread')
            break
            case 21:
                setLoot('a piece of chalk')
            break
            case 22: 
                setLoot('a necklace of animal teeth')
            break
            case 23:
                setLoot('a headhunter\'s contract')
            break
            case 24: 
                setLoot('a list of people in a nearby city')
            break
            case 25:
                setLoot('a worn leather strap')
            break
            case 26: 
                setLoot('a ring of iron keys')
            break
            case 27:
                setLoot('a flask full of salt water')
            break
            case 28: 
                setLoot('a box of candles')
            break
            case 29:
                setLoot('a vial of quicksilver')
            break
            case 30: 
                setLoot('a traveller\'s journal')
            break
            case 31:
                setLoot('a lead amulet')
            break
            case 32: 
                setLoot('a signet ring for a noble house')
            break
            case 33:
                setLoot('a list of local taverns')
            break
            case 34: 
                setLoot('a golden yellow topaz gem worth 500gp')
            break
            case 35:
                setLoot('a page torn from a spellbook')
            break
            case 36: 
                setLoot('scraps of bad poetry')
            break
            case 37:
                setLoot('a pair of bloodstained gloves')
            break
            case 38: 
                setLoot('thirteen mouse teeth')
            break
            case 39:
                setLoot('a pouch full of dried berries')
            break
            case 40: 
                setLoot('an invitation to a wedding that happened a few weeks ago')
            break
            case 41:
                setLoot('a brass ring')
            break
            case 42: 
                setLoot('a shopping list')
            break
            case 43:
                setLoot('the cork from a wine bottle')
            break
            case 44: 
                setLoot('a scrap of paper with uninteligible writing on it')
            break
            case 45:
                setLoot('a smoking pipe')
            break
            case 46: 
                setLoot('a pouch of ruby powder')
            break
            case 47:
                setLoot('a deed to a ruined tower')
            break
            case 48: 
                setLoot('a bottle of honey')
            break
            case 49:
                setLoot('a sling with 10 bullets')
            break
            case 50: 
                setLoot('a broken buckle')
            break
            case 51:
                setLoot('a knot of silk ribbons')
            break
            case 52: 
                setLoot('a silver pearl with 100gp')
            break
            case 53:
                setLoot('a potion of Polymorph Self worth 350gp')
            break
            case 54: 
                setLoot('1pp wrapped in a crude map')
            break
            case 55:
                setLoot('pocket sand')
            break
            case 56: 
                setLoot('a wedge of cheese')
            break
            case 57:
                setLoot('a string of wooden prayer beads')
            break
            case 58: 
                setLoot('a lock of hair')
            break
            case 59:
                setLoot('a dead mouse')
            break
            case 60: 
                setLoot('a compass')
            break
            case 61:
                setLoot('an empty flask')
            break
            case 62: 
                setLoot('227gp')
            break
            case 63:
                setLoot('three diamonds worth 300gp each')
            break
            case 64: 
                setLoot('a black pearl worth 500gp')
            break
            case 65:
                setLoot('a black opal worth 1000gp')
            break
            case 66: 
                setLoot('the deed to a small property')
            break
        }
}

    return (
        <div className="flex flex-col">
            <h1 className="text-center">Pickpocket Loot</h1>
            <div onClick={() => generateRandomLoot()} className="mx-auto mt-5"><Button label={'Generate!'}/></div>
            <p className="text-center mt-2">{loot}</p>
        </div>
    )
}