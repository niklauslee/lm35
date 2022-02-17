const lm35 = require("./index");
const pin = 26; // ADC0

setInterval(() => {
  console.log(`temperature (in celsius): ${lm35.read(pin)}`);
}, 1000);
