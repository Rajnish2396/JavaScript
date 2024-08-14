let obj1 = {
    fname: "Rajnish"
}
   console.log(obj1) //{fname: 'Rajnish'}
// add new value in obj1
    obj1.lnames = "Bharit";
    obj1.age = 12;
    console.log(obj1) // Print after add "lnames" & "age" ==> {fname: 'Rajnish', lnames: 'Bharit', age: 12};

    //Edit object
    obj1.fname = "Amit";
    console.log(obj1) // Print after Edit "fname"  ==> {fname: 'Amit', lnames: 'Bharit', age: 12}

    //deleate property
    delete obj1.fname; 
    console.log(obj1) // Print after delete "fname"  ==>  {lnames: 'Bharit', age: 12}





