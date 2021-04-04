var principal = document.getElementById("principal").value;
    if (principal < 1 || principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var date = new Date();
    var thisYear = date.getFullYear();
    var futureYear = thisYear + Number(years);
    var result = document.getElementById("result");
    output = "If you deposit" + principal + "at an interest rate of" + rate +
            + "You will receive an amount of" + interest + "in the year" + futureYear;
    result.innerHTML = output;