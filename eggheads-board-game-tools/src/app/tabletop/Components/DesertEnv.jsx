import Button from "@/Components/Button"
import { useState } from "react"

export default function DesertEnv () {
    let [diceRoll, setDiceRoll] = useState('')
    let [encounter, setEncounter] = useState('')

    function generateRandomEffect () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

    switch (diceRoll) {
        case 1: 
            setEncounter('A carved stone pillar is poking out of the sand dunes. The markings on the pillar are not in the local language.')
        break
        case 2: 
            setEncounter('A beautiful oasis, with people and green palms surrounding a huge pool of cool water. The tempting scene lacks clear borders, is this real or could this be a mirage? And is there something more sinister behind this idyllic place?')
        break
        case 3:
            setEncounter('The party comes up to a small garden of cacti and succulents being cared for by a dessert Druid. She doesn\'t get company often and will have conversations with the plants. She\'ll offer the party some cactus juice. Anyone who drinks it and fails a saving throw will trip out for a couple hours.')
        break
        case 4: 
            setEncounter('A sandstorm forces the party to take shelter, they hear voices screaming in the wind.')
        break
        case 5:
            setEncounter('A bell chimes. Only those failing a Wisdom saving throw hear it, but they are compelled to seek it out.')
        break
        case 6: 
            setEncounter('The side of a huge dune the party are walking along the side of for shade falls down, risking burying the party.')
        break
        case 7:
            setEncounter('The party comes across a group of nomads. They are bandits but offer the party their hospitality for three days, at which point they will decide how best to rob the party.')
        break
        case 8: 
            setEncounter('A single purple flower in the desert sands. If checked for magic it radiates a low aura of alteration magic which dissipates if picked.')
        break
        case 9:
            setEncounter('Sand clouds begin to resolve to a wind rigged skiff, then to a group of elves in pursuit.')
        break
        case 10: 
            setEncounter('Rain begins to fall, tendrils reach up all around you and flower within seconds, releasing a beautiful scent. Constitution save to remain conscious and start to remove yourself from the flowering field.')
        break
        case 11:
            setEncounter('The party finds a construction made of junk: a small citadel, home to friendly scavengers, who offer to aid the players, and provide some hospitality. Should they accept it, a sandstorm occurs, and the citadel is attacked by crazy raiders on horses. A lovely day.')
        break
        case 12: 
            setEncounter('	The party comes across a couple rocks, arranged in a circle. In the center, there is a precious gem. If they take it, the rocks start to rise up, and slightly curve inwards as they do, threatening to trap and suffocate whoever doesn\'t escape. It takes a CR 25 STR check (aka someone needs to have +5 STR) to break the sandstone.')
        break
        case 13:
            setEncounter('There is an area with several small cracks on the floor. The party must go through it to get to their destination, but every turn they spend in there, 2d6 hostile scorpions emerge from the ground.')
        break
        case 14: 
            setEncounter('The party is greeted by camel merchants. The animals are docile and follow simple orders, costing 50 gold each.')
        break
        case 15:
            setEncounter('Each player has to make a CR 17 Perception save. On a fail, they see a large lake, with crystal clear waters, surrounded by a couple meters of vegetation. It\'s all a mirage, though, and the lake is actually quicksand.')
        break
        case 16: 
            setEncounter('The party crests a dune to see a field of bones stretching for hundreds of yards. A DC 20 perception check reveals thousands of red ants swarming the skeletons.')
        break
        case 17:
            setEncounter('A hungry lioness can be seen peeking over the top of the next sand dune. The rest of her pride is lying further down, in wait, ready to sprint around to encircle the party and cut off points of escape.')
        break
        case 18: 
            setEncounter('The party hears a sound somewhere in between slithering, scraping, and the rush of an object through the air. As they crest the next sand dune, they see a gigantic sand worm rushing past, oblivious to their presence.')
        break
        case 19:
            setEncounter('The party hears the sound of war drums, seemingly very close. It\'s actually the drum sand that it turns out they were walking on.')
        break
        case 20: 
            setEncounter('A rather sad flumph is seen floating about the desert. If it asks for help, it states that it wandered too far away from its cave home, and is now lost. Once the party finds any kind of cave entrance, the flumph will thank them and will return to its subterranean life.')
        break
        case 21:
            setEncounter('A crashed and stripped airship from a battle long ago. A group of scorpions have claimed the remains for the shade.')
        break
        case 22: 
            setEncounter('A broken sand skiff abandoned by the native lizardfolk nomads. They left behind 3 glass lenses to start fires, two spears, and half a barrel of water.')
        break
        case 23:
            setEncounter('A pack of hyena can be seen chasing a wounded lioness. She runs to the party in desperation.')
        break
        case 24: 
            setEncounter('The dried and sun bleached bones of a dragon are being worshipped by a group of dragonborn. They are willing to trade as long as you are respectful.')
        break
        case 25:
            setEncounter('A bottled djinn is found in the skeletal remains of a human nomad and his pet monkey.')
        break
        case 26: 
            setEncounter('The party comes across a caravan of several camels carrying all kinds of goods, food and treasures, but there\'s no one leading them. If the camels are stopped or the party tries to touch the goods, a group of humanoids with bodies made out of sand emerges from the dunes.')
        break
        case 27:
            setEncounter('You come upon a cave in a dry lakebed. Ten preserved tritons in caked mud stasis are preserved inside from when this arid land once had water.')
        break
        case 28: 
            setEncounter('You meet a two Ogres that refer to themselves as \'Border Patrol\'. They can be easily bribed and the party can easily sneak by later.')
        break
        case 29:
            setEncounter('You meet a group of 30 refugees lost and thirsty in the desert. The law of the nearby city forbids you from giving them water.')
        break
        case 30: 
            setEncounter('A mad gnome is farming peppers and cactus out in the desert. She sells pepper bombs that do 1d4 damage and has a 50% chance to blind. The pickled pepper jam is also delicious.')
        break
        case 31:
            setEncounter('You come across a series of large tents with a bonfire in the middle. Large, camel-drawn cages and guards adorn the area. You\'ve come across a slave auction.')
        break
        case 32: 
            setEncounter('The party comes across an old abandoned Legionnaire fort with scratch marks all around it. Pushing open the door reveals hundreds of dried out human corpses and bones. The well still has clean water miraculously enough.')
        break
        case 33:
            setEncounter('A lizardfolk jumps out of the sand drawing his blade. \'Leave your possessions if you don\'t want to taste my blade! My knife is coated in deadly poison.\; he taunts as he draws his forked tongue over the blade to intimidate you. One dumb moment later, his eyes widen as he realizes his mistake.')
        break
        case 34: 
            setEncounter('On there journey through the desert, the party encounters a group of raiders traveling back from the their last raid at a nearby Temple.')
        break
        case 35:
            setEncounter('The party discoveries a strange tree in the desert surrounded by a small pond.')
        break
        case 36: 
            setEncounter('The party encounters a small group of followers from a near by village that follows the rays of the sun god.')
        break
        case 37:
            setEncounter('In the middle of the desert the party finds a colossal tower that has been built into the rock bed beneath the sand. Once the party explores the tower, they find an updated map of the desert as well as a uncommon magical item.')
        break
        case 38: 
            setEncounter('A scorpion that communicates telepathically. You learn that it was once a halfling warlock who betrayed his patron for a gallon of water and was transformed. He asks you to help him break the curse.')
        break
        case 39:
            setEncounter('A solar eclipse reveals a nearby temple that is invisible in sunlight. If players are inside the temple when the eclipse ends they will be unable to leave the same way they came in.')
        break
        case 40: 
            setEncounter('The group discovers the petrified roots of an ancient tree spanning 1/2 mi2 at the surface. Well cut slices of the roots are highly prized and incredibly valuable. Chunks and chips are worth next to nothing. Making these slices requires specialized equipment or magic.')
        break
        case 41:
            setEncounter('You discover a small oasis. Drinking the water will cause all the hair on the characters body to fall off.')
        break
        case 42: 
            setEncounter('A good old-fashioned sandstorm. Lasts 2d4 hours. Party must make a CR 10 WIS save each hour or become hopelessly lost.')
        break
        case 43:
            setEncounter('A circle of vultures feast on a dead baby elephant. It appears to have died of natural causes.')
        break
        case 44: 
            setEncounter('Fire spouts shoot out of the sand randomly dealing 1d4 fire damage to the party.')
        break
        case 45:
            setEncounter('You see a beautiful woman dancing across the sand. She\'s singing to herself and motions for the party to come dance with her. As soon as she\'s touched she collapses into sand and a slight giggle is heard on the wind.')
        break
        case 46: 
            setEncounter('The party encounters two barrels of water. One is a mimic.')
        break
        case 47:
            setEncounter('A sand covered rock formation is actually a slumbering Earth Elemental. Be quiet.')
        break
        case 48: 
            setEncounter('Ribs of an ancient boat. Nomads use it for shelter, and casks of old water are hidden half buried in the sand.')
        break
        case 49:
            setEncounter('You find a large male human barbarian named \'The Scorpion King.\' He has four pet scorpions.')
        break
        case 50: 
            setEncounter('Four sand dwarves pop out of the sand in ambush. They thought you were raiders. They have dried, spiced meat to trade.')
        break
        case 51:
            setEncounter('The party comes across a sand filled Warforged. Cleaning it out results in it coming to life and becoming your body guard.')
        break
        case 52: 
            setEncounter('You come across a wet patch of sand that smells like cinnamon. Harvesting the spicy smelling sand nets you 50 gp per pound at the next populated area.')
        break
        case 53:
            setEncounter('A buzzard Aarakocra begins to follow the party. Yelling \'Hurry up!I\'m starving over here!\'')
        break
        case 54: 
            setEncounter('Three nomad chariots surround the party. Just when things look grim one of them calls off the attack. As they ride off into the dunes he yells, \'Now we\'re even!\' The party has no idea what they did to deserve it.')
        break
        case 55:
            setEncounter('The party sees in the distance a strange looking large boulder. When/if they approach, the can appreciate a huge sculpted hand, either made out of stone or jade or any other material. It may have enemies nesting on it, or traps around it.')
        break
        case 56: 
            setEncounter('Sinking sand that requires a perception check to spot, dex and strength saving throw to get out of.')
        break
        case 57:
            setEncounter('An oasis rigged with magical traps. There are flowers and plants that investigating with nature checks seem to be good picks for herbalism or eating. They might be, but picking them triggers a fire ball or poison gas trap from the base of the stalk.')
        break
        case 58: 
            setEncounter('A sudden pit of sand, cone shaped, that takes a dex check to avoid falling into, or repeated dex checks to get out of. As they struggle to the top, the giant wolf spider at the bottom throws sand, at players, giving them disadvantage on all dex checks.')
        break
        case 59:
            setEncounter('A pack of 3d4 scavenging gnolls rummages about some old metal.')
        break
        case 60: 
            setEncounter('A mummy has awakened beneath the ground. Dead plants and desiccated animal corpses litter the area. Odd whispers float on the wind. Anyone sleeping here will be disturbed by vague and dark dreams of something calling…')
        break
        case 61:
            setEncounter('A trio of commoners standing on large rocks beckon you over frantically. In the area lurks an injured bulette, waiting for them to come down.')
        break
        case 62: 
            setEncounter('You walk upon a battle, as a force of 4d4 ostrich-riding kobolds harries a smaller amount of goblins.')
        break
        case 63:
            setEncounter('A massive tortoise, 30ft tall, walks the land, with what looks like scaffolding upon it\'s shell. Atop, a small camp with notes and food, welcoming visitors and encouraging them to leave something for the next ones.')
        break
        case 64: 
            setEncounter('A small hut lies in the distance, next to a large cavern in the ground, chambers and tunnels connecting them. A pair of burnt skeletons lie at the entrance.')
        break
        case 65:
            setEncounter('At a grove of reddish sand, odd trees and a white flag, a nestle of tentacles wave in the earth. If approached, a xorn rises and offers to trade meat and water for gems and metal.')
        break
        case 66: 
            setEncounter('A tavern sits in a conspicuously unappealing location. The inhabitants are terrified and confused, because hours before they and the building were both in the center of Silverydeep. There\'s food enough, but they talk of finding safety.')
        break
        case 67:
            setEncounter('A couple of black pools besmirch a valley. Rolling 1d4, the pools are made of tar, oil, onyx or black puddings..')
        break
        case 68: 
            setEncounter('A small delegation approaches you, informing you that intrude upon lands owned a local lord, and to leave, be arrested or brought forth to appeal. The lord in question is a black half-dragon, quite cruel and offering work for leniency.')
        break
        case 69:
            setEncounter('A male fire Genasi and two winged female Tieflings are seen attacking two giant tarantulas. They won\'t survive the battle without your intervention. In thanks they give you an amulet of fire resistance before they collect the tarantula\'s venom and disappear through a portal back to Hell.')
        break
        case 70: 
            setEncounter('A caravan of silk traders run into you and offer to hire you to supplement their guards. You\'re headed in that direction anyway')
        break
        case 71:
            setEncounter('The party stumbles into the 40 foot funnel of a giant ant lion larvae. It grapples the first PC that comes into its grasp. Dealing 30 damage forces it back into a tunnel to hide. Treasure can be found near the surface where it spit out the inedible pieces.')
        break
        case 72: 
            setEncounter('The party finds an old abandoned caravan that was once attacked by raiders. Arrows, silks, weapons, armor, and preserved spices can be salvaged.')
        break
        case 73:
            setEncounter('You find a zombie bound by chains, wards, and radiant magics in an ominous cave. The gem in his chest is a prison for a powerful demon. He offers you empty promises to free him. Four scrolls and a spell book can be found by looking around.')
        break
        case 74: 
            setEncounter('A beggar and a princess can be seen on a flying carpet off in the distance.')
        break
        case 75:
            setEncounter('The party comes across a group of feral camels. If they attempt to capture one, the camels turn on them, using kicks and spitting in their attacks.')
        break
        case 76: 
            setEncounter('Desperate for food/water (or perhaps just negligent) a party member attempts to cut open a cactus, only to painfully learn that that specific type of cactus reacts to touch by forcefully ejecting it’s needles.')
        break
        case 77:
            setEncounter('A domed tomb with two sphinx-shaped gargoyles as guardians. The tomb holds some gold, spice, salt, and some honey.')
        break
        case 78: 
            setEncounter('Drow raiders fire poisoned bolts at the party. They then disappear into quicksand. They will return at night to attack anything still in the area.')
        break
        case 79:
            setEncounter('You find three yurts and some sheep. The hunters on horseback return with their kill… their eagles following behind them. Pray you have alcohol.')
        break
        case 80: 
            setEncounter('A Mongolian death worm spits 1d4 acid damage at the party before retreating into the sand.')
        break
        case 81:
            setEncounter('A lightning strike near the party facilitates blue crystals shooting out of the sand. They do 1d4 piercing damage if growing through a living thing. The shards constantly glow and make good light sources at night.')
        break
        case 82: 
            setEncounter('You find an old abandoned mine shaft. The rubies, mithril & silver ore you find could be useful. You should give the old prospector a proper burial since the map to his buried horde is in his pocket.')
        break
        case 83:
            setEncounter('An oasis comes into view. Unbeknownst to the players, it is the entrance to an aboleth’s den.')
        break
        case 84: 
            setEncounter('An awakened camel greets the party and tries to sell them rice and dates. It can only use its mouth to carry said food, leading to it being covered in slobber.')
        break
        case 85:
            setEncounter('All party members must make CON saves against heatstroke if day or hypothermia if night.')
        break
        case 86: 
            setEncounter('You find a small building, inside is an altar with a dead King and the head of his vizier. There’s a book the king was reading from in his lap. Reading it deals 1d4 poison damage per page touched.')
        break
        case 87:
            setEncounter('A mechanical bird leads the party to a well. There’s a flock of goats but no shepherd. The bird keeps signaling to the well…')
        break
        case 88: 
            setEncounter('A group of lizardfolk are harvesting prickly pears. They sell them for 5 copper.')
        break
        case 89:
            setEncounter('The party approaches an overhang near a valley. The valley floor is littered with diamonds…and giant venomous snakes. Their only natural predator is the giant rocs of the nearby mountains.')
        break
        case 90: 
            setEncounter('You approach a sealed bandit cave. Behind it you hear a man trying to remember the password to the cave door…’Open paprika? Open dill? Open…’ You then hear 40 bandits on horseback approaching.')
        break
        case 91:
            setEncounter('You run into 10 pirates fleeing a cyclops. One introduces himself as Sinbad and has items to trade.')
        break
        case 92: 
            setEncounter('You find an adobe hut village in ruins. Devoid of humans you realize their fate once you reach the other end of town and come upon 40-60 human size pillars of salt.')
        break
        case 93:
            setEncounter('The party stumbles to the base of an ancient mesa just in time to witness the mating flock of many desert griffons. They land in pairs on the mesa above you to nest.')
        break
        case 94: 
            setEncounter('The party comes across a circled up caravan under siege by 1d4 kobolds riding hyenas.')
        break
        case 95:
            setEncounter('You follow a river, and the only point shallow enough to cross is infested with crocodiles, some giant. A nearby priest offers crossing, in return for a special payment.')
        break
        case 96: 
            setEncounter('A large set of tracks leads from a fresh carcass into a cave one hour away. A skilled tracker might notice the tracks belong to a fearsome tyrannosaurus rex.')
        break
        case 97:
            setEncounter('At night, you come accross three strange gnomes holding hands. If they notice the party they disappear in a flash of light. If left to finish, they still disappear but have left a circle of 51 electrum tokens.')
        break
        case 98: 
            setEncounter('A trio of golem stand atop a large white hill, one of steel, one of rock and one of ice. They each have seven eyes on their front.')
        break
        case 99:
            setEncounter('You meet a tribe of gnoll who claim to have given up fighting and seek hermitage, but they’ve been harassed by misled settlements for years due to other tribes nearby. Can you settle this issue without violence?')
        break
        case 100: 
            setEncounter('A sand-storm brews into a massive cyclone. At it’s epicenter, a face appears in the sand and offers to take you anywhere in the world the sky can reach. Doing so may hurt, however, because landing will be up to the players.')
        break
    }
}
    return(
        <div className="flex flex-col mx-auto">
            <h1 className="text-center">Desert Environment Generator</h1>
            <div className="mx-auto mt-5" onClick={generateRandomEffect}>
                <Button label={'Roll the dice!'}/>
            </div>
            <p className="my-5">{diceRoll} <br /><br /> {encounter}</p>
            <span className='text-center'>Entries gathered from DnDspeak.com: <a className="text-blue-400" href='https://www.dndspeak.com/2018/01/03/100-desert-encounters/'>Here</a></span>
        </div>
    )
}