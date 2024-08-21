function cursorPosition() {
    let x = event.clientX;
    let y = event.clientY;

    var label = document.getElementById("Position");
    label.innerHTML = "X: " + x + " Y: " + y;
}