const readline = require("readline-sync");
let writtenTest = Number(readline.question("Enter the marks scored in written test\n"));
let labExam = Number (readline.question("Enter the marks scored in lab exams\n"));
let assignment = Number(readline.question("Enter the marks scored in assignments\n"));
let grade=(writtenTest*70)/100 + (labExam*20)/100 + (assignment*10)/100
console.log("Your grade is "+ grade);