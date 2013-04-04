var tabMots=new Array,
	Mots=new Array; 

var dictionnaire = new Array;
dictionnaire =["a","bracada","bra","angle", "armoire", "banc", "bureau", "cabinet", "carreau", "chaise", "classe", "coin", "couloir", "dossier", "eau", "escalier", "lavabo", "lecture", "lit", "marche", "matelas", "maternelle", "meuble", "mousse", "mur", "peluche", "placard", "plafond", "porte", "portemanteau", "poubelle", "radiateur", "rampe", "rideau", "robinet", "salle", "savon", "serrure", "serviette", "sieste", "silence", "sol", "sommeil", "sonnette", "sortie", "table", "tableau", "tabouret", "tapis", "tiroir", "toilette", "vitre", "aller", "amener", "apporter", "appuyer", "attendre", "bosser", "dormir", "emmener", "emporter", "entrer", "fermer", "frapper", "lire", "ouvrir", "rentrer", "rester", "sonner", "sortir", "tricher", "venir"];
var chat=null;
var divScore=null;
var nodeScore=null;
var score =0;
var texteScore = "Votre score : ";
var compteur =0;
var temp =null;
var newTemp=null;
var stringHTML=null;

window.onload=function(){
	chat=document.getElementById("container");
	divScore=document.getElementById("score");
	nodeScore = document.createTextNode(texteScore+score);
	divScore.appendChild(nodeScore);
	tick();
}

function tick(){


	if(Math.random()<0.01){
		tabMots.push(new Mot());
	}


	for(var i=0; i< tabMots.length; i++){
		var motDelete = tabMots[i].tick();
		if(motDelete){
			console.log("DELETER");
			if(score >0){
				score--;
				nodeScore.nodeValue=texteScore+score;
			}
			tabMots.splice(i,1);
		}
	}

	

	setTimeout(tick, 30);

}


document.onkeydown=input;

function input(event){
	//console.log(event.which);
	if(tabMots[0] != null){
		if(event.which >=65 && event.which <= 90){
			temp = tabMots[0].getString();
			newTemp =null;
			if (temp.charAt(0) == String.fromCharCode(event.which)){
				newTemp=temp.substring(1);
				//console.log(newTemp);
				tabMots[0].setString(newTemp);
				//console.log(tabMots[0]);
			
				if(newTemp.length == 0){
					tabMots[0].setString(".");
					tabMots.splice(0,1);
					newTemp=null;
					
				}
			}
		}
	}	
}





function Mot(){
	this.y =Math.floor(Math.random()*300+100);
	this.x = 1000;
	this.vitesse =1;

	longueur=dictionnaire.length;
	index = Math.floor(Math.random()*longueur);
	this.string = dictionnaire[index];

	this.color=null;
	couleur= Math.floor(Math.random()*4+1);
	if(couleur ==1){
	this.color = "blue";
	}
	else if(couleur ==2){
	this.color = "yellow";
	}
	else if(couleur ==3){
	this.color = "green";
	}
	else if(couleur ==4){
	this.color = "red";
	}
	
	this.taille=Math.floor(Math.random()*20+30);


	this.text = document.createTextNode(this.string);
	this.div = document.createElement("div");
	this.div.className ="mots";
	this.conteneur = document.getElementById("container");
	stringHTML = "top:"+this.y+"px; left:"+this.x+"px; color:"+this.color+"; font-size: "+this.taille+"px;";
	
	this.div.setAttribute("style",stringHTML);
	this.div.appendChild(this.text);
	this.conteneur.appendChild(this.div);


	this.getString=function(){
		return this.string.toUpperCase();
	} 
	this.setString=function(nouveauString){
		if(nouveauString =="."){
			score ++;
			nodeScore.nodeValue=texteScore+score;
			this.conteneur.removeChild(this.div);
			
		}
		this.string=nouveauString.toLowerCase();
	}

	this.tick=function(){
		if(score <= 10){
			this.vitesse=10;
		}
		if(score > 10 && score <=20){
			this.vitesse=3;
		}
		if(score > 20 && score <= 30){
			this.vitesse=4;
		}
		if(score >30 && score <= 40){
			this.vitesse=6;
		}
		if(score > 40){
			this.vitesse=10;
		}
		this.x -= this.vitesse;
		this.div.style.left=this.x+"px";
		this.text.nodeValue=this.string;

		
		if(this.x < 100){
			this.conteneur.removeChild(this.div);
		}
		return this.x < 100;
	}


}