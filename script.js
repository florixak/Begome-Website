window.onload = function() {
    footer();
    followersMsg();
    schedule();
};

function footer() {
    const d = new Date();
    var year = d.getFullYear();

    document.getElementById("streamer").innerHTML = "© <b>Begome</b> " + year;
    document.getElementById("creator").innerHTML = "Vytvořil <a href='https://www.florixak.tk/'><b>FloriXak</b></a>";
}

function followersMsg() {
    var text = document.getElementById("followers");

    text.title = "Sledující ještě nejsou automatický, ale pracuje se na tom."
}

function schedule() {
    const d = new Date();
    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    var day = d.getDay()
    var d2 = new Date(d.getFullYear(), d.getMonth(), d.getDay(), 18, 0, 0);

    let date1 = new Date("06/21/2022").getTime();
    let date2 = new Date("07/28/2021").getTime();
    
    switch (day) {
        case 0:
            document.getElementById(weekday[0]).innerHTML = "<b>" + document.getElementById(weekday[0]).outerText + "</b>";
            // if (d.getTime() >= d2.getTime()) document.getElementById(weekday[0]).innerHTML += " (STREAMING NOW ⚪)";
            break;
        case 1:
            document.getElementById(weekday[1]).innerHTML = "<b>" + document.getElementById(weekday[1]).outerText + "</b>";
            // if (d.getTime() >= d2.getTime()) document.getElementById(weekday[1]).innerHTML += " (STREAMING NOW ⚪)";
            break;
        case 2:
            document.getElementById(weekday[2]).innerHTML = "<b>" + document.getElementById(weekday[2]).outerText + "</b>";
            // if (d.getTime() >= d2.getTime()) document.getElementById(weekday[2]).innerHTML += " (STREAMING NOW ⚪)";
            break;
        case 3:
            document.getElementById(weekday[3]).innerHTML = "<b>" + document.getElementById(weekday[3]).outerText + "</b>";
            // if (d.getTime() >= d2.getTime()) document.getElementById(weekday[3]).innerHTML += " (STREAMING NOW ⚪)";
            break;
        case 4:
            document.getElementById(weekday[4]).innerHTML = "<b>" + document.getElementById(weekday[4]).outerText + "</b>";
            // if (d.getTime() >= d2.getTime()) document.getElementById(weekday[4]).innerHTML += " (STREAMING NOW ⚪)";
            break;
        case 5:
            document.getElementById(weekday[5]).innerHTML = "<b>" + document.getElementById(weekday[5]).outerText + "</b>";
            // if (d.getTime() >= d2.getTime()) document.getElementById(weekday[5]).innerHTML += " (STREAMING NOW ⚪)";
            break;
        case 6:
            document.getElementById(weekday[6]).innerHTML = "<b>" + document.getElementById(weekday[6]).outerText + "</b>";
            // if (d.getTime() >= d2.getTime()) document.getElementById(weekday[6]).innerHTML += " (STREAMING NOW ⚪)";
            break;
    }
    
}