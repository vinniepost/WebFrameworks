var testfunction = function() {
    console.log("test");
}

function updateLabel() {
    var input = document.getElementById("input");
    var label = document.getElementById("label");
    label.innerHTML = input.value;
}