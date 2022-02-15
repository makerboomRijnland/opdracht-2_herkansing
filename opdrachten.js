/**
 * 
 * OPDRACHT 1. 
 * 
 * functions
 * 
 * Roep de functie `showWelcome` aan.
 */

function showWelcome() {
    let welkom = "Welkom bij de herkansing JavaScript P2!"
    document.getElementById('welkom').innerHTML = welkom;
}

showWelcome();


/**
 * 
 * OPDRACHT 2. Studentnummer
 * 
 * functions
 * 
 * Schrijf de functie `showNummer`, die
 *   - de variabele `studentnummer` aanmaakt met als waarde jouw studentnummer
 *   - toon deze variabele in het element met ID=studentnummer toont.
 * 
 * Roep de functie `showNummer` aan.
 */

function showNummer() {
    let studentnummer = 0123456;
    document.getElementById('studentnummer').innerHTML = studentnummer;
}

showNummer();


/**
 * 
 * OPDRACHT 3. Section color
 * 
 * Schrijf de functie `changeBackgroundColor`, die
 *   - de waarde van het element met ID='kleur' opslaat in een variabele `kleur`
 *   - de background-color van het element met ID=kleur-section aanpast naar de variabele kleur
 * 
 * Koppel de functie 'changeBackgroundColor' aan het 'click' event van de button met ID=kleur-show
 */

function changeBackgroundColor() {
    let kleur = document.getElementById('kleur').value;
    document.getElementById('kleur-section').style.backgroundColor = kleur;
}

document.getElementById('kleur-show').addEventListener('click', changeBackgroundColor);


/**
 * 
 * OPDRACHT 4. Party of niet
 * 
 * Schrijf de functie genaamd: `showPartyOrNot`, met hierin code die:
 *   - de `value` van het element met ID=boete opslaat in de variabele `boete`
 *   - afhankelijk van de waarde van deze boete, toon of het feest door gaat of niet,
 *     door "Ja", "Nee", of "Misschien" te plaatsen in het element met ID=party-tonight:
 *      - Als de boete meer is dan 10000, dan gaat het feest niet door
 *      - Als de boete minder is dan 5000, dan gaat het feest door
 *      - Als de boete tussen de 5 en 10 duizend ligt, dan gaat het misschien door.
 * 
 * Koppel de functie 'showPartyOrNot' aan het 'click' event van de button met ID='party-show'
 */

function showPartyOrNot() {
    let boete = document.getElementById('boete').value;
    if(boete > 10000) {
        document.getElementById('party-tonight').innerHTML = "Nee";
    } else if(boete < 5000) {
        document.getElementById('party-tonight').innerHTML = "Ja";
    } else {
        document.getElementById('party-tonight').innerHTML = "Misschien";
    }
}

document.getElementById('party-show').addEventListener('click', showPartyOrNot);




/**
 * 
 * OPDRACHT 5. Naamdelen
 * 
 * Schrijf de functie `showMyNames`, die:
 *   - een variabele genaamd `naamdelen` aanmaakt, met als waarde een Array met jouw:
 *     - voornaam
 *     - tussenvoegsel (null als geen)
 *     - achternaam
 * 
 *   - De waardes uit de array 'naam' toont in de elementen met ID's:
 *     - mijn-voornaam
 *     - mijn-tussenvoegsel
 *     - mijn-achternaam
 * 
 *     - de  variabele aanmaakt `naam`, met als waarde jouw volledige naam (gebruikmakend van de `naamdelen`),
 *     - en deze toont in het element met ID=mijn-naam
 * 
 *   Roep de functie showMyNames aan.
 * 
 */

function showMyNames() {
    let naamdelen = ["Marcel", null, "Akerboom"];
    document.getElementById('mijn-voornaam').innerHTML = naamdelen[0];
    document.getElementById('mijn-tussenvoegsel').innerHTML = naamdelen[1];
    document.getElementById('mijn-achternaam').innerHTML = naamdelen[2];

    let naam = naamdelen[0] + " " + naamdelen[2];
    document.getElementById('mijn-naam').innerHTML = naam;

}

showMyNames();


/**
 * 
 * OPDRACHT 6. Upcase funk is gonna get ya
 * 
 * Schrijf de functie genaamd: `upCaseFunk`, met hierin code die:
 *   - de HTML elementen met de class 'funk' opslaat in de variabele: `funk`
 *   - Voor elk element in die array:
 *     - Geef deze de CSS eigenschap "text-transform: uppercase"
 * 
 * Koppel de functie 'upCaseFunk' aan het 'click' event van de button met ID='upcase-funk'
 */

