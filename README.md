# React_form_validation

console.log(justify("90").isNum()); //false
console.log(justify(-90).Num().isNatural()); // false
console.log(justify(90).Num().isNatural()); // true
console.log(justify(90).Num().isNegative()); // false
console.log(justify(67).Num().toNegative()); // -67
console.log(justify(90).Num().isBetween(10, 89)); //false
console.log(justify(34).Num().isBetween(10, 89)); //true
console.log(justify(90).Num().isDivisibleBy(9)); //true
console.log(justify("biky@gmail.com").isEmail()); //true
console.log(justify("bikygmail.com").isEmail()); //false
console.log(justify("biky maity").isUserName()); //false
console.log(justify("biky_maity").isUserName()); //true
console.log(justify("abcd123").password().isMinLength(8)); //false
console.log(justify("Fa7").password().strongLvl());
//{
// "score": 75,
// "msg": [
// "At least 1 special character"
// ]
// }

console.log(
justify({
name: "",
age: "",
}).findBlanks()
);
