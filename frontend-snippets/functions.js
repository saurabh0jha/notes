const HoCFunction = (fn) => {
	return (...args)=>{
  	console.log(args);
    fn.apply(this, args);
  }
	
}


const internalFn = (a,b,c) => {
	console.log(a+b+c);
}

const nestedFn = HoCFunction(internalFn)();

nestedFn(1,2,3);