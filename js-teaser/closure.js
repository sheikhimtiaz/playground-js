function mul(a) {
    if(a == undefined) {
        return "Add some numbers!";
    }
    return function(b) {
        if(b == undefined) {
            return a;
        }
        return mul(a * b);
    }
}

console.log(mul(2)(5)());
console.log(mul(1)(2)(3)(4)(5)());
console.log(mul(9)(9)());
console.log(mul(100)());
console.log(mul());

