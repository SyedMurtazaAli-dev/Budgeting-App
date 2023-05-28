const expenses = {
    expence: "",
    category: category,
    discription: discription,
    date: date
};
function getBudget(){
    var totalbudget = document.getElementById("budget").value;
    var totbud = document.getElementById("totBudget").innerHTML;
    if( isNaN(totalbudget) ){
        alert("please provide a number not string");
        document.getElementById("budget").value = "";
       }
    else{

    var totbud = +document.getElementById("totBudget").innerHTML;
    if(totbud > 0){
        alert("you already set montly Budget");
        document.getElementById("budget").value = "";
    }
    else{
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
} 
}
function addExpence(){
    var exp = document.getElementById("expense").value;
    var dis = document.getElementById("discription").value;
    var dat = document.getElementById("date").value;
    var cat = document.getElementById("category").value;
    if(exp === "" || dis === "" || dat === "" || cat === "")// here check all expence form field is fill and not
    {
    alert("all expense filed required");
    }
else{
   var objectstore = false; // it is use to store value in object
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
    objectstore = true; // if this 'if' condition is execute so store values in object

    }
    else{
    alert("your expense is larger Then you Budget");
    document.getElementById("expense").value = "";
    }
    }
    if(objectstore === true){  // here check to store value in object and not
/*     var expCat = document.getElementById("expCat").innerHTML;
    var expAmo = document.getElementById("expAmo").innerHTML;
    var expDat = document.getElementById("expDat").innerHTML;
    var expDat = document.getElementById("expDis").innerHTML; */
    this.expence = document.getElementById("expense").value;
    this.discription = document.getElementById("discription").value;
    this.category = document.getElementById("category").value;
    this.date = document.getElementById("date").value;
        document.getElementById("expCat").innerHTML = this.category
        document.getElementById("expAmo").innerHTML = this.expence
        document.getElementById("expDat").innerHTML = this.date
        document.getElementById("expDis").innerHTML = this.discription
    document.getElementById("expense").value = "";
    document.getElementById("discription").value = "";
    document.getElementById("date").value = "";
    document.getElementById("category").value = "";
    console.log(this.expence)
    console.log(this.discription)
    console.log(this.date)
    console.log(this.category)
}
}
}