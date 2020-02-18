/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// var firstNonRepeatedCharacter = function(string) {
//   // TODO: your solution here
//   var mem = {};
//   var char;

//   for (var i = 0; i < string.length; i++) {
//     char = string[i];
//     !mem[char] ? (mem[char] = 1) : mem[char]++;
//   }

//   for (i = 0; i < string.length; i++) {
//     char = string[i];
//     if (mem[char] === 1) return char;
//   }

//   return null;
// };

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  for (var i = 0; i < string.length; i++) {
    var check = string.slice(0, i) + string.slice(i + 1);
    if (!check.includes(string[i])) {
      return string[i];
    }
  }
};
