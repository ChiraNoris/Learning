"use strict";
let maxTemp = [17, 21, 23];
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < maxTemp.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log(str);
};
console.log(printForecast(maxTemp));
