
           var compteurElt = Number(29);
		   var compteur1 = Number(28);
		   var compteur = Number(2);
           
        let pic=document.getElementById("var");

      pic.src="add30.jpg";
     function diminuerCompteur() {
	if(compteurElt > 2){
		plus();
	}
	else if(compteurElt <=2 )
	{
		moins();
	}
	
       }
    function plus(){
	    compteurElt = compteurElt - 1;
        pic.src="add"+compteurElt+".jpg";
	    console.log(compteurElt);
        } 
	function moins(){
		compteur=compteur+1;
		pic.src="add"+compteur+".jpg";
		console.log(compteur);
		if (compteur > 28){
        compteur =Number(2);
		}
	    }	
      var intervalId = setInterval(diminuerCompteur, 1500);

      