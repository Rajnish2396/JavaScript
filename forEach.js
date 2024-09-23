/*
Q. what is forEach() method ?
ans : The forEach() method is an iterative method. it take callback function that is return 'undefined'


    
    forEach() method has 3 parameter. 
                1. "first paramater" : it is a 'call back function' that is return a vlue of array
                2. "Second paramerter" : it is return 'indexing of array'
                3. "Third Parameger" : Each loop Return current array 

 Note: forEach() method return "undefined" value

                example =
                let num = [10, 5, 25]
                num.forEach((x), y, z)=>{
                    
                })
                Summery of Example : 
                    *. "First Paramater"    =   "arrow function" is a "first parameter" of forEach Method 
                                                    that is return value of array
                    *.  "Second Paramerter" =  "y" is a "second Parameter" of forEach Method 
                                                    that is return indexing of array
                    *.  "Third Parameter"   =   "z" is a "third parameter" of forEach Method 
                                                    that is return current array

    
   
     
*/

// 1. "First Paramater" : return value of array

        console.log('--------Itirate value of Array-----')

        let stundent = ["Ram", "Shyam",  "Suresh", "Mahesh"];
        stundent.forEach((x)=>{
                console.log(x)
        })


//2. "Second Paramerter" : return index of array
        console.log('--------Retunr index-----')
        let iterateIndex = stundent.forEach((x, index)=>{
            console.log(index)
        })

//3. "Third Paramerter" : return current array
        console.log('--------Retunr Array-----')
        let returnArray = stundent.forEach((x, index, arr)=>{
            console.log(arr)
        })

        

// *. return undefined 

        console.log('--------Retunr undefined-----')

        let returnIndex  = stundent.forEach((x)=>{
            console.log(x)
        })
        console.log(returnIndex)

//==================Real Example of forEach================================



// Real Example 1: Add Array Value

    let num1 =[10, 20, 50]
    let sum =0
    num1.forEach((x)=>{
        sum += x
    })
    console.log('sum value of Array')
    console.log(sum)



// Real Example 2 : 
    let sutdent2 = ["Ram", "suresh", "Mahesh"];

    let friends =  " "
    sutdent2.forEach((x, i)=>{
        friends += x + (i != sutdent2.length-1? ", " : '')
       
    })
    console.log( `I have ${sutdent2.length} friends${friends}`)



// Real Example 3: find Positive & negative Value
    let userId = [10, 20, 45, 569, -45, 89, -69]
    let positive ='';
    let negativeValue = '';
    userId.forEach((x)=>{
        if(x<0){
            negativeValue +=x+ ' '
        }
        else{
            positive += x + ' '
        }
    })
    console.log(positive)
    console.log(negativeValue)



// Real Example 4 : find unique Value
    let arrVal = [1, 2, 1, 2, 5, 6, 1, 2, 6]
    let uniqueValue = []

    arrVal.forEach((x)=>{

        let useUniqu = true;

        uniqueValue.forEach((y)=>{
            x ===y ? useUniqu =false : true                       
        })
        
        useUniqu ? uniqueValue.push(x) :null
       
    })
    console.log(uniqueValue)



// Real Example 5 : find max Value
    let value = [10, 100, 30000, 1000]
    let max =0;
    for(let i = 0; i<value.length; i++){
        let temp =false;
        if(temp<value[i]){
            console.log('fds')
            temp = true;
            //break
        }
        if(temp){
            max = value[i]
        }
    }
    console.log(`Max Value = ${max}`)


  
