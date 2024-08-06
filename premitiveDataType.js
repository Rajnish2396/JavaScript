
/* ================= List of Perimitive Data Type ==============================*
    1. Number
    2. string
    3. boolean
    4. undefined
    5. null 
    6. bigind
    7. symboll
*/

// 1. Number
    console.log('-------------Number Data Type Start Form Here-------------')
    console.log(typeof 9) // print = number
    console.log(typeof 9.5) // print = number
    console.log(typeof -8) // print = number
    console.log(typeof -8.5) // print = number
    let num1 = typeof 9;   console.log(typeof num1) // print = string
    console.log(typeof NaN) //print Number

            console.log('--Convert Number to String--')
            //**==Convert Number to String==**/                                         
                console.log(typeof '100') // print =string
                console.log(typeof 100 + '') // print =string
                console.log(typeof '' + 100) // (string+100 )|| print =string100
                console.log(typeof 100 + 'rs') // (string+rs )|| print =stringrs 


// 2. String
     console.log('-------------String Data Type Start Form Here-------------')
    //A. use singale quote
        console.log(typeof ' ') // print = string    
        console.log(typeof '100') // print =string
        console.log(typeof 'Hello My name is Rajnish') // print = string

    //B. use double quote
        console.log(typeof " ") // print = string    
        console.log("In This Chapter we'will learn data type of JavaScript")  // print =In This Chapter we'will learn data type of JavaScript
    //C. Template literal     
    console.log(` Hello, My Name is ram. i w'll learn English. 
                        My age is 30.`)

       
            console.log('--Convert Number to String--')
            //**==Convert String to Number (using "+" && "-" Sign)==**/
                    console.log(typeof +"Rajnish Kumar") // print = number
                    console.log(+"Rajnish Kumar") // print NaN
                    console.log(+'100') //print 100 (converting string to Number)
                    console.log(-'100') //print -100 (converting string to Number)
                    console.log(+'100rs')  //print -100 (converting string to Number)
            
            console.log('--Use parseInt--')
            // GET NUMBER VALUE FROM NUMBER WITH STRING USING "parseInt()" Method
                    console.log(parseInt('100rs')) //print 100 (getting Number Value from Number with String)
                    console.log(parseInt('rs100')) //print NaN 

// 3. Bollean
console.log('-------------Boolean Data Type Start Form Here-------------')
        console.log(true) //print = true
        console.log(typeof true) //print = boolean
        console.log('conver boolean to  Number')
        console.log(+true) // print = 1
        console.log(+false) // print = 0

// 4. undefined
    console.log('-------------undefined Data Type Start Form Here-------------')
    let a;
    console.log(a) //print = undefined
    console.log(typeof a) //print = undefined
    console.log(+a)  //print = NaN

// 5. null
    console.log('-------------null Data Type Start Form Here-------------')
    console.log(null) //print = null
    console.log(typeof null) //print = object 
                            //(it is a bug of javaScript, Beacuse null is a already data type of javaScript. But His data type show "object". So it is a bug)
    console.log(+null) // print =0
    console.log(-null) // print =-0

// 6. bigInt
    console.log('-------------bigInt Data Type Start Form Here-------------')

    console.log(999999999999999) //whent use 15 time 9 that time print =999999999999999
    console.log(9999999999999999) //whent use more 16 time 9 that time print =10000000000000000 (10 + 15 time zero)
    






   
