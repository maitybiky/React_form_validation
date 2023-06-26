function prto(prm) {
  if (typeof prm === "string") {
    if (prm.length !== prm.trim().length) {
      console.warn(
        "JUSTIFY : " +
          prm +
          " contains space. use trim() method to remove extra space"
      );
    }
  }
  this.isAnyBlank = function () {
    let arr = Object.entries(prm);
    if (arr.length === 0 || typeof prm === "string") {
      console.error("JUSTIFY :Object has 0 entry");
    } else {
      let valid = arr.find(
        (it) => typeof it[1] === "string" && it[1].trim() === ""
      );
      if (!valid) {
        return false;
      } else {
        console.error("JUSTIFY : " + valid[0] + " has empty value");
        return true;
      }
    }
  };
  this.findBlank = function () {
    let arr = Object.entries(prm);
    if (arr.length === 0 || typeof prm === "string") {
      console.error("JUSTIFY :Object has 0 entry");
    } else {
      let valid = arr.find(
        (it) => typeof it[1] === "string" && it[1].trim() === ""
      );
      if (!valid) {
        return false;
      } else {
        console.error("JUSTIFY : " + valid[0] + " has empty value");
        let Obj = {};
        Obj[valid[0]] = valid[1];
        return Obj;
      }
    }
  };
  this.findBlanks = function () {
    let arr = Object.entries(prm);
    if (arr.length === 0 || typeof prm === "string") {
      console.error("JUSTIFY :Object has 0 entry");
    } else {
      let valid = arr.filter(
        (it) => typeof it[1] === "string" && it[1].trim() === ""
      );
      if (valid.length === 0) {
        return false;
      } else {
        valid.forEach((it) => {
          console.error("JUSTIFY : " + it[0] + " has empty value");
        });
        let arr = valid.map((it) => {
          return it[0];
        });
        return arr;
      }
    }
  };
  //
  this.isEmty = function () {
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
  this.strongLvl = function () {
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
   return val
  };
}
const justify = (prm) => {
  return new prto(prm);
};

module.exports = justify;





