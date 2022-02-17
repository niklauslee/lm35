# LM35

Kaluma library for LM35 temperature sensor.

# Wiring

Here is a wiring example for `ADC0`.

| Raspberry Pi Pico | LM35    |
| ----------------- | ------- |
| VBUS (5V)         | VCC     |
| GND               | GND     |
| GP26 (ADC0)       | OUT     |

![wiring](https://github.com/niklauslee/lm35/blob/main/images/wiring.jpg?raw=true)

# Install

```sh
npm install https://github.com/niklauslee/lm35
```

# Usage

Here is an example code for reading temperature (in celsius) from LM35.

```javascript
const lm35 = require('lm35');
const pin = 26; // ADC0

setInterval(() => {
  console.log(`temperature (in celsius): ${lm35.read(pin)}`);
}, 1000);
```

# API

## read(pin)

- **`pin`** `<number>` Pin number supporting ADC.
- **Returns**: `<number>`

Reads voltage from the pin and returns temperature value in celsius.