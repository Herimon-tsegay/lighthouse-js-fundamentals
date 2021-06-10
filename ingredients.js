


const ingredients = ["eggs","milk","flour","sugar","baking soda","baking powder","chocolate chips","bananas"];

 /*  while loop 

console.log("Ingredients List:")
let i=0;
  while (i< ingredients.length){
  console.log(ingredients[i]);
  i++;
}
*/


/*For loop

console.log("Ingredients List :");
for(let i=0;i< ingredients.length;i++){
  console.log(ingredients[i]);
}
*/


//Reverse Ingredients list(for loop)
console.log("Ingredients List :");
for(let i=ingredients.length-1;i>=0;i--){
  console.log(ingredients[i]);
}

//Reverse Ingredients list (while loop)
console.log("Ingredients List:")
let i=ingredients.length-1;
  while (i>= 0){
  console.log(ingredients[i]);
  i--;
}