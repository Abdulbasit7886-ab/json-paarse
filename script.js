
function load() {
    var ourRequest = new XMLHttpRequest();
    var url = "static/1.json";
    ourRequest.open('GET', url, true);
    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        }

    }

    ourRequest.send();
}
function renderHTML(arr) {
    var nam = "";
    var gender = "";
    var clas = "";
    var seat = "";
    var id = "";
    var club = "";
    var sd = "";
    var sa = "";
    var st = "";
    for (i = 0; i < arr.length; i++) {
        id += arr[i].ID + "<br>";
        nam += arr[i].Name + "<br>";
        gender += arr[i].Gender + "<br>";
        clas += arr[i].Class + "<br>";
        seat += arr[i].Seat + "<br>";
        club += arr[i].Club + "<br>";
        sd += arr[i].ScheduleDestination + "<br>";
        sa += arr[i].ScheduleAction + "<br>";
        st += arr[i].ScheduleTime + "<br>";

    }

    document.getElementById("id").innerHTML = id;
    document.getElementById("nam").innerHTML = nam;
    document.getElementById("clas").innerHTML = clas;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("seat").innerHTML = seat;
    document.getElementById("club").innerHTML = club;
    document.getElementById("sd").innerHTML = sd;
    document.getElementById("sa").innerHTML = sa;
    document.getElementById("st").innerHTML = st;
 }