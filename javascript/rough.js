// Pollyfill
// map

const myArr = [1, 2, 3, 4, 6, 7];
// arr.map((element, index, arr) => {});

Array.prototype.myMyfilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};
console.log(
  myArr.myMyfilter((num) => {
    return num < 5;
  })
);
