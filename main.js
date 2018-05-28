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

function selectTab(tabNumber) {
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
}