function spreadfun1(param) {
    var param2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        param2[_i - 1] = arguments[_i];
    }
    console.log(param, param2);
}
spreadfun1(12);
spreadfun1(123, "saigiri", "peta", 123);
