import ingredients from "./ingredients.js";
import bread from "../helpers/bread.js";



// grab all ingredient buttons
// find which ingredient you clicked on
// find the price of that ingredient
// add to the cart

const eventFunction= () => {
    const asiagoButton = document.getElementById('asiago');
    const whiteButton = document.getElementById('french-btn');
    const pitaButton = document.getElementById('pita-btn');
    const wheatButton = document.getElementById('wheat-btn');
    const cheddarButton = document.getElementById('cheddar-btn');
    const swissButton = document.getElementById('swiss-btn');
    const americanButton = document.getElementById('american-btn');
    const provoloneButton = document.getElementById('provolone-btn');
    const hamButton = document.getElementById('ham-btn');
    const baconButton = document.getElementById('bacon-btn');
    const salamiButton = document.getElementById('salami-btn');
    const turkeyButton = document.getElementById('turkey-btn');
    const lettuceButton = document.getElementById('lettuce-btn');
    const tomatoButton = document.getElementById('tomato-btn');
    const onionButton = document.getElementById('onions-btn');
    const pickleButton = document.getElementById('pickles-btn');
    const mayoButton = document.getElementById('mayo-btn');
    const mustardButton = document.getElementById('ketchup-btn');
    const ketchupButton = document.getElementById('mustard-btn');
    const vinegarButton = document.getElementById('vinegar-oil-btn');

    asiagoButton.addEventListener('click', ingredients.addIngredient);
    pitaButton.addEventListener('click', ingredients.addIngredient);
    wheatButton.addEventListener('click', ingredients.addIngredient);
    whiteButton.addEventListener('click', ingredients.addIngredient);
    cheddarButton.addEventListener('click', ingredients.addIngredient);
    swissButton.addEventListener('click', ingredients.addIngredient);
    americanButton.addEventListener('click',  ingredients.addIngredient);
    provoloneButton.addEventListener('click', ingredients.addIngredient);
    hamButton.addEventListener('click', ingredients.addIngredient);
    baconButton.addEventListener('click', ingredients.addIngredient);
    turkeyButton.addEventListener('click',  ingredients.addIngredient);
    salamiButton.addEventListener('click',  ingredients.addIngredient);
    lettuceButton.addEventListener('click',  ingredients.addIngredient);
    tomatoButton.addEventListener('click',  ingredients.addIngredient);
    onionButton.addEventListener('click',  ingredients.addIngredient);
    pickleButton.addEventListener('click',  ingredients.addIngredient);
    mayoButton.addEventListener('click',  ingredients.addIngredient);
    ketchupButton.addEventListener('click',  ingredients.addIngredient);
    mustardButton.addEventListener('click',  ingredients.addIngredient);
    vinegarButton.addEventListener('click',  ingredients.addIngredient);
}

export default { eventFunction }