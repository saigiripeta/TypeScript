var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    // Adding 'public' here automatically creates the property and assigns the value
    function Product(name, price) {
        this.name = name;
        this.price = price;
        console.log("Base Product: ".concat(this.name, " registered."));
    }
    return Product;
}());
var DigitalProduct = /** @class */ (function (_super) {
    __extends(DigitalProduct, _super);
    // Added the unique 'downloadLink' from Task 1
    function DigitalProduct(name, price, downloadLink) {
        var _this = 
        // 1. super must come FIRST
        _super.call(this, name, price) || this;
        _this.downloadLink = downloadLink;
        // 2. Now we can access 'this'
        console.log("Digital Product: Link is ".concat(_this.downloadLink));
        return _this;
    }
    return DigitalProduct;
}(Product));
// Creating the object
var objsuper = new DigitalProduct("E-Book", 499, "https://store.com");
// You can now access all properties
console.log(objsuper.name); // Output: E-Book
console.log(objsuper.price); // Output: 499
