const accountId = 12345
let accountEmail = "test@gmail.com"
var accountPassword = "45667"
accountCity = "New York"
let accountState

// accountId = 2 // It is not allowed as constants cannot be changed 

/*
Do not use var as it has issue with
block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])
