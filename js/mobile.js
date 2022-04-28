window.addEventListener("load",function(event) {
	var getNavi = document.getElementById('navigation');

	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	var bars = document.createElement("i");
	bars.classList.add("fa-solid");
	bars.classList.add("fa-bars");
	mobile.appendChild(bars);

	document.getElementById('mobile-navigation').onclick = function(){
		var a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
		} else {
			getNavi.style.display='block';
		}
	};
	var getElm = getNavi.getElementsByTagName("LI");
	for(var i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};
	submenu = function (i){
		var sub = getElm[i].children[1];
		var b = sub.getAttribute('style');
		if(b){
			sub.removeAttribute('style');
			//getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
		} else {
			sub.style.display='block';
			//getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
		}
	};
});
