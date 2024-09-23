/* 
    Q. What is call stack ?
    a: JavaScript Call Stack is track the functions in a program. The call stack works on the Last In, First Out (LIFO)

    Q. How to check callStack ?
    a. 
        step 1 : use 'debugger' go dubugger tool using (ctr+shift+i) from keyword>
        step 2 : click fn+f9
        step 3: notice callstack option (here you track current execution position of function)
        
*/

debugger; 
//Ex 1:
    function myfunc_A (){
        let a = 100;
        return a
    }

    let output =myfunc_A()
    console.log(output)

// Ex 2:
function funcA(){
    console.log('func A Execute')
    funcB()
    console.log('out = A')
}
function funcB(){
    console.log('func B Execute')
    funcC()
    console.log('Output = B')    
}

function funcC(){
    console.log('func C Execute')
    console.log('Output = C')    
}
funcA()