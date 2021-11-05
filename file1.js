function x(a) {


    return function y(b) {

        return a + b

    }
}

console.log(x(5)(6))