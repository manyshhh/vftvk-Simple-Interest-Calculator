
function checkdata() {
  var am = document.getElementById("principal");
  var rt = document.getElementById("rate").value;
  var yr = document.getElementById("years").value;

  var d = new Date();
  var n = d.getFullYear();
  
  if ((am.value == "") || (am.value < 0) || (am.value == 0)) {
    alert("Please enter a positive number");
    am.focus();
    
  } else {
  	return ("If you deposit " + am.value + ", at an interest rate of " + rt + "%. You will recieve an amount of " + (yr * (am.value * (rt / 100))) + ", in the year of " + (+yr + n));
  }
  
}

function compute() {
  document.getElementById("result").innerHTML = checkdata();
}


function updateTextInput(val) {
          document.getElementById('rate_val').innerHTML=val; 
}
