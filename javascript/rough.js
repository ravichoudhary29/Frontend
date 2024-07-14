function whatIsInAName(collection, source) {
  let newCollection = [];
  for (let i = 0; i < collection.length; i++) {
    let keys = Object.keys(collection[i]);
    let values = Object.values(collection[i]);
    for (let j = 0; j < keys.length; j++) {
      if (
        Object.keys(source).includes(keys[j]) &&
        Object.values(source).includes(values[j])
      ) {
        newCollection.push(collection[i]);
      }
    }
  }
  return newCollection;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
