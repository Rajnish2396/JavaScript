/*
Q. What is a function ?
ans : A function is a block of code written to perform some specific set of tasks

    1. function
    2. function with return
    3. functiom with argument & return

    note: function has own this

Q. What is function deceleration ?
ans : when we create a function that time we say function deceleration. 
      ex = function func1 (){}

Q. what is anonymous function()?
ans : whe we create a function without name that called anonymous function()



Q. What is function expression ?
ans : when we  assing a function in a varibale that is called function experession

Note : "function experession" is also called "function decelaration" but "function deceleration" is not  "function experession"
    
    

*/

// 1. function (Function Declaration) <======================================

    //Example A :
        function func1 (){
            console.log("hello, My name is Rajnish Bharti");
            console.log("My age is  30 Years");
            console.log('I am Web developer');

        }
        func1()

// 2. function with return : (Function Declaration)
    //Example A :
        function func2 (){
            let name = "Rajnish";
            let age =20;
            let post = "Web Developer";

            return `Hello, My Name is ${name}, and my age is ${age}. I am ${post}`
        }
        let func2Output = func2();
        console.log(func2Output)

    //Example B :
    
        function func3(){
            let name = "Ajay";
            let age  =25;
            let post = "Frontend Developer";
            return `Hello, My Name is ${name}, and my age is ${age}. I am ${post}`
        }
        console.log(func3())

//3. function with argument     
    function func4(name, age, post){
        return console.log(`Hello, My Name is ${name}, and my age is ${age}. I am ${post}`)
    }
    func4("Manyank Kumar", 25, "Software Engineer")
    func4("Nayan Kumar", 25, "Graphics Designer")



    function myVal (x, y){
        for(let i =0; i<myar.length; i++){
          return x+y  
        }
    }
    let xt = myVal(...myar);
    console.log(xt)

//4. function has own this
   debugger
    function func5(){
    console.log('hi use debuger and see this using "dev" tool in browser ')
    }
    func5()
        
//5. Function Expression <======================================
    const square = function(num) {
        return num * num
    }
    console.log(square(10))



