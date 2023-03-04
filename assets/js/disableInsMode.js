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

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);