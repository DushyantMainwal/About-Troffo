var prevTab = 1;

window.onload = function(){
    var str = window.location.pathname;
    console.log("pathname: ", str);

    if (str.toLowerCase().indexOf("about") >= 0)
    	selectTab(1);
    else if (str.toLowerCase().indexOf("terms") >= 0)
    	selectTab(2);
    else if (str.toLowerCase().indexOf("privacy") >= 0) 
    	selectTab(3);
    else if (str.toLowerCase().indexOf("contact") >= 0) 
    	selectTab(4);
}

function selectTab(tabNumber, isDrawerItem) {
	if (tabNumber === prevTab) return;
	
	var prevTabElement = document.getElementById("tab_" + prevTab);
	var currentTabElement = document.getElementById("tab_" + tabNumber);

	var prevTabDiv = document.getElementById("tab_div_" + prevTab);
	var currentTabDiv = document.getElementById("tab_div_" + tabNumber);

	prevTabDiv.style.display ='none';
	currentTabDiv.style.display ='flex';

	prevTabElement.className = prevTabElement.className.replace(" active-tab", "");
	currentTabElement.className += " active-tab";

	prevTab = tabNumber;
	if (isDrawerItem) {
		closeNav();
	}
}

function openNav() {
	var back = document.getElementById("drawer_background");
	var width = screen.width;
	var myNav = document.getElementById("nav_drawer");
    back.style.visibility= 'visible';
    myNav.style.right = "0%";

    if (width < 500)
    	myNav.style.width = "100%";
	else
		myNav.style.width = "50%";
}

function closeNav() {
	var myNav = document.getElementById("nav_drawer");
    var right = "-"+myNav.style.width;
    myNav.style.right = right;
    var back = document.getElementById("drawer_background");
    back.style.visibility= 'hidden';
}