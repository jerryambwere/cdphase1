let basicSalary = prompt("input your salary");
let benefits = prompt("input your benefits");

const grossCalc = (basicSalary,benefits) => {
  return basicSalary + benefits;
};
console.log(grossCalc(50000));

function taxCalc() {
  let tax;
  if (grossCalc > 800000) {
    tax = grossCalc * 0.35;
  } else if (grossCalc > 500000) {
    tax = grossCalc * 0.325;
  } else if (grossCalc > 32333) {
    tax = grossCalc * 0.3;
  } else if (grossCalc > 24000) {
    tax = grossCalc * 0.25;
  } else {
    tax = grossCalc * 0.1;
  }
}
console.log(tax);

function nssfCalc() {
  return grossCalc * 0.06;
}
console.log(nssfCalc);

function nhifCalc() {
  let deduction;
  if (grossCalc >= 100000) {
    deduction = 1700;
  } else if (grossCalc >= 90000) {
    deduction = 1600;
  } else if (grossCalc >= 80000) {
    deduction = 1500;
  } else if (grossCalc >= 70000) {
    deduction = 1400;
  } else if (grossCalc >= 60000) {
    deduction = 1300;
  } else if (grossCalc >= 50000) {
    deduction = 1200;
  } else if (grossCalc >= 45000) {
    deduction = 1100;
  } else if (grossCalc >= 40000) {
    deduction = 1000;
  } else if (grossCalc >= 35000) {
    deduction = 950;
  } else if (grossCalc >= 30000) {
    deduction = 900;
  } else if (grossCalc >= 25000) {
    deduction = 850;
  } else if (grossCalc >= 20000) {
    deduction = 750;
  } else if (grossCalc >= 15000) {
    deduction = 600;
  } else if (grossCalc >= 12000) {
    deduction = 500;
  } else if (grossCalc >= 8000) {
    deduction = 400;
  } else if (grossCalc >= 6000) {
    deduction = 300;
  } else {
    deduction = 150;
  }
}
console.log(deduction);

function payeeCalc(grossCalc, nhifCalc, nssfCalc) {
  return grossCalc - (deduction + tax + nhifCalc);
}

console.log(payeeCalc);
