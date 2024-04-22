document.addEventListener('DOMContentLoaded', function() {
document.getElementById("survey-form").addEventListener("submit",function(event){

event.preventDefault();

const fname= document.getElementById("first-name").value;
const lname= document.getElementById("last-name").value;
const addres= document.getElementById("comments").value;
const stte= document.getElementById("state").value;
const contry= document.getElementById("country").value;
const pcode= document.getElementById("pincode").value;




 const ele = document.getElementsByName('gender');
 let a;
   for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
        a=  ele[i].value;
    }



    let selectedoption=[];
    var checkebox=document.querySelectorAll('input[type="checkbox"]:checked');
    checkebox.forEach(function(checkebox){
    selectedoption.push(checkebox.value);
    });
   


const table = document.getElementById("mytable").getElementsByTagName('tbody')[0];
var row = table.insertRow(table.rows.length);
    //create row cells
    var fstCell = row.insertCell(0);
    fstCell.innerHTML = fname;
  
    var lstCell = row.insertCell(1);
    lstCell.innerHTML = lname;
  
    var addCell = row.insertCell(2);
    addCell.innerHTML = addres;
  
    var stCell = row.insertCell(3);
    stCell.innerHTML = stte;

    var countryCell = row.insertCell(4);
    countryCell.innerHTML = contry;
    var pcodeCell = row.insertCell(5);
    pcodeCell.innerHTML = pcode;
    const fCell = row.insertCell(6);
    fCell.innerHTML=a;
   
    const mCell = row.insertCell(7);
    mCell.innerHTML = selectedoption;
    // document.getElementById("fstname").value=fname;
    // document.getElementById("lstname").value=lname;
    // document.getElementById("adrs").value=addres;
    // document.getElementById("pcde").value=pcode;
    // document.getElementById("stt").value=stte;



})
})
