function rate(){
    var ratevalue=document.getElementById("interestrate");
    document.getElementById("r").innerHTML=ratevalue.value+"%";
  }

  function compute(){
    event.preventDefault();
    var ratevalue=parseFloat(document.getElementById("interestrate").value);
    var principal=parseFloat(document.getElementById("amount").value);
    var time=parseFloat(document.getElementById("years").value);
    var total= principal*(1+((ratevalue)*(time)));
    if((principle.value == "") || (principle.value < 1)){
          alert("Please enter a positive number");
          principle.focus();
          return false;
          return true;
    }
  
    var today=new Date();
    var year=today.getFullYear();
    time+=year;
    var result="If you deposit ";
    result+=principal;
    result+=" at an interest rate of "
    result+=ratevalue;
    result+="%";
    result+=" You will receive an amount of ";
    result+=total;
    result+=" in the year ";
    result+=time
    document.getElementById("result").innerHTML=result;
    }