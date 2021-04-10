const fruit = {
  name:"water melon",
  color:"red"
};
const beverage = {
  name:"milk",
  color:"white"
};
// beverage now reffers to fruit;
const returnedBeverage = Object.assign(beverage, fruit);
console.log(returnedBeverage);
console.log(beverage);

// seal allows modification in existing property but can not add new
Object.seal(fruit);

// freeze not allows modification and additon of properties
Object.freeze(fruit);

// isSealed returns true if object is sealed and vice versa
Object.isSealed(fruit);

// isFrozen returns true if object is frozen and vice versa
Object.isFrozen(fruit);

const keyValue = [['name', 'Ali'],
                  ['Age',20],
                  ['Height', 10]
                  ];
// converts 2d array to object notation
const myObj = Object.fromEntries(keyValue);
console.log(myObj);

// shows only keys(properties not their values)
console.log(Object.keys(myObj));

// show property name (same as keys)
console.log(Object.getOwnPropertyNames(myObj));

// hasOwnProperty returns based on item containing a particular property
console.log(myObj.hasOwnProperty('name')); //true
console.log(myObj.hasOwnProperty('color')); //false
