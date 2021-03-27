let dogs = ["billdog", "beagle", "labrador"];
let j = 0;
//-----------------------------------------
//old way
var allDogs="";
for(var i =0; i < dogs.length; i++) {

    allDogs += dogs[i] + " ";
}
console.log(allDogs); 
//---------------------------------------------------
var allDogs="";
for(let dog in dogs) {

    allDogs += dog + " ";
}
console.log("NEW : " +allDogs); 
//----------------------------------------------------
while(j < dogs.length) {

    allDogs += dogs[j++] + " ";
}
console.log("while : " +allDogs); 
//----------------------------------------------------------
let k =0;
var allDogs="";
do {

    allDogs += dogs[k++] + " ";
} while(k < dogs.length)
console.log("while : " +allDogs); 
//---------------------------------------------------------------
