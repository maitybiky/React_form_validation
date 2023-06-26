# before-submit

justify your data before form submit

## Features

- Password power meter
- Number Validation
- Object Validation
- User_Name Validation

## Installation

Install my-project with npm

```bash
 npm i before-submit

```

## Usage

```javascript
import justify from "before-submit";
```

## Demo

                ****input data*****

console.log(justify("biky@gmail.com").isEmail()); //true
console.log(justify("bikygmail.com").isEmail()); //false
console.log(justify("biky maity").isUserName()); //false
console.log(justify("biky_maity").isUserName()); //true
// silly one
console.log(justify("").isSpaced()) // true
console.log(justify("foo").isSpaced()) // false
console.log(justify(" foo ").isSpaced()) // false

                 *****justify Password******

console.log(justify("abcd123").password().isMinLength(8)); //false
// Cheack Password strong level

************\*\*************First Level************\*\*\*************
console.log(justify("F").password().strongLvl());

Output (Object)
{ "score": 25,
"msg": [
"At least 1 lowercase letter",
"At least 1 number",
"At least 1 special character" }

---

************\*************Second level**************\***************  
console.log(justify("Fa").password().strongLvl());

Output (Object)

{
"score": 50,
"msg": [
"At least 1 number",
"At least 1 special character"
}

---

************\*************Third level**************\***************  
console.log(justify("Fa7").password().strongLvl());

Output (Object)

{"score": 75,
"msg": [
"At least 1 special character"}

---

************\*************Fourth level**************\***************
console.log(justify("Fa7&").password().strongLvl());

{

<!-- ![App Screenshot](https://i.ibb.co/CP2QCBB/carbon-5.png) -->

## npmjs

[before-submit](https://www.npmjs.com/package/before-submit)
