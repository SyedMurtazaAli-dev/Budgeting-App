function getBudget(){
    var totalbudget = document.getElementById("budget").value;
    document.getElementById("totBudget").innerHTML = totalbudget;
    document.getElementById("totBalance").innerHTML = totalbudget;
}
function addExpence(){
   var totalbudget = document.getElementById("totBalance").innerHTML;
    if(document.getElementById("expense").value <= totalbudget ){
    var totalbudget = document.getElementById("budget").value;
    var totExpence = document.getElementById("expense").value;
    var expAdd = document.getElementById("totExpense").innerHTML;
    var expTot = +totExpence + +expAdd;
    document.getElementById("totExpense").innerHTML = expTot;
    var totBal = +totalbudget - +expTot;
    document.getElementById("totBalance").innerHTML = totBal;
    document.getElementById("expense").value = "";
    }
    else{
    alert("your expense is larger Then you Budget");
    document.getElementById("expense").value = "";
    }
}
