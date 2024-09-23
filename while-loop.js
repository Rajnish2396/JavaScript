let student = ["Ram", "Suresh", "Ganesh", "Mahesh"];
console.log(student)
    let i =0;
    while(i<student.length){
        console.log(`${i+1}. ${student[i]}`)
        i++
    }
  
//Q1. create one new array when number is greatter then 10 in given array using while loop

    let arr1 = [1, 2, 12, 3, 33, 4, 44, 5, 55, 6, 66, 7, 77, 8, 88, 9, 99, 10, 100]
    let newArr1 =[]
   
    while(i<arr1.length){
        arr1[i]>=10?newArr1.push(arr1[i]):null
        i++
    }
    console.log(newArr1)

//Q2. find the  unique number from given array
    // let arr = ["Ram","Shyam", "Suresh", "Ram"] 
    // let uniqueArr =[];  
    // let nm= 0  
    // while (nm < arr.length) {
    //     uniqueArr.indexOf(arr[nm]) === -1?  uniqueArr.push(arr[nm]):null
    //     nm++;
    // }
    // console.log(uniqueArr)

//Q3. find the maximum value from array
    let numArray = [10, 20,  50, 2, 3, 9, 90, 6, 60, 100]
    let maxVal = numArray[0];
    let n1 =0;
    while(n1<numArray.length){
        numArray[n1]> maxVal? maxVal=numArray[n1]:null
        n1++
    }
    console.log(maxVal)
      
           