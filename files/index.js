
function resize(){
	var html = document.getElementsByTagName("html")[0];
    var bodyWidth = parseInt($("body").css("width"));
    var FontSize = bodyWidth/4.8;
    html.style.fontSize = FontSize + "px";
    var tipNode = $(".tip");
    var windowHeight = $(window).height();
    tipNode.css('height', windowHeight + "px");
}

