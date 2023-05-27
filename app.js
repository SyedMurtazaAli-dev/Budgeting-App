function getBudget(){
    var totbud = +document.getElementById("totBudget").innerHTML;
    if(totbud > 0){
        alert("you already set montly Budget");
        document.getElementById("budget").value = "";
    }
    var totalbudget = document.getElementById("budget").value;
    var totbud = document.getElementById("totBudget").innerHTML;
    if( isNaN(totalbudget) ){
        alert("please provide a number not string");
        document.getElementById("budget").value = "";
       }
    else{  
    document.getElementById("totBudget").innerHTML = +totalbudget;
    document.getElementById("totBalance").innerHTML = +totalbudget;
    document.getElementById("budget").value = "";
    }
}
function addExpence(){
   var totalbudget = document.getElementById("totBalance").innerHTML;
   var checker = +document.getElementById("expense").value
   if( isNaN(checker) ){
    alert("please provide a number not string");
    document.getElementById("expense").value = "";
   }
   else{
    if(checker<= totalbudget ){
    var totalbudget = document.getElementById("budget").value;
    var totExpence = document.getElementById("expense").value;
    var expAdd = document.getElementById("totExpense").innerHTML;
    var expTot = +totExpence + +expAdd;
    document.getElementById("totExpense").innerHTML = expTot;
    var curBala = document.getElementById("totBalance").innerHTML;
    var totBala = +curBala - +totExpence;
    document.getElementById("totBalance").innerHTML = +totBala;
    document.getElementById("expense").value = "";
    }
    else{
    alert("your expense is larger Then you Budget");
    document.getElementById("expense").value = "";
    }
    }
}
