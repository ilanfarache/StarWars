
const body = document.getElementsByTagName("body")[0];

const button = document.getElementById("button");

const link = "https://swapi.co/api/";

const text = document.getElementById("text");



button.addEventListener("click",function() {

	
	text.innerHTML = "Loading..."; 
    
	var random = Math.floor(Math.random() * 89);
	var search = link + "people/"+ random +"/";

	 fetch(search, {}).then(response => response.json()).then(data => afficherData(data));

})


function afficherData(data){


var link2 = data.homeworld;
fetch(link2, {}).then(response => response.json()).then(data => afficherData2(data));
console.log(data);

var name =  document.createElement("h1");
var height =  document.createElement("h2");
var mass =  document.createElement("h2");

name.innerHTML = data.name;
name.style.color = "red";
height.innerHTML = "height: " + data.height;
mass.innerHTML = "mass: " + data.mass;

text.innerHTML = "";
text.append(name);
text.append(height);
text.append(mass);



}

function afficherData2(data){

console.log(data);
var planet = document.createElement("h2");
planet.innerHTML = "planet: "+data.name;
text.append(planet);


	
}