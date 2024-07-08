// Ex1

const person = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

function getPersonInfo(p) {
  const firstName = p.name.first;
  const lastName = p.name.last;
  const personAge = p.age;
  const primaryColor = p.favoriteColors[0];
  const secondaryColor = p.favoriteColors[1];

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo(person));

// 1st way

const person2 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

function getPersonInfo({
  name: { first, last },
  age,
  favoriteColors: [primaryColor, secondaryColor],
}) {
  return `${first} ${last} is ${age} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo(person2));

//  2nd way more readable
const person1 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

function getPersonInfo({
  name: { first: firstname, last: lastname },
  age: personage,
  favoriteColors: [primaryColor, secondaryColor],
}) {
  return `${firstname} ${lastname} is ${personage} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo(person1));

// const profile=({
//     name: { first: firstname, last: lastname },
//     age: personage,
//     favoriteColors: [primaryColor, secondaryColor],
//   }) => `${firstname} ${lastname} is ${personage} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
//   console.log(profile(person1));

//  3nd way more readable
const person3 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};
const profile = ({
  name: { first: firstname, last: lastname },
  age: personage,
  favoriteColors: [primaryColor, secondaryColor],
}) =>
  `${firstname} ${lastname} is ${personage} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
console.log(profile(person1));

// Ex2:
function createBook(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
    getSummary: function () {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
}

const book = createBook("1984", "George Orwell", 1949);
console.log(book.getSummary(), book);

//

const users = ({ title, author, year }) => ({
  title: title,
  author: author,
  year: year,
  getSummary: function () {
    return `${title} by ${author}, published in ${year}.`;
  },
});

const book3 = createBook("1984", "George Orwell", 1949);
console.log(book3.getSummary(), book3);

// Ex3:
const userss = [
  {
    id: 1,
    name: "Alice",
    profile: {
      age: 25,
      address: {
        city: "Wonderland",
        zip: "12345",
      },
    },
  },
  {
    id: 2,
    name: "Bob",
  },
];

function displayUserProfile(userId) {
  const user = users.find((u) => u.id === userId);

  const age = user.profile.age;
  const city = user.profile.address.city;

  console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
}

displayUserProfile(1); // Should work
displayUserProfile(2); // Throws  error due to missing profile data =. Hence gracefully handle the case

// create map with reduce
// create filter with reduce

// const sum = [1, 7, 3, 10, 5].reduce((acc, curr) => acc.concat(curr), []);
// highest value in reduce function
const sum = [1, 7, 3, 10, 5];
const max = sum.reduce((acc, curr) => Math.max(acc, curr));

//avg numbers
const sum1 = [1, 7, 3, 10, 5];
let highest = sum.reduce((acc, curr) => acc + curr);
const avg = highest / sum.length;
