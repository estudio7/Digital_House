function addNums(){
    num1 = parseFloat(document.querySelector("#num1").value);
    num2 = parseFloat(document.querySelector("#num2").value);
    result = num1 + num2;
    document.querySelector("#result").innerHTML = result;
}


