// TODO: Create a multiline string using template literals
const multilineString = `Welcome 
to 
my
website`;

console.log(multilineString);

// TODO: Create a function that uses template literals for HTML generation
function CreateProductCard(title, price, description) {
    return `
    <div class = "product-card">
    <h2>${title}</h2>
    <p class= "price">Price: $${price}</p>
    <p class= "description">${description}</p>
    </div>
    `;
}

const sampleHtml = CreateProductCard("Gaming Laptop", 1000, "A high-end laptop");
console.log(sampleHtml);


// TODO: Convert regular functions to arrow functions

function regularAdd(a, b) {
    return a + b;
}

// Converted to arrow function
const add = (a, b) => a + b;
console.log(add(1, 2));


// TODO: Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers (filtered): ", evenNumbers);

const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers (mapped): ", squaredNumbers);