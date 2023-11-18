import Button from "@/Components/Button"
import { useState } from "react"

export default function JungleEnv () {
    let [diceRoll, setDiceRoll] = useState('')
    let [encounter, setEncounter] = useState('')

    function generateRandomEffect () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

    switch (diceRoll) {
        case 1: 
            setEncounter('The party comes across a cave filled with mushrooms that emit a strange blue glow.')
        break
        case 2: 
            setEncounter('Whoever is last in the party feels a small tug on their pant leg. When they look down, a Chwinga is offering them a small necklace made of sea shells.')
        break
        case 3:
            setEncounter('A few baboons begin howling at the party below. This attracts the attention of a nearby enemy.')
        break
        case 4: 
            setEncounter('A group of tribesmen are hunting a large dinosaur nearby. They have not spotted the party, and it looks like they could use some help.')
        break
        case 5:
            setEncounter('Animal noises go quiet as the branches above you move and shake as if something is moving through them. Normal sounds continue a few minutes later.')
        break
        case 6: 
            setEncounter('You see the bones of a creature in the under growth. It has been picked clean by scavengers.')
        break
        case 7:
            setEncounter('While resting a small swarm of loudly croaking frogs hop through the camp. Anyone touched by the frogs dreams prophetic dreams that nights.')
        break
        case 8: 
            setEncounter('While moving through a river a few faintly glowing leeches attach themselves, but it’s not blood they’re draining but magic itself.')
        break
        case 9:
            setEncounter('A thick curtain of vines hangs before you blocking the path. If looking carefully small jungle creatures can be seen entwined. When cut the vines quickly strike like snakes trying to ensnare the party.')
        break
        case 10: 
            setEncounter('Suddenly an empty clearing appears ahead nothing but dry grey skeletal trees hanging with a yellow moss.')
        break
        case 11:
            setEncounter('Along the path primitive markers are spaced every 50 foot starting as humanoid in shape each seems more demonic.')
        break
        case 12: 
            setEncounter('A ramshackle reed hut sits off the path, inside a grey furred Tabaxi slowly rakes its arms with its claws muttering about empty eyes and a glowing maw over and over.')
        break
        case 13:
            setEncounter('There is an arrangement of once brightly colored, wilting, flowers pinned to a tree ahead with the name of a stranger carved underneath.')
        break
        case 14: 
            setEncounter('Shallow panting can be heard to the right. Leads to a critically injured animal unable to run.')
        break
        case 15:
            setEncounter('A spider monkey jumps on the shoulder of a party member pawing at their backpack for food, in return for food the monkey returns later that day and drops a polished stone out of which a frowning face can be glanced.')
        break
        case 16: 
            setEncounter('A swarm of insects surrounds and follows the party, not dangerous but makes all tasks more difficult due to buzzing, biting and making it difficult to see.')
        break
        case 17:
            setEncounter('A weathered leather journal is found covered in small scratch marks. Insides is the diary of a treasure hunter. The writing quickly turns into ineligible scribbles after the hunter thinks they’re into something.')
        break
        case 18: 
            setEncounter('You see a brilliantly colored bird flit through the trees ahead, cawing and crying through the jungle air. It lands on a branch and screeches at you, before flying off.')
        break
        case 19:
            setEncounter('You come across the rotting remains of a cart, alongside rusting armor and fetid bones. A tattered and unreadable banner hangs at the front of the procession. The line of bodies, carts and bones stretches almost a mile long through the forest. Nothing of value remains but bones and rot.')
        break
        case 20: 
            setEncounter('The party passes an old tree with dozens of ancient tunes and carvings burned into its wooden surface. Occasionally, one of the runes glows a gentle blue, sending off pearlescent but harmless sparks, before going dark once again.')
        break
        case 21:
            setEncounter('A trio of jungle cats gnaw on the body of an unidentifiable creature. They scatter into the woods as the party nears.')
        break
        case 22: 
            setEncounter('A man who must have been alive mere hours before, lies dead in the jungle heat. He wears no armor, but is covered in deep, bloody wounds, and some type of poison fills his veins.')
        break
        case 23:
            setEncounter('At dusk, a young voice begging for help whispers to one member of the party. The voice seems to come from the trees themselves.')
        break
        case 24: 
            setEncounter('The party is waken up to a high pitch scream coming seemingly from the surrounding trees, then silence.')
        break
        case 25:
            setEncounter('An aged map is found rolled up. It’s a large map of the jungle with “LIES” written repeatedly in dried blood on it.')
        break
        case 26: 
            setEncounter('A small hunting party of aggressive Goblins chasing an animal crosses paths with the players.')
        break
        case 27:
            setEncounter('A young Stegosaurus’ foot is seen trapped between two fallen trees. It cries out for its herd.')
        break
        case 28: 
            setEncounter('A tribal dragonborn lays slumped against a tree holding his eviscerated abdomen, in a rasping grunt he says in draconic “opened, by bahamuts breath they opened them all!”')
        break
        case 29:
            setEncounter('A large stone well is covered in vines and moss. Inside, it looks like it is filled with water. A DC 12 survival will tell you that it looks like drinkable water.')
        break
        case 30: 
            setEncounter('A witch’s hut sits in a small clearing. When approached, the hut stands up on giant chicken legs and flees.')
        break
        case 31:
            setEncounter('You enter into a clearing and shrieking starts. A patch of Shrieker plant is found a few yards ahead. The sound reaches to anything within 300 feet of it.')
        break
        case 32: 
            setEncounter('You feel your left elbow get caught on something sticky. A giant spider web has caught your arm. A Giant Spider’s eyes lock on you from 60 feet away.')
        break
        case 33:
            setEncounter('Another adventurer is spotted through the leaves struggling a against a creature. Getting closer, the man is seen getting constricted by a Giant Constrictor Snake. His sword and shield on the ground where he once stood.')
        break
        case 34: 
            setEncounter('Walking past a large purple flower a puff of near invisible (DC 16 perception or nature) spores release, for the next 5 minutes each member hears a loved ones voice whisper that the path they are taking leads to doom and death.')
        break
        case 35:
            setEncounter('You find five corpses hanging by their feet from the tree above you. All of the skin has been removed from their bodies. A few discarded items litter the ground beneath them. One of these items is a badge belonging to a soldier named Captain Seeyi Hopper. If any players have the soldier background they recognize the name as someone they once served with.')
        break
        case 36: 
            setEncounter('As if from the shadows a weretiger steps out. It levels it’s golden spear head at a party members throat “you trespass on sacred ground, you have until the moon shows her face, then let the hunt begin”.')
        break
        case 37:
            setEncounter('You come upon a moss covered statue, fallen and showing the decay of centuries. A group of lemurs huddles together underneath to wait out the sudden downpour.')
        break
        case 38: 
            setEncounter('A giant stone head, toppled from some long perch, lies before you. In it’s eyes, light flickers faintly. Could something be inside?')
        break
        case 39:
            setEncounter('A pool of bubbling tar is in front of you. You see an animal go in and screech in pain, then silence. Suddenly, the creature’s skeleton covered in tar struts out and into the jungle as if nothing happened.')
        break
        case 40: 
            setEncounter('While making your way through thickets of vines your scratched by long yellow thorns (dex, con nature to miss) although painless the veins near the scratch have turned a vivid orange.')
        break
        case 41:
            setEncounter('A beautifully coloured bird flu along with the party with uncanny accuracy it copies everything said but in a whiney condescending tone.')
        break
        case 42: 
            setEncounter('Plump white fruit hang from a tree overhead giving off a sweet and spicy aroma, biting into it lets the thousands of tiny spiders free.')
        break
        case 43:
            setEncounter('Following a trail footprints can be seen first clawed, then padded, humanoid then bird like each only has 4 prints before shifting.')
        break
        case 44: 
            setEncounter('A bright pink pool sits peacefully in the shade, smelling like strong cheese. Distilling the water and healing algae makes for a potent potion.')
        break
        case 45:
            setEncounter('The path suddenly turns white and chalky but plants thrive, above roost giant bats.')
        break
        case 46: 
            setEncounter('The jungle opens up upon a gorge with an narrow rope bridge spanning it’s width. Halfway across, the drums begin to beat their insidious rhythm.')
        break
        case 47:
            setEncounter('The jungle opens up upon a narrow gorge. As the first creature to crosses, a net of webbing shoots out from the gorge to ensnare them, dragging them down.')
        break
        case 48: 
            setEncounter('The jungle opens up upon a wide gorge. The walls are steep and what looks to be cave mouths litter the sides.')
        break
        case 49:
            setEncounter('The party comes across a river bed that has run dry. Embedded in the hard dirt are pieces of a wooden cart jetting out. The wood is old and water damaged, but show an attack by creatures of the forest.')
        break
        case 50: 
            setEncounter('As the party walks along their path they come across a wounded mating pair of jungle cats. One lays dying while the other stands over top of it to protect it. They will not peruse the party if they retreat.')
        break
        case 51:
            setEncounter('Along the path ahead the party hears the sound of people arguing profusely. A small gathering of people are the source of the noise and on further inspection the party finds the group is arguing about last night’s watch. It seems during the night someone slacked on their guard duty and now something important is missing.')
        break
        case 52: 
            setEncounter('A square 10ft by 10ft cave can be seen ahead on closer inspection this is the mouth of a huge primitive statue head covers in vines.')
        break
        case 53:
            setEncounter('A buzzing hive can be seen hanging low in a tree, inside contains a honey so delicious it’s almost addictive.')
        break
        case 54: 
            setEncounter('Taking a wrong step a party member steps on an active insect nest, what at first appear to be mear ants are actually a minute species of rust monster act quickly or lose all metal.')
        break
        case 55:
            setEncounter('Your come to a blackened patch of jungle everything seems scorched but thorny, if these thorns spill blood the plants almost instantly revive.')
        break
        case 56: 
            setEncounter('The party come across a large flower now brown and brittle looking, it seems it would make for excellent tinder, just watch out for the poison maw hiding at it’s centre.')
        break
        case 57:
            setEncounter('A gentle splashing sounds near the parties chosen path, on arrival the pool is clean clear and brimming with fat fish, strange that the waterfall runs upwards.')
        break
        case 58: 
            setEncounter('Hanging from one bound ankle an irate Nobel dressed in the finest (and mostly useless) expedition gear money can buy swings before you')
        break
        case 59:
            setEncounter('The strange thing about these jungles though mostly dry you can find deep caverns at any tiiiiiiiimmmmmmmeee.')
        break
        case 60: 
            setEncounter('Swollen gourds hang ripe in a tree and on the ground around it, it’s a shame the poisonous frogs have such similar markings.')
        break
        case 61:
            setEncounter('A jungle cat watches as her cubs attempts to kill a solitary goblin.')
        break
        case 62: 
            setEncounter('The party comes upon an area of jungle where all the vegetation is decaying and beasts litter the ground dead. Oddly, none have been scavenged.')
        break
        case 63:
            setEncounter('You come across a clearing. A red-yellow-blue Bird of Paradise is dancing and flashing his feathers in an attempt to attract a mate. If any party member wears a combination of red/yellow, red/blue, or yellow/blue, the bird will attempt to “seduce” the player. If any party member decides to engage the bird of Paradise in a “dance off”, the party member can “win” IF proficient in Performance AND passes a DC15 DEX ability check.')
        break
        case 64: 
            setEncounter('The party comes upon children playing Hide and Seek and are invited to play. If they accept (as the seekers), the skill checks are surprisingly high. The children are using magic to disguise themselves as trees, shrubs, flowers, etc.')
        break
        case 65:
            setEncounter('A lone elf sits on a tree stump, playing a flute. A few harmless animals dot the area around the elf. Listening to the music gives the party bonuses in the next encounter.')
        break
        case 66: 
            setEncounter('A large, talking tree. The tree asks for assistance riding itself of a parasitic host and offers mushrooms that will shrink/grow the consumer.')
        break
        case 67:
            setEncounter('A dim-witted troll named Gnasher is attempting to save his pet boar named Snouts from being eaten by a large carnivorous dinosaur. If they help the troll save his pet he can lead them to one of the hidden locations in Chult.')
        break
        case 68: 
            setEncounter('You find a sleeping halfling with a fishing pole on his lap.')
        break
        case 69:
            setEncounter('You find a group of kobolds destroying the forest for pleasure.')
        break
        case 70: 
            setEncounter('You find a rich couple having a picnic.')
        break
        case 71:
            setEncounter('You come across a section of forest smelling of rancid flesh with a hundred plus kobold and goblin skeletons suspended from the branches.')
        break
        case 72: 
            setEncounter('You feel like something is moving, just beyond your vision. When you take a look behind you, you could swear that the terrain was a bit different. It looks almost like it was… rearranged.')
        break
        case 73:
            setEncounter('An ancient, rotted tree exudes an aura of nausea and paranoia. As you get closer, you can almost make out a discordant flute melody.')
        break
        case 74: 
            setEncounter('A single, vibrantly-colored flower among a patch of withered ones. It almost seems to perk up as you draw near.')
        break
        case 75:
            setEncounter('As the characters are crossing a streambed or valley, a flash flood bursts upon the area. Characters must make a DC12 Survival check to get to a safe location.')
        break
        case 76: 
            setEncounter('The party comes across an abandoned wagon in the jungle. It is full of rations and supplies.')
        break
        case 77:
            setEncounter('The party comes up to a Way Station run by some natives. They will trade for rations, food, and adventuring supplies.')
        break
        case 78: 
            setEncounter('A 15ft totem carved to look like a beholder followed by a rok and finally a purpleworm with a large crystal set into it’s mouth marks a cave mouth.')
        break
        case 79:
            setEncounter('The party enter an area of strange trees almost no leaves at all, perception check to see the stealthing thri-kreen have them look more stick insect than mantis).')
        break
        case 80: 
            setEncounter('While travelling through the jungle the party come across hundreds of holes 1 ft in diameter.')
        break
        case 81:
            setEncounter('On a raised stone dias covered in creeping vines sit 5 golden cubes stacked haphazardly the vines have not touched them.')
        break
        case 82: 
            setEncounter('You stumble across a group of smugglers arguing about which tree they buried there treasure under. I’t appears that they haven’t noticed you.')
        break
        case 83:
            setEncounter('As the party track through the forest, a slow hiss of a voice can be heard by the lead member “tuuuurrrnnnnn froooommmm thhheeee paattthhhhh”.')
        break
        case 84: 
            setEncounter('While crossing a dried river bed more and more mud gathers around the legs of the party reducing speed by 10 ft until a short rest.')
        break
        case 85:
            setEncounter('	A lone shack stands in a clearing. A humanoid wearing a brightly coloured mask stirs a bubbling pot. For some rare ingredients they’ll trade you for there potion.')
        break
        case 86: 
            setEncounter('The party come to a narrow gorge made from dusty red clay. Hunters painted with the vidid clay are ready to ambush a distracted party or animal.')
        break
        case 87:
            setEncounter('A small cluster of blue gems breaks the surface of a stone wall, trying to pry them out scatters the small swarm of sapphire scarabs.')
        break
        case 88: 
            setEncounter('A tribal statue stands tall and armed, but weathered all the stone smooth except its stone axe head that still holds a wicked edge.')
        break
        case 89:
            setEncounter('A cracked and erroded stone alter has been left to the jungles growth, creepers cover almost all of the blood stained stone.')
        break
        case 90: 
            setEncounter('The path suddenly become clearer, almost tended. Crude traps line the path.')
        break
        case 91:
            setEncounter('Painted arrows lead the way through the trees, at the dead end make a dex save to avoid the boulder trap.')
        break
        case 92: 
            setEncounter('A sweet melody follows the party, if seems a song bird wants something the party has.')
        break
        case 93:
            setEncounter('The humid air has taken its toll, the party should tend to their equipment before it rusts.')
        break
        case 94: 
            setEncounter('From the trees behind the party one of the members stumbles out clearly injured they point at their doppelganger “you have a imposter with you fools”.')
        break
        case 95:
            setEncounter('A scattering of golden coins and ritual tools litter the mouth of a temple.')
        break
        case 96: 
            setEncounter('The party comes across a long forgotten cache of weapons. Most of the mundane weapons have long rusted, but a single weapon lies at the bottom of the cache looks brand new. Maybe a magic item? Cursed?')
        break
        case 97:
            setEncounter('The party feels a pleasant cool breeze, which is a welcome moment in the intense heat of the jungle. If the characters spot it, the air is coming from a couple of curious Chwingas that are hidden nearby.')
        break
        case 98: 
            setEncounter('A stegosaurus is having a meal in the middle of the path. It has not seen the party, yet.')
        break
        case 99:
            setEncounter('A group of adventures have made camp, and if the party is kind, will invite them to camp with the group. They are experienced adventures who know of a nearby location in the jungle.')
        break
        case 100: 
            setEncounter('The party hears a mighty roar. Behind them, a Tyrannosaurus rex comes barreling towards them. They only have a few seconds to react before it reaches them.')
        break
    }
}
    return(
        <div className="flex flex-col mx-auto">
            <h1 className="text-center">Jungle Environment Generator</h1>
            <div className="mx-auto mt-5" onClick={generateRandomEffect}>
                <Button label={'Roll the dice!'}/>
            </div>
            <p className="my-5">{diceRoll} <br /><br /> {encounter}</p>
            <span className='text-center'>Entries gathered from DnDspeak.com: <a className="text-blue-400" href='https://www.dndspeak.com/2017/12/03/100-jungle-encounters/'>Here</a></span>
        </div>
    )
}