var obj2 = {
    product1: 120,
    product2: 130
};
// console.log(obj2.product1);
// console.log(obj2.product2)
var child = /** @class */ (function () {
    function child() {
        this.product1 = "Pen Stand";
        this.product2 = "Book";
    }
    return child;
}());
var ch = new child();
console.log(ch.product1, ch.product2);
