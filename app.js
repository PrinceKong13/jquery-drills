$(document).ready(function () {
    $("body").append("<ul id='userList'></ul>");
    $("#btnSubmit").attr("disabled", "true");
    $("body").append("<div id='inputDiv'></div>");

    $("#textSubmit").keydown(function () {
        $("#btnSubmit").removeAttr("disabled");
        console.log("key pressed");
    });

    $("#btnSubmit").click(function () {
        let $userInput = $("#textSubmit").val();
        $("#userList").append("<li class='dynamicColor'>" + $userInput + "</li>")
        $(".dynamicColor").click(function () {
            console.log("event triggered");
            let randomColor1 = Math.floor(Math.random() * 255);
            let randomColor2 = Math.floor(Math.random() * 255);
            let randomColor3 = Math.floor(Math.random() * 255);
            let randomBorderRadius = Math.floor(Math.random() * 50);
            $(event.target).css({
                "background-color": "rgb(" + randomColor1 + "," + randomColor2 + "," + randomColor3 + ")"
            })
        });
        $(".dynamicColor").dblclick(function() {
            event.target.remove();
        })
        alert($userInput);
        return false;
    });

// $("#inputDiv").append("<h2 class='dynamicColor'>" + $userInput + "</h2>");
// $(".dynamicColor").mouseover(function () {
//   console.log("event triggered");
//   let randomColor1 = Math.floor(Math.random() * 255);
//   let randomColor2 = Math.floor(Math.random() * 255);
//   let randomColor3 = Math.floor(Math.random() * 255);
//   let randomBorderRadius = Math.floor(Math.random() * 50);
//   $(event.target).css({
//     "background-color":"rgb(" + randomColor1 + "," + randomColor2 + "," + randomColor3 + ")",
//     "border" : "2px solid black",
//     "border-radius": +randomBorderRadius + "px",
//   });
// });
});