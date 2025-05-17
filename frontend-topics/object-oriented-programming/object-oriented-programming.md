# Object oriented programming in JS

[Source - demystifying new [freecodecamp]](https://www.freecodecamp.org/news/demystifying-javascripts-new-keyword-874df126184c)

## Objects

- An object in JavaScript is a collection of key-value pairs.
- These key-value pairs are properties of the object.
- A property can be
  - array
  - function
  - an object itself
  - primitive data type - string/integer

## How to create objects

with **Pros** and **Cons**

See [prototypes code snippet file](prototypes.js)

### 1. Object Literal Notation

    Pros: simple to implement
    Cons: repetitive if we want many objects
    Cons: if property is a function, function code (and memory) is recreated & repeated for all objects.

### 2. Object.create()

    Pros: support for creating prototype
    Cons: repetitive if we want many objects
    Cons: if property is a function, function code (and memory) is recreated & repeated for all objects.

### 3. Generate objects using a function

    Pros: simple to implement
    Pros: repetition of logic is avoided
    Cons: if property is a function, function code (and memory) is recreated & repeated for all objects.

### 4. Using the prototypal nature of JavaScript

    Pros: repitition of logic is avoided
    Pros: properties which are functions reside in the prototype code and referenced by all objects using prototype chain, saving memory and enhancing extensibility.
    Cons: verbose, API is unclear and slightly hard to understand

### 5. Using `new` and `this` keywords

    Algorithm(Steps) new keyword does for us:
    * A new object is created
    * It binds this to the object
    * The constructor function’s prototype object becomes the proto property of the new object
    * It returns the object from the function

    Pros: repitition of logic is avoided
    Pros: properties which are functions reside in the prototype code and referenced by all objects using prototype chain, saving memory and enhancing extensibility.
    Pros: simpler API - doesnt call Object create low-level function, prototype chain is explicit.
    Prototype is a property of the constructor function that determines what will become the proto property on the constructed object.

    So, proto is the reference created, and that reference acts as the prototype chain bond.

    Note: technically, any function (except arrow functions, as they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.

### 6. ES6 class syntax sugar

    Pros: repitition of logic is avoided
    Pros: properties which are functions reside in the prototype code and referenced by all objects using prototype chain, saving memory and enhancing extensibility.
    Pros: simpler standard API - doesnt call Object create low-level function.
    Cons: hides internal prototypal chain which is still created same way as option 5.

## Constructor, prototypes and new

### Constructor mode test: new.target

Inside a function, we can check whether it was called with new or without it, using a special new.target property.

It is undefined for regular calls and equals the function if called with new. Used in library code to add syntax sugar. see See [advanced OOPS](advanced.js)

### Return from constructors

Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

- If return is called with an object, then the object is returned instead of this.
- If return is called with a primitive, it’s ignored.

  In other words, return with an object returns that object, in all other cases this is returned.

### Reading List

[Prototypes in depth](https://javascript.info/prototypes)

[Classes in depth](https://javascript.info/classes)

[prototypes performance](https://www.toptal.com/javascript/javascript-prototypes-scopes-and-performance-what-you-need-to-know)

[more prototypes](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)

[Constructors](https://css-tricks.com/understanding-javascript-constructors/)

[instanceof](https://2ality.com/2017/08/type-right.html)
[InstanceOf](https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac)

[more prototypes](https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e)
[more prototypes](https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl)
