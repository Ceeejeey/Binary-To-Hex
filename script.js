function checkBinary() {
    let binaryInput = document.getElementById("binary").value;
    let valid = /^[01]+$/.test(binaryInput); 
    
    if (!valid) {
        document.getElementById("alert").innerHTML = "Enter 0 and 1 only!";
    } else {
        document.getElementById("alert").innerHTML = "";
    }
}

function convert() {
    let binaryInput = document.getElementById("binary").value;
    let decimal = parseInt(binaryInput, 2); 
    let hexString = decimal.toString(16).toUpperCase(); 
    document.getElementById("hexa").value = hexString; 
}