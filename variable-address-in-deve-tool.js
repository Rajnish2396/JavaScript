
const fName = "Rajnish";
const fName2 = "Rajnish";
const lName = "Bharti"
const age = 15;
const isJob =true; // 73
const isMarried = false //75
const userAge = '' // @77 
const nuls = null; //@71
let undefineds =undefined;  //@67
const zeros = 0;     

 /*Note : ==> Know Before JavaScript Memory we need to understand of "Context"


// ==========A. Context Memory=============================
    Context : JavaScript's engine creates a "context (anonymous)" when receiving a script file, known as "Global Execution Context (GEC)".
      *. context has script file. for ex = "variable", "Object", "Object Key"
      *. context has also own memory 
      *. All "variables" has same Context memory


// ========== B. Object Memory=============================
    /*
        1. each object has unique memory
        2. object key has  alse memory
        3. when same type "key value" use in different objects that time "key value" memory has same
        Note : ==> All Memmory has changed when browser will be reopened
    */


// How to Check Memory of JavScript Variable in Browser developer tools
    // step 1 = press ctrl+shift+i
    // step 2 = click "Memory" tab 
    // step 3 = click on "Include numerical values in capture" radio button
    // step 4 = scroll and find "Take snapshoot" then click him.
    // step 5 = after click "Take snapshoot" PRESS "ctrl+f"
    // step 6 = find your "variable string value" (ex = "Rajnish")  then click enter
    // step 7 = Select your finded value (ex = "Rajnish")
    // step 8 = drag Retainers
    // step 9 = select context no ( for ex = @47905) // FIND CONTEXT MEMORY
    // step 10 = find your selected number 
    // step 11 = now click your finded value (ex =  click on  "@47905")
    // final  =  Your value show here