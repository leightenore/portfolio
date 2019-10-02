$(document).ready(function () {

    // Scroll Top Button
    if (window.scrollY == 0) {
        document.getElementById("back2Top").style.visibility = "hidden";
    }

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            document.getElementById("back2Top").style.visibility = "visible";
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });

    $(document).ready(function () {
        $("#back2Top").click(function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 500);
            return false;
        });

    });

    //Scroll to Skills Section On Click Function
    $("#skillsLink").on("click", function (event) {
        $([document.documentElement, document.body]).animate({ scrollTop: $("#skills-section").offset().top }, 500);
    });

    //Scroll to Portfolio Section On Click Function
    $("#projectLink").on("click", function (event) {
        $([document.documentElement, document.body]).animate({ scrollTop: $("#portfolio-section").offset().top }, 500);
    });

    //Scroll to Contact Section On Click Function
    $("#contactLink").on("click", function (event) {
        $([document.documentElement, document.body]).animate({ scrollTop: $("#contact-section").offset().top }, 500);
    });

    //CareConnect Modal Buttons
    $("#careConnectApp").on("click", function (event) {
        window.open("https://still-journey-26391.herokuapp.com/");
    });

    $("#careConnectCode").on("click", function (event) {
        window.open("https://github.com/ethantatum/Project-Three");
    });

    //Off the Beaten Path Modal Buttons
    $("#OTBPApp").on("click", function (event) {
        window.open("https://offthebeatenpath.herokuapp.com/");
    });

    $("#OTBPCode").on("click", function (event) {
        window.open("https://github.com/leightenore/travel-app");
    });

    //ISS Seeker Modal Buttons
    $("#ISSApp").on("click", function (event) {
        window.open("https://leightenore.github.io/iss-seeker/");
    });

    $("#ISSCode").on("click", function (event) {
        window.open("https://github.com/leightenore/iss-seeker");
    });

    //Game of Thrones Hangman Modal Buttons
    $("#GotApp").on("click", function (event) {
        window.open("https://leightenore.github.io/got-hangman/");
    });

    $("#GotCode").on("click", function (event) {
        window.open("https://github.com/leightenore/got-hangman");
    });

    //Clicky Game Modal Buttons
    $("#clickyApp").on("click", function (event) {
        window.open("https://leightenore.github.io/clicky-game/");
    });

    $("#clickyCode").on("click", function (event) {
        window.open("https://github.com/leightenore/clicky-game");
    });

    //LIRI Modal Button
    $("#liriCode").on("click", function (event) {
        window.open("https://github.com/leightenore/liri-node-app");
    });

    //Giphy Modal Buttons
    $("#giphyApp").on("click", function (event) {
        window.open("https://leightenore.github.io/Giphy-API/");
    });

    $("#giphyCode").on("click", function (event) {
        window.open("https://github.com/leightenore/Giphy-API");
    });

    //Trivia Modal Buttons
    $("#triviaApp").on("click", function (event) {
        window.open("https://leightenore.github.io/TriviaGame/");
    });

    $("#triviaCode").on("click", function (event) {
        window.open("https://github.com/leightenore/TriviaGame");
    });

    //Crystal Modal Buttons
    $("#crystalApp").on("click", function (event) {
        window.open("https://leightenore.github.io/unit-4-game/");
    });

    $("#crystalCode").on("click", function (event) {
        window.open("https://github.com/leightenore/unit-4-game");
    });
});