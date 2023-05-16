# React_form_validation

console.log(jol("90").isNum()); //false
console.log(jol(-90).Num().isNatural()); // false
console.log(jol(90).Num().isNatural()); // true
console.log(jol(90).Num().isNegative()); // false
console.log(jol(67).Num().toNegative()); // -67
console.log(jol(90).Num().isBetween(10, 89)); //false
console.log(jol(34).Num().isBetween(10, 89)); //true
console.log(jol(90).Num().isDivisibleBy(9)); //true
console.log(jol("biky@gmail.com").isEmail()); //true
console.log(jol("bikygmail.com").isEmail()); //false
console.log(jol("biky maity").isUserName()); //false
console.log(jol("biky_maity").isUserName()); //true
console.log(jol("abcd123").password().isMinLength(8)); //false
console.log(jol("Fa7").password().strongLvl());
//{
//   "score": 75,
//   "msg": [
//       "At least 1 special character"
//   ]
// }
