
alert('Welocme to Our Ques');
// it take value from user and there is two btn (ok btn == ture || cancle btn == false)
let names  = prompt('what is your name'); 

// confirm value form use by button (ok btn == ture || cancle btn == false)
let conf = confirm('is Your name ' + names)

conf == !null ?  alert('Thank You '+ names) : alert('Sorry, You Have not any Input')


