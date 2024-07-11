function calculateNetSalary() {
    // Hardcoded values based on typical KRA, NHIF, and NSSF rates
    const taxBrackets = [
        { upperLimit: 24000, rate: 0.1 },
        { upperLimit: 32333, rate: 0.25 },
        { upperLimit: Infinity, rate: 0.3 }
    ];
    const nhifRates = [
        { upperLimit: 5999, deduction: 150 },
        { upperLimit: 7999, deduction: 300 },
        { upperLimit: 11999, deduction: 400 },
        { upperLimit: 14999, deduction: 500 },
        { upperLimit: 19999, deduction: 600 },
        { upperLimit: 24999, deduction: 750 },
        { upperLimit: 29999, deduction: 850 },
        { upperLimit: 34999, deduction: 900 },
        { upperLimit: 39999, deduction: 950 },
        { upperLimit: 44999, deduction: 1000 },
        { upperLimit: 49999, deduction: 1100 },
        { upperLimit: 59999, deduction: 1200 },
        { upperLimit: 69999, deduction: 1300 },
        { upperLimit: 79999, deduction: 1400 },
        { upperLimit: 89999, deduction: 1500 },
        { upperLimit: 99999, deduction: 1600 },
        { upperLimit: Infinity, deduction: 1700 }
    ];
    const nssfRate = 0.06;
    const nssfUpperLimit = 18000;

    // Get input values
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numbers for basic salary and benefits.");
        return;
    }

    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (tax)
    let tax = 0;
    let remainingSalary = grossSalary;

    for (const bracket of taxBrackets) {
        if (remainingSalary > bracket.upperLimit) {
            tax += bracket.upperLimit * bracket.rate;
            remainingSalary -= bracket.upperLimit;
        } else {
            tax += remainingSalary * bracket.rate;
            break;
        }
    }

    // Calculate NHIF deduction
    let nhifDeduction = 0;
    for (const rate of nhifRates) {
        if (grossSalary <= rate.upperLimit) {
            nhifDeduction = rate.deduction;
            break;
        }
    }

    // Calculate NSSF deduction
    const nssfDeduction = Math.min(grossSalary, nssfUpperLimit) * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    // Output the results
    alert(`Gross Salary: ${grossSalary.toFixed(2)}`);
    alert(`PAYE (Tax): ${tax.toFixed(2)}`);
    alert(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
    alert(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
    alert(`Net Salary: ${netSalary.toFixed(2)}`);
}

// Call the function
calculateNetSalary();
