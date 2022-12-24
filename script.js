'use strict'; //activating strict mode

let hasWorkPermit = false;
const getsToWork = true;

if ( getsToWork) hasWorkPermit = true; 
if (hasWorkPermit) console.log('I can work');

const privClass = 'Audio'; // a few strict mode reserved words
//const if = 10; // priduces error

function Sanjel(){
    console.log('My name is Dipesh');
}

Sanjel();
Sanjel();

function juiceMaker(pineapple, papaya){
 const juice = `juice made with ${pineapple} pineapple
 and ${papaya} papaya.`;
 return juice;
}

 const pineappleJuice = juiceMaker(10,10);
 console.log(pineappleJuice);
 const papayaPineappleJuice = juiceMaker(1,1);
 console.log(papayaPineappleJuice);

 