document.addEventListener("contextmenu",function(e){
    e.preventDefault();
   
});
document.onkeydown= function(e){
    if(event.keyCode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){return false;}
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){return false;}
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){return false;}
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){return false;}
   
};

document.fullscreenEnabled =
	document.fullscreenEnabled ||
	document.mozFullScreenEnabled ||
	document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}