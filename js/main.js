
// 1
// var arr = [1,2,3,4]

// function findArray(arr){

//     if (arr.length > 0){
//         return arr[arr.length - 1]
//     }
//     else{
//         return -1
//     }
// }
// console.log(findArray(arr))


// 2
// const arr = [4,78,45,12,13,14,50,29,15,18];

// function greaterThan30(value){
//     return value >= 30
// }

// const filteredArray = arr.filter(greaterThan30)

// console.log(filteredArray.sort());



//3
// var input = prompt("eded daxil edin")

// console.log(input);

// if (input[1] % 2 === 0 && input[2] % 2 === 0) {
//     console.log("ededin 2 ve 3 cu reqemleri cutdur ")
// }
// else if (input[1] % 2 === 0 && input[2] % 2 === 1){

//     console.log("ededin 2 ve 3 cu reqemlerinden biri tek biri cutdur")

// }
// else{
//     console.log("ededin 2 ve 3 cu reqemleri her ikisi tekdir")

//     }


// 4
// for (let i = 0; i < 4; i ++){
    
//     var input = prompt("eded daxil edin");
//     console.log(input);
    
//     if( input % 2 == 1){

//         console.log("sade eded",input)
    
//     }
// }


//5
// paxlava
// var n = +prompt ( "Enter the number " );
// for ( var i = 1 ; i <= n ; i ++ ) {
//     var empty = " " ;

//     for ( var j = 1 ; j <= i ; j ++ ) {
        
//         empty = empty + j + "  ";

//     }
//     console.log (empty);
// }


// 6
// var a = 4;
// var b = 5;

// for ( var i = 1 ; i <= a ; i ++ ) {
//     var empty = " " ;

//     empty = empty + i + " * ";

//     for ( var j = 0 ; j < b ; j ++ ) {
        
//         empty = empty + " * ";

//     }
//     console.log (empty);
// }





// 7
// var mixedArr = ["apple", "banana", 5 , 89 , "orange" , "645",true];

// var answer = mixedArr.filter(item => typeof item == "string")

// console.log("these are strings in the array", answer)


// 8
// var mixedArr = ["apple", "banana", 5 , 89 , "orange" , "645", true, null];

// var answer = mixedArr.filter(item => typeof item == "number")

// console.log("these are numbers in the array", answer)



// 9
// var array = [12, 21, 35, 49, 58, 79, 72, 85, 39];

// var answer = array.filter(item => typeof item == "number" && item % 10 == 9)

// console.log("ending 9", answer)



// 10
// ededin sade murekkeb olmasi
// var input = +prompt ("eded daxil et");
// var counter = 0;

// for (var n = 0; n <= input; n++) {
    
//     if (input % n == 0) {
//         counter += 1;
//         console.log (n);
//     }
// }
//      if (counter == 1){

//         console.log ("eded ne sade ne murekkebdir");
//     }
//     else if  (counter <= 2) {

//         console.log ("eded sadedir");
//     }

//     else {
//         console.log ("eded murekkebdir");
//     }


// 11
// var input = prompt("eded daxil edin")

// var biggest = 0;

// var currentDigit = input % 10 ;

// if(currentDigit > biggest){

//     biggest = currentDigit;
// }
//     input = input - currentDigit
//     input = input / 10; 

//     console.log( Math.round(biggest));



















