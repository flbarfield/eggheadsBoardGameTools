import Image from "next/image"
import dungeonDoor from '../../../../public/Images/dungeonDoor.jpg'
import { useState } from "react"
import Button from "@/Components/Button"

export default function DungeonDoors () {
    let [diceRoll, setDiceRoll] = useState('')
    let [door, setDoor] = useState('')

    function generateRandomDoor () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

    switch (diceRoll) {
        case 1: 
            setDoor('This wooden door has begun to rot away, leaving sizable holes in the center. Players can easily peer past the rotten wood and see what\'s on the other side.')
        break
        case 2: 
            setDoor('This stone door is open by a lever. When opening, the door parts in the center. The left section slides up into the ceiling, while the right section slides down into the floor.')
        break
        case 3:
            setDoor('This wide iron door revolves clockwise.')
        break
        case 4: 
            setDoor('This stone, circular door is covered with carvings of snakes. The only way to open it is to pull the circle out of its base, and slide it to the side.')
        break
        case 5:
            setDoor('To the left and right of this iron door are two statues of falcons. If the left falcon\'s head is pushed down, the door swings open. If the right is pushed down, the stone falcons come to life and attack. The door will then remain locked.')
        break
        case 6: 
            setDoor('There is a bronze hand reaching out from the door. The door opens if someone shakes the hand.')
        break
        case 7:
            setDoor('A view of a room you would be expecting can be seen through the glass panels in the door. This is only an illusion.')
        break
        case 8: 
            setDoor('The door is made of sheer black material, much like a veil. Using a light source against it makes it billow inwards.')
        break
        case 9:
            setDoor('A worked brass door that depicts a world map (the one they are in, another one, or a fictional one). The doorknob is in the center of the compass rose. In addition to the decorative points in the cardinal and inter-cardinal (ordinal) directions there is a slightly raised arrow/pointer that can be rotated and an audible click can be heard when it aligns with a point on the compass rose. (Feel free to have it be a 16 or even 32 wind compass rose if you prefer, or perhaps just the cardinal directions). Each position makes it so the door opens to a different room. The map could provide clues as to which direction unlocks which room. For example there could be a fiery desert to the east and when pointed east the door leads to a kitchen, a room trapped with fireballs, a room filled with fire elementals, etc and to the northwest shows a depiction of a mermaid in the ocean and the door opens to a room with a siren inside when the arrow is in the northwest position, etc.')
        break
        case 10: 
            setDoor('A large rusty iron door with no obvious locks or handle. Upon the the surface is a rusty bar of iron from which four heavy chains are tangled in a large knot. The end of each chain has a cap that fits over a small peg. There are 6 pegs and four are covered by the caps on the end of the chains. The door only unlocks when the chains are untangled, however once removing a cap a strong (magnetic? Magic?) force pulls the cap to the pegs. Strength or force of will allows adventures to decide which peg the cap goes to, but they cannot just have the chains free and be able to easily untangle the chains. (Inspired by those silly 3D tangle/knot apps)')
        break
        case 11:
            setDoor('A narrow stone door with an ear carved in it and words above that read “Tell Me A Secret To Proceed”. When a secret is whispered into the stone ear, a demonic entity hears the secret and knows the identity of the person who speaks it. However a successful strength check of a moderate DC will allow for door to be simply pushed open, no secret required.')
        break
        case 12: 
            setDoor('A beautiful glass barrier, etched with glorious floral designs depicting three specific flowers (example asters, orchids, and pansies) but has no obvious means to open. Speaking the names of the three different etched flowers causes the door to silently swing open. However it is still glass and is easily shattered, but doing so alerts the denizens of the dungeon of the adventurers location.')
        break
        case 13:
            setDoor('A wooden door with a golden sun emblazoned on it and below that a horizon line. No matter what is attempted the door can not be destroyed or opened unless it is roughly the time of day indicated by position of sun image to the horizon. You could have several doors like this and means to “suggest” short or long rests to the players.')
        break
        case 14: 
            setDoor('A silver door adorned in embossed circles. A clever bard or musician could picture musical notation staves among the the circles and with a bit of experimentation find the most melodic arrangement (or discordant!) and once that arrangement is played or sung, the door opens.')
        break
        case 15:
            setDoor('A frozen door. The door is literally frozen shut. PCs have to find a way to heat the edges of the door before it can be opened.')
        break
        case 16: 
            setDoor('A heavy stone door that opens by raising into the ceiling. There is a wench used to open the door, however it\'s extremely difficult to turn. In several rooms of the dungeon, in recesses in the wall there are large chains with hooks suspended over a deep pit. Throughout the dungeon there are 100 lbs stone statues that are meant to be hung on the chains. These are the counterweights for the door. Each one decreases the difficulty of turning the wench by 1.')
        break
        case 17:
            setDoor('Airlock doors. A set of doors on either side of a room. For one door to open the other door has to be closed.')
        break
        case 18: 
            setDoor('Fake door. It looks like a locked door, however it\'s actually just part of the wall.')
        break
        case 19:
            setDoor('Iris door made of metal plates that rotate into position to open or close the door. Door is operated by a lever that makes a hissing noise when the door is opening or closing.')
        break
        case 20: 
            setDoor('Light illusion door. In the dark the \'door\' appears to be a dimly glowing door, that behaves like a normal door. The presence of any bright light source overpowers the door, so that all that can be seen is a wall where the door should be. In bright light, the wall behaves just like a normal wall.')
        break
        case 21:
            setDoor('Metal grating door. The door is made of metal grating. The PCs or dungeon denizens could take advantage of this to shoot through the door or thrust spears through the door.')
        break
        case 22: 
            setDoor('Multi-lock door. The door has multiple locks on it. The keys for the door have to all be turned at the same time or the locks remain locked.')
        break
        case 23:
            setDoor('Multi-lock door. The door has multiple locks on it. The locks have to be (unlocked, picked) in the correct order. If one is done out of sequence all the other locks relock.')
        break
        case 24: 
            setDoor('The \'door\' is actually a bunch of vines or roots that block a doorway. The plant reacts to the presence of a specific magic item by moving it\'s (roots, vines) out of the way. A druid might be able to use speak with plants and convince the plant to move.')
        break
        case 25:
            setDoor('The \'door\' is actually a heavily armored living creature. PC have to learn the commands to make it move or find some other way to lure it away from the doorway. A druid might be able to use speak with animal and convince the creature to move.')
        break
        case 26: 
            setDoor('The \'door\' is a colony of insects that have locked themselves together to form a door. They will disperse if (the correct pheromones can be found and wafted in front of them / the PCs tap or click in the correct pattern). Attacking the \'door\' will release an attack pheromone, that will alert the rest of the colony.')
        break
        case 27:
            setDoor('The \'door\' is a (drawing, engraving, painting, relief) on the wall. It becomes a real door if (the correct command is given / it is touched by the correct magic talisman / a missing piece is drawn or inserted).')
        break
        case 28: 
            setDoor('The door is a giant metal cog set in a groove in the floor. A lever makes the cog rotate into the open or closed position.')
        break
        case 29:
            setDoor('The door is a giant stone disk set in a groove in the floor.')
        break
        case 30: 
            setDoor('The \'door\' is just a large boulder that the very strong creature pulls in front of its doorway.')
        break
        case 31:
            setDoor('The door is made of bones and has a skull set in the center of it. May be enchanted so that, if opened without the correct (key, talisman), the bones disentangle themselves to form several skeleton warriors.')
        break
        case 32: 
            setDoor('Tiny door. The door is only about 1ft by 1ft. Medium sized PCs with a Str score above 15 wont fit through the door. Also any medium creature attempting to go through the door will have to remove their armor and gear to fit through the doorway.')
        break
        case 33:
            setDoor('A door with a sentient stone face that will speak to adventuers and only open for: A story A song If they say please If they tell the door they want it to open If they swear fealty to Sir Stonedoor the Hinge Knight')
        break
        case 34: 
            setDoor('A door made of iron bars, which are electrified. A hidden lever opens the door.')
        break
        case 35:
            setDoor('A door made of glass with several bells hanging from both sides. Any intruders would definitely regret smashing it and alerting the dungeon monsters.')
        break
        case 36: 
            setDoor('A doorframe with crystals on its edges which create a constant wall of fire. A magic password can be used to deactivate it for a short period of time.')
        break
        case 37:
            setDoor('A circular iron door that opens in six segments.')
        break
        case 38: 
            setDoor('A magical door made from flowing water, but as solid as a real one, until it is \'unlocked\', then you just push thru and get soaked.')
        break
        case 39:
            setDoor('Half of a door suspended in space. Only one side exists in this reality. Trying to walk around the back reveals only air.')
        break
        case 40: 
            setDoor('A doorway is filled with odorless, opaque black smoke. There is no heat, nor apparent source of the smoke, rising from the bottom of the door frame, and dissipating at the top. It can just barely be seen through at the top as the smoke fades. Trying to pass through the smoke door causes fire damage and repels the creature. To dispel the smoke, an intruder must make enough air movement to completely part it. This effect does not last forever, and the smoke re-emerges after a few seconds.')
        break
        case 41:
            setDoor('A tattered curtain closes this doorway, originally a heavy high quality damask of burgundy and gold it it moth eaten and ragged at the bottom. Dust and moths flutter as you move it aside.')
        break
        case 42: 
            setDoor('The wooden door is unlocked but the swollen wood makes it jam into the doorway. It needs a strength check to open.')
        break
        case 43:
            setDoor('The door is locked the key is in the other side of the lock, there is a gap underneath the door sufficient to hook the key through once it is knocked out of the door.')
        break
        case 44: 
            setDoor('This circular ivory door is inlaid with silver filigree depicting the Moon Goddess and the phases of the moon. The door opens according to the phase from fully open on a new moon to fully closed on a full moon. A medium sized creature can fit through the door only from a half to new moon, small creatures down to a quarter moon.')
        break
        case 45:
            setDoor('This door is a standing coffin in a room packed to the rafters with standing coffins in various states of disrepair.')
        break
        case 46: 
            setDoor('A door which is shaped to match the dimensions of a certain creature, such as a kobold, goblin, or any dungeon creepy-crawlies. Opening the door may reveal a similarly shaped hallway which leads to the den or the hideout of the specific creature. Or, maybe the door is well hidden enough for the creature to ambush the party.')
        break
        case 47:
            setDoor('The double doors have a hinge at the center top of the door.')
        break
        case 48: 
            setDoor('The doors swing to the sides and up forming a triangular opening.')
        break
        case 49:
            setDoor('The door pivots around a column in the floor.')
        break
        case 50: 
            setDoor('Toll Door. There is a coin slot in the door. If a copper is inserted the door opens a crack, you can see whats on the other side, you might be able to shoot through the door, but you cant squeeze through the opening. If a silver is inserted into the door, the door open enough for small creatures to pass through. If a gold is inserted, the door opens enough for medium creatures to pass through the door. If a platinum is inserted, the door opens enough for a large creature to pass through.')
        break
        case 51:
            setDoor('The Unattached door. A wooden door lying of the floor of the dungeon. If the door is places on the correct wall of the dungeon it becomes a door allowing passage through the wall. There are several places where the door could be attached, some of them are traps.')
        break
        case 52: 
            setDoor('Door missing a door handle. The door handle can be found elsewhere in the dungeon. Depending on where the door handle is placed on the door determines where the door leads.')
        break
        case 53:
            setDoor('Riddle Door. The door has a series of pictograph combination locks. There is a riddle on the door that describes the correct combination. If the incorrect combination is entered it triggers various traps around the door.')
        break
        case 54: 
            setDoor('The psychic test door. The door has something written on it like \'you must face your fears.\' If a PC touches the door they suddenly enter a mental landscape filled with something they fear. If they defeat their fear they just appear on the opposite side of the door.')
        break
        case 55:
            setDoor('This heavy iron door is carved with Dwarvish runes. The door swings noiselessly on it\'s rusted hinges. Upon entering the room, the door closes behind and absolute silence descends. No noise can penetrate into the room from outside.')
        break
        case 56: 
            setDoor('An iron door. Etched into the iron is a figure of a human male brandishing a long sword. Next to it are etched the words: \'A peerless perloiner could never pick this lock, yet a wiley wizard scarce need to knock. A flick of the wrist and arcane from the tongue to magically trammel. Now the lock is undone!\' If Hold Person is cast on the figure on the door, the door will open.')
        break
        case 57:
            setDoor('A simple puzzle, good for new players. A door of white gold. In the upper left corner is a decorative sun. In the upper right, a swirling cloud dropping rain. From the center and arcing up towards the cloud are seven golden flower sculptures, each missing its gynoecium (center). About a foot below the flowers is small shelf. Upon it there is an emerald, a sapphire, a orange tourmaline, a ruby, a yellow topaz, an amethyst, and a blue chalcedony. Place the stones in the flowers, starting with the ruby in the bottom and go up in rainbow order (ROY G BIV) to unlock the door. The gems can be real or cut glass. The can be retrievable or not.')
        break
        case 58: 
            setDoor('A rusty metal door with a Dragon Chess board coming off it. There are stone pieces for the game set in starting formation. If someone moves a piece, the \'door\' will move one. Winning against the door opens it.')
        break
        case 59:
            setDoor('A simple wooden door. it opens as expected, but behind it is just more wall. The inside of the door is painted like a baroque rug. Successfully examining the door (Investigate DC 15) reveals small handholds on the sides of the frame and that bottom of the frame is attached to a hinges. The door can be pulled down. Now on the floor, the design is facing up. Opening the door now reveals stairs going down.')
        break
        case 60: 
            setDoor('A door made of thick leaded glass with a glue chip pattern resembling frost. Bringing a heat source near it and the \'frost\' melts away revealing a faint image of a hand. Placing a hand on the image, the door opens.')
        break
        case 61:
            setDoor('A curtain of polished steel chain links hangs from heavy steel rings mounted on a solid steel rod.')
        break
        case 62: 
            setDoor('Pay Wall: The door is in fact a mimic. The mimic can talk, and has a taste for coins and magic items instead of humanoid flesh. When he reveals himself to the PCs, he will offer them the service of opening for them if they give him a steep toll of gold. The PCs may have to haggle with him for a lower price. Magic items can also be used to lower the price; however, any magic item he eats is gone forever. PCs must pay the door to go through from the other side as well.')
        break
        case 63:
            setDoor('The door appears to be a wooden/iron gate, but actually, it is giant clockwork construct. There are many carvings and symbols on it but they are all a distraction. To open the door, you should blow air into the pipe on the door. A whistle is blown, many gears are heard turning, and the door slowly opens.')
        break
        case 64: 
            setDoor('The door is a writhing mass of flesh the constantly regenerates and attacks those who comes too close. Fire seemed to be effective in stunning it and stopping it\'s regeneration.')
        break
        case 65:
            setDoor('An empty doorway filled with a thick sheet of ice - can be melted or operated with a nearby lever which is connected to a series of pulleys and ropes.')
        break
        case 66: 
            setDoor('A revolving door that leads to the next chamber. However, if you don\'t exit the door straight through and follow it 360 degrees back to where you came from, you enter a hidden chamber instead.')
        break
        case 67:
            setDoor('This doorway seems to be blocked by rubble. In a few places near the top, a faint blue light shines through the fallen stones.')
        break
        case 68: 
            setDoor('A door that appears to be invisible and shows the room inside, but when the door is opened, its a completely different room.')
        break
        case 69:
            setDoor('A metallic door with no handle or keyhole, that melts when exposed to a source of heat.')
        break
        case 70: 
            setDoor('A mimic that has been cursed to take the form of a door, but does everything it can to inconvenience users.')
        break
        case 71:
            setDoor('A doorway that slowly absorbs the mass of anything it touches, growing ever larger. Feeding it enough material will allow a person to slip beneath the widening gap at its base.')
        break
        case 72: 
            setDoor('An unspeakably filthy door that opens of its own accord when thoroughly cleaned.')
        break
        case 73:
            setDoor('A humming door. It opens when someone harmonizes with it, and shatters violently if they\'re off-key.')
        break
        case 74: 
            setDoor('A heavy metal door with a small barred window. One side of the door is completely covered in large claw marks. Something tried to get through this door at one point and the door held.')
        break
        case 75:
            setDoor('A wooden door with extremely rusty hinges. Any attempt to open the door, without first oiling the hinges, will make a loud metallic screeching noise that will alert any nearby creatures.')
        break
        case 76: 
            setDoor('A door of tightly fitted oak planks, carved with images of acorns, and iron bands in the shape of a chain of stylized oak leaves.')
        break
        case 77:
            setDoor('A great, single, solid slab of marble, decorated with a frieze portraying victory by a king. It is cleverly designed to slide smoothly into a pocket in the wall.')
        break
        case 78: 
            setDoor('A very tall Iron and granite door that is magically enchanted to play a form of Tetris-like falling blocks game to unlock. The \'screen\' is made from inlays of Ivory, Lapis Lazuli, Gold, etc. There is even a \'High Score\' chart, which one is required to achieve before it opens.')
        break
        case 79:
            setDoor('This is an very large Adamantine vault door with 128 small alphanumeric dials made of polished brass and adamantine, with functional clockwork inlay and etching, clearly influenced by Modron aesthetics. A sufficiently random, arbitrary sequence of prime numbers in hexatridecimal is required to open the door. It is magically enchanted to use the spell \'SENDING\' up to 5 times per day to say cutting, vulgar, mean, and highly insulting things at you until you discover a sequence that will open it. According to records, it has never repeated an insult, and it seems almost malevolently intelligent, and once you try to open it will never forget and never cease messaging until you solve its puzzle, or die trying.')
        break
        case 80: 
            setDoor('A magnetic door that pulls any PC wearing metal armor towards it as well as any who are wielding metal weapons. It requires strength check to resist it\'s pull when within 10 feet of the door or to pass through it\'s frame. Once on the other side, it pushes against those wearing or wielding metal, such that they move 2x their speed away from the door until they are 10 feet away from the door. For fun, you could have this effect reverse randomly.')
        break
        case 81:
            setDoor('A technically enhanced door that has 4 lights (red, green, yellow, and blue) instead of a keyhole. The lights light up in a sequence that must be repeated accurately to gain entrance.')
        break
        case 82: 
            setDoor('A heavy wooden door with a hundred keyholes, only one of which will open with a key. The correct keyhole switches every time the would-be guest/s step more than 10 ft. away from it.')
        break
        case 83:
            setDoor('A wooden door inset with golden filigree that only opens if the party says \'please\'.')
        break
        case 84: 
            setDoor('A metal door stamped with a large lightning bolt across it\'s face. The door is electrified and gives a shock to any who tries to open it by physical touch.')
        break
        case 85:
            setDoor('An ornately carved door depicting a mighty oak upon a hill. The door has been crafted from ancient oak timbers with thick iron banding and a large bone handle.')
        break
        case 86: 
            setDoor('A small red metal door with numerous outward-facing dents, secured by a large padlock shaped like a heart.')
        break
        case 87:
            setDoor('A door with a handle that has four colors, each color goes to a different room.')
        break
        case 88: 
            setDoor('A completely smooth, cold, marble slab. Opens when exposed to body heat. Reveals a small room, once used as a refuge to hide from the undead.')
        break
        case 89:
            setDoor('A door made from a loose flap of Dragon Hide.')
        break
        case 90: 
            setDoor('A door made from a sawn shell-plate of a dragon-turtle. It is slightly translucent.')
        break
        case 91:
            setDoor('A door made of tempered glass with runes carved on the edges when looking through the door the players see a room deeper in the dungeon, however, once the party opens the door the room that is sequentially next is on the other side. Once on the other side if the party looks back through they see one of the rooms they previously passed through.')
        break
        case 92: 
            setDoor('A crude pile of half rotted wooden slabs banded with rusty straps. The door and overhead lintlepeice are painted with a magic rune that shimmers like opalecent rainbow.')
        break
        case 93:
            setDoor('A piece of chalk hangs by a string from the wall. A small note tied to the string reads \'Don\'t forget to knock.\'')
        break
        case 94: 
            setDoor('Three identical doors with ornate doorknobs adorn the wall. All three are locked, no keyholes visible. Turning 2 knobs at once causes the 3rd to unlock and swing open. If it is the correct door, it will stay open until closed. If it is the incorrect door, it will slam shut and the doors will randomly swap places.')
        break
        case 95:
            setDoor('A door with a mirrored surface. No handle is visible upon inspection. The door perfectly reflects what is in front of it. Only in complete darkness may the door be passed through. Extinguishing all light and removing the doors ability to reflect anything will cause the door to de-materialize. Any source of light will cause the door to reappear and block the path. Any form of Darkvision must be blocked as well, those who possess it must close their eyes, drop the spell, etc...')
        break
        case 96: 
            setDoor('A knobless wooden door, covered in small holes. 3/4 of the way up the door is a very ratty old dart board. Stuck randomly in the door are 3 darts. Scoring a bullseye will open the door, but only if thrown from a certain distance. Distance to be determined by the GM.')
        break
        case 97:
            setDoor('A perfectly normal, open door. Completely wide open. But it looks just like a door in your life that you have only ever seen closed. You know this door is open, but looking at it; you can\'t get passed the feeling that the door is, and always has been closed. You refuse to walk through it until someone performs the \'opening the door for you\' gesture. (Basically the dog not accepting that the sliding door is, in fact, open.)')
        break
        case 98: 
            setDoor('The door has a large keyhole in the center of it and on the other side of the room is a sentient stone head with a key as their nose. In order to open the door, the PCs must trick the head into telling a lie, when they do so the nose extends and unlocks the door.')
        break
        case 99:
            setDoor('A somewhat cracked looking wooden door. The door actually has a severe case of dry rot. If someone tries the handle, it just falls off the door. If anyone applies enough force to open the door, the door just crumbles to dust and splinters.')
        break
        case 100: 
            setDoor('The door is made from one solid piece of an unusual substance (bone, ceramic, chitin, obsidian, monster scale).')
        break
    }
}

    return (
        <div className="flex flex-col mx-14 gap-5 lg:basis-1/2 ">
            <h1 className="text-center">Dungeon Door Generator</h1>
            <Image src={dungeonDoor} className='rounded-md mx-auto'width={800} height={500} placeholder='blur' alt="Dungeon Door"/>
            <div className="mx-auto mt-5" onClick={generateRandomDoor}>
                <Button label={'Roll the dice!'}/>
            </div>
            <p>{diceRoll} <br /><br /> {door}</p>
            <span className='text-center mb-5'>Entries gathered from DnDspeak.com: <a className="text-blue-400" href='https://www.dndspeak.com/2021/03/18/100-interesting-dungeon-doors/'>Here</a></span>
        </div>
    )
}