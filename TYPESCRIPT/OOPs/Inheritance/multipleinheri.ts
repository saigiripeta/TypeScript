class Parent1{
    funPrint():string{
        return "Hello"
    }
}

class parent2{
    funDraw():string{
        return "World"
    }
}

class child1 extends Parent1, parent2{  //Classes can only extend a single class.

}