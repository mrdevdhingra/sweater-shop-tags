var element1 = document.getElementById("form");
    

function testVariable() {
    var strText = document.getElementById("textone").value;          
    var strText1 = document.getElementById("textTWO").value;
    var strText2 = document.getElementById("textTHREE").value;
    document.getElementById('item-name').textContent = strText;
    document.getElementById('was-price').textContent = strText1;
    document.getElementById('now-price').textContent = strText2; 
    
}

var element2 = document.getElementById("form2");
    

function testVariable2() {
    var strText = document.getElementById("textonetwo").value;          
    var strText1 = document.getElementById("textTWOtwo").value;
    var strText2 = document.getElementById("textTHREEtwo").value;
    document.getElementById('item-name2').textContent = strText;
    document.getElementById('was-price2').textContent = strText1;
    document.getElementById('now-price2').textContent = strText2; 
    
}

var backbutton = document.getElementById("back-button");

function display() {
    var element = document.getElementById("printbutton");
    backbutton.remove();
    element.remove();
    element1.remove();
    element2.remove();
    window.print();
    
 }

 