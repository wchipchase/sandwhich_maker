import bread from "../helpers/bread.js";

const addIngredient = (e) => {
    console.log(bread.getBread());
    const breadType = e.target.id;
    console.log(e.target.id);
    const myObj = bread.getBread();
    console.log(myObj[breadType]);

}

export default { addIngredient };