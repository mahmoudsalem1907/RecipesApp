// let allRecipes = [];
// let recipeDetails = {};
// let searchInput = document.getElementById("searchInput");
// let searchBtn = document.getElementById("searchBtn");

// async function getRecipes(term) {
//   let apiResponse = await fetch(
//     `https://forkify-api.herokuapp.com/api/search?&q=${term}`
//   );
//   allRecipes = await apiResponse.json();
//   allRecipes = allRecipes.recipes;
//   displayRecipes();
// }

// function displayRecipes() {
//   let cartoona = ``;

//   for (let i = 0; i < allRecipes.length; i++) {
//     let myId = "'" + allRecipes[i].recipe_id + "'";
//     cartoona += `
//         <div class="col-md-4">
//         <div class="recipe" onclick="getRecipeDetails(${myId})">
//           <img class="w-100" src="${allRecipes[i].image_url}" alt="">
//             <h3 class="color-mine py-1">${allRecipes[i].title}</h3>
//             <p>${allRecipes[i].publisher}</p>
//         </div>

//       </div>
//         `;
//   }

//   document.getElementById("recipesRow").innerHTML = cartoona;
// }

// async function getRecipeDetails(id) {
//   let apiResponse = await fetch(
//     `https://forkify-api.herokuapp.com/api/get?rId=${id}`
//   );
//   recipeDetails = await apiResponse.json();
//   recipeDetails = recipeDetails.recipe;
//   displayRecipeDetails();
// }

// function displayRecipeDetails() {
//   let cartoona2 = ``;

//   for (let x of recipeDetails.ingredients) {
//     cartoona2 += ` <li class="d-flex py-1 align-items-center font-weight-bolder"><span class="fa-li"><i class="fas fa-utensil-spoon"></i></span>${x}</li>
//         `;
//   }
//   let cartoona = ` <div class="recipeDetials ">
//     <h2 class="color-mine py-1">${recipeDetails.title}</h2>
//     <img src="${recipeDetails.image_url}" class="w-100" alt="">
//     <ul class="fa-ul py-3">
//     ${cartoona2}
//     </ul>
//   </div>`;

//   document.getElementById("recipeDetails").innerHTML = cartoona;
// }

// searchBtn.addEventListener("click", function () {
//   getRecipes(searchInput.value);
// });

let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let allRecipes = [];
let allRecipesDetails = {};
searchBtn.addEventListener("click", function () {
  console.log(searchInput.value);
  getAllData(searchInput.value);
});

async function getAllData(term) {
  let apiResponse = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=${term}`
  );
  allRecipes = await apiResponse.json();
  allRecipes = allRecipes.recipes;
  displayAllData();
  console.log(allRecipes);
}
function displayAllData() {
  let hamada = ``;
  for (let i = 0; i < allRecipes.length; i++) {
    let myId = "'" + allRecipes[i].recipe_id + "'";
    hamada += `<div class="col-md-4" onclick="getAllDataDetails(${myId})">
    <div class="recipe" >
    <img
          src="${allRecipes[i].image_url}"
          class="w-100"
          alt=""
          srcset=""
        />
        <h3 class="fw-bold">${allRecipes[i].title}</h3>
        <p>${allRecipes[i].publisher}</p>
    </div>
        
      </div>`;
  }
  document.getElementById("recipesRow").innerHTML = hamada;
}
async function getAllDataDetails(id) {
  let apiResponse = await fetch(
    `https://forkify-api.herokuapp.com/api/get?rId=${id}`
  );
  allRecipesDetails = await apiResponse.json();
  allRecipesDetails = allRecipesDetails.recipe;
  console.log(allRecipesDetails);
  displayAllDataDetails();
}

function displayAllDataDetails() {
  let cartonna = ``;
  for (let x of allRecipesDetails.ingredients) {
    cartonna += `
        <li class="my-2 d-flex">
        <span class="py-3 fa-li align-self-center"
          ><i class="fa-solid fa-spoon align-self-center"></i></span
        >${x}
      </li>`;
  }
  let hamda = ``;
  hamda += `<div>
    <h2>${allRecipesDetails.publisher}</h2>
    <img src="${allRecipesDetails.image_url}" class="w-100" alt="" srcset="" />
    <ul class="fa-ul">
      ${cartonna}
    </ul>
  </div>`;
  document.getElementById("recipeDetails").innerHTML = hamda;
}
