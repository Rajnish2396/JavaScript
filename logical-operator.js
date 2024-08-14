/*
1. && (And)
2. || (or )
3. ! (not)

*/

// && (both stament must be true)
console.log((5>4)&& (15<10)) //one  statement is  true & another statement is false so, Print = false
console.log((5>4)&& (15>10)) //boths statement are true so, Print = true

console.log('----Age grup Program start form here------')

const age =6
const isSchoolStd = (age >=5) && (age<18) // print = true
const isCollegeStd = (age >=18) && (age<=24) // print = false 
const isStd = isSchoolStd || isCollegeStd // (true || false = true) print = true
console.log(isStd)

// true && falsy value
console.log('----true && falsy value------')
console.log(1 && 2) // print 2
console.log(0 && 2) // print 0
console.log(0 || 2) // print 2
console.log(1 || 2) // print 1
console.log(1 && null) // null
console.log(false && true) //print false
console.log(false || true) // print true
console.log('' && 2) // empy string ''
console.log(Boolean("" && 'Hello')) // false
console.log('' || 'Hello') //Hello
console.log('' || null) //null
console.log('Hello' && null) //null
console.log(null || 'Hello') //Hello
console.log('Hello' || null) //Hello
console.log('hello' && 4+8) //12
console.log('hello' || 4+8) //Hello
console.log(console.log('print'))
console.log('hello' || console.log('print'))
console.log('hello' && console.log('print'))

