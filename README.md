

# Demo Website: [Here](https://eggheads-board-game-tools.vercel.app/)

![Egghead Site Still](https://res.cloudinary.com/dniwvymzt/image/upload/v1698929614/Portfolio/EggheadStill_emznlg.png)

---
<h2>Summary</h2>
Created for analog game enthusiasts, Egghead's Board Game Tools is created to make running games easier and more enjoyable! The application is in the early development phase, but it will include extensive data for Dungeons and Dragons to be used as quick references, as well as a combat initiative tracker that will allow you to add and delete monsters as well as timed environmental effects on the battlefield on the fly. The user will be able to track their list of board games thanks to data gathered from board game list APIs, which will also have a randomizer function for those times their board game groups simply can't pick what game they want to play next. For miniatures, I would like to implement a way to take pictures of terrain and specific miniatures, and the app will return other buyable pieces that match said terrain and miniatures in order to complete a whole set or simply see where the original came from. <br/><br/>

This is all being built with React, Next.js, MongoDB, JavaScript, and Tailwind.

---
<h2>Lessons Learned</h2>
This has been a pet project that's allowed me to fully understand the excellent user experience that React and Next.js allow the developer to create, from no-page reload DOM changes to faster load times due to declaring portions of the page to be statically generated on the server side or dynamically rendered on the client's side! In learning it, I've also gained an understanding of how I would separate components in a sensible way for not only myself but also for a team of other developers, so that we could each work on a portion of our application with enough abstraction to not disrupt one another's code. I've also been writing all of the styles purely in Tailwind to get a good handle on it's "classNames" to speed up development and better contain component elements within it's specific file.
<br/><br/>
Furthermore, due to the speed at which React and Next implemented changes at the time of creating this application, this is the first time I really had to delve deep into documentation as a primary source of instruction, as many of the stack overflow articles and YouTube videos I'd find on the technologies were depreciated solutions to solve a variety of problems. By doing that, I believe I've gained a lot more confidence in understanding extensive technical jargon as well as the creative aptitude needed to see snippets of small examples and translate that to a much bigger and more complex scale. One simple example is the ability to expand the use of the "useState()" function to not only re-render snippets of text based on user interactivity but also entire portions of an application that can deliver completely different ways that the user can interact with and gather entirely new sets of data.
<br/><br/>
Each tool I add to this application also adds brand new challenges to how I should approach a variety of different data from different locations. As examples within the Table Top RPG section, the randomizers for "Dungeon Doors", "Random Encounters," and "Wild Magic Surges" are created through the extensive use of switch cases coupled with a button that generates a random dice roll. "Quick Reference" relies entirely on the consumption of a DnD API and discovering the nuances of fetching the specific types of data I'm looking to display. "Shops", "Loot", and "Name Generators", will require the use of translating CSV files that have a large amount of element properties, and I'll need to combine the values they produce in various different ways to generate custom unique names and items. "Combat" will require the extensive use of classes so that many different values can be altered for each character on the battle field by the user, combined with the consumption of a different API to gain extensive monster information before putting characters onto the battlefield as well. And that's just the beginning of the plans I have for this application!

---
<h2>Installation</h2>
1.  Clone repo <br>
2.  Type "npm install", into your command prompt <br>

---
<h2>Usage</h2>
4.  In the command prompt within the installed folder, type "npm run dev" <br/>
5.  Navigate to  "localhost:3000" on your favorite web browser

<h3>More Projects</h3>

| [The Budding Chef](https://github.com/flbarfield/theBuddingChef) ![Budding Chef Gif](https://res.cloudinary.com/dniwvymzt/image/upload/v1697132736/Portfolio/TheBuddingChef_kxhedk.gif)| [Aurora Luxury Rentals](https://github.com/flbarfield/auroraLuxuryRentals) ![Aurora Luxury Rentals Photo](https://res.cloudinary.com/dniwvymzt/image/upload/v1697132842/Portfolio/auroraStill_banubq.png)| [Cirque Fitness](https://github.com/flbarfield/cirqueFitness) ![Cirque Fitness Gif](https://res.cloudinary.com/dniwvymzt/image/upload/v1697132736/Portfolio/CirqueFitness_wckdlp.gif)|
|---|---|---|

