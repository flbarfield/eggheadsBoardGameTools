import Button from "@/Components/Button"
import { useState } from "react"

export default function ForestEnv () {
    let [diceRoll, setDiceRoll] = useState('')
    let [encounter, setEncounter] = useState('')

    function generateRandomEffect () {
        let diceRoll = (Math.floor(Math.random() * 100))

        setDiceRoll(`Your dice roll was: ${diceRoll}`)

    switch (diceRoll) {
        case 1: 
            setEncounter('When your players awake in the morning after a restless night of camping, they discover footprints all around them in the dirt. Their backpacks have been looked through, but nothing has been stolen. This happens a few more nights in a row.')
        break
        case 2: 
            setEncounter('Someone notices eyes glittering in the dark at them. Anyone with darkvision can make out an unidentifiable shape. When light is shone towards them there is nothing there.')
        break
        case 3:
            setEncounter('You find a corpse with it\'s eyes and mouth filled with dirt, still grasping the axe that\'s embedded in the nearest tree.')
        break
        case 4: 
            setEncounter('You find a massive circle of felled trees, in the center of which is a malnourished and wild-eyed greataxe wielding orc, yelling about fending off an endless hoard of regrowing enemies.')
        break
        case 5:
            setEncounter('A deep fog rolls in faster and thicker than one would think is natural. All rolls related to navigation or investigation based on the terrain have disadvantage.')
        break
        case 6: 
            setEncounter('The party is set upon by a group of bandits, ferociously attacking them with abandon. Suspiciously, they do not yell or even speak. DC 10 to notice their mouths have been sewn shut and their eyes look wild with panic, as if their actions are not their own.')
        break
        case 7:
            setEncounter('A lone child that refuses to talk but will hold one of the adventures hands, and theirs alone (normally while sucking her thumb). If the child feels threatened, she will run away from the party and they won\'t be able to find her again. There are no tracks. (Optional: If they look after her for a night, she will leave them a gift.)')
        break
        case 8: 
            setEncounter('A dog with a fancy collar appears to lead the party to an area of disturbed dirt and begins to dig it up. Upon closer inspection the party finds the body of a small girl holding a leash that looks quiet similar to the dogs collar. When they turn to examine the dog, he is nowhere to be found.')
        break
        case 9:
            setEncounter('Cats appear to be watching the party from the trees. Dozens upon dozens of them. Whenever a member of the party approaches them they run away and can\'t be found (may serve as lookouts for a darker force).')
        break
        case 10: 
            setEncounter('While camped for the night, the party\'s extinguished campfire relights to a full blaze. The second the party member on watch looks at the fire, it extinguishes completely. The only sign that the mysterious fire ever existed is a faint smell of burning twigs.')
        break
        case 11:
            setEncounter('Deep in the forest, approaching dusk, the party finds a logging camp. Several small cabins and a mill. Smoke curls lazily up from one or two of the chimneys. There is nobody in the camp. There are plates of food on tables, still warm. Clothes on a washing line are still damp. Only the doors into the mill are locked. As night falls, a fierce storm begins to build, and from the mill the saws can be heard rasping back and forth, though they don\'t sound quite right…')
        break
        case 12: 
            setEncounter('The party finds a scraggly, disheveled child apparently lost in the forest. It asks the party for help, should the party agree, they come under the effects of a curse until they defeat the child (Actually a restless Evil) who flees, attempting to lead them into a hazard deeper in the forest.')
        break
        case 13:
            setEncounter('Small dolls sit in a tree the players pass by. They are wearing crude clothes, and don sticks of specific lengths. Poor perception rolls feel anonymous sets of eyes gazing at you, while good perception rolls can discover them. These dolls, if ignored, will appear again in a different tree a few feet up, requiring lower rolls as they subtly make themselves more obvious. Upon the first investigation, you find that the dolls are poorly stitched together, with leaves still poking out of the burlap fabric, and expressionless faces with small stones as eyes. However, with each successive perception roll as the party walks away, the dolls become slightly more realistic. On additional rolls their rock-eyes appear to follow you (Mona Lisa style), their skin becomes taut and leathery, and their clothes become more realistic. Repeat as necessary, with the players unable to leave a small section of the forest (due to magical barriers, or because walking straight forward keeps leading them back to the same spots.) Eventually, all of the dolls should clearly resemble everyone in the party. It is important that the dolls never appear to move on their own, and in every way act as though an inanimate object would. They can be destroyed, ripped, held, carried, etc. There should also be at least 4 separate perception checks on the dolls IMO. It really draws the frustration out, and that is an expression of fear. The final perception check on the dolls will have the dolls be very hard to find, except by one person, who you can choose beforehand. No matter how well other party members roll, the person you choose will feel a tingling on the back of their neck, and turn around to find the dolls in a high branch. They are nearly perfect mimics of the party, and are standing around the doll that looks like the person who discovered them, whose doll has a thick piece of string around their neck. The person feels paralyzed as the can only just watch due to fear, as time slows around them. The doll-party gazes directly into the player characters real eyes, and gently… pushes. For extra effect, have a pencil ready to snap upon this moment. Sometimes the cheesy sound effect speaks volumes more than words. The party will usually react at this point, let them destroy the dolls. It\'s cathartic. If you want to continue the fear though, every one in a while later on, let them see a flicker of movement out of the corner of their eyes. Bonus points if you pick a grunge or mistake to build this off of. Like if a cleric forgets to heal a fighter and the fighter calls, have one of them be the one that pushes the other off, as though the cleric purposely didn\'t heal, or the fighter was trying to get revenge. If the party has a rogue, have their doll slip a stick in the back of the hanged on. There\'s a ton of customization you can do, and if done well, you can seed a lot of discord between two player characters and build their relationship to be really dynamic. Happy Creepy Crawlies.')
        break
        case 14: 
            setEncounter('After spending more and more time in the forest, the players start to notice the trees have grown faces. It\'s unknown if this is just them going crazy, or if it\'s real.')
        break
        case 15:
            setEncounter('As the party sets down for camp they hear a muttering in the shrubs and then creeping out from it they behold a Gibbering Mouther, each eye and mouth seemingly drawn from a different creature, without repetition. Just before their skin and brains begin to itch, each party member realizes they do not recognize any of their kind yet among its monstrous morphology…')
        break
        case 16: 
            setEncounter('As the night lengthens, from the shadows surrounding the campfire, come the light chiming sounds of children\'s laughter. The laughter gets louder as the flames fall to coals.')
        break
        case 17:
            setEncounter('The wood you gathered for the night is not enough to keep the flames high all night and the sounds are deeper from the dark woods.')
        break
        case 18: 
            setEncounter('A sweet glade, dappled with sunlight and shadows provide a relief from the previous heat and humidity. A gentle brook flows along one edge and gurgled merrily. Several fruit trees sit in the center and lay heavily with ripe fruits. Flowers fragrant the air and a gentle breeze cool the glen, sweetening the air and cooling the weary traveler. An old body hangs from a limb of the tree, but upon inspection it appears obvious they could have stood and not strangled.')
        break
        case 19:
            setEncounter('You come across an alter, freshly used and dripping with blood. Meat has been portioned and set out for something.')
        break
        case 20: 
            setEncounter('An open clearing shows the remains of several bodies arranged in a glyph like patter. Due to dismemberment and missing pieces you are not sure how many bodies were used. As you review the scene, the trail behind you vanishes and leaves naught but deep and ancient thorn bushes, redolent with the faint reek of decaying flesh.')
        break
        case 21:
            setEncounter('A medium sized hut made of gingerbread and various pieces of candy. A kindly old woman asks you in for dinner.')
        break
        case 22: 
            setEncounter('A pile of shit with human clothes, hair and bones in.')
        break
        case 23:
            setEncounter('The party find a clearing with an odd nature alter in the center. While they are distracted, the trees around them move closer. If they are distracted for long enough, the trees form a complete wall. The trees do not attack; they only defend themselves if attacked.')
        break
        case 24: 
            setEncounter('There is a tree with deep scratches in it, as if it has been attacked by a dagger. Upon inspection, the player discovers old, dried blood embedded in the bark and writing in a deep red color that says \'Find me, help me\' (illusory script). As the party continues they see more trees of a similar nature, and eventually find a crazed gnome who is determined to eat party members in order to restore his youth.')
        break
        case 25:
            setEncounter('The path opens into a clearing. Near the center is a unicorn lying down on its side. It looks serene and peaceful. The clearing is bright and quiet. Almost silent but for distant birdsong. If the party approach they realize it is dying. Its throat is torn open by some powerful beast and the wound looks infected or poisoned. The edges of the clearing are creeping in, going brown or fungus laden and choked with weeds and branches, which seem to close in whenever no one is looking in that direction. The unicorn is probably (?) past any help the party can give but may last an hour. Left to its own devices, the clearing will close in maybe 20 minutes.')
        break
        case 26: 
            setEncounter('The trees appear to be leaning closer together and are a different shade of green to normal trees. As a breeze blows they seem to be whispering to each other wisha…wisha…wisha')
        break
        case 27:
            setEncounter('The undergrowth is thick confining you to a narrow path. It switched sharply left then right…. to a dead end. Turning back it is a dead end that way. The only way forward is to hack through the lower branches and scrub. As the players do, the cut stems ooze blood. If burned instead the wet plants hiss and whistle as they burn sounding like tortured screams.')
        break
        case 28: 
            setEncounter('You begin to notice that everything looks familiar. Slowly it dawns on you that the trees are all identical, right down to that twig that snapped off when it caught on you backpack.')
        break
        case 29:
            setEncounter('A family of forest giants has caught the scent of the party while hunting. They\'re catching up.')
        break
        case 30: 
            setEncounter('Disembodied screams echo around you. Ghosts of the past? Or maybe it\'s Jim the halfling rogue, trying to scare off tourists so he can start a coalmine?”')
        break
        case 31:
            setEncounter('In the distance you see a light. When you get closer you see a lamp hanging from a tree swinging in the wind. It is full of oil but there are no signs of whoever put the lamp there.')
        break
        case 32: 
            setEncounter('You find humanoid skeletons tied together to form the rough shape of a horse. If you use speak with dead on it, it only screams.')
        break
        case 33:
            setEncounter('You suddenly realize that all the noise in the forest is gone. As if silence had been cast but you can still talk and make noise as normal. Suddenly the forest is filled with howls, screeches, and buzzing so loud it deafens the party. When the party can hear again the forest is back to normal.')
        break
        case 34: 
            setEncounter('You come across a cottage in the woods belonging to a friendly woodsman and his wife. They provide food and shelter for the night. When the party awakes they are in the burned down ruins of a cottage with the skeletal remains of the farmer and his wife reaching desperately for the party.')
        break
        case 35:
            setEncounter('A hooded figure sits on a stump. He does not respond to anything. If you attack or touch the figure they collapse into a swarm of spiders.')
        break
        case 36: 
            setEncounter('A parrot is found on a branch repeating the words \'Gods what is that?!\'')
        break
        case 37:
            setEncounter('The party finds a wanted poster tacked to a tree with a group shot of the party with a red X marked through two of the party members faces. The party does not remember posing for this picture nor know why they would be wanted.')
        break
        case 38: 
            setEncounter('You come upon a dry riverbed. From the trees lining the banks dangle a hundred mutilated corpses.')
        break
        case 39:
            setEncounter('Two children play fight with sticks, laughing and taunting each other. When they notice the party watching, they\'ll happily put on a show. That\'s when the other children emerge from the trees, only they aren\'t playing and they\'ve got more than just sticks and stones.')
        break
        case 40: 
            setEncounter('A strangely inviting cave comes in to view. Surely it\'s some kind of den and we shouldn\'t go in but I just… cant…. help it.')
        break
        case 41:
            setEncounter('From deep within the forest loud clicking and chattering noises of various pitches and tempo can be heard. Upon inspection a small city raiding party dressed in armor have been brutally mutilated with heads twisted round and limbs ripped off. The same clicking noise starts again and gets closer and louder. When it seems like the creature is on top of them it suddenly stops and does not reappear.')
        break
        case 42: 
            setEncounter('It has been at least 24 hours since sunset and it has yet to come back up. What\'s worse is that all the forest chatter from insects and wildlife has trickled nearly to a standstill save for one slow but consistent crunching that has been following at a distance for hours now. Are the stars even moving anymore?')
        break
        case 43:
            setEncounter('Early in the day the party passes underneath a suit of armor suspended in the trees, branches occupying the inside of the suit as if they had squeezed out the body that occupied it before. Branches sprout from the facemask wildly, limbs protrude from the leg and armholes, and the entire chest piece is nearly bursting from the volume of foliage it contains.')
        break
        case 44: 
            setEncounter('Just when its time to make camp for the night yet again within the damp cold forest, the party comes across an old house sitting unoccupied in a small clearing. They seek comfort in the house, building a fire in the hearth and drinking some old booze left by previous tenants. Keeping good watch, they peer out the windows frequently. Maybe it\'s just the old wine but are the trees…. getting closer?')
        break
        case 45:
            setEncounter('A few chickens are pecking at the dirt in the middle of the trail. When you come upon them, you spook them, and they trot off into the forest a few meters. They resume pecking; but little does anyone know that they\'ve begun to peck seeds that have the effect of the enlarge spell. Treat an enlarged chicken as an allosaurus and let the fun begin.')
        break
        case 46: 
            setEncounter('Glowing eyes stare out of a knothole in an old and gnarled tree. When the players notice it watching, the thing scampers deeper into the tree. If they investigate the knothole they\'ll find it goes deep, deeper than the tree itself. At the bottom of the hole something glitters. Gold? Many more glowing eyes stare up around it.')
        break
        case 47:
            setEncounter('A corpse sways in the branches of a lonely willow by a stream, dangling from a noose. The corpse is grinning, and dancing a slow, merry jig.')
        break
        case 48: 
            setEncounter('Something howls in the distance. Another something responds. Not wolves. The howls are too ragged, sound too much like words.')
        break
        case 49:
            setEncounter('A little twig-and-twine doll is pinned to a branch up ahead. Another just like it can be seen just off the path, and another beyond that one. Even in the depths of the woods you\'ll be protected so long as you follow them. Your safety once you arrive where they\'re leading you is less guaranteed. A polite invitation has been extended. It won\'t come again.')
        break
        case 50: 
            setEncounter('Moaning can be heard from a bush. Within is a hunter, near-death, near incoherent from fear. No mere animal could have inflicted the wounds he bears. They\'re too precise, suggestive of strange symbols.')
        break
        case 51:
            setEncounter('The trees in this part of the forest are all wrong. They\'e growing in neat rows; they sway though there is no wind. Strange fruits swell in their boughs. You\'ve stumbled into an orchard. Were those stones you stepped over a ways back someone\'s fence?')
        break
        case 52: 
            setEncounter('A boar bursts out of the undergrowth; foaming spittle flecks its tusks. It charges, eyes bloodshot, but makes no move to defend itself. All its attacks seem half-hearted. What drove this beast to seek death so?')
        break
        case 53:
            setEncounter('Cloying mist drifts into the region. You can barely see five paces ahead of you. Vague, bulbous forms can be seen protruding from the trees as you pass. Fungus. This isn\'t mist, it\'s spores.')
        break
        case 54: 
            setEncounter('A fire shines through the trunks a little ways from you. Around it are adventurers, like you, camping for the night. None of them speak the same languages as you. The forest has them spooked, paranoid. They\'ll welcome familiar company at first, but any number of things you do could set them off.')
        break
        case 55:
            setEncounter('A pond in a clearing, clean and still. No animal drinks from it, no insects buzz above it. No monsters will approach here beyond the tree line. Is it safe for you to stay here?')
        break
        case 56: 
            setEncounter('The forest path is narrow and overgrown. Looking down the tunnel-like trail gives you vertigo and puts you off balance. Shadows appear to move and you feel like you\'re just going in circles.')
        break
        case 57:
            setEncounter('The forest itself seems to be against your presence. Roots seem to spring up to trip you and branches swat at you when moved out of the way. The canopy closes around you shutting out the sunlight.')
        break
        case 58: 
            setEncounter('The players hear footsteps echoing theirs, slightly behind, but the path is empty. Anything they call out is repeated back with missing syllables, as if the voice is in pain.')
        break
        case 59:
            setEncounter('A child\'s laughter is heard off of the path, along with a flicker of light, which keeps appearing further away if the party follows. It leads them to the body of an elven boy with an arrow in his back.')
        break
        case 60: 
            setEncounter('One member of the party hears the creaking of the trees and sounds of the forest suddenly stop, then a voice right behind them whispers their name on a hoarse voice, but there is no one there. None of the others notice anything different.')
        break
        case 61:
            setEncounter('The players hear the sounds of cries and screams from soldiers and the guttural cries of a nightmarish creature echo through the forest. The last one goes quiet before they reach them. If they choose to search, they find scattered around the ground the weather-worn skeletal remains of 16 soldiers from a long-dead empire known for it\'s brutal methods, some of which are found ripped apart apparently trying to flee.')
        break
        case 62: 
            setEncounter('The players feel as though something is watching them, but can\'t see anything in the darkness. If they move more than 30ft in any direction they hear rustling following, but no matter how much they search cannot find anything.')
        break
        case 63:
            setEncounter('A dead character from one of the character\'s past stands amongst the trees, with the appearance and wounds they had when they died. Only one person can see them. The character doesn\'t move, but silently watches the player. Any attacks go through them without causing damage. They dissolve into a smoke-like darkness after 1d6 minutes.')
        break
        case 64: 
            setEncounter('The sound of whispering is heard behind a bush. When it is pulled back or someone moves behind it, the whispering stops abruptly and a darkened feather falls slowly to the ground.')
        break
        case 65:
            setEncounter('A group of little girls are tied to the trees just off of the path, crying quietly. If the party goes to rescue them, they fight being rescued and attempt to escape and retie themselves to the trees, warning that \'the Grogleman\' will come for them and their families too if they return home.')
        break
        case 66: 
            setEncounter('A group of giants sit motionless around a giant chessboard, eyes intent on the pieces. Closer examination reveals the three are corpses; fungi grow from their eyelids and out of their hair, and the bodies slump and collapse if touched.')
        break
        case 67:
            setEncounter('The ground on both sides of the trail seems odd; upon closer examination, it is absolutely swarming with termites, covering the whole ground like a wave. If the party steps off the trail, the insects scatter from the party\'s feet, leaving strange, momentary footprints in the ground.')
        break
        case 68: 
            setEncounter('Prayers cannot be uttered aloud in the forest; spells can be cast as normal, but any verbal component comes out as a rattling hiss.')
        break
        case 69:
            setEncounter('A thick fog hovers over the ground, reaching up about two feet (to the chests of any halflings in the party, to the knees of humans). Anyone putting their heads in the fog (bending down to pick something up, etc.) hears muffled screams and far-off voices begging for their lives.')
        break
        case 70: 
            setEncounter('Each person awakes to find a large meat hook carefully placed along on their bedrolls over their stomachs.')
        break
        case 71:
            setEncounter('In the periphery of the party\'s vision, the trees that they pass seem to take on the image of a grim army, marching next to the party. When faced directly, the trees seem rather normal. The whole forest smells like a battlefield.')
        break
        case 72: 
            setEncounter('Every time anyone lights a fire in the forest, there is a sudden hissing and smoking from the ground for twenty feet around the sparks. Little red lines appear like veins in the earth before fading to blackness.')
        break
        case 73:
            setEncounter('A monkey in a Jester\'s costume comes swinging through the trees, hooting and screeching. If the adventurers catch the monkey, they find a bloody knife stuck in its belt. The monkey stares at them all with a baleful expression.')
        break
        case 74: 
            setEncounter('Crows are screaming at each other as the party enters the woods. Increasingly, the screams sound like words, demanding blood.')
        break
        case 75:
            setEncounter('The hedge on the side of the trail has strange burn marks in it, almost exactly in the shape of men.')
        break
        case 76: 
            setEncounter('A fox with a bloodied and broken leg comes limping up the path to the party and will pass by it if it can. If anyone speaks to it, the fox changes form into an old druidic woman, who mumbles about the forest being unsalvageable.')
        break
        case 77:
            setEncounter('As the party walks into the forest, they are greeted by an adventuring group coming the opposite direction. They chat for a little bit, explaining they found the woods too dangerous and are making their way back to whatever town the party has just come from. A little farther into the woods, the party finds the corpses of the same adventuring group, gathered around the sputtering embers of a fire…')
        break
        case 78: 
            setEncounter('A bucket has been nailed to a tree, with a crude sign saying \'Donations\' hanging under it. The bucket is half-filled with fingers and toes in varying levels of freshness.')
        break
        case 79:
            setEncounter('A small, neat signboard reads, \'Please remain on the path.\' The neatness is somewhat marred by the corpses strewn below the sign.')
        break
        case 80: 
            setEncounter('Someone has sharpened the branches around the trail in the forest, so that the trail is surrounded by sharp points.')
        break
        case 81:
            setEncounter('The party finds themselves staring at a strange tableaux- the corpse of a squirrel is placed next to an acorn, followed by (in order) the corpse of a cat, a dog, a wolf, and a bear. Behind the bear are strange scuffmarks in the dirt, like there was another corpse behind it, this one in the shape of something human…')
        break
        case 82: 
            setEncounter('As the party walks through the forest, a strange figure suddenly drops from the trees in front of them- upon inspection, it is an effigy in the rough shape of a man, made of wooden boughs and leaves. This happens twice more as they walk. The fourth time, the figure drops down again, but anyone going to clear it away finds that it is actually the corpse of a man this time, with branches lashed to his limbs and a grisly smile on his face…')
        break
        case 83:
            setEncounter('A cold mist creeps into the surrounding area, players who breathe it will be asked to make a roll (perception, nature, etc.) but they\'re making a constitution save with whatever modifier from the false roll. Anyone who rolls above a set DC inhales the mist and is subject to strange illusions.')
        break
        case 84: 
            setEncounter('A hanged man rests on a lone tree. His pockets lined with petty change and a note that appears to be an apology letter to his family.')
        break
        case 85:
            setEncounter('For an hour of travel there\'s no sound other than the party.')
        break
        case 86: 
            setEncounter('A section of the forest has been frosted over in what appears to be a permanent winter. The center appears to have an unnatural cave of rocks that don\'t match anything of the surrounding geological features. Inside features a drop that appears to be without end.')
        break
        case 87:
            setEncounter('A small portal opens up about 15 ft. above the party, expelling a blood lusted demon to the ground below. It bounces, stunned momentarily before it acquires a new target.')
        break
        case 88: 
            setEncounter('A large head-sized knot in a tree resembles a human face. Wait! The eyes are real: wide, staring, terrified eyes! They look at you as you approach, flicking to each person that talks. But they cannot blink (so cannot communicate in that way), but constantly weep a watery sap.')
        break
        case 89:
            setEncounter('A large open area. The dirt seems fresher than the rest, no grass growing on the surface. The trees around the edge of the grove are burnt. In the middle sits (1d4) huge skulls, each at least 5 times the height of an average human. These skulls have gashes and claw marks in them, as well as huge spiraling or pointed horns. Scratched into the largest one is \'entrance\' in infernal. If the player puts their ear to the ground and listens, they can faintly hear a low rumble that unnerves them to their very core and they don\'t know why. Digging downwards could potentially reveal a connection between the material plain and one of the evil-aligned outer plains.')
        break
        case 90: 
            setEncounter('The first character to awaken sees a grotesquely exaggerated face hovering inches from their own, glowing weakly with an internal light. An ear-to-ear grin splits the face, revealing a maw with three rows of serrated teeth. When the character blinks, the face disappears. It never appears again.')
        break
        case 91:
            setEncounter('The party comes across perfectly circle clearing. It\'s barren waste, nothing ever grows there. Any flora the party might bring with them instantly wilts as it crosses the border. No animal, even as faithful as ranger\'s companions, can be forced to cross into that circle. If the party decides to spend a night there, they will wake up outside the circle, with all their things scattered across the outer rim of the clearing. If they do it on the night of winter solstice, they will wake up in Avernus instead.')
        break
        case 92: 
            setEncounter('The trees suddenly grow until the sun is blocked out and a magical darkness is cast from somewhere, and whenever the players talk, they hear their words repeated to them in their voice, but can\'t tell where it\'s coming from.')
        break
        case 93:
            setEncounter('The players slowly realize that they are on a loop in the forest. Every night they make camp, then wake up with supplies returned and make the exact same journey again. The players must find the source of this curse and free themselves.')
        break
        case 94: 
            setEncounter('While the party makes camp, someone notices that there is an additional person around the fire. How did no one notice? Why does it smell like rotten meat? And why is it looking at the barbarian like that?')
        break
        case 95:
            setEncounter('In a less dense part of the forest, where moonlight pours through, the party witnesses a strange hulking creature (Mothman) perched on a tall tree. Its giant red eyes watch the party for a moment, before the creature flies away. The party sees the creature a few more times before coming to a large bridge built over a dangerous river. The creature appears one more time over head, just as the bridge collapses.')
        break
        case 96: 
            setEncounter('After camping in the woods the party awakens to find the trees around them whipping and lashing as if buffeted by strong winds, though the party feels not even a faint breeze. Upon closer inspection, the party notices in mounting horror that the shadows cast by the trees are in the shape of human beings writhing in silent agony.')
        break
        case 97:
            setEncounter('The party comes across a 50ft circle of pitch-black darkness, with no logical reason as to its existence. Any players that cannot see when in such conditions hear whispers and chattering while in this area, and take 1d6 slashing damage for every round spent there. Any players that can see in such conditions (ex. darkvision) will not suffer any of these effects, and will see that nothing is attacking the others, but rather the wounds are manifesting onto them.')
        break
        case 98: 
            setEncounter('You see corpses pinned to the sharpened boughs and branches of the tress around you, wood puncturing through their throats and sternums. The mottled moonlight filtering through the slowly swaying leaves gives them an eerie sense of motion. A sudden scampering and swish of branches punches through the soft rustling of the trees. Wherever you turn, the sound seems to be coming from behind you, getting closer and closer till you feel a hot, wet breath on the back of your neck. You swing around to confront the horror and see nothing but the corpses in the canopy, leering down at you like demonic piñatas.')
        break
        case 99:
            setEncounter('The party stumbles upon a clearing, with a post stamped into the ground. A message scrawled in Primordial reads about a treasure found in the hidden home of squirrels. With a few investigation checks, the party finds an odd tree. Around the back of the tree is a poorly hidden, though hidden, door. The door has no lock on it, but is not open; it has a feeling as though it is stuck. It can be forced open, or pried open, or cut open with fairly decent resistance. Inside is a staircase leading downward, lit by candles embedded in the tree that don\'t seem like they\'re burning the tree, though they are quite bright. After a 5-minute descent, the staircase ends in what appears to be a basement. The ceilings drip, and the room is damp and warm. (You can also narrate that the stairs are slippery, and have your players roll athletics not to slip). A decent perception roll can see that the floor and ceiling leak the warm water, without much of a source, while a really good perception check will notice that the color of the environment has become darker, and has a reddish tinge. Otherwise, there appears to be a library or study (whichever is easier for you to narrate.) There are no loose papers or pens and all of the books appear to be locked up, so that they cannot be taken out. A chest in the back can be found, a hair too conspicuously. Upon opening it, there is nothing inside but a pit, that smells of vomit and acid. With that, the room begins to shrink, slowly. The party should discover that they\'re in the mouth of a giant mimic, who is swallowing them. Upon escaping, the entire tree uproots itself, spits and snarls at the players, and runs away. Best described if you can drop hints about descending the gullet of a beast, such as a hot draft, or distant gurgling.')
        break
        case 100: 
            setEncounter('The party makes camp, and partway through the night, someone on watch starts to get an off feeling. Depending on perception rolls, they may or may not see the eyes watching from up in the trees, though they disappear just after being noticed. Additionally, they may hear the sound of leathery wings gliding through the air above them. Finally, after their defenses being lightly probed/tested, a creature attacks. (IIRC)I used a giant flying chupacabra from PF, but whatever works for you. The creature goes down relatively easily, but as it is struck down, it lets out a piercing scream. As quiet settles, the party hears answering cries from deeper in the woods.')
        break
    }
}
    return(
        <div className="flex flex-col mx-auto">
            <h1 className="text-center">Forest Encounter Generator</h1>
            <div className="mx-auto mt-5" onClick={generateRandomEffect}>
                <Button label={'Roll the dice!'}/>
            </div>
            <p className="my-5">{diceRoll} <br /><br /> {encounter}</p>
            <span className='text-center'>Entries gathered from DnDspeak.com: <a className="text-blue-400" href='https://www.dndspeak.com/2018/11/03/100-scary-forest-encounters/'>Here</a></span>
        </div>
    )
}