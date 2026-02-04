function spreadfun() {
    var paramater = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paramater[_i] = arguments[_i];
    }
    console.log(paramater);
}
spreadfun();
spreadfun(101);
spreadfun(null, null);
spreadfun(undefined, undefined);
spreadfun(1, 2, 3, 4, 5, 6);
spreadfun("Sai", "giri", "gowri");
