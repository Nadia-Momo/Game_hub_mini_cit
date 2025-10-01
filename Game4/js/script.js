const scoreDisplay=document.getElementById('score');//score
const timerDisplay=document.getElementById('timer');//timer
const currentDisplay=document.getElementById('current_dish');// dish name
const ingredients=document.getElementById('ingredients');// ingredient list
const main_ingredients=document.getElementById('main_ingredients');

const main_dish=document.getElementById('main_dish');// main dish image
const plate=document.getElementById('plate');// plate for drop
const recipe_book=document.getElementById('recipe_list');// recipe steps
// Game state
completedSteps=[]
let currentStepIndex=0;
let currentDish = null;
let score=0;
let time=180;
let functionCallCount = 0;
// Timer
const countDown=setInterval(()=>{
time--;
  timerDisplay.innerText=time;
if(time<=0){
clearInterval(countDown);
 Swal.fire({
        title: '⏰ Time\'s up!',
        text: `Final Score: ${score} Dish:${functionCallCount}`,
        icon: 'info',
        confirmButtonText: 'OK',
        background: '#f5f5f5',
        color: '#333',
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
    }).then(() => {
functionCallCount=0;
        location.reload(); 
        loadRandomFood();  
    });
}
},1000)
//Dish name.ingedients and recipe
const recepies=[
  {
    name:"Sandwich",
    image:"images/sandwitch.png",
    ingredients:[
      {id:"Bread",src:"images/bread_slices.png"},
      {id:"Cheese",src:"images/cheese.png"},
      {id:"Tomato",src:"images/tomato-slice.png"},
      {id:"Lettuce",src:"images/lettuce.png"}
    ],
recipe: [
  { id: "Bread", step: "Take one slice of bread and place it on a plate." },
  { id: "Lettuce", step: "Put a few lettuce leaves on top of the bread." },
  { id: "Tomato", step: "Add tomato slices over the lettuce." },
  { id: "Cheese", step: "Place a slice of cheese on the tomatoes." },
  { id: "Bread", step: "Cover everything with another slice of bread." }
]
  },
  {
    name:"Pizza",
    image:"images/pizza (1).png",
    ingredients:[
      {id:"Dough",src:"images/naan.png"},
      {id:"Cheese",src:"images/cheese.png"},
      {id:"Tomato",src:"images/tomato-slice.png"},
      {id:"Pepparoni",src:"images/salami.png"}
    ],
 recipe: [
  { id: "Dough", step: "Take pizza base and place it on a plate or baking tray." },
  { id: "Cheese", step: "Spread cheese evenly over the base." },
  { id: "Tomato", step: "Add tomato slices on top of the cheese." },
  { id: "Pepparoni", step: "Place pepperoni slices over the tomatoes." }
]  
  },
  {
    name:"Salad",
    image:"images/salad.png",
    ingredients:[
      {id:"Lettuce",src:"images/lettuce.png"},
      {id:"Tomato",src:"images/tomato-slice.png"},
      {id:"Cucumber",src:"images/cucumber.png"},
      {id:"Carrot",src:"images/carrort.png"},
    ],
 recipe: [
  { id: "Lettuce", step: "Place the Lettuce as the base of the salad" },
  { id: "Tomato", step: "Add the Tomato slices on top" },
  { id: "Cucumber", step: "Mix in the Cucumber slices" },
  { id: "Carrot", step: "Sprinkle the Carrot slices for color and crunch" }
]
  },
  {
    name:"Burger",
image:"images/burger.png",
ingredients:[
  {id:"BunBack",src:"images/bunb.png"},
  {id:"Patty",src:"images/patty.png"},
  {id:"Cheese",src:"images/cheese.png"},
  {id:"Lettuce",src:"images/lettuce.png"},
  {id:"Tomato",src:"images/tomato-slice.png"},
  {id:"Bunfront",src:"images/bunf.png"}
],
recipe: [
  { id: "BunBack", step: "Place the BunBack on the plate" },
  { id: "Patty", step: "Add the Patty on top of the bun" },
  { id: "Cheese", step: "Put a slice of Cheese over the patty" },
  { id: "Lettuce", step: "Add some Lettuce for crunch" },
  { id: "Tomato", step: "Place the Tomato slice on top" },
  { id: "Bunfront", step: "Finally, cover with the BunFront" }
]


  },
  {
    name:"Fruit Bowl",
   image:"images/fruit-salad.png",
   ingredients:[
    {id:"Apple",src:"images/snacking.png"},
    {id:"Banana",src:"images/banana.png"},
    {id:"Orange",src:"images/orange-slice.png"},
    {id:"Strawberry",src:"images/strawberry.png"},
   ],
   recipe: [
  { id: "Apple", step: "Place the Apple slices into the bowl" },
  { id: "Banana", step: "Add the Banana slices on top" },
  { id: "Orange", step: "Arrange the Orange slices around the bowl" },
  { id: "Strawberry", step: "Finish with Strawberries for color and sweetness" }
]
  },
  {
    name:"Pancake",
    image:"images/pancakes.png",
    ingredients:[
      {id:"PancakeBase",src:"images/pancakebase.png"},
      {id:"Butter",src:"images/butter.png"},
      {id:"Syrup",src:"images/syrup.png"},
      {id:"Strawberry",src:"images/strawberry.png"}
    ],
     recipe: [
    { id: "PancakeBase", step: "Place the Pancake Base on the plate" },
    { id: "Butter", step: "Add Butter on top so it melts" },
    { id: "Syrup", step: "Pour Syrup over the pancake" },
    { id: "Strawberry", step: "Decorate with Strawberries" }
  ]
  }
]
// Load a random dish
const loadRandomFood=()=>{
  functionCallCount++;
  document.querySelectorAll("img[data-dropped='true']")
  .forEach(img => img.remove());
 currentStepIndex = 0;  
  ingredients.innerHTML = ""; 
  recipe_book.innerHTML = "";
  plate.innerHTML = ""; 

  const random=Math.floor(Math.random()*recepies.length);
  currentDish=recepies[random];
 currentDisplay.innerText="Current Dish: "+currentDish.name;
main_dish.src=currentDish.image;
main_dish.alt=currentDish.name;

currentDish.ingredients.forEach((product)=>{
  const li=document.createElement("li");
  li.innerText=product.id;
  li.style.color='white';
ingredients.appendChild(li);
  const img=document.createElement("img");
  img.src=product.src;
  img.alt=product.id;
  img.style.width='50px';

  img.setAttribute("draggable","true")
  img.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text/plain",product.id)
  })
  ingredients.appendChild(img);
})
}
// Drop logic
plate.addEventListener("dragover", e => e.preventDefault());
plate.addEventListener("drop", e => {
  e.preventDefault();
  const ingredientId = e.dataTransfer.getData("text/plain");
  const product = currentDish.ingredients.find(p => p.id === ingredientId);
  if (!product) return;

  const droppedImg = document.createElement("img");
  droppedImg.src = product.src;
  droppedImg.alt = product.id;
     
  droppedImg.style.width = "40px";
  droppedImg.style.position = "fixed";  
  droppedImg.style.left = `${e.clientX - 20}px`; 
  droppedImg.style.top = `${e.clientY - 20}px`;
  droppedImg.style.pointerEvents = "none"; 
  droppedImg.dataset.dropped = "true"; 
  document.body.appendChild(droppedImg); 
  if(product.id==='Dough'||product.id==='PancakeBase'){
     droppedImg.style.width='100px';
  }
  else if(product.id==='BunBack'||product.id==='Bunfront'){
     droppedImg.style.width='80px';
  }
  else{
    droppedImg.style.width='50px';
  }
const currentStep=currentDish.recipe[currentStepIndex];
if(currentStep.id === ingredientId ){
 score += 10;
        scoreDisplay.innerText = score;

        const li = document.querySelectorAll('#recipe_list li')[currentStepIndex];
        li.style.textDecoration = 'line-through';
        li.style.textDecorationColor = 'green';

currentStepIndex++;
// correct ingredient
if (currentStepIndex === currentDish.recipe.length) {
  Swal.fire({
    title: '🎉 Dish Completed!',
    text: `Yes, you have successfully made the ${currentDish.name}!`,
    icon: 'success',
    confirmButtonText: 'OK',
    background: '#fff8dc',
    color: '#333',
    timer: 2000, 
        
    timerProgressBar: true,
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
  }).then(() => {
   
    currentStepIndex = 0;
    ingredients.innerHTML = "";
    recipe_book.innerHTML = "";  
    plate.innerHTML = "";  
    setTimeout(() => {
      loadRandomFood();
      currentDish.recipe.forEach((recL) => {
        const recipeList = document.createElement('li');
        recipeList.dataset.id = recL.id;
        recipeList.innerText = recL.step;
        recipeList.style.color = 'white';
        recipe_book.appendChild(recipeList);
      });
    }, 500);
  });
}

}
// wrong ingredient
else{
    Swal.fire({
  title: '💥 Game Over!',
  text: 'Wrong ingredient.',
  icon: 'error',
  confirmButtonText: 'Restart',
  backdrop: `
    rgba(0,0,0,0.4)
    left top
    no-repeat
  `,
  allowOutsideClick: false, 
  allowEscapeKey: false ,
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
}).then(() => {
  
  location.reload(); 
});
  }
});
loadRandomFood();
currentDish.recipe.map((recL)=>{
const recipeList=document.createElement('li')
recipe_book.appendChild(recipeList)
 recipeList.dataset.id = recL.id;
  recipeList.innerText=recL.step
 recipeList.style.color='white'
})
 
