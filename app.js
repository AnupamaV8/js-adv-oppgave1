/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];
const reasonableCostProducts = products.filter(
  (element) => element.price < 200
);
console.log(reasonableCostProducts);

const productNames = products.map((element) => element.name);
console.log(productNames);

const ProductsCategory = products
  .filter((element) => element.category === "electronics")
  .map((element) => element.name);
//const electronicsproductNames = specificProducts

console.log(ProductsCategory);
//console.log(electronicsproductNames);
console.log(products.some((element) => element.price > 1000));

const totalCost = products.reduce(
  (accumulator, element) => accumulator + element.price,
  0
);

console.log(totalCost);
