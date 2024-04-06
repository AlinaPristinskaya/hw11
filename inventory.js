// Define object constructor function
function Shoes(name, productCode, quantity, price) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.price = price;
}

// Create instances of the Shoes object
let inventory = [
    new Shoes("Nike Air Force 1", "NIK001", 20, 100),
    new Shoes("Adidas Superstar", "ADI002", 15, 90),
    new Shoes("Puma Suede", "PUM003", 25, 80),
    new Shoes("Reebok Classic", "REE004", 18, 95),
    new Shoes("Converse Chuck Taylor", "CON005", 22, 85)
];

// Function to search for a shoe within the array
function searchShoe(productCode) {
    let result = inventory.find(shoe => shoe.productCode === productCode);
    console.log("Search Result:");
    console.table([result]);
}

// Function to find the shoe with the lowest value per item
function findLowestPriceShoe() {
    let lowestPriceShoe = inventory.reduce((min, shoe) => (shoe.price < min.price) ? shoe : min);
    console.log("Shoe with the lowest price item:");
    console.table([lowestPriceShoe]);
}

// Function to find the shoe with the highest value per item
function findHighestPriceShoe() {
    let highestPriceShoe = inventory.reduce((max, shoe) => (shoe.price> max.price) ? shoe : max);
    console.log("Shoe with the highest price item:");
    console.table([highestPriceShoe]);
}

// Function to edit all four properties for each of the five shoe instances
function editShoes(name, productCode, quantity, price) {
    inventory.forEach(shoe => {
        shoe.name = name;
        shoe.productCode = productCode;
        shoe.quantity = quantity;
        shoe.price = price;
    });
    console.log("All shoe instances edited successfully.");
}

// Function to order all the objects in ascending order based on the “Value per item” property
function orderByValue() {
    inventory.sort((a, b) => a.price - b.price);
    console.log("Shoes ordered by value price item (ascending):");
    console.table(inventory);
}

// Test the functions
searchShoe("ADI002");
findLowestPriceShoe();
findHighestPriceShoe();
// editShoes("Edited Shoe", "EDT001", 10, 75);
orderByValue();
