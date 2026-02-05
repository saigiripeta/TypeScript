function finalfunction(param1, param2, param3) {
    if (param2 === void 0) { param2 = "saigiri"; }
    var param4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        param4[_i - 3] = arguments[_i];
    }
    console.log(param1, param2, param3, param4);
}
//finalfunction();  //Expected at least 1 arguments, but got 0.
finalfunction("saigiri");
finalfunction("saigiripeta", "Hello Angular", "", 1, 2, 3, 4);
finalfunction(undefined, undefined, undefined, undefined);
finalfunction(null, null, null, null);
