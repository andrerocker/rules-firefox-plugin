function inicializa()
{
	var context = document.getElementById("contentAreaContextMenu");  

	if (context)  
		context.addEventListener("popupshowing", ativaMenu, false);
}

function ativaMenu()
{
	var adicionar = document.getElementById("rules-adicionar");
	
	if(adicionar)
		adicionar.hidden = !gContextMenu.onImage;
}

function adicionaFlyer() 
{
	var image = gContextMenu.target.src;
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

window.addEventListener("load", inicializa, false);