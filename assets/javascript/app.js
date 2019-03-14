//Click Events
//===============================================================================================================

$("#aboutMeLink").on("click", function(event) {
    $("#portfolioCard").css("display","none");
    $("#contactCard").css("display","none");
    $("#bioCard").css("display","block");
});

$("#portfolioLink").on("click", function(event) {
    $("#portfolioCard").css("display","block");
    $("#contactCard").css("display","none");
    $("#bioCard").css("display","none");
});

$("#contactLink").on("click", function(event) {
    $("#portfolioCard").css("display","none");
    $("#contactCard").css("display","block");
    $("#bioCard").css("display","none");
});

$("#aboutMeLink1").on("click", function(event) {
    $("#portfolioCard").css("display","none");
    $("#contactCard").css("display","none");
    $("#bioCard").css("display","block");
});

$("#portfolioLink1").on("click", function(event) {
    $("#portfolioCard").css("display","block");
    $("#contactCard").css("display","none");
    $("#bioCard").css("display","none");
});

$("#contactLink1").on("click", function(event) {
    $("#portfolioCard").css("display","none");
    $("#contactCard").css("display","block");
    $("#bioCard").css("display","none");
});

$("#connect1").on("click", function(event) {
    var url = "https://www.linkedin.com/in/leigh-tenore-55a1b0172/";
    window.open(url, '_blank');
});

$("#connect2").on("click", function(event) {
    var url = "https://github.com/leightenore";
    window.open(url, '_blank');
});

$("#project1img").on("click", function(event) {
    var url = "https://aodem.github.io/Project-One/";
    window.open(url, '_blank');
});

$("#giphyimg").on("click", function(event) {
    var url = "https://leightenore.github.io/Giphy-API/";
    window.open(url, '_blank');
});

$("#crystalimg").on("click", function(event) {
    var url = "https://leightenore.github.io/unit-4-game/";
    window.open(url, '_blank');
});

$("#triviaimg").on("click", function(event) {
    var url = "https://leightenore.github.io/TriviaGame/";
    window.open(url, '_blank');
});





