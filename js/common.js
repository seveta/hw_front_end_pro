class Bulka {
    constructor(name, size) {
      this.name = name;
      this.size = size;
      this.ingredients = ['cutlet', 'salad', 'tomato'];
    }
    setAdditionalIngredients(ingredients) {
      this.ingredients = this.ingredients.concat(ingredients);
    }
  }

let Hamburger = new Bulka('Hamburger', 'small');
let Cheeseburger = new Bulka('Cheeseburger', 'big');

Hamburger.setAdditionalIngredients(['avocado', 'mushrooms']);
Cheeseburger.setAdditionalIngredients(['onion', 'black pepper']);

console.log(Hamburger); 
console.log(Cheeseburger); 