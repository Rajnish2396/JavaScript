
/*==Example 1===*/
/*
    const day = 5;
    switch(day){
        case 1 : console.log('today is sunday');
        break;
        case 2 : console.log('today is Monday');
        break;
        case 3 : console.log('today is Tuesday');
        break;
        case 4 : console.log('today is Wednesday');
        break;
        case 5 : console.log('today is Thursday');
        break;
        case 6 : console.log('today is Friday');
        break;
        case 7 : console.log('today is Saturday');
        break;

        default: console.log('please Enter Valid Input')
    }
*/

/*==Example 2===*/
    /*
        const myval = true;
        switch (myval){
            case (4>2) : console.log('This is first value');
            break;
            case false: console.log('This is Second Value');
            break;
        }        
    */

/*==Example 3==*/

    // const grade = "D";
    //  switch(grade.toLowerCase()){
    //     case "a": console.log('You have passed from 90-80%') 
    //     break;
    //     case "b": console.log('You have passed from 80-60%') 
    //     break;
    //     case "c": console.log('You have passed from 60-40%') 
    //     break;
    //     case "d": console.log('You have passed from 40-30%') 
    //     break;
    //     default: console.log('Please Enter Valid Input')
    //  }


/*==Example 4==*/
const age = 55;
switch(true){
 case(age>0 && age<=5) : console.log('You are Kids') 
 break;
 case(age>5 && age<=16) : console.log('You are School Student') 
 break;
 case(age>16 && age<=25) : console.log('You are College Student') 
 break;
 case(age>25 && age<=65) : console.log('You are Working Professional') 
 break;
 case(age>65 && age<=80) : console.log('You are Retired') 
 break;
 case(age>80 && age<=100) : console.log('You are Angel') 
 break;
 default: console.log('please Enter Valid Input')
}