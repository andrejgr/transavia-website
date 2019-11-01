/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
///*eslint 'no-console':0*/

// LIKE -----------------------------------------------

var likeImg = document.querySelectorAll('button>img')[0];
var favoImg = document.querySelectorAll('a>img')[2];
var likeAan = false; //favoAan bevat antwoord op de vraag "is het verhaal geliked?"

function klik(){
    
    if(likeAan === true){
       
        likeImg.src = 'img/favoriet.svg';
        favoImg.src = 'img/favoriet.svg';
            likeAan = false;
       
       } else { //dan is het lampje uit
       
        likeImg.src = 'img/favorietkleur.svg';
        favoImg.src = 'img/favorietgetal.svg';
           likeAan = true;
       
       }
}

likeImg.addEventListener('click',klik,false);




// VERRAS ME -----------------------------------------------

var knopAudio = document.getElementById('knopAudio');

var keuzes;
var tekst = ('Gevonden verhaal: ');
var verhaalNaam = ['Freudiaans', 'Beroemd', 'Steenkolenfrans', 'Martin Bril', 'Het gebrek', 'Boers', 'De verwarde man'];
var info = ["Ik stap uit de lul. Mijn aarsrivaal ligt te slapen in zijn kinderwagen. Wat een kutweer. De mensen zijn met zichzelf bezig, wat er hoogstwaarschijnlijk op neerkomt dat ze aan seks met hun moeder denken. Ik ben op weg naar de Openaarse Bilbiotheek van Amsterdam, om Stijloefeningen te lenen...",

                "Vlak voordat ik de bus uitstap bedank ik de buschauffeur via de spiegel voor zijn diensten. Hij zwaait joviaal terug. ‘Mijn vrouw is een groot fan van u’, roept hij. ‘Doe haar de groeten’, zeg ik en stap uit. Centraal Station. Ik duw mijn zoon voort. Hij slaapt. Zich onbewust van de last die er...",

                "Le premier fevrièr 2011. Presque midi. Le bus s’arrête. Ligne 21. Place de Gare Centrale. Je marche au derrière d’un poussette. Mon fils dort. Je suis en route au Bibliothèque Public pour emprunteur Exercices de Style de Raymond Queneau. C’est un livre très dificile d’acquérir. Mais zut alors...",

                "Centraal Station. Iedereen gaat er naartoe, niemand moet er zijn. Behalve om verder te reizen. Ik stap uit de bus, lijn 21. Van Geuzenveld naar Centraal Station. Mijn zoon slaapt in zijn kinderwagen. Eindelijk. Het is druk op het plein, en toch heerst er een rust. De mensen zijn met zichzelf bezig. Kop in de...",

                "De bus uit. Mijn zoon tukt in zijn kinderkoets. Eindelijk. Ik loop over het plein. Een gierende wind en een striemende miezerregen geselen mijn gezicht. De mensen kijken voor zich uit, ieder voor zich. Ik ben op weg richting de bibliotheek om Stijloefeningen te lenen van hoe heet die schijver, iets met een Q. ...",

                "Ik stap dus op ut stationsplein in dieën groâte stad uut dieën bus, met mien zoân in zijne keierwoâguh. Mien zoân sloâpt. Gelaik n’n roâske. Ut regent en ut woâit. Ut volk war voârnoâm’luk met z’n eigens bezig. Kop in den kroâg, gok richting grond. En den deze war op weg noâr den Bibliotheek. Om...",

                "De politie heeft dinsdag 2 februari een verwarde man aangehouden. Hij was op dat moment in een babywinkel op het Bos en Lommerplein bezig babyschoentjes te kopen. Een luttele drie uur daarvoor stapte de verwarde man op het stationsplein uit de bus. Hij duwde een kinderwagen voort waarin 99 blikjes Whiskas lagen..."
                ];

/* png van de verhalen */
var imgVerhaal = ['freudiaans.png',
                'beroemd.jpg',
                'steenkolenfrans.png',
                'martinbril.jpg',
                'gebrek.jpg',
                'boers.jpg',
                'deverwardeman.jpg'
                ];

/* Bron: JavaScript jQuery Jon Duckett boek */

/* De functie die wordt uitgevoerd wanneer je op de randomknop klikt */
function resultaatTekst() {
    
    /* Uitkomst voor het element 'resultaat' die uit de HTML komt */
    document.getElementById('resultaat').innerHTML = tekst;
}
document.getElementById('randomknop').addEventListener("click", resultaatTekst);

/* De functie die wordt uitgevoerd wanneer je op de randomknop klikt */
function titelsTekst() {
    /* Een random nummer wordt gekozen tussen de 0 en 7 */
    keuzes = Math.floor(Math.random() * 7);
    
    /* Uitkomst voor het element 'teskten' die uit de HTML komt */
    document.getElementById('titels').innerHTML = verhaalNaam[keuzes];
    
    /* De juiste img die bij de juiste 'info' variable hoort wordt bepaald */
    document.querySelectorAll('#image')[0].src = 'img/' + imgVerhaal[keuzes];
    knopAudio.play();
}
document.getElementById('randomknop').addEventListener("click", titelsTekst);

/* De functie die wordt uitgevoerd wanneer je op de randomknop klikt */
function verhaalTekst() {
    
    /* Uitkomst voor het element 'antwoorden' die uit de HTML komt */
    document.getElementById('teksten').innerHTML = info[keuzes];
}
document.getElementById('randomknop').addEventListener("click", verhaalTekst);

