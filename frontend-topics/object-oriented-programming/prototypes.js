/**
 * How to create objects
 */

// Option 1 - Object Literal Notation
const user1 = {
  name: "Taylor",
  points: 5,
  increment: function () {
    user1.points++;
  },
};

console.log(user1);

// Option 2 - Object.create()
// Object.create(proto, [ propertiesObject ])

const user2 = Object.create(null);
user2.name = "Saurabh";
user2.points = 10;
user2.increment = function () {
  user2.points++;
};

console.log(user2);

// Option 3 - generate objects using functions

function createUser(name, points) {
  let newUser = {};
  newUser.name = name;
  newUser.points = points;
  newUser.increment = function () {
    newUser.points++;
  };
  return newUser;
}

const user3 = createUser("Sachin", 100);
user3.increment();

console.log(user3);

// Option 4 - use prototypal JS

function createUserWithProto(name, points) {
  let newUser = Object.create(userFunction);
  newUser.name = name;
  newUser.points = points;
  return newUser;
}

let userFunction = {
  increment: function () {
    this.points++;
  },
  login: function () {
    console.log("Please login.");
  },
};

const user4 = createUserWithProto("Bob", 5);
user4.increment();

console.log(user4);

// Option 5: this and new
function User(name, points) {
  this.name = name;
  this.points = points;
}
User.prototype.increment = function () {
  this.points++;
};
User.prototype.login = function () {
  console.log(`Please login.`);
};

const user5 = new User(`Dylan`, 6);
user1.increment();

// Option 6: ES6 class
class UserClass {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }

  increment() {
    this.points++;
  }

  login() {
    console.log("Please login.");
  }
}

const user6 = new UserClass("John", 12);
user6.increment();

console.log(user6);
