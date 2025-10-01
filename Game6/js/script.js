let coinCount = 0;
let level=1;
//Display item
const coinDisplay = document.getElementById('coin-count');
const levelDisplay=document.getElementById('level-count');
const caseDisplay=document.getElementById('case');
//decore part start
const kawaiiImg = document.getElementById("kawaiidecolimg");
const smplaceBtn = document.getElementById("smplace");
const smremoveBtn = document.getElementById("smremove");
const sm1Place=document.getElementById('sm1place');
const sm1remove=document.getElementById('sm1remove');
const cute_animatedimg=document.getElementById('cute_animatedimg');
const mirrorimg=document.getElementById('mirrorimg');
const mirrorPlace=document.getElementById('mirrorPlace');
const mirrorRemove=document.getElementById('mirrorRemove');
const cactusimg=document.getElementById('cactusimg');
const succPlace=document.getElementById('succPlace');
const succRemove=document.getElementById('succRemove');
const BcacPlace=document.getElementById('BcacPlace');
const BcacRemove=document.getElementById('BcacRemove');
const sacculentimg=document.getElementById('sacculentimg');
const priceTextsm1=document.getElementById('priceTextsm1');
const priceTextsm2=document.getElementById('priceTextsm2');
const priceTextsm3=document.getElementById('priceTextsm3');
const priceTextsm4=document.getElementById('priceTextsm4');
const priceTextsm5=document.getElementById('priceTextsm5');
const priceTextsm6=document.getElementById('priceTextsm6');
const mplace=document.getElementById('mplace');
const mremove=document.getElementById('mremove');
const monsterimg=document.getElementById('monsterimg');
const cafe=document.getElementById('cafe');
smplaceBtn.addEventListener("click", () => {
if(coinCount>=350){
coinCount-=350;
kawaiiImg.style.display = "block";
priceTextsm1.style.display='none';
}
if(priceTextsm1.style.display !== 'none'){
  alert('not enough coins')
}
else{
  kawaiiImg.style.display = "block";
priceTextsm1.style.display='none';
}
});
smremoveBtn.addEventListener("click", () => {
kawaiiImg.style.display = "none";
})
sm1Place.addEventListener("click",()=>{
if(coinCount>= 450){
coinCount-= 450;
cute_animatedimg.style.display = "block";
priceTextsm2.style.display='none';
}
if(priceTextsm2.style.display!=='none'){
alert("Not enough coins!");
}
else{
cute_animatedimg.style.display = "block";
priceTextsm2.style.display='none';
}  
})
sm1remove.addEventListener("click",()=>{
 cute_animatedimg.style.display = "none";
})

mirrorPlace.addEventListener('click',()=>{
if(coinCount>= 3000){
coinCount-= 3000;
 mirrorimg.style.display="Block";
priceTextsm4.style.display='none';
}
if(priceTextsm4.style.display!=='none'){
alert("Not enough coins!");
}  
else{
 mirrorimg.style.display="Block";
priceTextsm4.style.display='none'; 
}  
})
mirrorRemove.addEventListener('click',()=>{
   mirrorimg.style.display="none";
})
succPlace.addEventListener('click',()=>{
  if(coinCount>= 5000){
coinCount-= 5000;
 cactusimg.style.display="Block";
priceTextsm5.style.display='none';
}
if(priceTextsm5.style.display!=='none'){
alert("Not enough coins!");
}  
 else{
   cactusimg.style.display="Block";
priceTextsm5.style.display='none';
 } 
})
succRemove.addEventListener('click',()=>{
  cactusimg.style.display="none";
})
BcacPlace.addEventListener('click',()=>{
 if(coinCount>= 1500){
coinCount-= 1500;
sacculentimg.style.display="block"; 
priceTextsm3.style.display='none';
}
if(priceTextsm3.style.display!=='none'){
alert("Not enough coins!");
} 
else{
  sacculentimg.style.display="block"; 
priceTextsm3.style.display='none';
}
})
BcacRemove.addEventListener('click',()=>{
  sacculentimg.style.display="none";
})

mplace.addEventListener("click", () => {
if(coinCount>=100000){
coinCount-=100000;
monsterimg.style.display = "block";
priceTextsm6.style.display='none';
}
if(priceTextsm6.style.display!=='none'){
alert("Not enough coins!");
}
else{
  monsterimg.style.display = "block";
priceTextsm6.style.display='none';
}
});
mremove.addEventListener("click", () => {
monsterimg.style.display = "none";
})
//decore part end

//cat part start
const catCushion=document.getElementById('catCushion');
const cushionImages=[
"images/cusion_1-removebg-preview.png",
"images/cusion_2-removebg-preview.png",
"images/cusion_3-removebg-preview.png",
"images/cusion_4.png"
];
const catfood=[
  "images/cat_food_1.png",
  "images/cat_food_2.png",
  "images/cat_food_3.png",
"images/cat_food_4.png"
]
const foodBubble=document.getElementById('foodBubble');
 const sittingcat = document.getElementById("sittingcat");
