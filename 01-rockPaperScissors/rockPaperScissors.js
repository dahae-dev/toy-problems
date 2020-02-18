/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function(rounds) {
  // TODO: your solution here
  rounds = rounds || 3;
  var outcomes = [];

  var plays = ["rock", "paper", "scissors"];

  var combos = function(roundsToGo, playedSoFar) {
    if (roundsToGo === 0) {
      outcomes.push(playedSoFar);
      return;
    }

    for (var i = 0; i < plays.length; i++) {
      var currentPlay = plays[i];
      console.log(playedSoFar.concat(currentPlay))
      combos(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }
  };
  combos(rounds, []);

  return outcomes;
};

console.log(rockPaperScissors());

// var rockPaperScissors = function () {
//   // TODO: your solution here
//   var arr = ['rock', 'paper', 'scissors'];
//   var output = [];
//   var subarr = [];
//   for(var i = 0; i < arr.length; i++) {
//     for(var j = 0; j < arr.length; j++) {
//       for(var k = 0; k < arr.length; k++) {
//         subarr = [arr[i], arr[j], arr[k]];
//         output.push(subarr);
//       }
//     }
//   }
//   return output;
// };
