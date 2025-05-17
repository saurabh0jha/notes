/**
 * Pipe - Create a pipe function that takes a series of functions and executes them
 * from left to right on an input value.
 * 
 * Compose - Create a compose function that takes a series of functions and executes them 
 * from right to left on an input value
 */

const pipe = (fns) => {
    let pipedValue;
    return (value) => {
        pipedValue = value;
        for (const fn1 of fns){
            pipedValue = fn1(pipedValue);
        }
        return pipedValue;
    }
}

const compose = (fns) => {
    let pipedValue;
    return (value) => {
        pipedValue = value;
        for (const fn1 of fns.reverse()){
            pipedValue = fn1(pipedValue);
        }
        return pipedValue;
    }
}

const add1 = value => value + 1
const add2 = value => value + 2
const mult2 = value => value * 2
const mult3 = value => value * 3
const sub1 = value => value--;
const sub2 = value => value - 2;

const piped = pipe([add1, mult2, sub1, mult3, add2, sub2]);
const composed = compose([add1, mult2, sub1, mult3, add2, sub2]);

console.log(piped(2))
console.log(composed(3))