const catlover=[
  "images/momo-Photoroom.png",
  "images/cat_lover1.png",
  "images/cat_lover_2.png"  
]

function getRandomcatfood(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
foodBubble.style.display = 'none';
function getRandomcatfood(array) {
  return array[Math.floor(Math.random() * array.length)];
}
const showFoodBubble = () => {
foodBubble.innerHTML = '';
 
  const catFoodImages = document.createElement('img');
  catFoodImages.src = getRandomcatfood(catfood);
  catFoodImages.style.width = '100%';
  foodBubble.appendChild(catFoodImages);


  foodBubble.style.display = 'flex';


const hideTimeOut= setTimeout(() => {
    foodBubble.style.display = 'none';
  }, 10000);
  foodBubble.addEventListener('click', function clickHandler() {
    clearTimeout(hideTimeOut); 

   
    coinCount += 5;
  foodBubble.querySelector('img').src = "images/smile.png";

setTimeout(() => {
      foodBubble.style.display = 'none';
    }, 1000);

    foodBubble.removeEventListener('click', clickHandler);
  });

};
showFoodBubble();
setInterval(showFoodBubble, 12000);
//roaming cat part start
const roamingCat=document.getElementById('roamingCat');
function showRoamingCat() {
 
  const maxX = cafe.offsetWidth - roamingCat.offsetWidth;
  const maxY = cafe.offsetHeight - roamingCat.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  roamingCat.style.left = randomX + 'px';
  roamingCat.style.top = randomY + 'px';

  roamingCat.style.display = 'block';
}
roamingCat.addEventListener('click', () => {
   coinCount+=7;
  coinDisplay.innerHTML=coinCount;
  roamingCat.style.display = 'none';
});

setInterval(showRoamingCat, 5*60*2000);
//roaming cat part end

//toy lover cat part start
const toyloverCat=[
"images/cat_2.png",
"images/cat_3.png"
]
const catToy=[
  "images/toy1.png",
  "images/toy2.png",
  "images/toy3.png",
 "images/toy4.png"
]

  
  
//toy lover cat part end
//cat part end
const tableImages=[
  [ 
    "images/table.png",
    "images/table.png",
    "images/table.png"
  ],
  [
    "images/table_2.png",
    "images/table_2.png",
    "images/table_2.png"
  ],
  [
    "images/table_3.png",
    "images/table_3.png",
    "images/table_3.png"
  ],
  [
    "images/table_4.png",
    "images/table_4.png",
    "images/table_4.png"
  ]
]
// table update by level part start
const multitable=Array.from(document.querySelectorAll(".table"))

const tableUpdate=()=>{
multitable.forEach((t,index)=>{
t.style.backgroundImage=`url('${tableImages[level-1][index]}')`;
t.style.backgroundSize = "contain";
t.style.backgroundRepeat = "no-repeat";
t.style.backgroundPosition = "center";
})
}
// table update by level part end
//customer png img array
const customerImages = [
  "images/person1.png",
  "images/person2.png",
  "images/person3.png",
  "images/person4.png",
  "images/person9.png",
  "images/person_7.png",
  "images/person_8.png"
];
//food png img array
const foodImages = [
  ["images/cappuccino.png",
  "images/hot-americano.png",
  "images/iced-coffee.png",
  "images/latte-art.png",
  "images/cookie.png",
  "images/mocha.png"],
  ["images/sandwitch.png",
"images/bagel.png",
"images/croissant.png",
"images/mini-quiche.png",
"images/parfait.png",
],
["images/biryani.png",
"images/brownies.png",
"images/chicken.png",
"images/herbal-tea.png",
"images/ice-tea.png",
"images/piece-of-cake.png",
"images/smoothie_mango.png",
"images/smoothie_srrawberry.png"
],
[
  "images/hot-chocolate.png",
  "images/drink.png",
  "images/macaron.png",
  "images/tea.png",
  "images/old-fashioned.png",
  "images/steak.png",
  "images/spaghetti.png",
  "images/macaroni.png",
  "images/fried-chicken.png",
  "images/pizza.png",
  "images/fried-rice.png"
]
];
//case img png
const displayCaseImages=[
'images/display_case_1-removebg-preview.png' ,
'images/display_case_2_-removebg-preview.png' ,
'images/display_case_3-removebg-preview.png',
'images/display_case_4-removebg-preview.png'
]
// rendom thinh=ngs generator
const getRandomImage = (arr) => {
  if (!arr || arr.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
const getRandomFoodByLevel=()=>{
  const curr=foodImages[level-1]
    const randomIndex = Math.floor(Math.random() * curr.length);
    return curr[randomIndex]
}

const tables = Array.from(document.querySelectorAll(".table"));
const tableStat = {};
tables.forEach(t => tableStat[t.id] = false);
// create cutomer
const createCustomer = () => {

  const freeTables = tables.filter(t => !tableStat[t.id]);
  if (freeTables.length === 0) {
 
    return;
  }

  const emptyTable = freeTables[Math.floor(Math.random() * freeTables.length)];
  tableStat[emptyTable.id] = true;
  emptyTable.style.opacity = "0.5";

  const customer = document.createElement('div');
  customer.classList.add('customer');

  const customer_Image = document.createElement('img');
  customer_Image.src = getRandomImage(customerImages);
  customer_Image.style.width = '100%';
  customer.appendChild(customer_Image);
if(coinCount>=level*100 && level<4){

level+=1;


levelDisplay.innerText=level;
caseDisplay.style.backgroundImage=`url('${displayCaseImages[level-1]}')`
catCushion.style.backgroundImage=`url('${cushionImages[level-1]}')`
tableUpdate();
Swal.fire({
      title: `🎉 Level ${level} Unlocked!`,
      text: "New food unloacked!",
      icon: "success",
      confirmButtonText: "Ok 😺",
      
      background: "#fffbea",
      color: "#5a3e2b",
        position: "top",   
  customClass: {
    popup: 'small-swal-popup'
  },
  backdrop: false 
    });
    showToast(`🎉 Level ${level} Unlocked! new display and case!`);
}
  
  const randomFood = getRandomFoodByLevel();
  const questionBubble = document.createElement('div');
  questionBubble.classList.add('question');
  questionBubble.innerHTML = `<img src="${randomFood}" alt="food" style="width:40px; height:40px;"/>`;
  customer.appendChild(questionBubble);
let serve=false;
const serving_Time_out=setTimeout(()=>{
    if(!serve){
        questionBubble.innerHTML = `<img src="images/angry.png" alt="food" style="width:40px; height:40px;"/>`;;
        setTimeout(() => {
      customer.style.left = cafe.offsetWidth + 100 + 'px';
      setTimeout(() => {
        customer.remove();
        tableStat[emptyTable.id] = false;
        emptyTable.style.opacity = "1";
           coinCount -= 1; 
        if (coinCount < 0) coinCount = 0; 
        coinDisplay.innerText = coinCount;
      }, 1500);
    }, 1000);
  }
},5000)
  const cafe = document.getElementById('cafe');
  cafe.appendChild(customer);

  customer.style.left = '-100px';
  customer.style.top = '400px';

  const tableRect = emptyTable.getBoundingClientRect();
  const cafeRect = cafe.getBoundingClientRect();

  const targetX = tableRect.left - cafeRect.left + 20;
  const targetY = tableRect.top - cafeRect.top - 40;

  setTimeout(() => {
    customer.style.left = targetX + 'px';
    customer.style.top = targetY + 'px';
  }, 200);
//click event on question bubble
  questionBubble.addEventListener('click', () => {
     if (serve) return; 
     serve = true;
  clearTimeout(serving_Time_out); 
    const tableFood = document.createElement('img');
    tableFood.src = randomFood;
    tableFood.style.width = '35px';
    tableFood.style.height = '35px';
    tableFood.style.position = 'absolute';
    tableFood.style.left = (tableRect.left - cafeRect.left + 57) + 'px';
    tableFood.style.top = (tableRect.top - cafeRect.top - 30) + 'px';
    cafe.appendChild(tableFood);
    questionBubble.innerHTML = '❤️';

    setTimeout(() => {
      tableFood.remove();

   
      customer.style.left = cafe.offsetWidth + 100 + 'px';
      setTimeout(() => {
        customer.remove();
        tableStat[emptyTable.id] = false; // table free
        emptyTable.style.opacity = "1";

        // coin update
        coinCount += 10;
        coinDisplay.innerText = coinCount;
      }, 1500);
    }, 2000);
  });
};


setInterval(createCustomer, 3000);
// toaster function
function showToast(message){
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.position = 'fixed';
  toast.style.top = '20px';
  toast.style.right = '20px';
  toast.style.background = '#fffae3';
  toast.style.color = '#5a3e2b';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '10px';
  toast.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.5s ease';
  toast.style.zIndex = '1000';
  document.body.appendChild(toast);

  setTimeout(()=> toast.style.opacity = '1', 100);
  setTimeout(()=>{
    toast.style.opacity = '0';
    setTimeout(()=> toast.remove(), 500);
  }, 3000);
}
 const modal = document.getElementById("decorModal");
 const decorBtn = document.querySelector(".decor-btn");
 const closeBtn = document.querySelector(".close-btn");
 //decor ingrediendient place and remove option
decorBtn.addEventListener("click", () => {
 modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
 modal.style.display = "none";
});



