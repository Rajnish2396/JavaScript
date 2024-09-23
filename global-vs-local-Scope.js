
/*
=============================================What is Scope> =============================================  

=============================================1. Global Scope =============================================           
        Q. what is global Scope ?
        ans : A variable that we any where in javaScript program
            
            for ex
                let a = 10;
                function abc (){
                    console.log('inner output ' +(a+2))
                }
                    abc()
                    console.log('inner output ' +(a))

        Q. How many Category of global Scope ?
        ans : There are two Category of global Scope
                1. Window Scope : When we use "var keyword", then use "window Scope"
                2. Script Scope : when we use "let, const keyword", then use "Script Scope"

        Q. Diffrent between "Window Object" vs "Script Scope"

            1. When we use "var keyword", then use "window Scope"
               but ,When we use "let , const", then use "script Scope" 

            2. window OBject : we access value (var value) from use of "Window.variableName", or direct name 
               Script Scope  : we access value (let, const) with onlye direct name. (here not use Window.variableName)
                


=============================================2. Local Scope ============================================= 
  Q. what is local Scope ?
   Ans : A variable define in function, block of code, or conditional statement.
         * local cope not access on outside block of code.

    function cde() {
    let b= 10;
    console.log(b) // output =10
   }
   cde()
    console.log(b) //Error : global-vs-local-Scope.js:66 Uncaught ReferenceError: b is not defined


*/

  //=> Global Scope Example
        let a = 10;
        function abc (){
            //"a" is use in block Scope
            console.log('inner output ' +(a+2))
        }
            abc()
             //"a" is use in global Scope
            console.log('inner output ' +(a))

  


   //=> Local Scope Example
        function cde() {
            let b= 10;
            console.log(b) // output =10
        }
        cde()
           // console.log(b) //Error : global-vs-local-Scope.js:66 Uncaught ReferenceError: b is not defined

 

        


