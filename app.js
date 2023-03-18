const app_id="e5e524ed";
const app_key="c57632d4e73d8f46b8c5a5c00e1d2631";
const query="pav bhaji";

var input=document.querySelector("input");

console.log(input);
var button=document.querySelector("button");
console.log(button);

const get_recipe=async ()=>{
    console.log(input);
    const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=${input.value}&app_id=${app_id}&app_key=');
    var data = await response.json();
    console.log(data);}
    //data=data.hits;
    cards.innerHTML="";
    var cards=document.querySelector(".Cards-section");
    for (let i=0;i<data.hits.length;i++){
        cards.innerHTML+=
    <div class="card">
    <div class="card__body">
      <img src= "${data.hits[i].recipe.image}"
      alt="" 
      class="card__image" >
    
      </img>
      <h2 class="card__title">${data.hits[i].recipe.label}</h2>
      <p class="card__description">Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!</p>
    </div>
    <a href="${data.hits[i].recipe.url}"class="card__btn">View Recipe</a>
  </div>
  

};
button.addEventListener("click", get_recipe);
