let popup = document.getElementById("popup-name");

function hello(){
    popup.innerHTML = "Hello, " + document.getElementById("inputName").value;
    document.getElementById("inputName").value = "";
    document.getElementById("inputSurname").value = "";
    document.getElementById("inputID").value = "";
    document.getElementById("inputPhone").value = "";
}