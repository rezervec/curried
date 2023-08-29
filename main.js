const sum = (func) => {
  return `+${func}`
}
const minus = (func) => {
  return `-${func}`
}
const mult = (func) => {
  return `*${func}`
}
const div = (func) => {
  return `:${func}`
}


// производим операцию с данными из массива
const executeArr = (arr) => {
  const operator = arr[1]
  const value_1 = Number(arr[0])
  const value_2 = Number(arr[2])
  switch (operator) {
    case '+':
      return (value_1 + value_2)
    case '-':
      return (value_1 - value_2)
    case '*':
      return (value_1 * value_2)    
    case ':':
      return (value_1 / value_2)
    default:
      break;
  } 
}


// создаём строку с операцией, а затем массив [число, оператор, число]
const calcData = (value, func) => {
  const arr = (value + func).split(/(\+|-|\*|:)/g)
  return executeArr(arr)
}


const one = (func) => {
  return func ? calcData(1, func) : 1
}
const two = (func) => {
  return func ? calcData(2, func) : 2
}
const three = (func) => {
  return func ? calcData(3, func) : 3
}
const four = (func) => {
  return func ? calcData(4, func) : 4
}
const five = (func) => {
  return func ? calcData(5, func) : 5
}
const six = (func) => {
  return func ? calcData(6, func) : 6
}
const seven = (func) => {
  return func ? calcData(7, func) : 7
}
const eight = (func) => {
  return func ? calcData(8, func) : 8
}
const nine = (func) => {
  return func ? calcData(9, func) : 9
}


console.log( seven(minus(two())) )