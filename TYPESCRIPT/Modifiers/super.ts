class Product {
    // Adding 'public' here automatically creates the property and assigns the value
    constructor(public name: string, public price: number) {
        console.log(`Base Product: ${this.name} registered.`);
    }
}

class DigitalProduct extends Product {
    // Added the unique 'downloadLink' from Task 1
    constructor(name: string, price: number, public downloadLink: string) {
        // 1. super must come FIRST
        super(name, price); 
        
        // 2. Now we can access 'this'
        console.log(`Digital Product: Link is ${this.downloadLink}`);
    }
}

// Creating the object
let objsuper = new DigitalProduct("E-Book", 499, "https://store.com");

// You can now access all properties
console.log(objsuper.name);  // Output: E-Book
console.log(objsuper.price); // Output: 499
