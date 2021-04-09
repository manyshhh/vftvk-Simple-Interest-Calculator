function rate(){
    var ratevalue=document.getElementById("interestRate");
    document.getElementById("r").innerHTML=ratevalue.value+"%";
  }

  function compute(){
    var ratevalue=parseFloat(document.getElementById("interestRate").value);
    var principal=parseFloat(document.getElementById("amount").value);
    var time=parseFloat(document.getElementById("years").value);
    var total= principal*(1+((ratevalue)*(time)));
    if(document.getElementById("amount").value==""){
      alert("Please enter the principal amount");
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