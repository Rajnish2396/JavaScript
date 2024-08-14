console.log(true? "Rajnish" : "Bharti") //print = Rajnish
console.log(false? "Rajnish" : "Bharti") //print = Bharti
//By Truthy Value
console.log('----BY Truthy Value-----')
console.log(1? "Ajay" : "Verma") //print = Ajay
console.log(2? "Ajay" : "Verma") //print = Ajay
console.log("fsdaf"? "Ajay" : "Verma") //print = Ajay
//By falsy Value 
console.log('----BY Falsy Value----')
console.log(0? "Ajay" : "Verma") //print = Verma
console.log(null? "Ajay" : "Verma") //print = Verma
console.log(null? "Ajay" : "Verma") //print = Verma
console.log(''? "Ajay" : "Verma") //print = Verma
console.log(undefined? "Ajay" : "Verma") //print = Verma

debugger
//Program 1
    console.log('----Program 1----')
    const gener = "F1";
    const userMessage = `${gener.toLowerCase()==='f' ? 'She' : 'He'} is a ${gener.toLowerCase()==='f' ? 'Girl' : 'Boy'}`
    console.log(userMessage)


