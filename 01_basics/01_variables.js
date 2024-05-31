const accountId = 144553
let accountEmail="pendharkarp23@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState ;

//accountId=2 // not allowed
accountEmail="pragya.com"
accountPassword="23456"
accountCity="delhi"

console.log(accountId);
/*

Prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountEmail,accountPassword,accountCity,accountId,accountState])