// scoreboard container 
const stage = document.getElementById('stage');
const scoreDisplay = document.getElementById('score');
const missedDisplay = document.getElementById('missed');
let score = 0;
let missed=0;
// maximum life 5
const maxMissed=5;
//ghost creation function
function createGhost() {
    const ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.style.backgroundImage = 'url(images/white_ghost-removebg-preview.png)';
    ghost.style.backgroundSize = 'contain';
    ghost.style.backgroundRepeat = 'no-repeat';
    ghost.style.left = Math.random() * 90 + '%';
    ghost.style.top = Math.random() * 80 + 10 + '%';
    stage.appendChild(ghost);

    const life = Math.random() * 2500 + 2000;
    const timeout = setTimeout(() => {
        ghost.classList.add('fading');
        setTimeout(() => 
            { 
 if (ghost.parentNode) ghost.remove(); 
missed++;
missedDisplay.innerText='Missed:'+missed;
if(missed>=maxMissed){
      gameOver();
}

        }, 500);
    }, life);

    ghost.addEventListener('click', () => {
        clearTimeout(timeout);
        score += 1;
        scoreDisplay.innerText = 'Score: ' + score;
        ghost.classList.add('fading');
        setTimeout(() => { if (ghost.parentNode) ghost.remove(); }, 500);
    });

//nezt ghost life span
    const nextLife = Math.random() * 1000 + 500;
    setTimeout(createGhost, nextLife);
}

createGhost();
//golden color ghost creation
function createGoldenGhost(){
    const goldenGhost=document.createElement('div');
    goldenGhost.className='ghost';
    goldenGhost.style.backgroundImage='url(images/golden_ghost-removebg-preview.png)';
    goldenGhost.style.backgroundRepeat='no-repeat';
    goldenGhost.style.backgroundSize='contain';
    goldenGhost.style.left=Math.random()*90+'%';
    goldenGhost.style.top=Math.random()*80+10+'%';
    stage.appendChild(goldenGhost);
    const life=Math.random()*1500+1000;
    const timeOut=setTimeout(()=>{
goldenGhost.classList.add('fading');
setTimeout(()=>{if(goldenGhost.parentNode) goldenGhost.remove();},500)
    },life)
   //golden ghost click event gives you +5 points // 
    goldenGhost.addEventListener('click',()=>{
        score+=5;
       goldenGhost.classList.add('fading');
       setTimeout(()=>{
if(goldenGhost.parentNode)
  goldenGhost.remove()
missed++;
missedDisplay.innerText='Missed:'+missed;
if(missed>=maxMissed){
    gameOver();
}
       },500)
    })
    //next golden ghost life span
const nextLife=Math.random()*10000 + 5000;
setTimeout(createGoldenGhost,nextLife);
}
createGoldenGhost();
//game over function after missing maximum 5 ghost
function gameOver(){
Swal.fire({
  title: '💀 Game Over! 💀',
  html: `Your score: <b>${score}</b>`,
  icon: 'error',
  confirmButtonText: 'Restart',
  background: '#f8d7da',
  color: '#721c24',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  },
  backdrop: `
    rgba(0,0,0,0.4)
    left top
    no-repeat
  `
}).then((result) => {
    if (result.isConfirmed) {   
      location.reload();
    }
  });
}