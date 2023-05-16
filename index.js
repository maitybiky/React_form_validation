function prto(prm) {
  if (typeof prm === "string") {
    if (prm.length !== prm.trim().length) {
      console.warn(
        "JOL : " +
          prm +
          " contains space. use trim() method to remove extra space"
      );
    }
  }
  this.isAnyBlank = function () {
    let arr = Object.entries(prm);
    if (arr.length === 0 || typeof prm === "string") {
      console.error("JOL :Object has 0 entry");
    } else {
      let valid = arr.find(
        (it) => typeof it[1] === "string" && it[1].trim() === ""
      );
      if (!valid) {
        return false;
      } else {
        console.error("JOL : " + valid[0] + " has empty value");
        return true;
      }
    }
  };
  this.findBlank = function () {
    let arr = Object.entries(prm);
    if (arr.length === 0 || typeof prm === "string") {
      console.error("JOL :Object has 0 entry");
    } else {
      let valid = arr.find(
        (it) => typeof it[1] === "string" && it[1].trim() === ""
      );
      if (!valid) {
        return false;
      } else {
        console.error("JOL : " + valid[0] + " has empty value");
        let Obj = {};
        Obj[valid[0]] = valid[1];
        return Obj;
      }
    }
  };
  this.findBlanks = function () {
    let arr = Object.entries(prm);
    if (arr.length === 0 || typeof prm === "string") {
      console.error("JOL :Object has 0 entry");
    } else {
      let valid = arr.filter(
        (it) => typeof it[1] === "string" && it[1].trim() === ""
      );
      if (valid.length === 0) {
        return false;
      } else {
        valid.forEach((it) => {
          console.error("JOL : " + it[0] + " has empty value");
        });
        let arr = valid.map((it) => {
          return it[0]
            
          
        });
    return arr
      }
    }
  };
  //
  this.isBlank = function () {
    if (prm.trim().length === 0) return true;
    else return false;
  };
  this.isNum = function () {
    if (/^[0-9]+$/.test(prm)) {
      return true;
    } else return false;
  };
  this.isUserName = function () {
    if (prm.includes(" ")) return false;
    else return true;
  };
  this.isEmail = function () {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(prm))
      return true;
    else return false;
  };
  this.Num = function () {
    return new Number_Proto(Number(prm));
  };
  this.password = function () {
    return new Password_Proto(prm);
  };
}

function Number_Proto(prm) {
  this.isNatural = function () {
    if (/^(0|([1-9]\d*))$/.test(prm)) return true;
    else return false;
  };
  //                 ***
  this.isNegative = function () {
    if (prm < 0) return true;
    else return false;
  };
  //                 ***
  this.isPositive = function () {
    if (prm > 0) return true;
    else return false;
  };
  this.toPositive = function () {
    if (prm < 0) return prm * -1;
    else return prm;
  };
  this.toNegative = function () {
    if (prm > 0) return prm * -1;
    else return prm;
  };
  this.isBetween = function (start_number, end_number) {
    if (prm >= start_number && prm <= end_number) return true;
    else return false;
  };
  this.isDivisibleBy = function (divider) {
    if (prm % divider === 0) return true;
    else return false;
  };
}
function Password_Proto(prm) {
  this.isMinLength = function (min_length) {
    if (prm.length >= min_length) return true;
    else return false;
  };
  this.strongLvl = function (prm) {
    const msgs = [
      "At least 1 lowercase letter",
      "At least 1 uppercase letter",
      "At least 1 number",
      "At least 1 special character",
    ];

    let val = {
      score: 0,
      msg: [...msgs],
    };
    if (prm.match(/[a-z]+/)) {
      val.score += 25;
      val.msg = val.msg.filter((it) => it !== msgs[0]);
    }
    if (prm.match(/[A-Z]+/)) {
      val.score += 25;
      val.msg = val.msg.filter((it) => it !== msgs[1]);
    }
    if (prm.match(/[0-9]/)) {
      val.score += 25;
      val.msg = val.msg.filter((it) => it !== msgs[2]);
    }
    if (prm.match(/[$@#&!]/)) {
      val.score += 25;
      val.msg = val.msg.filter((it) => it !== msgs[3]);
    }
    console.log(val);
  };
}
const jol = (prm) => {
  return new prto(prm);
};
// console.log(jol("   f ").isBlank());
console.log(
  jol({
    name: "",
    age: "",
  }).findBlanks()
);
// console.log(jol(-90).Num().isNatural());
// console.log(jol(90).Num().isNegative());
// console.log(jol(-67).Num().toNegative())
// console.log(jol(90).Num().isBetween(10,89));
// console.log(jol(90).Num().isDivisibleBy(17));
// console.log(jol("biky@gmail.com").isEmail());
// console.log(jol("  ").isUserName());
// console.log(jol("biky@gmail.com").password().isMinLength(18));
// console.log(jol("biky@gmail.com").password().strongLvl("FA6&q"));
