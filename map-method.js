'use strict'
/* Q. What is map method ? 
    (यह एक new original array की Coppy  या "updated version of the copied array" को  return करता है )

ans : map method is a high-Order() function. It returns a new coppy of array or an updated version of the copied array. 
      It is use callback function that provides each elemant of array    
            "call back function ()" accept 3 pararameter
                1. "first paramater" : It is provide a Cureent vlue of array
                2. "Second paramerter" : it is return 'indexing of array'
                3. "Third Parameger" : Each loop Return Old array 

        Note :  *. It is return new array
                *. It is not update original array 
                *. When we don't use "return", it returns "undefined"
*/

let num = [10, 20, 30, 50, 100, 120, 200, 250];


// 1. "first paramater" : It is itirate a vlue of array
    console.log('----itirate a vlue of array----')
    num.map((x)=>{    
        console.log(x)        
    })

//2. "second parameter" :  second parameter is retur "Index of Array"
    console.log('----provide index of array----')
    num.map((x, i)=>{
        console.log(i)
    })

//3. "Third Parameter" : each loop return old array 
       console.log('----Each loop Return Old array----')
       num.map((x, i, ind)=>{
         console.log(ind)
        })

//4. Map method returns a new array
    console.log('----Map method returns a new array----')
    let newarr = num.map((x)=>{       
            return `${x}.00`;
    })
    console.log("new array Value")
    console.log(newarr)

//5. Map method not efects  (update) on original array
   console.log('----ap method not efects  (update) on original array----')  
        console.log(num)


//==================Real Example of Map Method ================================

// Real Example 1 : Duble Array
    console.log('----Example of Double Array----')

    let arr = [5, 10, 15, 25]
    let doubleArr = arr.map((x)=>{
        return x*2
    })
    
    console.log(arr)
    console.log(doubleArr)

// Real Example 2 : find product from json
    console.log('----Example of find product from json----')

    const products = [
        { id: 1, name: 'Laptop', price: 800 },
        { id: 2, name: 'Phone', price: 500 },
        { id: 3, name: 'Tablet', price: 300 }
     ];

     const producList = products.map((x)=>{
        return x.name
     })
     console.log(producList)

// Real Example 3 : add discound key in json
    console.log('----Example of find product from json----')

    const products2 = [
        { id: 1, name: 'Laptop', price: 800 },
        { id: 2, name: 'Phone', price: 500 },
        { id: 3, name: 'Tablet', price: 300 }
    ];

    let discountProduct = products2.map((x)=>{
        return {...x, discound :x.price*0.1}
    })
    console.log(discountProduct)

// Real Example 4 : add category = child/adult when age is 18 years
        console.log('----Example add child/adult when age is 18 years----')
        const users = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 35 },
            { name: 'Anish', age: 15 }
        ];
        const updateUser = users.map((x)=>{
            return {...x,  category :x.age >= 18 ? "adult" :"child"}
        })
        console.log(updateUser)






