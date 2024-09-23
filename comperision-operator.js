/*
============ Comperision Operator=======================
1. == equal to
2. !== not equal to 
3. === equal value & equal data type
4. !=== not value & not equal data type
5. > greater then
6. >= greater then or equal to
7. < less then
8. <= less then or equal to

*/
const f1 = 5;
const f2 = 6;
const f3 =5;
const f4= '5';
const f5 ='6'
const f7 = "Ram"
const f8 = 'Ram'
const f9 = 'ram'
const f10 = 'suresj'

/* "===" equal to */
console.log('equal to')
console.log(f1==f2) // false
console.log(f1==f3) // true
console.log(f1==f4) //true
console.log(f1==f5) // false
console.log(f1==f7) //false
console.log(f7==f8) //ture
console.log(f7==f9) //false ---
console.log(f7==f9) // false
console.log(f7 ==f10) //false

/* Diffrent between "!==" not equal to VS '==' equal to*/
    console.log('diffrent between equal to VS not equal to')
    console.log(f1==f2) // false
    console.log(f1!=f2) // true


/* "===" equal value & equal data type */
console.log('equal value to & equal data type')

console.log(f1===f3) // true
console.log(f1===f4) //false
console.log(f1==f5) // false
console.log(f1==f7) //false
console.log(f7==f8) //ture
console.log(f7==f9) //false ---
console.log(f7==f9) // false
console.log(f7 ==f10) //false


/* Diffrent between "!==" not equal to VS '==' equal to*/
console.log('diffrent between "equal value and equal Number to" "VS not equal value and equal Number"')
console.log(f1===f4) // false
console.log(f1!==f4) // true


/* ">"greater number */
console.log('Greater number');
console.log(f1>f2) //false
console.log(f2>f1) //true
console.log(f5>f1) //true
console.log(f1>f3) //false


/* Diffrent between ">" Greater vs ">=" Greater & equal number*/
console.log('Greater vs Greater & Equal number');
console.log(f1>=f3) // ture
console.log(f1>f3) // 


console.log('Less number');
console.log(f1<f2) //true
console.log(f2<f1) //false
console.log(f5<f1) //false
console.log(f1<f3) //false

//less then vs less & Equal number
console.log('less then vs less & Equal number');
console.log(f3<f1) // false
console.log(f3<=f1) // ture

