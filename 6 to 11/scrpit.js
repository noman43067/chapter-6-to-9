// // // 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your 
// // // browser: 
// document.write(`<h3>Result</h3>`);
// var a = 25;
// document .write(`The value of a is: ${a}<br/>`);
// var aPreIncrement = ++a;
// document .write(`The value of ++a is: ${aPreIncrement}<br/>`);
// document .write(`Now the value of a is: ${aPreIncrement}<br/><br/>`);

// document .write(`The value of a++ is: ${aPreIncrement++}<br/>`);
// document .write(`Now the value of a is: ${aPreIncrement}<br/><br/>`);

// document .write(`The value of --a is: ${--aPreIncrement}<br/>`);
// document .write(`Now the value of a is: ${aPreIncrement}<br/><br/>`);

// document .write(`The value of a-- is: ${aPreIncrement--}<br/>`);
// document .write(`Now the value of a is: ${aPreIncrement}<br/><br/>`);

// // // Q#2. What will be the output in variables a, b & result after 
// // // execution of the following script: 
// // var a = 2;
// // document.write(`a is :${a}<br/>`);
// // var b = 1; 
// // document.write(`b is :${b}<br/>`);
// // // var result = --a - --b + ++b + b--; 
// // // Explain the output at each stage: 
// // // stage1
// // var S1 = --a;
// // // stage2
// // var S2 = --b;
// // // stage3
// // var S3 = ++b;
// // // stage4
// // var S4 = b--;
// // document.write(`Result is : ${(S1)-(S2)+(S3)+(S4)} <br/>`);

// // // Q#3. Write a program that takes input a name from user & greet the user.
// // var input =  prompt("Write your Name");

// // // Q#5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user 
// // // does not enter a new number, multiplication table of 5 should be displayed by default. 
// // var table = prompt(`Write a number to print table.`);
// // // Use the nullish coalescing operator to default to 5 if the input is null or empty
// // table = table ?? 5;
// // document.write(`${table} x 1 = ${table * 1}<br/>`);
// // document.write(`${table} x 2 = ${table * 2}<br/>`);
// // document.write(`${table} x 3 = ${table * 3}<br/>`);
// // document.write(`${table} x 4 = ${table * 4}<br/>`);
// // document.write(`${table} x 5 = ${table * 5}<br/>`);
// // document.write(`${table} x 6 = ${table * 6}<br/>`);
// // document.write(`${table} x 7 = ${table * 7}<br/>`);
// // document.write(`${table} x 8 = ${table * 8}<br/>`);
// // document.write(`${table} x 9 = ${table * 9}<br/>`);
// // document.write(`${table} x 10 = ${table * 10}<br/>`);

// // // Q#6. Take 
// // document.write(`<h2>Subject Total Marks Obtained Marks Percwentage</h2>`);
// // // a) Take three subjects name from user and store them in 3 different variables. 
// // var Sub1 = prompt("Enter the name of the first subject", "Data Mining");
// // var Sub2 = prompt("Enter the name of the second subject", "Data Structure");
// // var Sub3 = prompt("Enter the name of the third subject", "Graphic Design");
// // // b) Total marks for each subject is 100, store it in another variable. 
// // var totalMarks = 100;
// // // c) Take obtained marks for first subject from user and stored it in different variable.
// // var Sub1Marks = parseInt(prompt(`Enter obtained marks for ${Sub1}`, 80));

// // // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// // var Sub2Marks = parseInt(prompt(`Enter obtained marks for ${Sub2}`, 70));
// // var Sub3Marks = parseInt(prompt(`Enter obtained marks for ${Sub3}`, 90));
// // // e) Now calculate total marks and percentage and show the result in the browser
// // var totalObtainedMarks = Sub1Marks + Sub2Marks + Sub3Marks;
// // var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
// // // Display the result in a table format
// // document.write(`
// //     <table border="1" cellspacing="0" cellpadding="5">
// //         <tr>
// //             <th>Subject</th>
// //             <th>Total Marks</th>
// //             <th>Obtained Marks</th>
// //             <th>Percentage</th>
// //         </tr>
// //         <tr>
// //             <td>${Sub1}</td>
// //             <td>${totalMarks}</td>
// //             <td>${Sub1Marks}</td>
// //             <td>${(Sub1Marks / totalMarks) * 100}%</td>
// //         </tr>
// //         <tr>
// //             <td>${Sub2}</td>
// //             <td>${totalMarks}</td>
// //             <td>${Sub2Marks}</td>
// //             <td>${(Sub2Marks / totalMarks) * 100}%</td>
// //         </tr>
// //         <tr>
// //             <td>${Sub3}</td>
// //             <td>${totalMarks}</td>
// //             <td>${Sub3Marks}</td>
// //             <td>${(Sub3Marks / totalMarks) * 100}%</td>
// //         </tr>
// //         <tr>
// //             <td><strong>Total</strong></td>
// //             <td><strong>${3 * totalMarks}</strong></td>
// //             <td><strong>${totalObtainedMarks}</strong></td>
// //             <td><strong>${percentage}%</strong></td>
// //         </tr>
// //     </table>
// //     `);