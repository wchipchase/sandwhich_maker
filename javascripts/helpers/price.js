import bread from '../components/bread.js';
import meat from '../components/meat.js';
import veggies from '../components/veggies.js';
import cheese from '../components/cheese.js';


const addMeat = (meatType) => {
  let meatObj = meat.getMeat();
  let price = meatObj[meatType];
  return price;
};

const addVeggie = (veggieType) => {
  let veggieObj = veggies.getVeggie();
  let price = veggieObj[veggieType];
  return price;
};

const addCheese = (cheeseType) => {
  let cheeseObj = cheese.getCheese();
  let price = cheeseObj[cheeseType];
  return price;
};

const addBread = (breadType) => {
  let breadObj = bread.getBread();
  let price = breadObj[breadType];
  return price;
};


export default { addMeat, addVeggie, addCheese, addBread }