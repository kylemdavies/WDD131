const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
radius = 4;
area = radius * radius * PI;
function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(3);
console.log(area);
area = circleArea(4);
console.log(area);