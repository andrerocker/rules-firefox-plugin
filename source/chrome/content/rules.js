function adicionaFlyer() 
{
	var image = "http://robot6.comicbookresources.com/wp-content/uploads/2009/05/l.jpg";
	var url = "http://localhost:9000/metralhadora/gatling?url="+image;
	processRequest(url);
}

var request;
function processRequest(url)
{
	request = new XMLHttpRequest();
	request.onreadystatechange = processRequestCallback;
	request.open("GET", url, true);
	request.send(null);
}

function processRequestCallback() 
{
   if(request.readyState == 4) 
        if(request.status == 200) 
			alert("Ok");
}
