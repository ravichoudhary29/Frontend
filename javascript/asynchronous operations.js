// Asynchronous Operations:
// 1. Callback function

const fetchData = (callback) => {
  console.log("time start");
  setTimeout(() => {
    data = { name: "Ravi", salary: "$40000" };
    console.log("inside setTimeout");
    callback(data);
  }, 2000);
};

fetchData((data) => {
  console.log(data);
});

// 2. Promise

