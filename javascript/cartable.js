function login(){
	var name = $("#name").val();
	var action;
	if(name == "eleve"){
		action = "accueil_eleve.html";
	}else if(name == "parent"){
		action = "accueil_parent.html";
	}else if(name == "prof"){
		action = "accueil_prof.html";
	}else{
		action = "accueil_admin.html";
	}
	window.location.replace(action);
}

function redirect(page){
	console.log(page+".html");
	window.location.replace(page+".html");
}