let arr = [];
function addobject(){
const expenses = {
    expence: expence,
    category: category,
    discription: discription,
    date: date
};
return expenses
}
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
objectstore = true; // if this condition is execute so store values in object it help to line no 75 in if condition

    }
    else{
    alert("your dont have more budget Amount");
    document.getElementById("expense").value = "";
    }
    }
    if(objectstore === true){  // here check to store value in object and not

    this.expence = "-$" + document.getElementById("expense").value;
    this.discription = document.getElementById("discription").value;
    this.category = document.getElementById("category").value;
    this.date = document.getElementById("date").value;
    arr.push(addobject());
    let categoryName = document.getElementById("category").value;
    let expenceAmount = "-$" + document.getElementById("expense").value;
    let expenceDate = document.getElementById("date").value;
    document.getElementById("expense").value = "";
    document.getElementById("discription").value = "";
    document.getElementById("date").value = "";
    document.getElementById("category").value = "";

/*     let element = arr[0] */

    let table = document.getElementById("listExpence");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.classList.add("ExpList");
    let div = document.createElement("div");
    let h3i = document.createElement("h3");
    let p = document.createElement("p");
    p.classList.add("expDate"); 
    let div1 = document.createElement("div");
    let h3ii = document.createElement("h3");

/*     td.innerHTML = element.expence;
    h3i.innerHTML = element.category
    h3ii.innerHTML = element.expence
    p.innerHTML = element.date */

    h3i.innerHTML = categoryName;
    p.innerHTML = expenceDate;
    h3ii.innerHTML = expenceAmount;
    table.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(div);
    td.appendChild(div1);
    div.appendChild(h3i);
    div.appendChild(p);
    div1.appendChild(h3ii);

/*     document.getElementById("expCat").innerHTML = element.category
    document.getElementById("expAmo").innerHTML = element.expence
    document.getElementById("expDat").innerHTML = element.date
    document.getElementById("expDis").innerHTML = element.discription */


}
}
}

