

 /* Q. What is event loop ?
     ans : event loop handles asynchronous operations. The event loop allows JavaScript to perform non-blocking operations by efficiently managing asynchronous tasks 

     Q. How the Event Loop Works ?
     Ans : to understand Event loop we know some important process

          A) Call Stack : The call stack keeps track of the function calls in a program.  When a function is called.  
                          it's added to the the stack. When the function returns, it is removed from the stack

          B) Web Api's   : Web APIs are provided by the browser some functionalities like setTimeout, 
                           DOM manipulation, HTTP requests etc.

          C)  (Task Queue) : The callback queue is a queue(पंक्ति) that stores callback functions to be executed 
                                           after the asynchronous operations complete

          D) Event Loop : The event loop monitors the call stack and the callback queue. 
                          If the call stack is empty then transfer function() from callQue to CallStack.
                          
                          Sources : https://www.youtube.com/watch?v=MuPqRqwX5U8
 */

                          console.log('program Start')
                          setTimeout(()=>{
                           console.log('B')
                          }, 2000)
                      
                          setTimeout(()=>{
                           console.log('C')
                          }, 5000)
                          
                          console.log('program End')
                    