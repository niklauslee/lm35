exports.read = function (pin) {
  return analogRead(pin) * 3.3 * 100;
};
