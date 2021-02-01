var myDog = {
// Only change code below this line
"name":"Tommy",
"legs": 4,
"tails":1,
"friends":["Alex", "Max"]

// Only change code above this line
};

/**
* Accesinng Object Properties With Dot Notation
 */
 // Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

/**
 Accessing Object Properties with Bracket Notation
 */
 // Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

/**
Accessing Object Properties with Variables
 */
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber =16;       // Change this line
var player = testObj[playerNumber];   // Change this line

/**
*Delete Properties from a JavaScript Object
 */
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

/**
Using Objects for Lookups
 */
 // Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup= {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

/**
Testing Objects for Properties
 */


function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
/**
Manipulating Complex Objects
Accessing Nested Objects
 */
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

/**
Accessing Nested Arrays
 */
 // Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

/**
Record Collection
 */

 // Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line

  function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}



updateRecords(collection, 5439, 'artist', 'ABBA');
