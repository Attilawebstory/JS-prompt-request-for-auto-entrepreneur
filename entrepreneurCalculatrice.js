



/****************************
/*** PHASE DE DECLARATION ***
*****************************/

// Déclaration d'une constante
const TAUX_IMPOSITION = 24.8;
const TAUX_ACCRE = 5.8;
const TAUX_SMIC = 9.7;


// Déclaration de trois variables basic
var monMontantHT;
var monMontantTVA;
var monMontantTTC;
// Déclaration des variables semestriels
var nombreHeureSemestre;
var monMontantSemestriel;
var monMontantSemestrielReel;
// Déclaration de la variable demande d'Accre
var demandeACCRE;

var tauxHorraire;
var quotisation;
var benefice;

var chiffreAffaireHebdomadaire;
var beneficeHebdomadaire;


function getTaux(possedeAccre){
	if (demandeACCRE == 'oui' || demandeACCRE == 'yes' || demandeACCRE == 1){
		return TAUX_ACCRE; // 5.8
	}	else {
		return TAUX_IMPOSITION // 24.8
	}
}

//calcule du taux horaire relatif a ton assurance
var assurance;
//const TAUX_ASSURANCE_JOUR = assurance / 31;
//var assuranceJour = TAUX_ASSURANCE_JOUR / 12;
var assuranceJour;

//calcul du taux par heure d'un montant mensuel MARCHE PAS
var mensuel = assurance / 31;
var journalier = mensuel / 12;
function assuranceJour(mensuel, journalier) {
	return mensuel * journalier;
}
//nouvelle fonction qui marche !!!!!!!!!!!!!!!!
//dire Bonjour
var saluer = function (nom) {
    var nom = nom;
    console.log("Bonjour" + " " + nom);
    document.write("Bonjour" + " " + nom);
};
saluer(prompt('Quel est ton prenom ?'));
//calcul du montant horaire sur la base d'un montant mensuel
var montantMensuel = function(byMonth){
	var byDay = byMonth / 31;
  var byHour = byDay / 12;
  console.log(byDay);
  console.log(byHour);
  document.write('tu dois déduire par heure de travail le montant de: ' + byHour);
};

montantMensuel(prompt("affiche ton montant mensuel à déduire ici :"));

//classé UTILITIES calcul avec une fonction du prix journalier de ton assurance
		var assurance = new Object();
		assurance.mensuel = 30;
		// Cette fois nous avons ajouté une méthode setAge
		assurance.setMensuel = function (nouvelAssurance){
		  assurance.mensuel = nouvelAssurance;
		};
		//*************************************************
		//fonction globale:
		// declaration avec this
		var setMensuel = function (montantMensuel){
		  this.mensuel = montantMensuel;
		};
		//*************************************************

		assurance.setMensuel(36);

		//calcul du prix journalier
		assurance.getAssuranceJour = function () {
		  return assurance.mensuel / 31;
		};
		console.log(assurance.getAssuranceJour());

		//calcul du prix horaire
		assurance.getAssuranceHeure = function () {
		  return assurance.getAssuranceJour() / 12;
		};
		console.log(assurance.getAssuranceHeure());

/****************************
/**** PHASE APPLICATIVE  ****
*****************************/

tauxHorraire = parseFloat(window.prompt("Quel est le taux horaire lorsque tu facture en auto-entreperneur ?\n"+
																				"Affiche ton taux horaire ici :"));

// Demande s'il l'utilisateur à fais une demande de l'Acrre
demandeACCRE = window.prompt("Etes-vous bénéficiaire de l'Accre ?\n" + "1. OUI \n2. NON");

quotisation = tauxHorraire * getTaux(demandeACCRE) / 100;
benefice = tauxHorraire - quotisation;

console.log("le montant de la tva sur ton taux horaire (" + quotisation + ") s'élèvent à : " + benefice + " €");

// Calcule des charges annexes a l'activité
var choix = ["vehicule", "assurance", "achat", "aucun"];

