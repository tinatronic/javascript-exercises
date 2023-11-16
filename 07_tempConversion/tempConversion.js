const convertToCelsius = function(num) {

  return (num - 32 ) / 1.8;
};

const convertToFahrenheit = function(num) {

  return (num * 1.8) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
