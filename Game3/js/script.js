const gamePlay = document.getElementById('gamePlay');
const DisplayScore = document.getElementById('score');
const scoreBoard = document.getElementById('scoreBoard');
const missedDisplay = document.getElementById('missedFruits'); 
//game state
let miss = 0;
const maxMiss = 5;
let score = 0;
// fruit image holder
const fruits = [
    { src: "images/Apple.png", splash: "images/red_colour.png" },
    { src: "images/Banana.png", splash: "images/yelllow_splash_1.png" },
    { src: "images/Grape.png", splash: "images/black_colour.png" },
    { src: "images/kiwi.png", splash: "images/green_colour.png" },
    { src: "images/Mango.png", splash: "images/orange_colour.png" },
    { src: "images/orange.png", splash: "images/orange_colour.png" },
    { src: "images/Peach.png", splash: "images/orange_colour.png" },
    { src: "images/pomegragranet.png", splash: "images/red_colour.png" },
    { src: "images/rasberry.png", splash: "images/red_colour.png" },
    { src: "images/watermelon.png", splash: "images/red_colour.png" }
];
//random fruit generator
const randomNumberGenerator = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Missed fruit part update function
const updateMissed = () => {
    missedDisplay.innerText = `${miss}/${maxMiss}`;  
     if (miss >= maxMiss) {
document.getElementById("gameOverModal").classList.remove("hidden");
document.getElementById("modal_score").innerText = 
`Final Score: ${score} `;
    }
}
document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload();
});
//Fruit create part start
const createFruit = () => {
    const fruitData = fruits[randomNumberGenerator(fruits.length - 1, 0)];

    const fruit = document.createElement("img");
    fruit.classList.add("fruit");
    fruit.src = fruitData.src;
    fruit.style.position = "absolute";
    fruit.style.top = '-50px';
    fruit.style.left = randomNumberGenerator(gamePlay.offsetWidth - 50, 0) + "px";

    let fruitSpeed = randomNumberGenerator(5, 2);

    const fruitFall = setInterval(() => {
        let presentTop = parseInt(fruit.style.top) || 0;
        if (presentTop > 800) {
            clearInterval(fruitFall);
if (document.body.contains(fruit)) { 
 fruit.remove();
 miss++;
updateMissed();
}
} 
else {
fruit.style.top = presentTop + fruitSpeed + 'px';
}
    }, 20);
//mouseover event start on fruit
    fruit.addEventListener('mouseover', () => {
        score++;
        DisplayScore.innerText = 'Score: ' + score;
        scoreBoard.classList.add('bump');
        setTimeout(() => scoreBoard.classList.remove('bump'), 200);

        const splash = document.createElement("img");
        splash.src = fruitData.splash;
        splash.classList.add("splash");
        splash.style.position = "absolute";
        splash.style.width = "80px";
        splash.style.height = "80px";
        splash.style.left = fruit.offsetLeft + "px";
        splash.style.top = fruit.offsetTop + "px";
        splash.style.zIndex = "0"; 
        gamePlay.appendChild(splash);
        setTimeout(() => splash.classList.add("fade-out"), 50);
        setTimeout(() => splash.remove(), 1500);

        fruit.remove();
    });

    gamePlay.appendChild(fruit);
}
//after 1s 1 fruit will be created and it's a loop
setInterval(createFruit, 1000);
const createBomb = () => {
    const bomb = document.createElement("img");
    bomb.src = "images/bomby-removebg-preview.png";   
    bomb.classList.add("bomb");
    bomb.style.position = "absolute";
    bomb.style.top = '50px';
    bomb.style.left = randomNumberGenerator(gamePlay.offsetWidth - 50, 0) + "px";
    bomb.style.width = "100px";
    bomb.style.height = "100px";

let bombSpeed = randomNumberGenerator(6, 3);

const bombFall = setInterval(() => {
        let presentTop = parseInt(bomb.style.top) || 0;
        if (presentTop > 1000) {
            clearInterval(bombFall);
            bomb.remove();
        } else {
            bomb.style.top = presentTop + bombSpeed + 'px';
        }
    }, 20);
 const initialTop = parseInt(bomb.style.top); 
    const initialLeft = parseInt(bomb.style.left);
    //bomb mouseover event start and 3 marks deducted after clicking it
bomb.addEventListener("mouseover", () => {
clearInterval(bombFall);
bomb.style.display = "none";
score -= 3; 
if (score < 0) score = 0;
 DisplayScore.innerText = 'Score:' +score;
scoreBoard.classList.add('bump-red'); 
const blast = document.createElement("img");
        blast.src = "https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif"; 
        blast.style.position = "absolute";
        blast.style.top =  initialTop + "px";
        blast.style.left = initialLeft + "px";
        blast.style.width = "80px";
        blast.style.height = "80px";
        blast.style.zIndex = "3";
        gamePlay.appendChild(blast);
        setTimeout(() => {
            blast.remove(); 
        }, 1500);
scoreBoard.classList.add('bump-red');
 setTimeout(() => scoreBoard.classList.remove('bump-red'), 200);
 });
gamePlay.appendChild(bomb);
}
//Random bomb generate between 5 to 8s
function randomBombSpawner() {
    const delay = randomNumberGenerator(5000, 8000); 
    setTimeout(() => {
        createBomb();      
        randomBombSpawner();
    }, delay);
}
setInterval(createFruit, 1000); 
randomBombSpawner();    