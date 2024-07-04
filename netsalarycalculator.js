
function calculateNetSalary() {
  // Get the input values
  let basicSalary = parseFloat(document.getElementById("basic-salary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  //Calculate payee (i.e. Tax)
  let payee = Math.floor((basicSalary + benefits) * 0.25);

  //Calculate NHIF deductions
  let NHIFDeductions = Math.floor(basicSalary * 0.02);

  //Calculate NSSF deductions
  let NSSFDeductions = Math.floor(basicSalary * 0.12);

  //Calculate gross salary
  let grossSalary = Math.floor(basicSalary + benefits);

  //Calculate net salary
  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

  //Display the net salary
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    <p>Your P.A.Y.E is ${payee}</p>
    <p>Your gross salary is ${grossSalary}</p>
    <p>Your NHIF Deduction is ${NHIFDeductions}</p>
    <p>Your NSSF Deduction is ${NSSFDeductions}</p>
    <p>Your net salary is: Ksh. ${netSalary}</p>
    `;
}

// Add an event listener to the calculate button
let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateNetSalary);