// Activity 2 - Map
const letterGrades = ['A', 'B', 'A'];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === 'A') {
    points = 4;
  } else if (grade === 'B') {
    points = 3;
  }
  return points;
}

const gpaPoints   
 = letterGrades.map(convertGradeToPoints);

// Activity 3 - Reduce
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Activity 4 - Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords   
 = fruits.filter(word => word.length < 6);

// Activity 5 - indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);   


// Display results in the HTML list
const listTemplate = (step) => {
  return `<li>${step}</li>`;
};

const results = [
  `Activity 2: GPA Points: ${gpaPoints.join(', ')}`,
  `Activity 3: GPA: ${gpa}`,
  `Activity 4: Short Words: ${shortWords.join(', ')}`,
  `Activity 5: Lucky Number Index: ${luckyIndex}`
];

const listItems = results.map(listTemplate);
document.querySelector("#myList").innerHTML = listItems.join("");