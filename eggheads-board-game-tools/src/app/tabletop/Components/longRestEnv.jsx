import Button from "@/Components/Button"
import { useState } from "react"

export default function LongRestEnv () {
    let [diceRoll, setDiceRoll] = useState('')
    let [encounter, setEncounter] = useState('')

    function generateRandomEffect () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

    switch (diceRoll) {
        case 1: 
            setEncounter('Restless night. Do not gain any benefits from the long rest. roll to determine a party member which this happens to.')
        break
        case 2: 
            setEncounter('A small rodent wanders through your camp. It seems to be begging you for food.')
        break
        case 3:
            setEncounter('A PC starts talking in their sleep. It wakes up another member of the party.')
        break
        case 4: 
            setEncounter('You hear an owl hooting, but cannot spot its den nearby')
        break
        case 5:
            setEncounter('A ghost appears and asks you for a favor.')
        break
        case 6: 
            setEncounter('The guard of the camp starts to nod off. Roll CON to stay awake.')
        break
        case 7:
            setEncounter('You get really hungry. Tomorrow\'s rations are looking delicious.')
        break
        case 8: 
            setEncounter('You get wrapped up in your own thoughts, reflecting upon decisions made in your past.')
        break
        case 9:
            setEncounter('You hear a couple chatting and laughing as they walk by in the night.')
        break
        case 10: 
            setEncounter('You spot some glowing mushrooms just outside of camp.')
        break
        case 11:
            setEncounter('A fire starts nearby. The Player can see an orange glow to the sky and embers permeating into the sky.')
        break
        case 12: 
            setEncounter('Raccoons (or some other rodent) come in and eat all your rations. They also stooled in your favorite spare set of clothes.')
        break
        case 13:
            setEncounter('Random player gets stung by scorpion/wasp/mosquito for 1 damage.')
        break
        case 14: 
            setEncounter('Camped out on a sink hole. Roll a d20. On a 17 or above, the sinkhole gives way. The sinkhole could lead to an abandoned mine or other facility. Could also be a simple hole.')
        break
        case 15:
            setEncounter('You smell something cooking. There is a nearby goblin camp and they are roasting a pig on a spit. They don\'t notice the player unless they are particularly careless.')
        break
        case 16: 
            setEncounter('The night has been particularly cold. There is a random small, sleeping creature wrapped up in the corner of one of the PC\'s tents in order to stay warm and dry.')
        break
        case 17:
            setEncounter('A bird (Or other small animal) shows up at the camp and refuses to leave.')
        break
        case 18: 
            setEncounter('Slept on a small rock, root or stick. Have a tender spot or sore back for 1d4 hours.')
        break
        case 19:
            setEncounter('Spider/scorpion/rodent crawled into a player\'s boot. Do a perception check before putting boots on unless they knock the boots out first.')
        break
        case 20: 
            setEncounter('A herd of (fill in random animal) rush toward the campsite. Clearly spooked by something nearby.')
        break
        case 21:
            setEncounter('A vicious storm begins to brew in the area. Raging winds and torrential rain begin to fall.')
        break
        case 22: 
            setEncounter('A nearby fire flickers green for a moment, then subsides. Magic? Perhaps.')
        break
        case 23:
            setEncounter('Far off, very far off, someone screams in the night.')
        break
        case 24: 
            setEncounter('Silence. Oppressive silence. Is that a good omen? You hope it is…')
        break
        case 25:
            setEncounter('A rumble of thunder. The sky is restless.')
        break
        case 26: 
            setEncounter('Something lies in the dirt face down. Looks like it\'s been there a while. Could be a book, or a shoe, or a bounty note … you decide.')
        break
        case 27:
            setEncounter('A predator (appropriate to environment) lurks nearby. It\'s watching you intently.')
        break
        case 28: 
            setEncounter('You wet the bed (no damage, you just smell awful the next day).')
        break
        case 29:
            setEncounter('A PC has a nightmare and wakes up screaming.')
        break
        case 30: 
            setEncounter('A madman is heard nearby, jabbering: “He is angry, He demands me to please Him!”')
        break
        case 31:
            setEncounter('A sleeping party member has bad gas. roll CON or wake up annoyed.')
        break
        case 32: 
            setEncounter('A small native animal approaches. If the PCs are kind to it, it reveals itself to be a wildshaped druid, and casts a beneficial spell. If they are unkind it reveals itself to be a druid and casts a detrimental spell. It then leaves.')
        break
        case 33:
            setEncounter('Everyone\'s shoes are filled to the brim with dirt. All Party Members deny doing it.')
        break
        case 34: 
            setEncounter('A pixie has replaced all your water with wine.')
        break
        case 35:
            setEncounter('There is a project to demolish a condemned building, however the plan fell thru. The demolish crew is now wondering how they can remove the building (safely).')
        break
        case 36: 
            setEncounter('A brown bear (or a large creature native to the environment) walks into camp, trying to sniff out the player\'s rations.')
        break
        case 37:
            setEncounter('A foraging party of chaotic evil bipedals (2 orcs for example) find your camp, but they see you on watch and decide that it would not be wise to try anything. They wander off. (maybe have the player at watch roll intimidation).')
        break
        case 38: 
            setEncounter('You hear the sounds of a wounded animal in a trap. Roll a d20, if it crits then the animal is magical and intelligent and may offer compensation for its release. (can let it out or dine on it yourselves, can ignore it, can search for the hunter who placed the trap).')
        break
        case 39:
            setEncounter('Two cultists carrying a bonded sacrifice pass near enough to your camp that you may hear them. If freed, the sacrifice will run away immediately.')
        break
        case 40: 
            setEncounter('A meteor lands nearby.')
        break
        case 41:
            setEncounter('A group of 1d4 wild boar attempt to eat all your food items. Player on watch can potentially lure them away.')
        break
        case 42: 
            setEncounter('A solemn procession of hooded figures carrying lanterns pass nearby.')
        break
        case 43:
            setEncounter('You see a shooting star.')
        break
        case 44: 
            setEncounter('The night has been particularly hot and humid, all PC\'s that can sweat wake up sticky and smelly.')
        break
        case 45:
            setEncounter('The night has been particularly dry, you wake up with cracked, bleeding lips and a dry thirst.')
        break
        case 46: 
            setEncounter('The night has been particularly wet, the PC\'s clothes are now all sodden with cold mud.')
        break
        case 47:
            setEncounter('A small mammal absconds with [1d4] coins, or a mundane small object in the PCs possession.')
        break
        case 48: 
            setEncounter('A cursory check shows the PCs\' waterskins have some gross looking growth in it, rendering the water within rancid and undrinkable.')
        break
        case 49:
            setEncounter('Another adventuring party\'s camp has settled near by and you can hear their merry celebration over their last adventure. Could potentially trade goods with the nearby party.')
        break
        case 50: 
            setEncounter('A friendly giant approaches your camp, asking for directions.')
        break
        case 51:
            setEncounter('In the morning, before leaving, you notice a valuable item is missing. Roll WIS to remember where you left it.')
        break
        case 52: 
            setEncounter('Allergens are particularly bad this night, roll CON or wake up in a coughing, sneezing, red eyed fit. Disadvantage on perception for the following day.')
        break
        case 53:
            setEncounter('You receive a message through courier or Sending.')
        break
        case 54: 
            setEncounter('A wizard teleports into your camp and he is very flustered. He will reward the PC\'s if they assist him in some way.')
        break
        case 55:
            setEncounter('A puppy, looking to play, wakes the party in the night. A child comes to collect it in the morning and leaves a copper for the brave heroes.')
        break
        case 56: 
            setEncounter('A threatening note is stabbed into a nearby tree with a peculiar knife.')
        break
        case 57:
            setEncounter('Kids are hiding nearby throwing pebbles into the camp.')
        break
        case 58: 
            setEncounter('An insect falls into a players mouth while they sleep.')
        break
        case 59:
            setEncounter('A gemstone falls from the sky. What is it worth, you wonder? And where did it come from?')
        break
        case 60: 
            setEncounter('A dragon flies overhead. It seems that it did not spot you. Lucky.')
        break
        case 61:
            setEncounter('An NPC explains you\'re not allowed to camp here, and demands 2d4 silver from the party.')
        break
        case 62: 
            setEncounter('The Sunrise is particularly beautiful. If a party member is on watch at the time, they gain inspiration.')
        break
        case 63:
            setEncounter('A single bard approaches the party and offers them some strong spirits and good stories in exchange for a nights company.')
        break
        case 64: 
            setEncounter('A random PC catches a cold, disadvantage on ability checks for 4d6 hours.')
        break
        case 65:
            setEncounter('A large piece of fruit falls on [roll for party member\'s head]. If their are no trees in site, the most likely culprit is a bird who dropped the fruit it was carrying (feel free to make a monty python joke). The source of the falling fruit could also be a child\'s prank or something similar. You decide.')
        break
        case 66: 
            setEncounter('There are tremors in the middle of the night. If camped out near structures, awake and make a Dex save or take damage from falling structures (the tremors wake them before the structure falls, no disadvantage). Similarly if camped in a forest then maybe a tree falls, make a dex saving throw.')
        break
        case 67:
            setEncounter('At the very edge of your vision, you think you see a unicorn passing through.')
        break
        case 68: 
            setEncounter('You get a restful sleep and restore one additional hit die in the morning.')
        break
        case 69:
            setEncounter('A group of 1d4 bandits raid the camp at night, all PCs wake up and must defend themselves. However, right before combat begins a horn is blown and the bandits retreat. I wonder why?')
        break
        case 70: 
            setEncounter('A traveling merchant appears when the party wakes up (sells any useful adventuring supplies that the PC may have forgotten to purchase before leaving the city).')
        break
        case 71:
            setEncounter('One of the PCs has a lucid dream, the dream begins with the PC waking up in the party\'s camp and having an urge to wander off. This dream may offer insight into what challenge the party will face, it could also just be nonsense dictated by the PC who has control in the lucid dream. He/she wakes up at the DM\'s discretion.')
        break
        case 72: 
            setEncounter('A witch casts sleep on the PC on watch. She leaves a mysterious bottle of liquid on the ground and leaves. the liquid is magically made to look extremely enticing, but have a detrimental effect upon being drunk.')
        break
        case 73:
            setEncounter('Lightning strikes a nearby graveyard (1d8 zombies begin to wander within it).')
        break
        case 74: 
            setEncounter('Your PCs share tales of their homelands or valiant deeds (perhaps embellishing to a degree) - perhaps someone reveals a major background point - inspiration for whichever PC did the best (subjective) job roleplaying.')
        break
        case 75:
            setEncounter('Over the course of several hours dozens of large predators begin to gather at the edges of the camp, they aren\'t hostile but they bar you from leaving. Eventually a druid appears and demands to know why you desecrated a previous location.')
        break
        case 76: 
            setEncounter('You meet a group of adventurers coming the other way. They are friendly and share information. In the morning both groups discover an item of value seems to be missing from their belongings. A mischievous NPC is likely at work here.')
        break
        case 77:
            setEncounter('The night was excessively cold. As a result of the frost, it will take 1 complete action to unsheath weapons using scabbards for 1d8 hours.')
        break
        case 78: 
            setEncounter('A random pc accidentally slept on a poisonous plant (appropriate to the environment) and now has a rash for 1d4 hours.')
        break
        case 79:
            setEncounter('While packing up, a bird (or bat) does his business on (Random pc) in plain sight of everyone.')
        break
        case 80: 
            setEncounter('As your party awakens (party member with highest passive perception) sees a glimmer beneath a tree. Upon further inspection he/she finds a skeletal hand clutching 1d4 electrum coins + 5d10 silver pieces.')
        break
        case 81:
            setEncounter('Random PC awakes to find a trinket beneath their backpack (roll from trinket list).')
        break
        case 82: 
            setEncounter('You can hear very distant and faint music.')
        break
        case 83:
            setEncounter('It is a full moon (DM can initiate something based on this or just leave it like nothing happened).')
        break
        case 84: 
            setEncounter('Some mischievous Fey/Sprite has managed to somehow extend your slumber. You over-sleep by 2d4 hours.')
        break
        case 85:
            setEncounter('A mysterious stranger comes to the camp and asks to stay the night. Leaves a gilded box of fine tobacco/tea/coffee beans/hard candies when they leave at dawn.')
        break
        case 86: 
            setEncounter('A snake is found coiled near the camp. If approached it slithers quickly away leaving a nest of 2d4+2 red eggs. They act as a healing potion if added to food.')
        break
        case 87:
            setEncounter('A player accidentally slept on top of their arm. That player has -2 to dex rolls for 1d4 hours in the morning.')
        break
        case 88: 
            setEncounter('A stranger approaches the campsite, making no effort of stealth. They are kind and will comply if the awake PC asks them to remove their weapons. They reveal themselves to be a vampire, in dire need of blood. They ask for a donation, but will walk away disappointed if the player refuses.')
        break
        case 89:
            setEncounter('A group of priests walks past your camp offering their blessing and prayers for a night at your fire.')
        break
        case 90: 
            setEncounter('A dense fog rolls in and persists through the early morning (disadvantage on perception for 1d4 hours).')
        break
        case 91:
            setEncounter('A PC won\'t stop snoring. Other players roll CON or are woken up and cannot get back to sleep due to the snoring. Disadvantage on ability checks for 1d4 hours in the morning.')
        break
        case 92: 
            setEncounter('The fire dies out. It is pitch dark. (get more wood? perhaps leads to something interesting happening, you could reroll on this table to determine what happens while you search for firewood).')
        break
        case 93:
            setEncounter('Crickets chirp incessantly. Their chirping reminds you of an old song you once heard. That song gets stuck in your head.')
        break
        case 94: 
            setEncounter('During the middle of the rest, a strange goblin approaches the camp. He is looking for directions to the nearest city. If helped, players can find him in the city to which they pointed him off to. He might even give them a reward.')
        break
        case 95:
            setEncounter('A neglected and beaten mule will wake the party up with it\'s pained bleating. Deal with it, and you can go back to sleep.')
        break
        case 96: 
            setEncounter('You find a pseudo-dragon rummaging around the groups treasury, if questioned he\'ll claim to be a real dragon cursed with being very, very small.')
        break
        case 97:
            setEncounter('Succubus appears to the player, and offers a great time with no strings attached. If the player agrees, she gleefully pulls out a chessboard and asks if they want to be the white or black pieces.')
        break
        case 98: 
            setEncounter('You hear a cry from nearby. Upon investigation you find a 1 year old child whose parents were killed by an owlbear (or another environment appropriate creature). The child is hungry and cold.')
        break
        case 99:
            setEncounter('A player dreams of eating some delicious chicken, only to be awoken by a chicken sitting on them.')
        break
        case 100: 
            setEncounter('The party has a group dream and the artifact they acquired in it appears when they wake up. A demon is having a little fun. The artifact is likely cursed in some way, you decide…')
        break
    }
}
    return(
        <div className="flex flex-col mx-auto">
            <h1 className="text-center">Long Rest Encounter Generator</h1>
            <div className="mx-auto mt-5" onClick={generateRandomEffect}>
                <Button label={'Roll the dice!'}/>
            </div>
            <p className="my-5">{diceRoll} <br /><br /> {encounter}</p>
            <span className='text-center'>Entries gathered from DnDspeak.com: <a className="text-blue-400" href='https://www.dndspeak.com/2017/12/03/100-long-rest-events/'>Here</a></span>
        </div>
    )
}