function Algo() {}

Algo.prototype.reverse = function(str) {
  // const stringArray = str.split("");
  // const reversedArray = stringArray.reverse();
  // const string = reversedArray.join("");
  return str.split("").reverse().join("");
  // TODO: Your code here
};

Algo.prototype.isPalindrome = function(str) {
  return this.reverse(str) === str;
  // TODO: Your code here
};

Algo.prototype.capitalize = function(str) {
  return this.capitalize(str);
  // TODO: Your code here 
};

module.exports = Algo;
