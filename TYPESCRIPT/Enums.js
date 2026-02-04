function S1() {
    var result;
    (function (result) {
        result[result["pass"] = 123456] = "pass";
        result[result["fail"] = 123457] = "fail";
        result[result["average"] = 123458] = "average";
    })(result || (result = {}));
    //  console.log(result);
    console.log(result.pass);
}
S1();
