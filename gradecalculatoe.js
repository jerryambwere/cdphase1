function gradeCalc(grade) {
  console.log(grade);
  if (grade < 0 || grade > 100 || isNaN(grade)) {
    return "invalid input";
  }

  if (grade > 79) {
    return "A";
  } else if (grade >= 60) {
    return "B";
  } else if (grade >= 50) {
    return "C";
  } else if (grade >= 40) {
    return "D";
  } else {
    return "E";
  }
}
console.log(gradeCalc());
