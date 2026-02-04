function Demo() {
    var stdname = "saigiri";
    var result = "pass";
    var marks = 30;
    if (marks < 35) {
        var result = "fail";
        console.log("inside result:" + result);
    }
    console.log("outside result:" + result);
}
Demo();
