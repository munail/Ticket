$(document).ready(function () {
    function countdown() {
        var now = new Date();
        var eventDate = new Date(2017, 03, 01);
        var currentTime = now.getTime();
        var eventTime = eventDate.getTime();
        var remTime = eventTime - currentTime;
        var s = Math.floor(remTime / 2000);
        var m = Math.floor(s / 60);
        var h = Math.floor(m / 60);
        var d = Math.floor(h / 24);
        h %= 24;
        m %= 60;
        s %= 60;

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;


        document.getElementById("days").textContent = d;
        document.getElementById("days").InnerText = d;

        document.getElementById("hours").textContent = h;
        document.getElementById("minutes").textContent = m;
        document.getElementById("seconds").textContent = s;

        setTimeout(countdown, 2000);
    };

    countdown();
    $("form#subscribe").submit(function () {
        event.preventDefault();

        var input = $("#name").val();

        $(".unsubscribed").hide();
        $(".subscribed").append(input + " has been successfully subscribed to our newsletter. Thank you.")
        $(".subscribed").show();
    });


});