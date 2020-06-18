function startTime() {
    const today = new Date();
    const hr = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
