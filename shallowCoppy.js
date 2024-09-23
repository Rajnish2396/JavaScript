// when we copy object or Array the reference will be copy not real propety copy

    // 1. Using Array Copy
            let arr1 =['book', 'pencil'] // REFRENCE (MEMORY) VALUE =@6547
            let arr2 =arr1               // REFRENCE (MEMORY) VALUE =@6547

            console.log(arr1) //['book', 'pencil']
            console.log(arr2) //['book', 'pencil']

            //==> Now we want add some value in "arr2" array
            arr2.push('notebook')
            console.log(arr2) //['book', 'pencil', 'notebook']
            console.log(arr1) //['book', 'pencil', 'notebook']

                //PROBLEM : In this example we notice when we changed "arr2[]" then effect "arr2[]" & "arr1[]" both

                        //Q. How to possable ?
                        //ans : because they have same refrences (memory value). so we, need to change his refrences with the tricks of shallo copy
                
                
                    //Q. What is a shallow copy ?        
                    // shallow copy is copy of  top lable object or array. 
                    // "Object.assign(), spread operator (...), slice(), concat() method helps to copy of top label object"
            
            // SOLUTION (Array) : 
                //A : Object.assign()
                    console.log('using Object_assign method')
                    let arr3 =[] // refrese = @142575
                        //arr1 refrence = @6547
                        Object.assign(arr3, arr1)
                        arr3.push('seazer')
                        console.log(arr3) //['book', 'pencil', 'notebook', 'seazer']
                        console.log(arr1) //['book', 'pencil', 'notebook']
                //B : concat
                    console.log('using concat method')
                    let arr4 = [].concat(arr1)
                        arr4.push('printer')
                        console.log(arr4) // ['book', 'pencil', 'notebook', 'printer']
                        console.log(arr1) // ['book', 'pencil', 'notebook']
                
                //C : slice
                    console.log('using slice method')
                    let arr6 = arr1.slice()
                        arr6.push('ball')
                        console.log(arr6) // ['book', 'pencil', 'notebook', 'ball']
                        console.log(arr1) // ['book', 'pencil', 'notebook']

                // D : rest operator (...)
                    console.log('using ... "rest" operator')
                    let arr7 = [...arr1]
                    arr7.push('bat')
                    console.log(arr7)
                    console.log(arr1) // ['book', 'pencil', 'notebook']

      // SOLUTION (Object) : 
          let obj1 = {
            fname:"Rajnish",
            lname : "Kumar"
          }

          // A : Object.assign()
                 let obj2 = {};
                    Object.assign(obj2, obj1);
                    obj2.age = 20;
                    console.log(obj2) //{fname: 'Rajnish', lname: 'Kumar', age: 20}
                    console.log(obj1) //{fname: 'Rajnish', lname: 'Kumar'}
        //B : rest operator (...)
                let obj3 ={...obj1}
                    obj3.age = 25;
                    console.log(obj3) //{fname: 'Rajnish', lname: 'Kumar', age: 25}
                    console.log(obj1) //{fname: 'Rajnish', lname: 'Kumar'}



     
       










