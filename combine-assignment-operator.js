/*
======================COMPOUND OPERATOR=======================
    A. (COMMBINATION ASSIGNMENT OPERATOR)
        1. +=   :   Additional Assignment Operator
        2. -=   :   Substraction Assingnment Operator
        3. %    :   Remainder Assignment Operator
        4. *=   :   multiplucation Assignment Operator
        5. /=   :   Division Assignment Operator
        6. **=  :   Exponentional Assignment Operator
    
    B. (OTHER OPERATOR)
        1. ++   :   increment Operator
        2. --   :   Decerement Operator



*/

// 1. Additional Assignment Operator
    
            // Example 1
                   console.log('----Additional (1) Assignment--------')
                    let a =1

                    a += 1
                    console.log(a) //print = 2
                    a += 1
                    console.log(a) //print = 3
                    a += 1
                    console.log(a) //print = 4
                    a += 1
                    console.log(a) //print = 5
            
            // Example 2
                    console.log('----Additional (5) Assignment--------')
                    let b = 10;

                    console.log(b) //print = 10
                    console.log(b+=5) //print = 15
                    console.log(b+=5) // print = 20
                    console.log(b+=5) // print = 25
                    console.log(b+=5) // print = 30
                    console.log(b+=5) // print = 35

// 2. substrqaction Assignment Operator
            console.log('----substrqaction(1) Assignment--------')
            let c =100;
            console.log(c)
            console.log(c -= 1)//print = 99
            console.log(c -= 1)//print = 98
            console.log(c -= 1)//print = 97
            console.log(c -= 1)//print = 96
            console.log(c -= 1)//print = 95
            //Ex 2
             console.log('----substrqaction (5)--------')
             let c2 =100
             console.log(c2)
             console.log(c2 -= 5)//print = 95
             console.log(c2 -= 5)//print = 90
             console.log(c2 -= 5)//print = 85
             console.log(c2 -= 5)//print = 80
             console.log(c2 -= 5)//print = 75
    // 3. Multiplication Assignment Operator
            console.log('----Multiplication (2) Assignment--------')
            let d = 10;
            console.log(d); // print =10
            console.log(d *=2); // print =20
            console.log(d *=2); // print =40
            console.log(d *=2); // print =80


            console.log('----Multiplication (5) Assignment--------')
            let d2 = 10;
            console.log(d2); // print =10
            console.log(d2 *=5); // print =50
            console.log(d2 *=5); // print =50
            console.log(d2 *=5); // print =1250

// 4. Remainder Assignment Operator
            console.log('----Remainder Assignment--------')
            let e = 51;
            console.log(e%5) // print =1
            console.log(e%4) // print = 3
            console.log(e%6) // print = 3
            console.log(e%7) // print = 2
    
// 5. Division Assignment Operator
            console.log('----Division Assignment Operator--------')

            let f = 105;
            console.log(f/=5) // print = 21
            console.log(f/=5) // print = 4.2
            console.log(f/=5) // print = 0.8400000000000001

// 6. Exponentional Assignment Operator
            console.log('----Exponentional Assignment Operator--------')
            let g = 2;
            console.log(g) // print = 2
            console.log(g **=2) // print = 4
            console.log(g **=2) // print = 16
            console.log(g **=2) // print =  256
            console.log(g **=2) // print =65536
            console.log(g **=2) // print =  4294967296
            