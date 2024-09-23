
//debugger
document.write('--------=====>DSA<=====--------------------<br><br><br><br><br><br>')


document.write('===============Squar Pattern==================== <br>')
/* Square Patern with number
Q. print
    1, 2, 3,
    4, 5, 6
    7, 8, 9
*/  
    function squarA(x){
        let squn =1
        for(let i = 0; i<x; i++){
            for(let j =0; j<x; j++){
                document.write(j+1)
            }
            document.write('<br>')
        }
    }
    squarA(4)



    document.write('--------------Square Pattern with character Example-----------------<br>')
    /* Square Pattern with character
        Q. print
            A, B, C, 
            D, E, F,
            C, H, I
            
            Help number to character : 
                    String.fromCharCode(number)
                     for Example
                        A = String.fromCharCode(65)
                        B = String.fromCharCode(66)
                        C= String.fromCharCode(67)
                        D = String.fromCharCode(68)
   */
                
            function squarB(x){
                let squn =65
                for(let i = 0; i<x; i++){
                    for(let j =0; j<x; j++){
                        let output = String.fromCharCode(squn)
                        document.write(output)
                        squn ++
                    }
                    document.write('<br>')
                }
            }
            squarB(4)




document.write('===============Triangle Pattern Example==================== <br>')
/* Triangle pattern

 Q. print
    1,
    1, 2
    1, 2, 3
    1, 2, 3, 4
*/
  function trianlgePattern(x){
    for(let i=0; i<x; i++){

        for(let j=1; j<=i; j++){
            document.write(j)
        }
        document.write('<br>')
    }
  }
  trianlgePattern(4)


document.write('Reverse Triangle Example')
/*  Reverse Triangle Example :
    Q. print
        1, 
        2, 1
        3, 2, 1,
        4, 3, 2, 1
*/
    function reverseTriangle(x){
        for(let i =0; i<=x; i++){
            for(let j=i; j>0; j--){
                document.write(j)
            }
            document.write('<br>')
        }
    }
    reverseTriangle(4)

document.write('--------------Folyid Triangle Example-----------------')
/* Folyid Triangle Example :
        print
        1, 
        2, 3
        4, 5, 6
        7, 8, 9, 10
*/

let num1 =0;
function folyidTriangle(x){
    for(let i = 0; i<x; i++ ){
       for(let j = 0; j<i; j++){
        num1 ++
        document.write(num1 + " ")
       }
       document.write('<br>')
    }
}
folyidTriangle(5)


document.write('--------------Inverted Triangle Pattern-----------------<br>')

/* Inverted Triangle Pattern-
 Q. print
    1, 1, 1, 1
       2, 2, 2
          3, 3
             4
*/


function invertedTriangle(x){
   
   for (let i = 0; i<x; i++){
    let space = x-i;
    let num = x-space

    for(let j =0; j<i; j++){
       document.write('&nbsp;')       
    }

    for(let n =0; n<x-i; n++){
        document.write(i+1)
       }

    document.write('<br>')
   }

}
invertedTriangle(4)


document.write('--------------Pyramid Pattern-----------------<br>')

/* Pyramid Pattern-
 Q. print
                1
            1   2   1
        1,  2   3   2   1
    1   2,  3   4   3   2   1
*/
function Pyramid(x){
    for(let i = 0; i<=x; i++){
        for(let s = 0; s< x-i; s++){
            document.write('*')
        }
        for(let n1 =0; n1<=i; n1++){
            document.write(n1+1)
        }
        for(let n2 =i; n2>0; n2--){
            document.write(n2)
        }
        document.write('<br>')
    }
}
Pyramid(3)


document.write('--------------Hollow Dimond Pattern-----------------<br>')
/* Hollow Dimond Pattern-
 Q. print
            
                    *
                *       *
            *               *
        *                       *
            *               *
                *       *
                    *
*/


function Dimond(x){

    // TOP PART
            for(let i = 0; i<x; i++){        
                /* left space */
                    for(let s1=0; s1<x-1-i; s1++){
                        document.write('&nbsp;')
                    }

                    /* left star */
                    document.write('*')

                    /* Middle Space */
                    for(let n2 =i*2-1; n2>0; n2--){         
                        document.write('&nbsp;')
                    }

                    /* Right star */
                    if(i !=0){
                        document.write('*')
                    }

                
                document.write('<br>')
            }

            // BOTTOM PART
                for(let i = 0; i<x; i++){

                    /* left space */
                        for(let s1=0; s1<1+i; s1++){
                            document.write('&nbsp;')
                        }
                        /* left star */
                        document.write('*')

                        /* Middle Space */
                       
                        
                      
                        /* Right star */
                        if(i !=x-1 ){
                            for(let n2 =0; n2<2*(x-1); n2++){         
                                document.write('&nbsp;')
                            }
                           
                        }
                        document.write('*') 
                     
                        
                    
                    document.write('<br>')
                }

}
Dimond(3)

// Find Unique Value from array






