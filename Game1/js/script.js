//game container
const game=document.getElementById('game');
//basket for fruit catch
const basket=document.getElementById('basket');
//fruits images holder array
const Fruits=[
    "images/Apple.png",
    "images/Banana.png",
    "images/Grape.png",
    "images/kiwi.png",
    "images/Mango.png",
    "images/orange.png",
    "images/pomegragranet.png",
    "images/rasberry.png",
    "images/watermelon.png",
    "images/Peach.png"   
]
let score = 0;
let lives=5;
//score and life Display
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
//score update
function updatePoints(points){
    score+=points
    scoreDisplay.innerText="Score:"+score;
}
//lives update
function updateLives(change){
    lives+=change;
    livesDisplay.innerText="❤️ Lives:"+lives;
    //game over sweet alert
    if(lives<=0){
         Swal.fire({
        title: 'Game Over!',
        html: `<p><strong>You lost all your lives.</p><p>Your Score: ${score}</strong></p>`,
        icon: 'error',
        confirmButtonText: 'Restart',
        background: '#fff', 
    
        color: 'black', 
        confirmButtonColor: '#3d26a5ff', 
        backdrop: `
    rgba(0,0,0,0.4)
    left top
    no-repeat
    blur(6px)
  `
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload(); 
        }
    });
    }
}
//create randon fruits
function spawnfruit(){
    
    const el=document.createElement("img");
    el.classList.add("fruit");
    el.style.position="absolute";
    el.style.width="60px";
    el.style.height="60px";
    el.style.top="0px";
    const randomIndex=Math.floor(Math.random()*Fruits.length);
    el.src=Fruits[randomIndex];
    const max=game.clientWidth-60;
    el.style.left=Math.floor(Math.random()*max)+"px";
    const vy = Math.random() * 1.2 + 1.6;
  el.dataset.vy = vy.toFixed(2);
  game.appendChild(el);
}
spawnfruit()
//fruit falling function
function animateFruits() {
    const fruits = document.querySelectorAll(".fruit");
    fruits.forEach(el => {
        let vy = parseFloat(el.dataset.vy);
        let top = parseFloat(el.style.top);
        top += vy;
        el.style.top = top + "px";

       const basketTop = basket.offsetTop;
        const basketLeft = basket.offsetLeft;
        const basketRight = basketLeft + basket.clientWidth;
        const basketBottom = basketTop + basket.clientHeight;
  const fruitLeft = el.offsetLeft;
        const fruitRight = fruitLeft + el.clientWidth;
        const fruitTop = top;
        const fruitBottom = fruitTop + el.clientHeight;
        // if fruits touch the basket score+=10
         if (
            fruitBottom >= basketTop &&
            fruitTop <= basketBottom &&
            fruitRight >= basketLeft &&
            fruitLeft <= basketRight
        ){
            el.remove();           
            updatePoints(10);       
        } 
        //if not then life-1
        else if (top > game.clientHeight) {
          
            el.remove();
           
            if(lives>0){
                  updateLives(-1); 
            }
          
        }
    });
    requestAnimationFrame(animateFruits);
}
setInterval(spawnfruit, 1000);
animateFruits();
// basket work start
document.addEventListener("keydown", (e) => {
  let basketPosition = basket.offsetLeft;
  let step = game.clientWidth * 0.05; 

  if (e.key === "ArrowLeft" && basketPosition > 0) {
    basket.style.left = basketPosition - step + "px";
  } 
  else if (e.key === "ArrowRight" && basketPosition < game.clientWidth - basket.clientWidth) {
    basket.style.left = basketPosition + step + "px";
  }
});
//basket work end
