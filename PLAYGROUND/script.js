const myArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

// const myFunction = (arr) => arr
// const myFunction = (arr) => arr.filter((x) => Number.isInteger(x) && x > 0)
const myFunction = (arr) =>
    arr.filter((x) => Number.isInteger(x) && x > 0).map((x) => x * x)

console.log(myFunction(myArray))
