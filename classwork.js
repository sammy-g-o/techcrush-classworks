// for (let i = 0; i <= 12; i++) {
//   console.log(`3 x ${i} = ${3 * i}`);
// }

let scores = [20, 12, 25, 15];
for (let x = 0; x < scores.length; x++) {
  scores[x] += 20;
}
scores.forEach((score, i) => {
  score += 20;
  scores[i] = score;
});
console.log(scores);
