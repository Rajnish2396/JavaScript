/*
Q. What is Method ?
Ans : method is used with objetct. They are writen as it function but they are defined within object


*/

let myMethod = {
    add: function (a,b){ // function decleration
        return a+b
    },
    sub:function(a,b){
        return a-b
    },

    cue(a){
        return a **3
    }
}
let output = myMethod.add(10, 15)
console.log(output)

output = myMethod.sub(980, 15)
console.log(output)

output = myMethod.cue(3)
console.log(output)






