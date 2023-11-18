import Button from "@/Components/Button"
import { useState } from "react"

export default function TavernEnv () {
    let [diceRoll, setDiceRoll] = useState('')
    let [encounter, setEncounter] = useState('')

    function generateRandomEffect () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

    switch (diceRoll) {
        case 1: 
            setEncounter('Tonight is the 10th annual Dragonfire Drinking contest! The person who can stomach the most Dragonfire Ale (very, VERY hot) will win the grand prize!')
        break
        case 2: 
            setEncounter('A group in the back corner of the tavern are arm wrestling.')
        break
        case 3:
            setEncounter('An elven bard is playing on stage tonight and asking for requests.')
        break
        case 4: 
            setEncounter('A travelling gnome from a far away land has made a deal with the tavern, and is selling exotic and strange drinks in a wooden stand they have set up in the corner of the room.')
        break
        case 5:
            setEncounter('It is the monthly wild magic surge brew drinking contest. If you can get the most down, you win. You may lose your hair and grow an extra arm but hey, the prize is 30 gp.')
        break
        case 6: 
            setEncounter('Local criminals hangout in this tavern. They try to sell drugs. One criminal pours red dust in the drinks of the guest while they are not watching.')
        break
        case 7:
            setEncounter('The tavern is know for gambling. One guy is on a big winsteak and pays drinks for everybody. Nobody knows yet that he plays with loaded dice.')
        break
        case 8: 
            setEncounter('Some tables are flipped over. In the middle of the room is a young orc girl on the ground surrounded by a few people. Her water just broke. She is about to receive twins. Nobody knows what to do.')
        break
        case 9:
            setEncounter('The owner of the tavern is an old lady. She owns about 5d20 cats. She cant serve you drinks or food right now because she has to feed her cats first.')
        break
        case 10: 
            setEncounter('There is a cow in the middle of the tavern. Everybody is wasted and nobody knows how the cow got there or who owns the cow.')
        break
        case 11:
            setEncounter('The ‘bartender’ is handing out free drinks and food. The owner is looked into the storage room.')
        break
        case 12: 
            setEncounter('A 10-year old girl is running the tavern. Everybody is afraid of her.')
        break
        case 13:
            setEncounter('A half-elf sitting alone seems to be muttering to themselves but is actually decribing the comings and goings of the tavern to a sentient weapon on their lap.')
        break
        case 14: 
            setEncounter('Two separate people are drinking alone. Neither seems at all suspicious on their own, but together they happen to be watching every single patron, as well as every entrance/exit.')
        break
        case 15:
            setEncounter('A soldier is dressed in plainclothes, watching a deal going on at another table. The disguise is not fooling anyone.')
        break
        case 16: 
            setEncounter('It’s the annual ‘Food Frenzy’. For two silver pieces (one of which goes to the house, the other to the pot), participants compete to eat the most meatballs in 10 minutes. There are six heats, and a then final. The winner of the gets the pot.')
        break
        case 17:
            setEncounter('It’s the annual Ferret-legging Endurance competition. In the sport of ferret-legging, competitors tie their trousers at the ankles before placing two ferrets inside and securely fastening their belts to prevent the ferrets from escaping. Each competitor then stands in front of the judges for as long as he can. Competitors cannot be drunk or drugged, nor can the ferrets be sedated. In addition, competitors are not allowed to wear underwear beneath their trousers which must allow the ferrets free access from one leg to the other and the ferrets must have a full set of teeth that must not have been filed or otherwise blunted. The winner is the person who lasts the longest.')
        break
        case 18: 
            setEncounter('In the annual Bonny Beard Competition, the most elaborately styled beard, as judged by the patrons, nets the winner a night of free drinks. The losers have to shave their beards off.')
        break
        case 19:
            setEncounter('The Annual Greased Piglet Game requires that a 15x15ft pen is set up in the tavern. Participants pay a small fee to compete to catch a lard greased piglet in the quickest time. The winner keeps the piglet.')
        break
        case 20: 
            setEncounter('A crossbow bolt crashes through the window and strikes a merchant who came to the city from far away.')
        break
        case 21:
            setEncounter('You hear an explosion from across the tavern. The blast knocked out a male gnome for 1d6 minutes. Once the gnome wakes up he starts madly raving, saying things like ‘I was so close!’ and ‘that was my last chance.’ and ‘it’s too late now.’')
        break
        case 22: 
            setEncounter('A ventriloquist starts preforming. The puppet looks very old and is wearing clothes that were quite fashionable about a century ago. The performance satirizes current events and culture and has the whole tavern laughing, but if you are observant for about half an hour, whenever the ventriloquist suggests wrapping up the performance the puppet dismisses his concerns. The show goes on for three hours until the puppet is finally satisfied, at which point the ventriloquist is extremely tired and looks terrified.')
        break
        case 23:
            setEncounter('It’s a only milk tavern, including milk derivatives.')
        break
        case 24: 
            setEncounter('Off in the corner a group is gathering around an intense card game. At the table are a wise cracking dwarf, an elf who invented ‘poker face’, and a burly half orc about to loss all him gold.')
        break
        case 25:
            setEncounter('An old, friendly sea-hag offers a free sample of stew, with more to come if the taster guesses the secret ingredient. The stew gives a positive magical boon on a DC15 CON save and a negative effect on a failure.')
        break
        case 26: 
            setEncounter('As the party walks in they hear a Bard who is recounting there recent adventures as if he was there for all of them. (This is good for a low renown party as it adds an air of mystery).')
        break
        case 27:
            setEncounter('An old man can be overheard telling a ragtag group of mixed races about a dungeon. After some discussion, and a handshake, he hands them a map.')
        break
        case 28: 
            setEncounter('An old man challenges you to a game of wizard’s chess. The wooden pieces are enchanted, gesturing and shouting as they fight, though you can’t make out what they say. It is fascinating to watch. The man promises who can win from him will win the chess set, though if you lose, it will not be easy to stop playing. He offers no further explanation. (If you lose, you become a chess piece, trapped in the game).')
        break
        case 29:
            setEncounter('A puritan priest comes in and berates the patrons for their behavior, preaching a path of holiness and purity. The old innkeep tells him ‘Yer aff yer heid, ya wee bawface!’ and proceeds to flash her boobs at him. The priest flees in horror, muttering protective chants.')
        break
        case 30: 
            setEncounter('It’s ‘Bear Night’. There are mounted bear heads on the wall, bear furs on the chairs and your drinks are served in bear-decorated goblets. After a while you begin to notice the bar is packed exclusively with hairy middleaged men, who are all acting rather familiar with each other…')
        break
        case 31:
            setEncounter('There’s a haggis eating competition. Winner gets free whisky till sunrise.')
        break
        case 32: 
            setEncounter('A scruffy looking man slips something into a drink before returning to the woman at his table.')
        break
        case 33:
            setEncounter('It’s a busy night and the bar is packed. Suddenly everyone turns around as several squealing greased pigs are released into the tavern. They have numbers painted on their backs. The staff begins chasing them to much hilarity of the patrons. After a while, they have caught the pigs numbered 1, 2 and 4 but there is no sign of number 3.')
        break
        case 34: 
            setEncounter('All the windows of the Inn slam open as the candle light dims, only to be undone a few moments later. Then a small girl stands and shouts her apologies for the disturbance.')
        break
        case 35:
            setEncounter('Knife throwing competition! D20+DEX: 1-10 miss the target. 10-14 outer ring. 14-18 middle ring. 18-19 inner ring. 20 bullseye. 3 throws each. PCs can play each other or NPCs for gold / rewards etc.')
        break
        case 36: 
            setEncounter('It’s a two for one special night and the tavern is packed, making easy targets for thieves and pickpockets.')
        break
        case 37:
            setEncounter('A drunk half-orc starts taunting the innkeeper, who’s cut him off.')
        break
        case 38: 
            setEncounter('The tavern has a black board on one of the walls, with the names of each person present, and current bets. It’s a deadpool, in which people bet on your death.')
        break
        case 39:
            setEncounter('There’s a discussion going on at the bar. One of the customers seems to be underage, and the bartender won’t get them a drink, unless he sees something that confirms they’re old enough to drink. The customer has a way to prove that, but made a bet with the other customers, giving 10 gp to each one that gets it right, and takes 10gp from each who gets it wrong.')
        break
        case 40: 
            setEncounter('A group of exquisitely dressed people walk into the tavern, judging people’s outfits, generally in a negative way.')
        break
        case 41:
            setEncounter('A portal opens in the middle of the tavern. A man wearing pajamas comes out of it, orders a drink, and leaves through the portal, that closes behind him. If the players ask anyone, they will just say he shows up sometimes.')
        break
        case 42: 
            setEncounter('The tavern’s owner runs into the tavern, saying they won the lottery, and will get everyone free drinks.')
        break
        case 43:
            setEncounter('A fight breaks out, between two big strong men. The bartender sighs, and gives each a free drink, separating them.')
        break
        case 44: 
            setEncounter('The customers are all looking over their shoulders, with small smiles on their faces, and seem ready to… do something. Suddenly, someone screams ‘FOOD FIGHT!’ and everyone starts throwing food at each other. In the end, the owner gets pissed, and makes everyone clean up the mess.')
        break
        case 45:
            setEncounter('The tavern is hosting a weekly poker tournament. If the players win, they get gold and gossip possibly leading to a quest.')
        break
        case 46: 
            setEncounter('A man in a dark trench coat is skulking in the back, selling contraband to anyone who asks.')
        break
        case 47:
            setEncounter('A man in a dark trench coat is skulking in the back, selling contraband to anyone who asks. However, he is part of a sting, and the local guard snatches up the buyers on their way out of the tavern.')
        break
        case 48: 
            setEncounter('	Someone playing the knife-fingers stabbing game accidentally stabs their own hand, possibly cutting off a finger.')
        break
        case 49:
            setEncounter('One of the patrons has gathered a sizable crowd with their exotic pet and its tricks.')
        break
        case 50: 
            setEncounter('The local militia captain busts down the door and grabs the innkeeper, placing him under arrest for an unknown reason.')
        break
        case 51:
            setEncounter('Two drunken wizards come to blows over a perceived slight. Parts of the tavern catch fire or are otherwise affected by magical effects.')
        break
        case 52: 
            setEncounter('A shadowy figure enters and orders a drink. The only problem is, there seem to be a mass of tentacles where feet should be.')
        break
        case 53:
            setEncounter('This tavern exists in multiple dimensions, it has at least 20 different doors which connect to the outside world, but as you guessed, different ones. The owner is a mad wizard with the longest and most unkempt beard youve ever seen. Over each of the entries, there is a sign to where it leads. One of the doors is barred and kept shut at all times, the sign reads: dont open, dead inside.')
        break
        case 54: 
            setEncounter('Tonight’s the local Battle of the Bards, where the prize pool includes a set of fine platinum strings.')
        break
        case 55:
            setEncounter('The first batch of beer from the halfling brewery in the next town is very lively. A bit too lively. A tide of hoppy foam bursts from the barrel and up into the bar, showing no signs of slowing down.')
        break
        case 56: 
            setEncounter('After a few drinks, you could swear all the patrons in the bar have the exact same face. You shake your head. Must be the wine.')
        break
        case 57:
            setEncounter('The barkeep here has a very literal approach to lock-ins. Sure, you can drink past closing time—as long as you didn’t want to leave again, ever.')
        break
        case 58: 
            setEncounter('The Tavern menu has a ‘Mystery Special’. When ordered it is a large stack of pancakes covered in various fruit that looks like a big smiling face. When eaten the player is reminded of their mother/father/paternal guardian.')
        break
        case 59:
            setEncounter('A female drow in common clothes and a big hat (to block the sun) walks into the tavern and an uncomfortable silence ensues. After it is clear that the drow doesn’t want any trouble the tavern slowly goes back to normal and the drow woman orders a drink and sits down with a wealthy half elf merchant.')
        break
        case 60: 
            setEncounter('A wrestling ring has been erected in the middle of the tavern. The current champion drinks nearby, and accepts all challengers.')
        break
        case 61:
            setEncounter('An old drow tells stories about his long life in the Underdark. He tells tales of other drow, kuo toa, mind flayers, flumphs, and even a purple worm he encountered.')
        break
        case 62: 
            setEncounter('The local beastmaster has arranged an animal show. He starts off with a raven, a giant frog, and a blood hawk. He finishes with a bulette, an owlbear, and a displacer beast. Each animal loves him like a family member.')
        break
        case 63:
            setEncounter('Part of the tavern is under construction after a battle or large fight. Builders are constantly moving planks of wood between tables and sometimes hitting patrons. Roll improvised weapon attacks vs players AC at various points in the visit.')
        break
        case 64: 
            setEncounter('The inn is flooded with people. Survivers of a battle not far off. Some seem to only have superficial wounds while others are not as lucky. Over the sounds of heavy breathing and mouning the party hears a voice ring out ‘CLERIC!! We need a cleric!’')
        break
        case 65:
            setEncounter('A health inspector busts in and attempts to shut the bar down due to health code violations.')
        break
        case 66: 
            setEncounter('Inside the Tavern the party finds about 60 people stuffed inside this small three room tavern all gathered around the bar. The tavern just recently hired a barmaid to work full time.')
        break
        case 67:
            setEncounter('After several drinks the party realizes that they’re the only non-monster creatures in the tavern.')
        break
        case 68: 
            setEncounter('After several minutes inside the tavern the party can hear a thunder storm rolling into the area. The whether gets increasing worse the longer they stay inside, and after 45 minutes a tree crashes into the side of the tavern.')
        break
        case 69:
            setEncounter('A religious group comes inside to preach about the sin of consuming alcohol.')
        break
        case 70: 
            setEncounter('The musicians plating inside the tavern draw in a large enough crowd that the that the bartenders have to start kicking people who are to drunk.')
        break
        case 71:
            setEncounter('After the party sits down for a drink or two, a group of guards come inside searching for several highway robbers. The robbers descriptions match those of the party members; so they’er handcuffed, dragged to prison, waiting for a trial.')
        break
        case 72: 
            setEncounter('The Half-Orc chef near a large fire pit offers the party a sample of the roasting boar he has over a spit.')
        break
        case 73:
            setEncounter('A Tabaxi hunter set up in the corner offers to sell the party wild pheasants and other game birds for the Tavern cook to make.')
        break
        case 74: 
            setEncounter('Two Warforged start fighting one another. Watch out for their partner the Gnome pickpocket. She’s the brains of the operation.')
        break
        case 75:
            setEncounter('A fire elemental moves into the hearth!')
        break
        case 76: 
            setEncounter('This is a thieve’s guild’s secret hideout in plain sight. Tonight, the corpses of the dead they left beneath the floorboards arise!')
        break
        case 77:
            setEncounter('The tavernkeep is a vampire. One of his servants accidentally begins pouring a bottle of his finest blood.')
        break
        case 78: 
            setEncounter('A group of overzealous paladins springs a sudden raid on the tavern, breaking casks and arresting people, slamming them into cage-carts they parked in the back.')
        break
        case 79:
            setEncounter('One of the patrons is a werewolf, and he begins to turn.')
        break
        case 80: 
            setEncounter('An ancient legend is (figuratively) brought to life by a traveling team of a bard and an illusion wizard.')
        break
        case 81:
            setEncounter('Once a month the neighboring warlords meet in this tavern to discuss… literature.')
        break
        case 82: 
            setEncounter('Tavern is holding bar tending classes once a week to train new staff as well as supply competent labor to the noble houses – top of the class gets to pick their assignment.')
        break
        case 83:
            setEncounter('Tavern acts as a clearinghouse for counterfeit currency. Next shipment arrives two days from today.')
        break
        case 84: 
            setEncounter('A polymorphed silver dragon walks in, orders a drink with no ice, and then he just frosts up his drink whenever. He only has one drink, and when he finishes his drink, you can see him switching from creature to creature , but only minorly.')
        break
        case 85:
            setEncounter('The tavern begins a ‘you break it, we hire a bounty hunter to make you pay’ policy today. No one wants to be the first person to break the rule.')
        break
        case 86: 
            setEncounter('That Elven barmaid, that’s been slapped on the ass one to many times, turns out to be a shapeshifter. And she’s just transformed into a raging ogre.')
        break
        case 87:
            setEncounter('A notorious criminal duo known as the Grimshade Brothers have arrived to the tavern to celebrate which is in the neighboring village of the city they just robbed. Their known for robbing banks and causing mayhem wherever they go.')
        break
        case 88: 
            setEncounter('Two goblins are on stage doing a juggling act. The juggling act involves flaming torches, hand axes, and vials of strange green goo. No one seems concerned.')
        break
        case 89:
            setEncounter('A love potion is accidentally slipped into one of your party’s drinks instead of the beautiful lady at the next table….')
        break
        case 90: 
            setEncounter('It is a roast night. Have the players take turns roasting either each other’s characters, or the DM.')
        break
        case 91:
            setEncounter('	A talent agent is holding auditions for the midwinter festival play. Bonus points for singing and dancing!')
        break
        case 92: 
            setEncounter('After 1d6 drinks gravity seems to hold no sway over the bar patrons. Everyone starts to float and the regular drinks keep drinking on the ceiling as if this is a normal occurrence.')
        break
        case 93:
            setEncounter('Book signing for the new release ‘Quest for Annihilation : How Adventuring is Destroying Our Moral Fabric’')
        break
        case 94: 
            setEncounter('The drunk mage in the corner is passed out and talking in his sleep. Roll for wild magic effect.')
        break
        case 95:
            setEncounter('The tavern is about to run out of ale. Your party is discretely asked to procure some more within 1d4 hours to avoid a riot.')
        break
        case 96: 
            setEncounter('A member of your party is mistaken for a local celebrity. People are constantly asking for autographs etc for the whole night.')
        break
        case 97:
            setEncounter('It’s the owners birthday! Reduced drink prices and free cake!')
        break
        case 98: 
            setEncounter('You stumble into the middle of a wake, complete with the body of the deceased on ice next to the bar. Bonus points if that’s the ice used in the drinks!')
        break
        case 99:
            setEncounter('The owner makes it very clear he don’t want no trouble in his bar. Will not serve adventurers if they don’t relinquish their weapons.')
        break
        case 100: 
            setEncounter('The barkeep leaves a single coin with a tiny dragon at your table, he says ‘be sure to spend him quick, he likes to travel’ the dragon is friendly but will not separate from the coin.')
        break
    }
}
    return(
        <div className="flex flex-col mx-auto">
            <h1 className="text-center">Tavern Encounter Generator</h1>
            <div className="mx-auto mt-5" onClick={generateRandomEffect}>
                <Button label={'Roll the dice!'}/>
            </div>
            <p className="my-5">{diceRoll} <br /><br /> {encounter}</p>
            <span className='text-center'>Entries gathered from DnDspeak.com: <a className="text-blue-400" href='https://www.dndspeak.com/2018/02/10/100-tavern-encounters/'>Here</a></span>
        </div>
    )
}