const userName = prompt('Input Your Name') || "Teach";
const userAge = parseInt(prompt('Input Your Age') || 1)


if(userAge>=1 && userAge<6){
    console.log(`You are ${userName}. Your age is ${userAge} and your are Kids`)
}

if(userAge>=6 && userAge<18){
    console.log(`You are ${userName}. Your age is ${userAge} and your are School Student`)
}

if(userAge>=18 && userAge<25){
    console.log(`You are ${userName}. Your age is ${userAge} and your are College Student`)
}

if(userAge>=25 && userAge<=60){
    console.log(`You are ${userName}. Your age is ${userAge} and your are Working Professional`)
}

if(userAge>60 && userAge<=80){
    console.log(`You are ${userName}. Your age is ${userAge} and your are Retired Person`)
}

if(userAge>80){
    console.log(`You are ${userName}. Your age is ${userAge} and your are Angel`)
}