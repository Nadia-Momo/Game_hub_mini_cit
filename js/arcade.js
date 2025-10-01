const games=[
  {
    id:1,
    title:"Basket Blast 🧺",
    description:"Grab fruits quick! 5 drops = Game Over.",
    thumbnail:"images/fruit_cather_tumbnail.png",
    path:"Game1/index.html",
    Category:"Arcade",
    Rating:4.2,
    People:12345,
    Trendy:96.345
  },
   {
    id:2,
    title:"Tropical Slash 🍹",
    description:"Quick reflexes needed—don’t miss 5 fruits and beware of bombs!",
    thumbnail:"images/fruit_cutting_game.jpg",
    path:"Game3/index.html",
    Category:"Arcade",
    Rating:4.5,
    People:8921,
    Trendy:98.921
  },
     {
    id:3,
    title:"Phantom Chase 👻",
    description:"Grab ghosts fast! 5 misses ends the game, catch golden ghosts for bonus points.",
    thumbnail:"images/ghost)catcher_tumbnail_img.webp",
    path:"Game2/index.html",
    Category:"Action",
    Rating:4.0,
   People:10234,
   Trendy:94.234
  },
  {
    id:4,
    title:"Seek & Find 🔎",
    description:"Find all hidden objects to advance to the next level—no game over!",
    thumbnail:"images/hidden_object_finder.webp",
    path:"Game5/index.html",
    Category:"Puzzle",
    Rating:4.3,
    People:7876,
    Trendy:93.076
  },
      {
    id:5,
    title:"Kitchen Dash 🍳",
    description:"Cook like a pro—drag & drop ingredients correctly or it’s game over!",
    thumbnail:"images/cooking)game_drag.jpg",
    path:"Game4/index.html",
    Category:"Simulation",
    Rating:4.6,
    People:15432,
    Trendy:107.432
  },
        {
    id:6,
    title:"Kitty Café 🐱",
    description:"Serve customers, pamper cats, and grow your café!",
    thumbnail:"images/image_6.jpg",
    path:"Game6/index.html",
    Category:"Simulation",
    Rating:4.4,
    People:11210,
    Trendy:99.210
  },
         {
    id:7,
    title:"Duck Dash 🦆",
    description:"Shoot the duck — if you don’t, the next animal won’t appear.",
    thumbnail:"images/duck hunt.jpg",
    path:"Game12/index.html",
    Category:"Arcade",
    Rating:4.1,
    People:9876,
    Trendy:90.976
  },
 {
    id:8,
    title:"Mind Match 🧠",
     description:"Sharpen your brain power with this fun memory game! Flip the cards, find the pairs, and challenge yourself to remember faster every round 🃏✨",
  thumbnail:"images/memory_game.jpg",
  path:"Game7/index.html",
  Category:"Puzzle",
  Rating:4.3,
  People:6543,
  Trendy:92.843
    },
{
    id:9,
    title:"Sugar Smash 🍬",
    description:"Match 3 or more candies to clear the board and score points!",
    thumbnail:"images/candy_crush.jpg",
    path:"Game10/index.html",
    Category:"Puzzle",
    Rating:4.5,
    People:14321,
    Trendy:104.321
  },
{
    id:10,
    title:"Snake game 🐍",
    description:"Slither, grow, and conquer—how long can you survive?",
    thumbnail:"images/snake_game.jpg",
    path:"Game8/index.html",
    Category:"Arcade",
    Rating:4.0,
    People:13210,
    Trendy:95.210
  },
{
    id:11,
    title:"Dragon Escape 🔥",
    description:"Fly your dragon and avoid enemy clashes!",
    thumbnail:"images/dragon_game.jpg",
    path:"Game9/index.html",
    Category:"Action",
    Rating:4.2,
    People:8654,
    Trendy:92.654
  },
{
    id:12,
    title:"Bounce & Break ⚪🧱",
    description:"Smash through bricks with each bounce.",
   thumbnail:"images/brick_game_thumbnail.webp",
   path:"Game11/index.html",
   Category:"Action",
   Rating:4.1,
   People:9432,
   Trendy:91.432
  }
]
//show the simulation category game card
const section2 = document.getElementById("arcade_games");
const container1 = document.createElement('div');
container1.classList.add('container');
section2.appendChild(container1);
// Use the existing row from HTML
const row1 = document.getElementById("arcade_row");
games.forEach((game) => {
if(game.Category==='Arcade'){
const col1 = document.createElement('div');
col1.classList.add('col-lg-4');
col1.innerHTML = `
    <div class="trendy_card">
      <img src="${game.thumbnail}" alt="" class="memory_game">
      <h3>${game.title}</h3>
      <p class="category"><span class="category1">Category:</span>${game.Category}</p>
      <div class="Rating_player">
        <img src="images/star.png" alt="star" class="star">
        <p>${game.Rating}</p>
        <p>(${game.People} Plays)</p>
      <p>${game.Trendy} </p>
      </div>
      <button class="button trendy_button">Play Now
        <div class="hoverEffect"><div></div></div>
      </button>
    </div>  
  `;

  // Add click event to button
  const button1 = col1.querySelector('button');
  button1.addEventListener('click', () => {    
    window.location.href = game.path;
  });

  row1.appendChild(col1);

  }
  
});
