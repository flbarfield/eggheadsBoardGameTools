import Button from "@/Components/Button"
import { useState } from "react"

export default function SeaTravelEnv () {
    let [diceRoll, setDiceRoll] = useState('')
    let [encounter, setEncounter] = useState('')

    function generateRandomEffect () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

    switch (diceRoll) {
        case 1: 
            setEncounter('A Pod of Dolphins Swims alongside your vessel for 1d4 hours')
        break
        case 2: 
            setEncounter('An intoxicated Crewmember falls overboard')
        break
        case 3:
            setEncounter('A Pod of Plesiosaurs feed off the corpse of a sperm whale in the distance')
        break
        case 4: 
            setEncounter('A Barrel floats past the ship, it contains a fine wine')
        break
        case 5:
            setEncounter('The ship passes by a Sea Stack where a sailor, crazed through starvation, begs to be taken aboard')
        break
        case 6: 
            setEncounter('A crew member saw a ghost ship during the night. The captain being superstitious changes course to go around the sighting. The takes journey is now 1d4 days longer.')
        break
        case 7:
            setEncounter('A boulder is seen floating past the ship. Upon inspection the boulder is indeed made of stone, but floats inexplicably.')
        break
        case 8: 
            setEncounter('A whale emerges from the depths and a nearby ship attempts to attack it, the captain of said ship is constantly rambling about revenge and has a peg-leg. If the characters do not intervene the ship is destroyed and the whale goes back under.')
        break
        case 9:
            setEncounter('A coffin floats past, covered in barnacles. If the players choose to haul it onto the ship they will find the word “CASSIUS” is engraved above the lock. Inside rests a long-forgotten vampire who will attack the crew one-by-one at night if aboard the ship.')
        break
        case 10: 
            setEncounter('A ball on a chain floats past. However the ball has been covered in extremely hard barnacles making it sharp, allowing it to be used as a spiked flail.')
        break
        case 11:
            setEncounter('You catch a member of the crew writing eldritch sigils on the deck in chalk.')
        break
        case 12: 
            setEncounter('Forty-odd bodies immediately float to the surface, they seem fresh…')
        break
        case 13:
            setEncounter('A member of the crew has disappeared! The last person to see him says he took a rowboat in the middle of the night and abandoned ship…')
        break
        case 14: 
            setEncounter('The ship passes through a school of pink, octopoid-like creatures. They are harmless, but exude a very slippery oil.')
        break
        case 15:
            setEncounter('The carcass of a dragon turtle, bloated with decomposition gases, floats on the surface. The sickening stench is notable a half-mile away.')
        break
        case 16: 
            setEncounter('A small longboat with sails furled, crewed by around ten, scuds by in the night. They do not hail or acknowledge the PC’s boat in any way.')
        break
        case 17:
            setEncounter('A warm rain falls – the water is pinkish in color but otherwise normal.')
        break
        case 18: 
            setEncounter('A sea elf surfaces and hails the ship with a series of broad hand motions, obviously some type of code. No reply seems to make sense them and they leave after a minute.')
        break
        case 19:
            setEncounter('A lump of Grey goop floats by. If collected, it proves to be the precious ambergris.')
        break
        case 20: 
            setEncounter('During the night, ball lightning dances among the sails, creating a frightening show. It does no damage.')
        break
        case 21:
            setEncounter('At night, a fog covers the area, blocking the ability to see the stars, but the crew spots three glowing green orbs floating off the port bow. The players can try to use the orbs as a point of reference to navigate, investigate the orbs, or wait till morning.')
        break
        case 22: 
            setEncounter('Your ship is immersed in giant tentacles and is unable to move. A giant kraken head emerges and tells you that it’s lonely and just wants to talk.')
        break
        case 23:
            setEncounter('The first mate of the ship you’re on finds excess cargo from their last trip, and shares the contents with the group. (Spices, alcohol, etc.)')
        break
        case 24: 
            setEncounter('The travelers meet a traveling brothel ship titled “The Lusty Crustacean”.')
        break
        case 25:
            setEncounter('Two crew members are playing chess on the top deck. The ship shifts, causing one of the king pieces to slide off the side of the ship.')
        break
        case 26: 
            setEncounter('A large sea beast follows the ship for 1d4 days. It does not appear threatening, and dives to the depths if attacked.')
        break
        case 27:
            setEncounter('A storm hits in the night, and one of the crew claims to hear it speaking/singing to them.')
        break
        case 28: 
            setEncounter('You find a small, unmapped island. If the crew disembarks to investigate, it is revealed that the island is actually debris collected on the shell of an enormous turtle.')
        break
        case 29:
            setEncounter('The captain makes a detour to a small, rocky island, shrouded in fog. He goes to the island for 1d4 days before returning with no explanation. None of the crew seem to be bothered by this.')
        break
        case 30: 
            setEncounter('The ghostly residents of a long sunken city walk above the waves where the city streets and buildings once were. As your ship approaches, they all stop and watch you.')
        break
        case 31:
            setEncounter('As you approach a large island, all of the water pulls from its shore to reveal a sunken ship surrounded gold and artifacts that have spilled from its belly. But the water that has been pulled from shore is now a tsunami, and you have a time limit to do what you will.')
        break
        case 32: 
            setEncounter('	A massive spire of stone erupts from the ocean. There appears to be someone at the top, looking down upon your vessel.')
        break
        case 33:
            setEncounter('While inside of a bay a squall hits and temporarily your boat sits on dry land. Eventually, the waters return and the boat sails onward.')
        break
        case 34: 
            setEncounter('A ship manned by terrifying beasts passes by. Your sailors are terrified, but the monsters keep their distance. They pass swiftly, as if on a mission.')
        break
        case 35:
            setEncounter('As noon approaches in the vast expanse of ocean, you see a ship that looks exactly like yours approaching. As the ship passes by, you see yourselves on the other ship, watching you with the same confused expressions that you have yourselves.')
        break
        case 36: 
            setEncounter('In the dead of night, a panicked bell toll rings. A massive beast is striding in the ocean. It appears the ocean depth only reaches up to its hip.')
        break
        case 37:
            setEncounter('You find a rusted anchor covered in runes, when you use the anchor the entire ship sinks nearly instantly to the bottom of the sea. The occupants of the ship are now under the effect of the breathe underwater spell.')
        break
        case 38: 
            setEncounter('An iceberg floats by, when sunlight shines through it you see the ship frozen inside.')
        break
        case 39:
            setEncounter('You can’t believe your eyes, a gold obelisk just sitting in the water surrounded by a jagged sharp reef.')
        break
        case 40: 
            setEncounter('During the journey, an occasional bump is noticed against the ship’s hull. But as the days go by, the bump becomes a thump, then a bang, and suddenly a crash that rocks the ship.')
        break
        case 41:
            setEncounter('An old woman appears on deck. She says a toll must be paid to pass beyond this point, and seems to have the power to enforce it. But she doesn’t want money. She wants something from each of you that you can’t bear living without.')
        break
        case 42: 
            setEncounter('A beautiful mermaid is spotted approaching your ship by a number of crew. Shortly after they spot her, they suddenly sink into madness, ravenously gnawing on their fingers and rambling in an unknown language. All the while, she is getting closer.')
        break
        case 43:
            setEncounter('A small bird begins circling your ship, then two, then a thousand, then an innumerable flock.')
        break
        case 44: 
            setEncounter('As you walk the deck, you notice a board is missing. A few days later, you notice another. Then more parts begin to go missing, including boards from the hull.')
        break
        case 45:
            setEncounter('A small trickle of water is seen coming into the ship. It seems like it’s not an issue, but when someone goes to plug it, the hole opens up and devours them.')
        break
        case 46: 
            setEncounter('You walk across the deck as the ship’s nose lifts up. The ship has left water and is now floating above the ocean and directly into the sky.')
        break
        case 47:
            setEncounter('A fire erupts from the captain’s quarters, he runs out burning and screaming for everyone to run before collapsing on the deck.')
        break
        case 48: 
            setEncounter('As the first lantern is lit during sundown, a constant stream of fish begin to jump out of the water and onto the deck, followed by a deep rumbling sound from below the ship.')
        break
        case 49:
            setEncounter('An empty rowboat is sighted. When the ship gets close to it, it vanishes in a wet mist.')
        break
        case 50: 
            setEncounter('You pass by a hermit living on a self sufficient fishing platform. They chuck rotten fish at your ship if you get too close.')
        break
        case 51:
            setEncounter('	The ship is followed for several hours by fins extruding from the water. The water appears dark grey, and nothing beneath the surface can be seen. If anyone goes swimming in the water, they can’t see more than a foot in front of them. After several hours, the fins water gradually turns back to normal color and the fins dip beneath, disappearing.')
        break
        case 52: 
            setEncounter('You find a man adrift at sea in a bloodied life boat. He claims to be the survivor of a shipwreck.')
        break
        case 53:
            setEncounter('A Naga is found floating on a piece of driftwood. She begs to come aboard and appears to have been starving.')
        break
        case 54: 
            setEncounter('A crew member that was dumping waste off the side of the boat yells for help. You go the deck to see the crew member being beaten by a humanoid fish creature. The creature jumps back into the sea and swims away when it sees you.')
        break
        case 55:
            setEncounter('You see a dolphin happily follow the ship. You see that dolphin gets eaten by a shark.')
        break
        case 56: 
            setEncounter('A hooded figure appears at night and approaches 1 character and says “a danger beyond your mortal understanding is lurking within these waters” if a character goes looking for the figure they will be unable to find it.')
        break
        case 57:
            setEncounter('You see a crew-member slip on the deck. Upon closer inspection, the spot is covered with ice. The water is still liquid, but the ship is slowly freezing.')
        break
        case 58: 
            setEncounter('A huge storm approaches, making it difficult to see. The sound of rushing water alerts you to a whirlpool forming ahead, threatening to pull the ship in or damage it if you don’t think fast!')
        break
        case 59:
            setEncounter('A flock of birds appears to be circling bits of driftwood. Upon closer inspection there is blood in the water and the birds are glowing faintly red. There might be something valuable still floating around if you’re willing to risk it…')
        break
        case 60: 
            setEncounter('A crew member or crew members disappear for 1d4 hours and come back seemingly out of thin air if investigated its found to be a stow away Doppelgagger who merely wanted passage to your destination you must decide now what to do the. the crew member is still alive just hidden somewhere that only the Doppelgagger knows.')
        break
        case 61:
            setEncounter('You casually walk below deck when you notice water coming up between two of the floor boards.')
        break
        case 62: 
            setEncounter('One night, the sea is calm and quiet as a small life boat approaches the ship head on. Your ship steers to avoid destroying it. As you pass it you see a wirey old man with white hair and mustache rowing hypnotically. He’s facing backward with wide eyes, staring off into the distance, and with a shiver in his voice he repeats “the black…. the black”.')
        break
        case 63:
            setEncounter('Enormous bubbles surface frequently throughout the day, they smell horrible when they pop and a faint green/yellow gas can be briefly seen. “Whale farts.” the captain explains, covering his nose and mouth with his handkerchief. Fortitude/Constitution save or be sickened for 1d4 days.')
        break
        case 64: 
            setEncounter('A man is spotted on top of a volcanic rock formation, it is clear he has no food or shelter save his clothing and a spare bit of half a row boat. He try’s to get there attention by lighting a fire, but will only board the ship if the players say they are going further south.')
        break
        case 65:
            setEncounter('The captain gets too drunk and in the process he steers the ship gets off course.')
        break
        case 66: 
            setEncounter('A large object bumps against the hull of the ship. After hauling it aboard, the crew discovers it is a huge glass bottle the size of a person, with an equally large scroll inside. On it is a beautiful poem written in Giant.')
        break
        case 67:
            setEncounter('The navigator is found to be a fraud- he has no idea where the ship is or where it is going. Neither does anyone else on the ship.')
        break
        case 68: 
            setEncounter('The ship passes over a coral reef inhabited by aquatic fairies- the fairies play pranks on and try to mislead the crew, accidentally causing one crewmember to fall off the mast to his death.')
        break
        case 69:
            setEncounter('The captain calls everyone aboard and announces that someone or something has been stealing food- there is only 1d4 days worth of rations left.')
        break
        case 70: 
            setEncounter('A giant is seen walking through an ocean that only reaches his belly, in the distance.')
        break
        case 71:
            setEncounter('A sailor spots a glimmer under the water—further investigation reveals it is the very top of a huge underwater statue made of gold.')
        break
        case 72: 
            setEncounter('The ship cook has concocted the foulest, sickest looking meal, even by his standards. It’s also his birthday, and no one wants his feelings to get hurt.')
        break
        case 73:
            setEncounter('Huge manta rays fly over the ship. Each of the manta rays could feed the crew for days, and some are even rumoured to have precious pearls within. However, if the party does manage to get one, they find the skeleton of a human child within.')
        break
        case 74: 
            setEncounter('Everything. I mean EVERYTHING. Smells like fish. Horrible, stinky, rotting fish. Clothes, shoes, your own body, and even food that doesn’t contain fish. Oddly enough, fish smells like strawberries.')
        break
        case 75:
            setEncounter('The crew’s amusements of dares have prompted one member to drink the ocean’s water. To his amazement, it is not salty, but sweet.')
        break
        case 76: 
            setEncounter('Shadows appear under the water that must be fish, but look like large birds…')
        break
        case 77:
            setEncounter('Shipworms have weakened the hull. Carpenters must spend a day repairing the damage.')
        break
        case 78: 
            setEncounter('Fruit you brought to combat scurvy has slowly been going missing. An investigation reveals a few crew members secretly attempting to brew alcohol.')
        break
        case 79:
            setEncounter('OCelebrations on deck for a cabin boy’s first catch at sea go sour when a drunken deckhand confronts the boy to tell him nasty facts about his heritage.')
        break
        case 80: 
            setEncounter('The ship comes across a fairly large merchant vessel named “The Seaside Exstravaganza”. The merchant who runs the ship, a stern but fair old woman named Gellie, deals in merchandise from faraway countries. She quickly becomes fond of one of the party and offers them a spot among her crew.')
        break
        case 81:
            setEncounter('The ship approaches a collection of rocky outcroppings surrounded by abnormally quick-moving water. A ship-sized geyser in the center of the outcroppings acts as a portal to the Elemental Plane of Water during the day.')
        break
        case 82: 
            setEncounter('The ship comes across a fairly large merchant vessel named “The Seaside Exstravaganza”. The merchant who runs the ship, a stern but fair old woman named Gellie, deals in merchandise from faraway countries. She quickly becomes fond of one of the party and offers them a spot among her crew.')
        break
        case 83:
            setEncounter('A castaway named Sinan is found on board. He swears up and down he can read the stars, seas, and winds just by shooting a crossbow into the air.')
        break
        case 84: 
            setEncounter('You pass by an island, across the beaches you can see an entire pirate crew crucified and bleeding by the neck.')
        break
        case 85:
            setEncounter('You pass a ship in the water, a crowd of satisfied soldiers celebrating a victory, unaware of the bulky headless pirate climbing up the side of the ship.')
        break
        case 86: 
            setEncounter('A small rowboat floats next to you, a husband begrudgingly asks for directions as his wife cajoles him to have a better attitude.')
        break
        case 87:
            setEncounter('A humanoid manta-man surfaces, his strength is immense and his intentions are unknown.')
        break
        case 88: 
            setEncounter('You observe a rather small island in the distance, being no bigger than the size of a small courtyard. Upon closer inspection, you notice that there is table in the center of the island, surrounded by 10 or so chairs. The table is set for what seems to be a grand feast, displaying all sorts of exotic food and drink, completely fresh. However, there is no mention of this island on any map, and you find no indication that anyone else has been there recently.')
        break
        case 89:
            setEncounter('The fluke of a large sea monster is seen in the distance, seemingly headed towards the ship, only for the maw of a much large monster envelop it from below, breaking the surface and quickly sinking back down.')
        break
        case 90: 
            setEncounter('Off in the distance, a sunburned, unclean, lone figure on a lifeboat shoots off a flare, and desperately cries for help. The figure is a pirate who escaped from an encounter with the authorities by abandoning their crew. Upon landing, if he/she is turned in to the proper authorities, the party may claim their bounty, or, if kept free, the pirate may come in handy as a contact, as the pirate knows of hidden ports all across the sea.')
        break
        case 91:
            setEncounter('Off in the distance, a sunburned, unclean, lone figure on a lifeboat shoots off a flare, and desperately cries for help. The figure is the final survivor of a terrible shipwreck. This person is a simple fisherman. Should the party take the survivor aboard, they will refuse to go below deck, regardless of the circumstances. If asked, all they will say is “My friends were below deck.”')
        break
        case 92: 
            setEncounter('Off in the distance, a sunburned, unclean, lone figure on a lifeboat shoots off a flare, and desperately cries for help. The figure is an arrogant cleric, surviving off of magically created food and water. This person is doing fairly well, all things considered. If rescued and delivered to their temple, this cleric will give the party a small favor, but will consider the party a small part in the cleric’s survival.')
        break
        case 93:
            setEncounter('Off in the distance, a sunburned, unclean, lone figure on a lifeboat shoots off a flare, and desperately cries for help. The figure is a doppleganger, feigning being stranded at Sea, after destroying a ship and eating her crew. If allowed on board, the doppleganger will continue their antics, attempting to kill the crew before they reach shore.')
        break
        case 94: 
            setEncounter('A fishing net brings aboard a treasure chest that turns out to be a mimic.')
        break
        case 95:
            setEncounter('A giant squid is seen off the port side of the ship.')
        break
        case 96: 
            setEncounter('A group of rats get into the food!')
        break
        case 97:
            setEncounter('Something huge and solid scrapes against the bottom of the ship.')
        break
        case 98: 
            setEncounter('Hundreds of manta rays are migrating under the ship.')
        break
        case 99:
            setEncounter('Below the water, someone on the ship notices an enourmous sunken city.')
        break
        case 100: 
            setEncounter('An orc scout ship is seen in the distance, traveling fast towards the ship.')
        break
    }
}
    return(
        <div className="flex flex-col mx-auto">
            <h1 className="text-center">Sea Travel Encounter Generator</h1>
            <div className="mx-auto mt-5" onClick={generateRandomEffect}>
                <Button label={'Roll the dice!'}/>
            </div>
            <p className="my-5">{diceRoll} <br /><br /> {encounter}</p>
            <span className='text-center'>Entries gathered from DnDspeak.com: <a className="text-blue-400" href='https://www.dndspeak.com/2017/12/04/100-sea-travel-events/'>Here</a></span>
        </div>
    )
}