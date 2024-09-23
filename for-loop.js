

for(let i = 0; i<10; i++){
    if(i%2==0){
        console.log('Even value is : '+i)
    }
}
// Q. Find the Even value from given array
    let taks1 =[10, 11, 20, 21, 231, 456, 22, 42]
    let evenResult =[]
    for(let i= 0; i<taks1.length; i++){
        if(taks1[i]%2===0){
            evenResult.push(taks1[i])
        }
    }
    console.log(evenResult)
    
//Q. find a unique array from given array
    let taks2 = ["Ram", "Shyam", "Suresh", "Ram", "Shyam", "Suresh"];
    let uniqueArry = ['Ram', 'Shyam', 'Suresh']
    for(let i = 0; i<taks2.length; i++){
        uniqueArry.indexOf(taks2[i]) === -1  ?uniqueArry.push(taks2[i]) :null
        
    }
    console.log(uniqueArry)
