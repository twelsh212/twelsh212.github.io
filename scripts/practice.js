$(document).ready(function(){
    $(".hiddenOnLoad").hide(0); 
    $("#art1btn").click(function(){
        if ($("#art1").css("display") == "none") {
            $("#art1").show(1000);
            $(this).text("Collapse Story");
        } else {
            $("#art1").hide(1000);
            $(this).text("Expand Story");
        }
    });
    $("#art2btn").click(function() {
        if ($("#art2").css("display") == "none") {
            $("#art2").show(1000);
            $(this).text("Collapse Story");
        } else {
            $("#art2").hide(1000);
            $(this).text("Expand Story");
        }
        
    });
});