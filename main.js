
var btn = document.getElementById('btn');

function switchFunction() {
    if(!localStorage.getItem('value1')) {
        populateStorage();   
    } else {
        setValues();
    }
}

function populateStorage() {
    localStorage.setItem('value1', document.getElementById('value1').value);
    sessionStorage.setItem('value2', document.getElementById('value2').value);
    setValues();
}

function setValues() {
    var value1 = localStorage.getItem('value1');
    var value2 = localStorage.getItem('value2');
    document.getElementById('value1').value = parseInt(value1) + 1; 
    document.getElementById('value2').value = parseInt(value2) + 1; 

}

btn.onclick = switchFunction();