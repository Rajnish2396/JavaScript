const userName = prompt('Input Your Name') || "Teach";
const userAge = parseInt(prompt('Input Your Age'))
if(!userName){
    console.log('please input User Name')
}



if(userAge>=1 && userAge<6){
    console.log(`You are ${userName}. Your age is ${userAge} and your are Kids`)
}else if(userAge>=6 && userAge<18){
    console.log(`You are ${userName}. Your age is ${userAge} and your are School Student`)
}else if(userAge>=18 && userAge<25){
    console.log(`You are ${userName}. Your age is ${userAge} and your are College Student`)
}else if(userAge>=25 && userAge<=60){
    console.log(`You are ${userName}. Your age is ${userAge} and your are Working Professional`)
}else if(userAge>60 && userAge<=80){
    console.log(`You are ${userName}. Your age is ${userAge} and your are Retired Person`)
}else if(userAge>80){
    console.log(`You are ${userName}. Your age is ${userAge} and your are Angel`)
}else{
    console.log(`please valid input`) 
}


    // Find the Gratest Number 
    let num1 = 5;
    let num2 = 10;
    let num3 = 15;
    if(num1>num2){
        console.log(num1)
    }
    else if(num2>num3){
        console.log(num2)
    }
    else{
        console.log(num3)
    }