for (var i=0; i< choix.length; i++){
 console.log(choix[i]);
}

var autoEntrepreneur = parseInt(window.prompt("Si tu as des charges rematif à ton travail, merci de les preciser ici.\n" +
"Choisissez entre :\n1. vehicule \n2. assurance \n3. achat \n4. aucun")) -1;

choixUtilisateur = choix[autoEntrepreneur];

if(choixUtilisateur == undefined){
	document.write('votre choix est éroné');
}
else{
	switch(choixUtilisateur){

		case 'vehicule' :
        	if(choixUtilisateur == 'vehicule'){
            	document.write('<p>tu as des frais de transport relatif a ton activite</p>');
							var vehicule = prompt('a combien estime tu le cout horaire de transport ?\n' + "Affiche ton taux horaire ici :");
							document.write("<p>ton cout horaire de transport est de <b>" + vehicule + " €</b></p>");
            } else {
            	document.write('<p>tu n a pas de frais de transport</p>');
            }
        	break;

		case 'assurance' :
        	if(choixUtilisateur == 'assurance'){
            	document.write('<p>tu as des frais d assurance</p>');
							var assurance = parseFloat(window.prompt('a combien estime tu le cout mensuel de ton assurance ?\n' + "Affiche le montant ici :"));
							document.write("<p>ton assurance est de <b>" + assurance + " €</b>/mois, donc tu dois deduire :<b>" + assuranceJour() + " €</b>/jour</p>");
            } else {
            	document.write('<p>tu n as pas de frais d assurance</p>');
            }
        	break;

		case 'achat' :
        	if(choixUtilisateur == 'achat'){
            	document.write('<p>tu as pris un credit lie a ton activite</p>');
            } else {
            	document.write('<p>tu n as pas pris un credit lie a ton activite</p>');
            }
        	break;

					default :
					document.write('<p>tu n a pas de frais annexe !</p>');
			}

		}


/*****************************
/*** PHASE DE MISE EN PAGE ***
******************************/

//1. on demande si accre ou pas
if (demandeACCRE == 'oui' || demandeACCRE == 'yes' || demandeACCRE == '1') {
	document.write("<p>Tu bénéficie de l'exonération des taxe du régime micro-entrepreneur, veinard</p>");
}
else {
	document.write("<p>Aucune exonération n'a été appliquée, tu ne bénéficie pas de réduction de 5.8 % pendant 2 ans.</p>"+
		   					"<p>Ton statut de micro-entrepreneur applique une taxe qui s'élève à 24.8%.<br>"+
		   					"Ton taux horaire moins les taxes est de : <b>" + benefice + " €</b></p>");
}

//2. on demande le taux horaire
document.write("<p>ton taux horaire est de <b>" + tauxHorraire + " €</b></p>");


if ( benefice < TAUX_SMIC){

document.write("<p>Ton taux horaire <b>(" + benefice + " €)</b> est inférieur au smic horaire brut <b>(" + TAUX_SMIC + " €)</b>.</p>");
}
else{
	document.write("<p>Ton taux horaire <b>(" + benefice + " €)</b> est supérieur au smic horaire brut <b>(" + TAUX_SMIC + " €)</b>.</p>");
}




// Calcule du chiffre d'affaire semestriel

nombreHeureSemestre = parseFloat(window.prompt(
												"Combien d'heure tu as travailler dans la semaine ?\n"+
												"Affiche ici le nombre d'heure travailler dans la semaine :"));

chiffreAffaireHebdomadaire = nombreHeureSemestre * tauxHorraire;
beneficeHebdomadaire = nombreHeureSemestre * benefice;

document.write("<p>Tu as travaillé " + nombreHeureSemestre + " H/semaine.</p><p>Ton chiffre d'affaire semestriel est de : <b>" + chiffreAffaireHebdomadaire + " € BRUT</b></p>" +
				"<p>Ton chiffre d'affaire réel semestriel est de : <b>" + beneficeHebdomadaire + " € NET</b></p>");
