/**
 * Problem Statement: implement a calculator class with methods for addition,
 * subtraction, and multiplication, supporting method chaining.
 * eg: calculator.add(3).multiply(4).subtract(5).getValue()
 */

class ChainedCalculator {
    
    constructor(initialValue=0){
        this.value = initialValue;
    }

    add(addee){
        this.value += addee;
        return this;
    }

    multiply(multiplyee){
        this.value *= multiplyee;
        return this;
        
    }

    subtract(subtractee){
        this.value += subtractee;
        return this;
    }

    divide(dividee){
        if(dividee === 0){
            throw new Error("Calculator is good but we still cannot divide by 0");
        }
        this.value /= dividee;
        return this;
    }

    getValue(){
        return this.value;
    }
}

const calculator = new ChainedCalculator();

val = calculator.add(3).multiply(4).subtract(5).divide(0).getValue()

console.log(val);