function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

$(".toggleBtn").hover(function(){
    $(this).addClass("highlightBtn");
}, function(){
    $(this).removeClass("highlightBtn");
});

$(".toggleBtn").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightBtn");
    var panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    var numOfActivePanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / numOfActivePanels) -10);
});

$(".panel").height($(window).height() - $("#header").height() - 18);
$(".panel").width(($(window).width() / 2) - 10);
$("iframe").contents().find("html").html($("#htmlPanel").val());
    updateOutput();
$("textarea").on('change keyup paste', function() {
    updateOutput();
    
});