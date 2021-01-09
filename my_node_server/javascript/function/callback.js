const printYear = (date) => {
  console.log(date.getUTCFullYear());
};

setTimeout(printYear, 1000, new Date());
// équivalent à
// setTimeout(date => printYear(date), 1000, new Date());
function myFunction(value) {
  //   txt += value;
  console.log(value);
}
for (let value of array) {
  console.log(value); // Will each value in array
}

array.forEach((value, index) => {
  console.log(index); // Will log each index
  console.log(value); // Will log each value
});
