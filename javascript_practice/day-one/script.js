/**
 // variable: container/storage/bucket/
 var a = 1;
 console.log(a); //expected output 1
 if(a === 1) {
     a++;
     console.log(a);  //expected output 2
 }
 console.log(a); //expected output 2
 /**
  * var declared variable can be easily override, can be easily defined,
  * var declared variable is gloabal scoped variable
  */
  

/**
 * 
// let
let x = 1;
console.log(x)
// expected output 1
if (x === 1) {
  let x = 2;
  
//   console.log(x);
  // Expected output: 2
}

// console.log(x);
// Expected output: 1

/**
 * let declared variable can be easily override
 * but can't be define same variable again with let
 * let declared variable is block-scoped local variable
 */
//-------- const
// const b = 5;
// b = 2;  // TypeError: Assignment to constant variable.
// console.log(b);   // TypeError: Assignment to constant variable.
/**
 * const declared variable can't be  override, can't re-assigned
 */

// -----DATA TYPES------
/**
 var a = 'I am String' ;  //string
 var b = 99 ;  // number
 var c = 99.5 ;// number
 var d = ['afghan', 'pak', 'aus', 'eng']; //array
 var e = { country: 'pakistan' , area: '796,095 km²' }; //object
 
 console.log(typeof a); //string
 * 
 */
// condition: if else, if else if

/**
 * document.write("practice for conditional statement <br/>")
    document.write("IF ELSE , IF ELSE IF <br/>")
    var age = 18;

    if (age < 18 && age >=10) {
        document.write("I am a boy");
    }  else if( age >= 18 ) {
        document.write( `I am <b>adult</b> because I'm now ${age}`);
    }
 
 */

// ternary operator
/** 
 * document.write("IF ELSE , IF ELSE IF <br/>")
 * age<18 ? document.write('age restricted'): document.write("<br/><b>Apply able</b> <br/>");
*/

// switch case
// if else if
var time = document.getElementById("namaz-time");
var dis = document.querySelector(".display");
var form = document.querySelector('form');



form.addEventListener('submit',()=>{
    // Event.preventDefault;
    var answer = confirm('namaz prhta b hai..')
    if(answer){
        alert('achi baat hai');
    }
    else {
        alert('ja prh k aaa');
    }
    switch (true) {
        case (parseInt(time.value) >= 5  && parseInt(time.value) <= 6):
            alert("namaz e fajar");
            break;
        case (parseInt(time.value) >= 13 && parseInt(time.value) <= 16):
            alert('Namaz e zuhar');
            break;
        case (parseInt(time.value) > 16 && parseInt(time.value) <= 18 ):
            alert('namaz e asar');
            break;
    
        default:
            alert('namaz prho');
            break;
    }
})

var body = document.querySelector('body');
var btn = document.querySelector('.bg-btn');

// var userN = document.getElementById('name');
// var msg = prompt('what is your good name');
// userN.innerHTML = msg;

btn.addEventListener('click',  function myFunction(){
    if( body.style.background == 'yellow'){

        body.style.background = 'white';
    }else if(body.style.background == 'white'){
        body.style.background = 'blue';
    }else{
        body.style.background = 'yellow';
    }
} );

// btn.style.fontSize = '160px';
// btn.style.color = 'blue';


// btn.addEventListener(
//     'click' //event
//     ,
//    ()=>{}
//     // function
// );


// using modulus check time am or pm;
var num = 5;
var p = 12;
var inpNum = document.getElementById("time");
var disTime = document.querySelector(".d-time");
var disTime = document.querySelector(".time-btn");



if (num > p ) {
    var t = num % p ;

    console.log(t + 'pm');
}else console.log(num + 'am');

// find even or odd number using loop
var even = document.querySelector('.even');
var odd = document.querySelector('.odd');
for(let i = 1 ; i<=10 ; i++){
    var od = (i % 2 == 0);
    if (!od) {
        console.log(i + ' even');
    }else if (od) {
        console.log(i + ' odd');
    }else console.log('invalid num');
}
