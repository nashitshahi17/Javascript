let score = "33ab"
let sc = null
console.log(typeof score);
console.log(typeof sc)

let valueinNumber = Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber); // It NaN (Not a Number) because 33ab cannot be converted to number as it has alphabets
let valueofsc = Number(sc)
console.log(valueofsc); // It will be 0 as JS convertes null to 0

let scr = undefined
console.log(typeof scr);
let scrtoNumber = Number(scr)
console.log(scrtoNumber); // It will be NaN

let sr = true
console.log(typeof sr)
let srinNum = Number(sr)
console.log(srinNum); //It will be 1

let isLoggedin = 1
let boolisLoggedin = Boolean(isLoggedin)
console.log(boolisLoggedin); // It will be true

let isL = ""
let boolisL = Boolean(isL)
console.log(boolisL) // It will be false 

// Empty String => false 
// String with val like "hi" => true


