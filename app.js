$(document).ready(function(){

    $("#btnSubmit").attr("disabled", "true");
    $("body").append("<div id='inputDiv'></div>");
    
    $("#textSubmit").keydown(function(){
        $("#btnSubmit").removeAttr("disabled");
        console.log("key pressed");
    })  

    $("#btnSubmit").click(function(){
        let $userInput = $("#textSubmit").val();
        alert($userInput);
        $("#inputDiv").append("<h2>" + $userInput + "</h2>");
        return false;
    })

})