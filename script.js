window.onload = function() {
    footer();
    followersMsg();
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