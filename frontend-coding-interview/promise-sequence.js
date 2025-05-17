/**
 * Iimplement a function to execute an array of asynchronous tasks
 * sequentially, collecting both resolved values and errors.
 */

const promiseSequence = async (sequence) => {
    const values = [];
    for (const step in sequence){
        const val = await step;
        values.push(val); 
    }

    return values;
}


const randomAsyncFn = (timeout, resolvedValue, isReject) => {
    return async function(){
            return new Promise((resolve, reject) => {
            setTimeout(()=>{
                isReject ? reject(resolvedValue) : resolve(resolvedValue);
            },timeout)
        });
    }
}

const ipSequence = [
    randomAsyncFn(2000, 1, false),
    randomAsyncFn(4000, 2, true),
    randomAsyncFn(2000, 3, false),
    randomAsyncFn(6000, 4, true),
];

const values = await promiseSequence(ipSequence);

console.log({values});

// implement recursive solution
