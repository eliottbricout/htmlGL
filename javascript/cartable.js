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

function closefenetre(){
	$("#fenetre").hide("progress");
}

function openfenetre(){
	$("#fenetre").show("progress");
}

function opencours(){
	window.open("cours_eleve.html");
}

function switchson(){
	if($("#son").text().charAt(0) == 'R')
		$("#son").html("Cyril Hanquez");
	else 
		$("#son").html("Remy Hanquez");
}

function changeclass(){
	$("#listeleve").hide("progress");
	var li =$("#listeleve li");
	var ul =$("#listeleve");
	ul.empty();
	for(var i=1; i<=li.length;i++){
		ul.append(li.eq((i*7)%25));
	}
	ul.append('<a data-dismiss="modal" data-toggle="modal" data-target="#myModal3"><span class="glyphicon glyphicon-plus" style="color: blue"></span> ajouter un élève</a>');
	$("#listeleve").show("progress");

}

function changeeleve(){
	$("#formulairemodifeleve").hide("progress");
	console.log("eee");
	$("#formulairemodifeleve").show("progress");

}
