function guessLuckyNumber(guess) {
  const luckyNumber = 4;
  if (guess === luckyNumber) {
    console.log(`${luckyNumber} is the lucky number, congrats`);
  } else {
    console.log(`Welps! try again`);
  }
}
// guessLuckyNumber(3);
// guessLuckyNumber(4);

function grading(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 50 && score <= 69) {
    return "B";
  } else if (score >= 0 && score <= 49) {
    return "F";
  }
}
console.log(grading(72));
console.log(grading(65));
console.log(grading(36));

const greet = function () {
  console.log("welcome");
};
const greetArrow = () => {
  console.log("welcome");
};
