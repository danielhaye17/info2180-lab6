window.onload =function() {

	word =document.getElementsByTagName('input')[0];
	searchButton =document.getElementsByTagName('input')[1];

    searchButton.onclick =function() {
		ajaxFunction(); 
		requestSearch();
	}
};

function ajaxFunction() {

	if (window.XMLHttpRequest) 
		httprequest =new XMLHttpRequest();
	else 
		httprequest =new ActiveXObject('Microsoft.XMLHTTP');
}

function requestSearch() {

	var url = "request.php?q="+word.value;
   
	httprequest.onreadystatechange = processSearch;
	httprequest.open("GET", url);
	httprequest.send();
}



    

