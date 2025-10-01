const games=[
  {
    id:1,
    title:"Basket Blast 🧺",
    description:"Grab fruits quick! 5 drops = Game Over.",
    thumbnail:"images/fruit_cather_tumbnail.png",
    path:"Game1/index.html",
   girls:true,
   children:true
  },
   {
    id:2,
    title:"Tropical Slash 🍹",
    description:"Quick reflexes needed—don’t miss 5 fruits and beware of bombs!",
    thumbnail:"images/fruit_cutting_game.jpg",
    path:"Game3/index.html",
    boys:true,
    girls:true
  },
     {
    id:3,
    title:"Phantom Chase 👻",
    description:"Grab ghosts fast! 5 misses ends the game, catch golden ghosts for bonus points.",
    thumbnail:"images/ghost)catcher_tumbnail_img.webp",
    path:"Game2/index.html",
   boys:true,
   girls:true
  },
  {
    id:4,
    title:"Seek & Find 🔎",
    description:"Find all hidden objects to advance to the next level—no game over!",
    thumbnail:"images/hidden_object_finder.webp",
    path:"Game5/index.html",
    boys:true,
    girls:true
  },
      {
    id:5,
    title:"Kitchen Dash 🍳",
    description:"Cook like a pro—drag & drop ingredients correctly or it’s game over!",
    thumbnail:"images/cooking)game_drag.jpg",
    path:"Game4/index.html",
    girls:true
  },
        {
    id:6,
    title:"Kitty Café 🐱",
    description:"Serve customers, pamper cats, and grow your café!",
    thumbnail:"images/image_6.jpg",
    path:"Game6/index.html",
    girls:true
  },
         {
    id:7,
    title:"Duck Dash 🦆",
    description:"Shoot the duck — if you don’t, the next animal won’t appear.",
    thumbnail:"images/duck hunt.jpg",
    path:"Game12/index.html",
    children:true

  },
 {
    id:8,
    title:"Mind Match 🧠",
     description:"Sharpen your brain power with this fun memory game! Flip the cards, find the pairs, and challenge yourself to remember faster every round 🃏✨",
  thumbnail:"images/memory_game.jpg",
  path:"Game7/index.html",
  children:true
    },
{
    id:9,
    title:"Sugar Smash 🍬",
    description:"Match 3 or more candies to clear the board and score points!",
    thumbnail:"images/candy_crush.jpg",
    path:"Game10/index.html",
    children:true
  },
{
    id:10,
    title:"Snake game 🐍",
    description:"Slither, grow, and conquer—how long can you survive?",
    thumbnail:"images/snake_game.jpg",
    path:"Game8/index.html",
    boys:true,
    children:true
  },
{
    id:11,
    title:"Dragon Escape 🔥",
    description:"Fly your dragon and avoid enemy clashes!",
    thumbnail:"images/dragon_game.jpg",
    path:"Game9/index.html",
    boys:true
  },
{
    id:12,
    title:"Bounce & Break ⚪🧱",
    description:"Smash through bricks with each bounce.",
   thumbnail:"images/brick_game_thumbnail.webp",
   path:"Game11/index.html",
   boys:true
  }
]
const gamesRow = document.getElementById("games_row");
const peopleSelect = document.getElementById("people");
function renderGames(filter) {
  gamesRow.innerHTML = ""; 

  games.forEach(game => {
    if (
      filter === "All" ||
      (filter === "Boy" && game.boys) ||
      (filter === "Girl" && game.girls) ||
      (filter === "Children" && game.children)
    ) {
      const col = document.createElement("div");
      col.className = "col-lg-4 mb-4";
      col.innerHTML = `
        <div class="game_card">
          <img src="${game.thumbnail}" alt="${game.title}">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
         <button class="button" onclick="window.location.href='${game.path.replace(/'/g,"\\'")}'">Play Now<div class="hoverEffect"><div></div></div></button>
        </div>
      `;
      col.querySelector("button").onclick = () => {
        window.location.href = game.path;
      };
      gamesRow.appendChild(col);
    }
  });
}


renderGames("All");


peopleSelect.onchange = e => renderGames(e.target.value);