console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

const promise1 = new Promise((resolve) => {
    console.log("In Promise")
    resolve()
}).then(() => {
    console.log("Promise 1");
}).then(() => {
    console.log("Promise 2");
});

const promise2 = new Promise((resolve) => {
    console.log("In another promise")
    resolve()
}).then(() => {
    console.log("Promise 3");
    })
    .then(() => {
        console.log("Promise 4");
    });

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");
