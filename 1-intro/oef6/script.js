function showMessage(message) {
    var notification = document.getElementById('note');
    notification.innerText = message;
    notification.style.display = 'block';
    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000);
}

function selectRandomColor() {
    var colorSelect = document.getElementById('color');
    var colors = colorSelect.options;
    var randomIndex = Math.floor(Math.random() * (colors.length - 1)) + 1;
    colorSelect.selectedIndex = randomIndex;
    showMessage("Een willekeurige kleur is gekozen: " + colors[randomIndex].text);
}

function handleCarChange() {
    selectRandomColor();
    var car = document.getElementById("car").value;
    var color = document.getElementById("color").value;
    showMessage("Je hebt een " + color + " " + car + " besteld.");
}

function handleColorChange() {
    var color = document.getElementById("color").value;
    showMessage("De kleur " + color + " is gekozen.");
}
