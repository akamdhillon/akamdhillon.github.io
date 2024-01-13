function calculation() {
    // Get input values
    var amount = parseFloat(document.getElementById("amount").value);
    var amortYears = parseInt(document.getElementById("amortYears").value);
    var interest = parseFloat(document.getElementById("interest").value) / 100;

    // Variable to store the selected frequency
    let freq = document.querySelector('input[name="freq"]:checked').value;

    // Function to update the freq variable when a radio button is selected
    function updateFreq() {
    freq = document.querySelector('input[name="freq"]:checked').value;
    }

    // Add an event listener to each radio button
    const radioButtons = document.querySelectorAll('input[name="freq"]');
    radioButtons.forEach((radio) => {
    radio.addEventListener('change', updateFreq);
    });
  
    var totalPayments;
    var monthlyInterest;
    if (freq === "Monthly") {
        totalPayments = amortYears * 12;
        monthlyInterest = interest / 12;
    } else if (freq === "Bi-weekly") {
        totalPayments = amortYears * 26;
        monthlyInterest = interest / 26;
    } else if (freq === "Weekly") {
        totalPayments = amortYears * 52;
        monthlyInterest = interest / 52;
    }
  
    // Calculate the mortgage payment using the formula:
    // M = P * (r(1+r)^n) / ((1+r)^n - 1)
    var mortgagePayment =
      amount *
      (monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments)) /
      (Math.pow(1 + monthlyInterest, totalPayments) - 1);
  
    // Round the result to two decimal places
    mortgagePayment = mortgagePayment.toFixed(2);
  
    // Display the result in the 'result' paragraph
    var resultLabel = document.getElementById("result-label");
    resultLabel.textContent = "Payment: $" + mortgagePayment + " " + freq;
  }