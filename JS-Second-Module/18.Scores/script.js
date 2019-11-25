/*Scores*/

let students = [
  {
    name: "Thomas",
    score: 97
  },
  {
    name: "Arthur",
    score: 51
  },
  {
    name: "John",
    score: 37
  },
  {
    name: "Lize",
    score: 20
  },
  {
    name: "Polly",
    score: 67
  }
];

let totalScore = 0;

for (let i = 0; i < students.length; i++) {
  totalScore += students[i].score;
}
console.log(`Total Score :`, totalScore);
let average = totalScore / students.length;
console.log(`Average :`, average);

for (let i = 0; i < students.length; i++) {
  if (average < students[i].score) {
    students[i].BetterThanAverage = true;
  } else {
    students[i].BetterThanAverage = false;
  }
}
console.log(students);
