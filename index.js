var visibleCallbacks = [];
var hiddenCallbacks = [];
var PageVisible = {
	on: function(ev, callback){
		if(ev == 'visible'){
			visibleCallbacks.push(callback);
		}
		if(ev == 'hidden')
			hiddenCallbacks.push(callback);
	},
	visible: false
}
function handleVisibilityChange(){
	if(document[hidden]){
		PageVisible.visible = false;
		hiddenCallbacks.forEach(function(callback){
			callback();
		})
	}
	else {
		PageVisible.visible = true;
		visibleCallbacks.forEach(function(callback){
			callback();
		})
	}
}
// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
document.addEventListener(visibilityChange, handleVisibilityChange, false);
module.exports = PageVisible;