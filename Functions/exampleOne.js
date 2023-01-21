
function square(){
    let inputNumber = document.getElementById("squareBase").value;
    let square = inputNumber * inputNumber;
    document.getElementById("outputSquare").innerText=square;
}