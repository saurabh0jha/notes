
const bracketsMap = {
	"}": "{",
  "]": "[",
  ")": "(",
  "{": "}",
}

const isBalancedParanthesis = (input) => {
	const stack = [];
	for(let idx=0; idx<input.length; idx++){
  	const stackEnd = stack.length - 1;
    const currentChar = input.charAt(idx);
  	if(stackEnd >= 0 && stack[stackEnd] === bracketsMap[currentChar]){
    	stack.pop();
      console.log(1, {stack});
    } else {
    	stack.push(currentChar);
      console.log(2, {stack});
    }
  }
  
  if(stack.length === 0) {
  	return true;
  } else {
  	return false;
  }
}

console.log(isBalancedParanthesis("{{{}}{}[]}"))
console.log(isBalancedParanthesis("{[}"))
console.log(isBalancedParanthesis("{[}]"))