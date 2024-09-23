  /*================================================================================== 
                       CREATE OBJECT AND ACCESS HERE 

  ===================================================================================*/

   //1. create object   
     let obj1 = {}; console.log(obj1) //print = {}

    //2. set key value in object
        const obj2 = {
            name:'Rajnish'
        };
        console.log(obj2) //print = {name: 'Rajnish'}

    //3. use "variable" name  as key of Object
        let lasName ="ln";
        const obj3 ={
            fn : "Amit",
            [lasName] : "Kumar"
        }
        console.log(obj3) //print = {fn: 'Amit', ln: 'Kumar'}


    //4. use "variable" name  as key  value
        let fname1 = "Ajeet";
        let lasName1 = "Kumar"
        const obj4 ={
            fn: fname1,
            ln:lasName1
        }
    console.log(obj4) //{fn: 'Ajeet', ln: 'Kumar'}

   
   //5. use key of Object with dash "-" sign
        const obj5 ={
            ["first-name"]:"Rajnish",
            ["last-name"] : "Bharti"
        }
        console.log(obj5)

    //====Access Object Key Value===
        let slry = 12*100/4000+4000
        const employ = {
            fName : "Rajnish",
            lName :"Bharti",
            ['date-of-birth']: '12 feb 2000',
            salary:slry+'K',
            designation: "Java Developer"            
        }
        // access value of object
            console.log(employ.fName) //Print = Rajnish
            console.log(employ.lName) //Print = Bharti
            console.log(employ['date-of-birth']) //Print = 12 feb 2000
            console.log(employ.salary) //Print = 4000.3K
            console.log(employ.designation) //Print = Java Developer
    
    //==== Set inline Key Value in Object===
            employ.empId = 12;
            employ.address= {
                houseNo : 12,
                city : "Mayur Vihar",
                state: "Delhi",
                Pin : 811101
            }
            console.log(employ) 
            /*Print ==
                {
                    date-of-birth: "12 feb 2000",                    
                    designation : "Java Developer",
                    empId : 12, //This Key and value added
                    //This Object, Key value added
                    address:{ 
                        houseNo: 12, 
                        city: 'Mayur Vihar', 
                        state: 'Delhi', 
                        Pin: 811101
                    }
                    fName : "Rajnish",
                    lName : "Bharti",
                    salary:"4000.3K"            
                }
            */
      
   
   
  /*================================================================================== 
                        OBJECT MEMORY START FORM HERE
  ===================================================================================*/
   
   
   
   /*Note : ==> Know Before JavaScript Memory we need to understand of "Context"


// ==========A. Context Memory=============================
    Context : JavaScript's engine creates a "context" when receiving a script file, known as "Global Execution Context (GEC)".
      *. context has script file. for ex = "variable", "Object", "Object Key"
      *. context has also own memory 
      *. All "variables", "objects", "object keys" has same Context memory
      *. when we want unknow key of object then he return "undefined"
           for ex  let user3 = {}; console.log(user3.name) // undefined


// ========== B. Object Memory=============================
    /*
        1. each object has unique memory
        2. object key has  alse memory
        3. when same type "key value" use in different objects that time "key value" memory has same
        Note : ==> All Memmory has changed when browser will be reopened
    */

     /* === How to Check Memory of JavScript Variable in Browser developer tools===*/
    // step 1 = press ctrl+shift+i
    // step 2 = click "Memory" tab 
    // step 3 = click on "Include numerical values in capture" radio button
    // step 4 = scroll and find "Take snapshoot" then click him.
    // step 5 = after click "Take snapshoot" PRESS "ctrl+f"
    // step 6 = find your "variable string value" (ex = "rajnish")  then click enter
    // step 7 = Select your finded value (ex = "rajnish")
    // step 8 = drag Retainers
    // step 9 = select context no ( for ex = @47905) // FIND CONTEXT MEMORY
    // step 10 = find your selected number 
    // step 11 = now click your finded value (ex =  click on  "@47905")
    // final  =  here show your all object, variable




/*==============1. each object has unique memory==============*/
//(Context Memory = "Context@766183")
    /*let user1 = {name : 'rajnish' } //Object@866519
    let user2 = {name : "Ajay"} //Object@866521
    */
   
/*==============2. each object has unique memory==============*/
//(Context Memory = "Context@766183")
    //(user1 Object Memory = Object@606507 )
    let name = "Ajay" //@24383
        let user1 = { 
            name : 'rajnish', //@17827
            lname: 'Kumar', // @22207
            //(user1 "address" Object Memory = @311705)
            address: {
                city:"Delhi" //@110929
            }
        } 

    //(user2 Object Memory = @606511)
    let user2 = {
        name : "Ajay", // @24383
        lname: 'Kumar', // @22207
            //(user2 "address" Object Memory = @311711)
            address: {
                city:"Delhi" //@110929
            }
    } 
    //(Context Memory = "Context@726545")
       let myVar = "This is My Variable for Testing" //@462211

    // == Here Notice of Memory ==
       // 1. All "Kumar" memory are same
       // 2. All "Ajay" memory are same
       // 3. All "Delhi" memory are same
                //but
       // 4. All "Object" has diffrente memory

       /*Note :=> 
             A.) Same type Key Value or Same type Variable value has same Memory
             B.) All Object has diffrent Memory
       */

