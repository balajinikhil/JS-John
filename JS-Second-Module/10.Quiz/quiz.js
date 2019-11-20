/*Quiz using prompt 
array consisting of arrays with question in  index0 and answer in index1 */

console.log("play the quiz");
let arr = [
  ["Capital of India?", "New Delhi"],
  ["Largest mountain in the world?", "Everest"],
  ["First man to land on moon?", "Neil Armstrong"],
  ["Current President of India?", "Ram Nath Kovind"]
];

score = 0;
function quiz() {
  for (let i = 0; i < arr.length; i++) {
    let ans = prompt(`Question : ${arr[i][0]}`);
    let correct = ans.toLowerCase().trim();

    if (correct === arr[i][1].toLowerCase().trim()) {
      alert(`Congratulations ${ans} is correct answer`);
      score++;
    } else {
      alert(`Wrong! Correct answer is ${arr[i][1]}`);
    }
  }
  let percentage = (score / arr.length) * 100;
  alert(`You're score is ${score} and percentage is ${percentage}%`);
}
quiz();
