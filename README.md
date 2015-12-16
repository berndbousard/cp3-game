# Cityflip

## Overzicht
1. Inleiding
  * Teamleden
  * Korte beschrijving
  * Phaser
  * Webpack
  * PHP & databases
2. De code
  * Preload
  * Menu
  * Info
  * Leaderboard
  * Play
  * Shop
3. Dropbox link

## Inleiding

##### Teamleden
* Sven Knockaert
* Bernd Bousard

##### Korte beschrijving
*Cityflip* is een endless arcade game, waarbij het de bedoeling is zoveel mogelijk afstand af te leggen.

De speler start met een ventje (de speler zelf), die constant vooruit loopt. De belangrijkste feature van *Cityflip*
is het verwisselen van kant om enemies te ontwijken, dit door middel van de pijltjestoetsen. Vandaar ook de naam.

Een bijkomende doelstelling is zoveel mogelijk munten te verzamelen terwijl je loopt,
waarmee je later zaken kan kopen in de shop.

##### Phaser
Deze game is gemaakt in Phaser.js (een Javascript library om vlotter browser based games te schrijven).
Voor documentatie en meer info kan je op [de website van Phaser](http://phaser.io/) terrecht. 

##### Webpack
We gebruiken Webpack om vlot onze bestanden te kunnen indelen. Verder gebruiken we Babel om onze JS te transpilen naar meer
compatiebele JS. Deze gebruiken we via de Terminal.


##### PHP & databases
Onze database staat online. Je kan eventueel een sql dump downloaden om de structuur daarvan te raadplegen. Er worden AJAX calls gebruikt om het spel vlot te doen werken, dit met behulp van JSON.


## Hoe project opzetten
1. Clone/download dit project naar je locale computer.
  * open terminal en typ het volgende commando
  ```
  git pull https://github.com/berndbousard/cp3-game/
  ```
2. navigeer naar deze map via teminal
  * gebruik hiervoor het volgende commando
    ```
    cd padNaarMap
    ```
3. installeer alle dependencies die nodig zijn om het project te runnen
  * gebruik hiervoor het volgende commando
    ```
    npm install
    ```
4. laat webpack je project in de gaten houden en transpilen wanneer er een codewijziging is gebeurd
  * gebruik hiervoor het volgende commando
    ```
    webpack -w
    ```
5. importeer de database in je localhost om scores te kunnen wegschrijven/ophalen

## De code
De code wordt opgesplitst in states, met daarin verwijzing naar klasses:

##### Preload
Er wordt een progressbar getoond terwijl alle assets worden ingeladen. Eens deze allen zijn ingeladen, gaan we over
tot de menu state.

##### Menu
De menu state is de basis interface van de gebruiker. Van hieruit kan je een scorebord bekijken, naar de shop gaan, meer info krijgen over de controls, en vanzelfsprekend ook gewoon het spel spelen.

##### Info
Info is een korte state, met een korte uitleg van de doelstelling, zodat de gebruiker een idee heeft waar hij aan begint (zonder al te veel weg te geven). Er is verder info over de controls.

##### Leaderboard
Hier kan je de top 5 beste scores zien.

##### Play
Veruit de belangrijkste state, de play state brengt de speler in het spel. Een algemene counter houdt je vooruitgang bij.
Verder worden je munten, bullets, meteorieten en kills bijgehouden. Deze data worden allemaal opgeslaan in de "Data" klasse, zodat je later deze variabelen nog kan aanspreken in andere states (voornamelijk de shop state).

##### Shop
Je kan in de shop bullets, meteorieten en ook een rainbow suit kopen.

## PSD/AI files
Voor eventuele PSD bestanden van de assets kan je terrecht op onze shared dropbox folder omdat we dit net iets flexibeler vinden om grote assets te syncen.
https://www.dropbox.com/sh/ytmj8p38x312811/AAAmECA1IaeSjoJFOXry_N7ja?dl=0