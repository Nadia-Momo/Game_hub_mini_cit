const level=document.getElementById('level');
const points=document.getElementById('points');
const search_list=document.getElementById('search_list');
const container_image=document.getElementById('container_image');
//game state
let found=0;
let score=0;
let currentLevel=0;
//level images
const levelImage=[
    "images/messy_room.jpg",
    "images/messy_2.webp",
    "images/messt_31.jpg",
    "images/messy_4.jpg"
]
//hidden object for each level
const search_Products=[
  [
    {name:"Can",img:"images/can.png"},
    {name:"Cap",img:"images/cap.png"},
     {name:"HairBrush",img:"images/hairbrush.png"},
      {name:"Key",img:"images/key.png"},
       {name:"Loupe",img:"images/loupe.png"},
        {name:"Paint Brush",img:"images/paint-brush.png"},
         {name:"Telephone",img:"images/telephone.png"},
         
  ],
    [
{name:"Beach Ball",img:"images/beach-ball.png"},
          {name:"Fork",img:"images/fork-in-diagonal.png"},
           {name:"Plate",img:"images/round.png"},
           {name:"Magic Ball",img:"images/magic-ball.png"},
           {name:"Disco Ball",img:"images/disco-ball.png"},
           {name:"Badminton",img:"images/badminton.png"},
           {name:"Eraser",img:"images/eraser21.png"},
           {name:"Scissor",img:"images/scissor22.png"},
           {name:"Highlighter",img:"images/highlighter23.png"},
           {name:"Backpack",img:"images/backpack24.png"},
           {name:"Towel",img:"images/towel25.png"},
             {name:"Spade",img:"images/spade26.png"}

  ],
  [
    {name:"Robot",img:"images/robot27.png"},
          {name:"Fork",img:"images/fork-in-diagonal.png"},
           {name:"Microphone",img:"images/microphone28.png"},
           {name:"Radio",img:"images/radio29.png"},
           {name:"Disco Ball",img:"images/disco-ball.png"},
           {name:"Badminton",img:"images/badminton.png"},
           {name:"Eraser",img:"images/eraser21.png"},
           {name:"Watercolor",img:"images/watercolor.png"},
           {name:"Compass",img:"images/compass.png"},
                      {name:"Highlighter",img:"images/highlighter23.png"},
           {name:"Backpack",img:"images/backpack24.png"},
           {name:"Towel",img:"images/towel25.png"},
             {name:"Spade",img:"images/spade26.png"},
               {name:"Glue",img:"images/glue.png"}

  ],
[
    {name:"Beach Ball",img:"images/beach-ball.png"},
          {name:"Fork",img:"images/fork-in-diagonal.png"},
           {name:"Plate",img:"images/round.png"},
           {name:"Magic Ball",img:"images/magic-ball.png"},
            {name:"Compass",img:"images/compass.png"},
                      {name:"Highlighter",img:"images/highlighter23.png"},
           {name:"Backpack",img:"images/backpack24.png"},
           {name:"Towel",img:"images/towel25.png"},
             {name:"Spade",img:"images/spade26.png"},
               {name:"Glue",img:"images/glue.png"},
                          {name:"Scissor",img:"images/scissor22.png"},
           {name:"Highlighter",img:"images/highlighter23.png"},
           {name:"Backpack",img:"images/backpack24.png"},
           {name:"Towel",img:"images/towel25.png"},
             {name:"Spade",img:"images/spade26.png"}

  ]
]
//start a level
function gameStart(levelIndex){
  container_image.innerHTML = '';  // Clear previous objects
  search_list.innerHTML = '';      // Clear previous search list
  found = 0;

  level.innerText = `${levelIndex + 1}`;
  container_image.style.backgroundImage = `url(${levelImage[levelIndex]})`;

  const totalObjects = search_Products[levelIndex].length;

  // Search list
  search_Products[levelIndex].forEach(item => {
    const div = document.createElement('div');
    div.innerText = item.name;
    div.id = "search-" + item.name;
    search_list.appendChild(div);
  });

  // Place objects randomly
  search_Products[levelIndex].forEach(item => {
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.classList.add("object-item");
    img.style.position = "absolute";
    img.style.cursor = "pointer";

    const randomLeft = Math.floor(Math.random() * (container_image.offsetWidth - 50));
    const randomTop = Math.floor(Math.random() * (container_image.offsetHeight - 50));
    img.style.left = randomLeft + "px";
    img.style.top = randomTop + "px";
//click event for hidden object
    img.addEventListener("click", () => {
      img.remove();
      score += 10;
      points.innerText = score;

      const target = document.getElementById("search-" + item.name);
      if(target){
        target.innerHTML = item.name + "✅";
        target.style.color = "lightgreen";
      }

      found++;// Increment found counter

      // check level completed or not
      if(found === totalObjects){
      if(currentLevel + 1 < levelImage.length){
        showToast(`🎉 Level ${currentLevel + 2} Unlocked!`);
        currentLevel++;
        setTimeout(()=>gameStart(currentLevel), 1500);
    } else {
       Swal.fire({
            title: "🏆 All Levels Completed!",
            text: "Do you want to play again?",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Play Again",
            cancelButtonText: "Exit",
            confirmButtonColor: "#4CAF50",
            cancelButtonColor: "#d33"
        }).then((result) => {
            if (result.isConfirmed) {
                
                currentLevel = 0;
                score = 0;  
                points.innerText = score;
               gameStart(currentLevel);
            }
        });
    }
      }
    });

    container_image.appendChild(img);
  });
}
//toaster function
 function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

 
  setTimeout(() => {
    toast.classList.remove("show");
    document.body.removeChild(toast);
  }, 3000);
}  
gameStart(currentLevel);
