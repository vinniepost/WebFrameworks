function updateTijd() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("tijdcomponent").innerHTML = "de huidige tijd is " + time;
}

setInterval(updateTijd, 1000); // 1000ms = 1s
