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






/**
 * 
 * OPDRACHT 4. Party of niet
 * 
 * Schrijf de functie genaamd: `showPartyOrNot`, met hierin code die:
 *   - de `value` van het element met ID=party-boete opslaat in de variabele `boete`
 *   - afhankelijk van de waarde van deze boete, toon of het feest door gaat of niet,
 *     door "Ja", "Nee", of "Misschien" te plaatsen in het element met ID=party-tonight:
 *      - Als de boete meer is dan 10000, dan gaat het feest niet door
 *      - Als de boete minder is dan 5000, dan gaat het feest door
 *      - Als de boete tussen de 5 en 10 duizend ligt, dan gaat het misschien door.
 * 
 * Koppel de functie 'showPartyOrNot' aan het 'click' event van de button met ID='party-show'
 */






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







/**
 * 
 * OPDRACHT 6. Upcase funk is gonna get ya
 * 
 * Schrijf de functie genaamd: `upcaseFunk`, met hierin code die:
 *   - de HTML elementen met de class 'funk' opslaat in de variabele: `funk`
 *   - Voor elk element in die array:
 *     - Geef deze de CSS eigenschap "text-transformation: uppercase"
 * 
 * Koppel de functie 'upCaseFunk' aan het 'click' event van de button met ID='upcase-funk'
 */







/**
 * 
 * OPDRACHT 7. Kleur titels
 * 
 * Schrijf de functie genaamd: `kleurTitels`, met hierin code die:
 *   - de HTML elementen met de tag h1 opslaat in de variabele: `titels`
 *   - Voor elk element in die array:
 *     - Maak de tekstkleur blauw
 * 
 * Koppel de functie 'kleurTitels' aan het 'click' event van de button met ID='kleur-titels'
 */






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
 * Zorg ervoor dat de functie wordt aangeroepen bij een klik op de knop met ID=kleur-body
 */






/**
 * 
 * OPDRACHT 9. Bietje padding ya'll
 * 
 * Maak de functie eenBietjePadding, die:
 *   - Sla de waarde uit het element met ID=padding op in de variabele `padding`
 *   - Een variabele `sections` aanmaakt, met als waarde alle elementen met de tag "section"
 *   - Voor elk element in de Array `sections`:
 *     - Geef deze de waarde uit de variabele `padding` als padding.
 * 
 * Zorg ervoor dat de functie wordt aangeroepen bij een klik op de knop ID=bietje-padding
 */





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






/**
 * 
 * OPDRACHT 10 (bonus)
 * 
 */

// Zorg dat alle event koppelingen gebeuren nadat de pagina volledig geladen is.
// Zorg ervoor dat alle code netjes staat uitgelijnd.