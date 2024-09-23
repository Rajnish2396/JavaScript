/*
Q. What is reduce()?
ans : reduce() method is return singale redice value. it has accept  callback() function and initialValue

Suntax : array.reduce(callback(accumulator, currentValue, currentIndex, array){}, initialValue)

"call back function ()" Some pararameter

        1. "first paramater" (accumulator)  : collects previous iterate item of array.

        2. "Second paramerter" : current value 
        3. "Third Parameter" : indexing
        4. "Forth Parameter" : old array

*accumulator (first paramerter) = here colect value of aray
*currentValue


Q. What is an acmulator ? <<====*******(IMPORTANT)*************
ans : acmulator is a  first parameter of "reduce callback() function". that sotres "previous items" of array.
   

Q. what is initialValue in reduce() method ? <<====*******(IMPORTANT)*************
ans : when we use "second parameter" in reduce method that called reduce initalValue.


    Note:=>
        ==>  *1. when we NOT USE "initial value" then Begning iterate         
            for ex 
                "first paramater" of reduce callback function = arr[0]
                second parameter= arr[1]

        ==> *2. when we USE "initial value" then  Begning iterate.
                for ex 
                "First paramater" of reduce callback function = "initial value"
                second parameter= arr[0]



*/

let num1 = [10, 20, 50, 25]


//1. Without inital Value

        console.log("===================Without inital Value======================")

            let outputA = num1.reduce((accumulator_or_reduceValue, currentValue)=>{
                console.log(`Current Value = ${currentValue}`)
                return accumulator_or_reduceValue
            })

            console.log(`Accumulator or ReduceValue = ${outputA}`)



//2. With inital Value
            console.log("===================With inital Value======================")


            let outputB = num1.reduce((accumulator_or_reduceValue, currentValue)=>{
                console.log(`Current Value = ${currentValue}`)
                return accumulator_or_reduceValue
            }, 100)

            console.log(`Accumulator or ReduceValue = ${outputB}`)





//==================Real Example of Map Method ================================
console.log("==================Real Example of Map Method ================================")



    // Real Example 1 : Add total array of value

    let num2 = [20, 50, 60, 500, 90];
    let sum = num2.reduce((x,y)=>{
        return x+y
    })
    console.log(`Total Sum Value of Array = ${sum}`)




    // Real Example 2 : Add total price of product
        let product = [
            {name: "Mouse", price : 200},
            {name : "Keyword", price : 600},
            {name : "Moniter", price: 2000},
            {name : "Mother Board", price :1200 },
            {name : "Camers", price : 2500}
        ]
        let productPrice = product.reduce((reduce, item)=>{        
            return  reduce+item.price
        }, 0)
        console.log(productPrice)



    // Real Example 3 : find maximum falue from array
        let num3 = [20, 50, 60, 500, 90, 600];
        let maimumValue = num3.reduce((max, cur)=>{
            if(max<cur){
                max = cur
            }
            return max
        },0)
        console.log(maimumValue)




    //Real Example 4 : find no of Qunty in  same post
        let employ = [
            {name: "Amit Kumar", post: "Web Designer"},
            {name: "Ankit Thakur", post: "Web Designer"},
            {name: "Rajnish Bharti", post: "Web Developer"},
            {name: "Mayank Mohan", post: "Manager"},
        ]
        let qtyPost = employ.reduce((x, y)=>{
            if(x[y.post]){
               x[y.post] = ++ x[y.post]
            }
            else{
                x[y.post] =1
            }
            return x
        }, {})
        console.log(qtyPost)