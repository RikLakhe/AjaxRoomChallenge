const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		const room = JSON.parse(xhr.responseText);
		var statusHTML = '<ul class="rooms">';
		for(let i =0;i<room.length;i++){
			if(room[i].status === "full"){
				statusHTML+='<li class="full"><span class="glyphicon glyphicon glyphicon glyphicon-star" aria-hidden="true"></span>';
			}else if(room[i].status === "empty"){
				statusHTML+='<li class="empty"><span class="glyphicon glyphicon glyphicon-star-empty" aria-hidden="true"></span>';
			}
			statusHTML+=room[i].room;
			statusHTML+='</li>';
		}
		statusHTML+='</ul>';
		document.getElementById('roomStatus').innerHTML=statusHTML;
	}
}
xhr.open('GET','room.json');
xhr.send();