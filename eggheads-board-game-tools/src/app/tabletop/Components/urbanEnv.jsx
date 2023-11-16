import Button from "@/Components/Button"
import { useState } from "react"
import Link from "next/link"

export default function UrbanEnv () {
    let [diceRoll, setDiceRoll] = useState('')
    let [encounter, setEncounter] = useState('')

    function generateRandomEffect () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

    switch (diceRoll) {
        case 1: 
            setEncounter('A group of miners are protesting outside a noble\'s estate over poor work conditions. They are all covered in coal dust, holding signs that say \'NO ORE NO MORE\'.')
        break
        case 2: 
            setEncounter('A noble invites the players to a house party. The noble, a female Dwarf named Bronsyl, wants the party to pretend they are the noble\'s friends to impress the other nobles at the party.')
        break
        case 3:
            setEncounter('An older gentleman is yelling at his young apprentice for making a mistake. The older man walks away angrily, while the young apprentice, a male Half-Elf named Sylzaren, is left standing there distraught.')
        break
        case 4: 
            setEncounter('You see the city guards raid a store. Guards preventing people from coming close say that it\'s a front for illegal activities. Rumors are that the owners ticked off the wrong person, forgot to pay protection money, and the guards are corrupt.')
        break
        case 5:
            setEncounter('A child with an obvious injury begging for money pleads to the party for money. Later that day the party sees the same kid running around playing tag.')
        break
        case 6: 
            setEncounter('A terrified ex-Warlock begs the party for help, their old patron sends shadow mastiffs after them every night to kill them. They have not slept in days. Killing the hounds doesn\'t stop them coming back the next night.')
        break
        case 7:
            setEncounter('Street sign posts keep moving about in the night, causing confusion. Locals thought it was kids messing around but then 3 people were found hanged from sign posts in one night. Each victim had a compass on their person.')
        break
        case 8: 
            setEncounter('People keep seeing the same thing out of the corner of their eye. A hideous naked old woman with putrid wounds stands watching until looked at directly when she disappears. only one person sees her at a time.')
        break
        case 9:
            setEncounter('A wealthy merchant offers to pay one of the PC to be the target of a special spell then get them selves arrested so that they can pass the spell effects to another prisoner. The merchant says they will also pay whatever the bail is, but will actually only pay up to 10gp.')
        break
        case 10: 
            setEncounter('A local alchemist shop has caught fire! There is panic in the streets! Water could make the chemical blaze worse. Someone help!')
        break
        case 11:
            setEncounter('A trinket shop has been ransacked and the PCs know the individual that did it (somebody they like). This individual was being mind controlled, and they were caught specifically stealing an ancient censer linked to a forgotten cult.')
        break
        case 12: 
            setEncounter('As the group walks down the street, they see a Goblin arguing with three guards. Apparently, while apprehending a criminal, the guards heavily damaged the goblins market stand and he demands reparation.')
        break
        case 13:
            setEncounter('On this street corner, a zealot follower of Helm( or insert god who had bad relations with Orc gods) tries to whip up a mob into a frenzy. Their goal is to lead this mob into the Foreign Quarter and kill any Orc they find. A small force of Guards tries to deescalate the situation.')
        break
        case 14: 
            setEncounter('Three well dressed young men are bullying an old beggar sitting by an alleyway. They kicked his begging bowl over and insult him. If the players decide to step in, the three will begrudgingly stop. They all wear the symbol of a rather influential House.')
        break
        case 15:
            setEncounter('Two philosophers are having a debate by a street corner. They loudly discuss what does or doesn\'t constitute a \'Sandwich\'. As the group walks by, the older of the two waves you over and asks your opinions on the matter.')
        break
        case 16: 
            setEncounter('A totally drunk half-orc tries to get on his wagon and drive away. His Halfling friend tries to stop him, to no avail.')
        break
        case 17:
            setEncounter('A rather awkward young man, who looks like he hasn\'t slept in days, approaches a single character. He asks them to kill him, but wants to be taken unaware. If the player doesn\'t want to do that, he will pester them for the time they spent in the city, stalking them.')
        break
        case 18: 
            setEncounter('Ricardo, a human Bard, is trying to woe Francesca, the leader of the Fighters Guild. Two things are working against Ricardo though: Francesca already has a secret fiancé and Ricardo isn\'t as good of a bard as he thinks.')
        break
        case 19:
            setEncounter('A Tiefling merchant selling potions out of a travelling wagon. When asked about the origin of the potions, only vague answers are given. Rouges with ties to the local Thieves Guild might know them.')
        break
        case 20: 
            setEncounter('Some young men have stolen a large keg of what they think is ale. They are pushing it laboriously up a steep hill, joking and grunting from the effort. A few minutes later a frantic alchemist can be seen running around asking if anyone has seen a barrel of Alchemists Fire that has disappeared.')
        break
        case 21:
            setEncounter('A golem is trudging in a treadmill. Suddenly, the mill comes off its axle. The mill and the golem propelling it, shoot forwards wobbling into the town and picking up speed.')
        break
        case 22: 
            setEncounter('A pair of wagon drivers are preparing to race down the main street of the town. The street has been mostly cleared, although clearly by local gangs rather than any legitimate authority. There is a large amount of betting going on about who is going to win.')
        break
        case 23:
            setEncounter('A local ditch digger found an inanimate Shield Guardian buried in rubbish in a sewer out spill. The Guardian has a distinctive motif on their shield, chest and helmet. The ditch digger is offering a reward to anyone that finds the device that controls the Guardian.')
        break
        case 24: 
            setEncounter('While walking down the street, the adventurers hear a large crash then yelling coming from a nearby shop. Upon further investigation, they discover a woman\'s child had damaged expensive goods in the shop and the merchant won\'t let them leave until the mother pays up.')
        break
        case 25:
            setEncounter('You\'ve arrived in town for the annual harvest festival. Pie eating contests, catching greased pigs, and other fair activities are happening all around you.')
        break
        case 26: 
            setEncounter('A young nobleman is trying to beat his drinking habit. He wants you to stay with him and not let him drink.')
        break
        case 27:
            setEncounter('A boy hoping to impress a girl begs you to pretend to harass her and then pretend to be driven off when he intervenes.')
        break
        case 28: 
            setEncounter('Two competing chefs want an impartial judge to decide whose creation is more delicious.')
        break
        case 29:
            setEncounter('You have apparently entered the foreign quarter, as the background chatter becomes unintelligible and the pedestrians more exotic. Some kids in the street lose control of the ball they were playing with and upset a board game two elderly gentlemen are sitting around. You don\'t understand what the men are screaming about, but it looks like the kids are learning some new words as well.')
        break
        case 30: 
            setEncounter('The beasts of burden (can be horses, griffins, drakes, whatever) pulling a carriage have gotten spooked or agitated by nothing in particular, and the driver can\'t get them back under control.')
        break
        case 31:
            setEncounter('A crier, news board or booksellers stall proudly touts the newest tract in an ongoing pamphlet war between two mages which is clearly centered more around a mutual personal grudge than whatever arcane theory they\'re arguing over.')
        break
        case 32: 
            setEncounter('Two lovebirds with disapproving parents meet in secret. They could be separated by social class, different races, or feuding families.')
        break
        case 33:
            setEncounter('A religious party is preaching about a god you are not familiar with. It quickly becomes apparent to people proficient with religion he is only preaching nonsense, but many people are paying attention to him.')
        break
        case 34: 
            setEncounter('A beehive falls from a building, and the bees begin to harrass a passing noble. The noble seems to believe your party has something to do with the falling beehive.')
        break
        case 35:
            setEncounter('There is a project to demolish a condemned building, however the plan fell thru. The demolish crew is now wondering how they can remove the building (safely).')
        break
        case 36: 
            setEncounter('A sewer grate bursts open, and 1d6+3 swarms of rats burst out of it. Underneath, a druid is leading them to overrun a business that has been rumored to pollute the nearby river. These rumors\' however turn out to be false.')
        break
        case 37:
            setEncounter('A protest is taking place after it was revealed the local priest had a mistress. The priest is attempting to skip town and may attempt to bribe to party for assistances.')
        break
        case 38: 
            setEncounter('An apple seller\'s cart has broken down in front of a tanner\'s shop. The tanner is not happy about it and has started crushing apples.')
        break
        case 39:
            setEncounter('Someone is stealing the coins from a well or fountain that people toss coins in for good luck.')
        break
        case 40: 
            setEncounter('A group of monks are showing off fancy fighting moves but one of them looks like they\'re making things up and is looking around nervously. This person is trying to show someone special they\'ve changed. They haven\'t.')
        break
        case 41:
            setEncounter('After the players walk by an open door in the city, on an abandoned street, a player with a Very high passive perception barely sees a tentacles reach out and close the door quietly after they pass. It\'s the house of a former Warlock and after she died the house has remained sentient and... tentacled. Quite friendly, if shy and full of disturbing stories.')
        break
        case 42: 
            setEncounter('One of the players trip on a loose cobble. Underneath it there is a strange coin and as soon as they pick it up they begin to hear children laughing, very clearly as if they were close, but there is no one here. They cannot discard the coin any way except by making someone else trip over it.')
        break
        case 43:
            setEncounter('As the players pass by a furniture store a small table hurriedly runs out and walks quietly behind the party. The store owner gives chase and accuses the PCs of theft and the city guard seems in agreement. Turns out there is a faery-base mage/warlock/bard with an Animate Object spell who has been having a delirious amount of fun doing this to innocent people all over town.')
        break
        case 44: 
            setEncounter('Some obvious mobsters want to throw a surprise party for their Boss, but there is ZERO chance this won\'t lead to a surprising amount of bloodshed so they need to hire some DURABLE people to handle the first few rounds after yelling SURPRISE!')
        break
        case 45:
            setEncounter('City Guard is inspecting the feet of anyone who comes into town, assisted by a terrified looking academic. On the shoes of the lowest INT player is a Bookworm, that literally eats magical books. This player is arrested by a previously unknown Library Police and made to stand trial for their crimes against education and learning. ONE PC may act as their barrister. One unbelievably nerdy trial later and the fine turns out to be something like 42cp, a fixed price and obviously a nerdy inside joke of some sort.')
        break
        case 46: 
            setEncounter('Everywhere the party\'s toughest character goes in town, they seem to always accidentally be standing under or next to the image of a Mind Flayer. Even when it seems like they aren\'t, it turns out they\'re in the Mind Flayer section, or the Tentacle Room, or in the Tasty Brain bleachers. There is no adventure here, just creepy coincidence you can lean on to make this PC super nervous.')
        break
        case 47:
            setEncounter('A PC eats a rotten bit of cheese and as a direct result is visited that night be three ghosts. Unlike other stories, they ghosts just want you to help them relive rowdy and drunken days of their misspent youth, while pretending to be giving you \'Moral Lessons\'. \'yes yes *Ahem* DON\'T spike the punch with *hick* Potion of Delusion and give some to that snotty little Suzanne Winterspoon. While SUPER deserved and funny as hell, it is a thing I encourage all of you to AVOID. *hick* For the sake of you\'re ahh... souls? yeah. Souls.\' While perhaps amusing the real gift here is you now know some CRAZY random facts about people who are now important and highly placed in town.')
        break
        case 48: 
            setEncounter('Someone has been stealing manhole covers and then using Silent Image to make them LOOK like they are there and then mugging people who fall down into the sewer.')
        break
        case 49:
            setEncounter('The PC with the most languages notices that the laundry drying on twine in the alley spells a secret message asking for help, when looked at a particular way. Turns out an academic has been kidnapped and used as a laundress, but was previously a linguist and used her skill to try and find help.')
        break
        case 50: 
            setEncounter('A small group of children within sight steal a small pet.')
        break
        case 51:
            setEncounter('A market vendor forces a large lizard with a hood over its head into a PCs hands, and says, \'Finally, take this thing and deliver it to the tower. It might be dangerous so don\'t take off the hood.\' Before he disappears from sight.')
        break
        case 52: 
            setEncounter('A street vendor is selling painted rocks, trying to pass them off as magical items. (Dragon Scales, Basilisk Eyes, Stone-Giant Hearts/ Finger Nails, etc).')
        break
        case 53:
            setEncounter('The ball from a Ball-and-Stick game goes into the backyard of a house with a scary animal. It is vitally important to get the ball back (secretly if possible).')
        break
        case 54: 
            setEncounter('The Rat Catcher\'s wagon crashes into the Dog and Cat Catcher\'s wagon.')
        break
        case 55:
            setEncounter('A caricature artist is overly insistent that you let them draw you.')
        break
        case 56: 
            setEncounter('A guy/gal is bawling after a particularly devastating breakup.')
        break
        case 57:
            setEncounter('A young lad/lass Squire is frantically looking for something they lost on their way back to their Knight.')
        break
        case 58: 
            setEncounter('A company has organized a giant scavenger hunt throughout the city. Anyone can participate.')
        break
        case 59:
            setEncounter('A man barges in to the tavern the party is staying at, shouting and accusing the owner of stealing his secret recipe.')
        break
        case 60: 
            setEncounter('A messenger delivering post has crashed his cart after having one too many ales and his letters are scattered al over the road.')
        break
        case 61:
            setEncounter('A local bookshop is hosting a signing by a famous author, there are queues around the block!')
        break
        case 62: 
            setEncounter('Bells in the town temple have started ringing in a totally different pattern from normal...')
        break
        case 63:
            setEncounter('Travelling merchants are racing their pigs around the streets before they take them to market!')
        break
        case 64: 
            setEncounter('Someone has been secretly delivering parcels of coin to select houses in a neighborhood. No-one is sure what the recipient criteria is or who is sending the money but it is causing a lot of animosity between neighbors.')
        break
        case 65:
            setEncounter('The central square is hosting a public execution of a corrupt official, deaf to the pleas of his wife that he is innocent.')
        break
        case 66: 
            setEncounter('Gwyneth, the Dwarvish single mother, is putting her laundry on a line.')
        break
        case 67:
            setEncounter('Two twin lizardfolk children are craftily robbing a storefront.')
        break
        case 68: 
            setEncounter('The party watches as a shopkeeper shoos a giant rat away from his trash bin.')
        break
        case 69:
            setEncounter('A herd of cats have overrun the armory. The guard captain demands no harm come to them, but wishes them removed, concerned they might hurt themselves on the arms inside or an annoyed watchman.')
        break
        case 70: 
            setEncounter('The local library adjoins the local alchemist, who is also head librarian. It has exploded again and the Alchemist/librarian is offering a fare wage to help restore or add to it. Knowledge and history checks to rewrite books, checks for rebuilding the building and shelves etc.')
        break
        case 71:
            setEncounter('The sewers have finally and violently backed up, after the mayor has refused to pay for them to be fixed, to the dismay of the laborer\'s offering a fair price.')
        break
        case 72: 
            setEncounter('A trio of goblins on each others shoulders, poorly disguised as a dragonborn (with papier-mâché head and tail) are attempting sell a variety of pies for 1 silver each. The pies are quite good and the goblins intend no harm, they however believe they are getting a great deal and will refuse to disclose the contents of the pies, quoting it\'s a trade secret.')
        break
        case 73:
            setEncounter('The city is inhabited only by women, older people and children. All adult men are away in the war of kingdoms/counties/landowners and thus women are welcoming and in need of jobs of any kind (light to hard, dull to delicate/provocative) around the household, which they cannot perform.')
        break
        case 74: 
            setEncounter('Someone is taking a bath in the public fountain... they\'re not taking coins, just bathing.')
        break
        case 75:
            setEncounter('A shop keep kicks a disgruntled young man out, saying \'I don\'t read cards! How many times do I have to tell you? Figure it out yourself!\' If the party intends on going into that shop (probably an apothecary) he will ask if he can sneak in with everyone.')
        break
        case 76: 
            setEncounter('A group of children laughing and playing, some engaged in a game of knucklebones, others cheering them on, still others singing. When the butcher comes rattling through, all of them sober up slowly but suddenly, and they switch to nursery rhymes, one of which is Sing a Song o\' Sixpence.')
        break
        case 77:
            setEncounter('A well-dressed young man spontaneously combusts in the middle of the road. No one else seems to notice.')
        break
        case 78: 
            setEncounter('A small crowd gathers in the town square as a young man serenades a maiden with a band of troubadours. As he professes his love and proposes, the maiden takes a bard\'s lute and smacks him upside the head as she leaves.')
        break
        case 79:
            setEncounter('A cart wheel flies off and the embarrassed owner needs help getting it back on, as well as directions to the market.')
        break
        case 80: 
            setEncounter('A noble\'s pet liger has climbed into a tree and appears to be stuck and in need of aid.')
        break
        case 81:
            setEncounter('Two local inventors are loudly arguing on a main thoroughfare, blocking your path. They are each accusing each other of being a fraud.')
        break
        case 82: 
            setEncounter('A group of bards posts a flyer for an upcoming theatrical production that is highly critical of the local political powers. You are able to grab one before you see local guards tearing down the flyers and burning them.')
        break
        case 83:
            setEncounter('A group of children sing an ancient prophecy, which has been slightly modified over the years. Ex. “When the stone bird has fled we\'ll get fed (actually prophecy ends in we\'ll all end up dead)”.')
        break
        case 84: 
            setEncounter('A person looking up from the sewer grates tells the players he\'ll exchange secrets.')
        break
        case 85:
            setEncounter('Your PCs are approached by a hooded and cloaked figure that tries to recruit them to join the local cult. The PCs start to unravel a larger plot where the cult has taken over the local government.')
        break
        case 86: 
            setEncounter('A wizard approaches the party and says he\'s on the verge of a great breakthrough that will make him rich but he needs some reagents from the herbalist shop. Unfortunately they cut off his line of credit and he cant afford to buy it himself. He implores the party to buy the supplies for him.')
        break
        case 87:
            setEncounter('A wealthy debutante has decided to leave her wealth behind and begin adventuring, and throws one last soiree before giving away her wealth. The PCs are invited.')
        break
        case 88: 
            setEncounter('A small boy is caught trying to pickpocket the pc\'s. When he is caught her tearfully tells you that it\'s for the veteran that was hurt in the war.')
        break
        case 89:
            setEncounter('There is an incredibly long queue for what seems to be an ordinary building, no sign or anything. Upon asking the people in the line, they simply shrug their shoulders and then go back to waiting. Only way to find out is to queue up.')
        break
        case 90: 
            setEncounter('While walking around the city, the party stumbles upon a small public speech being given by a candidate seeking a position on the city council. It is very clearly three goblins in a trench coat, but no one in the crowd seems to notice.')
        break
        case 91:
            setEncounter('	The local Arcane Academy Campus is in turmoil as students riot after their team lost The Big Game. The city has mobilized its guards and the Arcane Academy has raised a protective barrier.')
        break
        case 92: 
            setEncounter('The Party passes by a funeral procession, but can clearly hear thumping from inside the closed casket and a muffled voice calling out.')
        break
        case 93:
            setEncounter('Two Bards are in the middle of a poetic battle on the street and are unknowingly riling of a crowd and splitting them into factions ready to fight for their bard.')
        break
        case 94: 
            setEncounter('The Party is walking down the street when a seemingly normal man sneezes. The man immediately loses his concentration and polymorphs into a dragon in the middle of the street.')
        break
        case 95:
            setEncounter('Town crier calling out that \'Bite-Hunting\' is now illegal. Upon further inquiry they are informed that there has been a growing trend in the city of people seeking out to be infected with Lycanthropy.')
        break
        case 96: 
            setEncounter('Baker calling out, claiming to have the \'most delicious bread in the realm\', but is clearly selling rocks. Customers don\'t seem to care and are paying the high price for it.')
        break
        case 97:
            setEncounter('There is a game of (sport) going on in one of the cul-de-sacs as the Party passes by. The Party hears someone call out to them, they need extra players for each side.')
        break
        case 98: 
            setEncounter('The Party sees a manhole cover flying 20ft into the air and crash down on a stall on the street. People flee in a panic as an ordinary-looking rat emerges from the hole.')
        break
        case 99:
            setEncounter('The city is suddenly filled with a loud sound akin to tornado alarm. Sirens blare and bounce off the stone walls of the city, but the citizens seem to go about their business undisturbed.')
        break
        case 100: 
            setEncounter('A necromancer is attempting to offer undead labor and has gotten into a legal dispute regarding if zombies need time off or not.')
        break
    }
}
    return(
        <div className="flex flex-col mx-auto">
            <h1>Urban Environment Generator</h1>
            <div className="mx-auto mt-5" onClick={generateRandomEffect}>
                <Button label={'Roll the dice!'}/>
            </div>
            <p className="my-5">{diceRoll} <br /><br /> {encounter}</p>
            <span>Entries gathered from DnDspeak.com: <Link href='https://www.dndspeak.com/2021/07/14/100-non-combat-urban-encounters/#google_vignette'>Here</Link></span>
        </div>
    )
}