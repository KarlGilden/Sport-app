document.getElementById("submit").addEventListener('click', function(){
var value = document.getElementById("name").value;
	if(value){
		addAthleteName(value);
		document.getElementById("name").value = '';
	}

// document.write(
// 	"Athlete Name: "+athlete01.name+"\n"
// 	+"Height: "+athlete01.height+"\n"
// 	+"Weight: "+athlete01.weight+"\n"
// 	+"2k Erg Time: "+athlete01.erg
// 	);

});

function addAthleteName(text){
	var list = document.getElementById("result");

	var name = document.createElement('li');
	name.innerText = Name + text;

	list.appendChild(name);

}