function upCaseFunk() {
    let funk = document.getElementsByClassName('funk');
    for(let index = 0; index < funk.length; index++) {
        funk[index].style.textTransform = "uppercase";
    }
}

document.getElementById('upcase-funk').addEventListener('click', upCaseFunk);


/**
 * 
 * OPDRACHT 7. Kleur titels
 * 
 * Schrijf de functie genaamd: `kleurTitels`, met hierin code die:
 *   - de HTML elementen met de tag h2 opslaat in de variabele: `titels`
 *   - Voor elk element in die array:
 *     - Maak de tekstkleur blauw
 * 
 * Koppel de functie 'kleurTitels' aan het 'click' event van de button met ID='kleur-titels'
 */


 function kleurTitels() {
    let titels = document.getElementsByTagName('h2');
    for(let index = 0; index < titels.length; index++) {
        titels[index].style.color = "blue";
    }
}

document.getElementById('kleur-titels').addEventListener('click', kleurTitels);



/**
 * 
 * OPDRACHT 8. Body background
 * 
 * Maak de functie changeBodyBackground
 *   - Maak de variabel color, geef deze de waarde van de body background color
 *   - Schakel tussen de variabel color:
 *     - Indien color 'black' is
 *       Verander de body background color naar 'cyan'
 *     - Indien color 'cyan' is
 *       Verander de body background color naar 'navajowhite'
 *     - Indien color 'navajowhite' is
 *       Verander de body background color naar 'pink'
 *     - Indien het geen van de bovenstaande is
 *       Verander de body background color naar 'black'
 * 
 * Zorg ervoor dat de functie 'changeBodyBackground' wordt aangeroepen bij een klik op de knop met ID=kleur-body
 */


 function changeBodyBackground() {
    let color = document.body.style.backgroundColor;

    switch(color) {
        case 'black': 
            document.body.style.backgroundColor = 'cyan';
            break;
        case 'cyan': 
            document.body.style.backgroundColor = 'navajowhite';
            break;
        case 'navajowhite': 
            document.body.style.backgroundColor = 'pink';
            break;
        default:
            document.body.style.backgroundColor = 'black';
    }
}

document.getElementById('kleur-body').addEventListener('click', changeBodyBackground);




/**
 * 
 * OPDRACHT 9. Bietje padding ya'll
 * 
 * Maak de functie eenBietjePadding, die:
 *   - Sla de waarde uit het element met ID=padding op in de variabele `padding`
 *   - Een variabele `sections` aanmaakt, met als waarde alle elementen met de tag "section"
 *   - Voor elk element in de Array `sections`:
 *     - Geef deze de waarde uit de variabele `padding` als padding. (vergeet 'px' niet toe te voegen)
 * 
 * Zorg ervoor dat de functie wordt aangeroepen bij een klik op de knop ID=bietje-padding
 */


 function eenBietjePadding() {
    let padding = document.getElementById('padding').value;
    let sections = document.getElementsByTagName('section');
    for(let index = 0; index < sections.length; index++) {
        sections[index].style.padding = padding + 'px';
    }
}

document.getElementById('bietje-padding').addEventListener('click', eenBietjePadding);




/**
 * 
 * OPDRACHT 10. Break the site
 * 
 * Maak de functie breakSite, die:
 *   - Alle <article> elementen opslaat in de variabele `articles`
 *   - Voor elk element in deze Array `articles`:
 *     - Maak deze: 
 *       - position: 'absolute'
 *       - top: 0
 *       - left: 0
 * 
 * Zorg ervoor dat de functie wordt aangeroepen bij een klik op de knop ID=break-site
 */



 function breakSite() {
    let articles = document.getElementsByTagName('article');
    for(let index = 0; index < articles.length; index++) {
        articles[index].style.position = 'absolute';
        articles[index].style.top = 0;
        articles[index].style.left = 0;
    }
}

document.getElementById('break-site').addEventListener('click', breakSite);


/**
 * 
 * OPDRACHT 10 (bonus)
 * 
 */

// Zorg dat alle event koppelingen gebeuren nadat de pagina volledig geladen is.
// Zorg ervoor dat alle code netjes staat uitgelijnd.