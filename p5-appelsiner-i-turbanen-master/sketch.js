/*
Først laver vi et nogle variable til at lave en appelsin
 - en kugle som vi vil skyde afsted og fange i en turban
*/

// Appelsinen
var x = 0;  // Definere X kordinatten på skærmen
var y = 550; // definere Y kordinatten 
var rad = 20; // Definere en Radius for et objet 
var xspeed = 4; // definere farten et objekt er på X kordi
var yspeed = -10; // definere farten for et objekt på Y kordi 
var newspeed; // Definere en ny hastighed 
var grav = 0.1; // En variable for gravity for et objekt 
var col = [200,100,0]; // simple farve kodnning for et objekt hvis brugt i rn funktion 

// Turbanen
var turban; // variable for den turban appelsinen skal ramme i

// Øvrige
var tid = 150; // en tids variable 
var score = 0; // en score variable så man kan få point hvis man rammer i 
var score

/* 
 * 
 */
function setup() {
    createCanvas(750, 600);
    newspeed = yspeed;
    x = rad;
    turban = new Kurv(670, 100, 70, 50, 10);
}

function draw() {
    background(0);
    move();
    checkScore();
    display();


}

function display() {
    fill(255);
    text("Score: "+score, width-80, 30);
    
    //Her skal vi sørge for at appelsinen bliver vist, hvis den skal vises
    if(tid > 0) {
        tid -= 1;
    }
    if (tid < 100) {
        fill(col);
        ellipse(x, y, rad*2, rad*2);
    }

    // Her vises turbanen - foreløbig blot en firkant
    turban.tegn();
}
    
function move() {
    //Her skal vi sørge for at appelsinen bevæger sig, hvis den er startet
    if (tid <= 0) {
        x += xspeed;
        y += yspeed;
        yspeed += grav;
    }
    if (x > width || y > height) {
        shootNew();
    }
}

function checkScore() {
    // Her checkes om turbanen har fanget appelsinen. Hvis ja, skydes en ny appelsin afsted
    if (yspeed > 0) {
        if (turban.grebet(x, y, rad)) {
            score += 1;
            shootNew(); 
        
    }
}
    
function shootNew() {
    //Her skal vi sørge for at en ny appelsin skydes afsted 
    x = rad;
    y = 550;
    yspeed = newspeed;
    xspeed = 6*Math.random();
    tid = (int) (Math.random() * 400);
}

function keyPressed() {
    turban.move(key);

    
    }


function mousePressed(){


}


/*
OPGAVER
 Opgave 1 - undersøg hvad variablerne  grav  og  tid  bruges til.
            Skriv det i kommentarer, prøv at se hvad der sker, når
            I laver dem om. 

 Opgave 2 - lav programmet om så det er tilfældigt hvor højt oppe 
            på venstre kan appelsinerne starter. Overvej om man kan 
            sikre, at appelsinen ikke ryger ud af skærmens top men 
            stadig har en "pæn" bane

 Opgave 3 - lav programmet om så man også kan bevæge turbanen mod
            højre og venstre med A- og D-tasterne. Prøv jer frem med
            forskellige løsninger for hvor hurtigt turbanen skal rykke

 Opgave 4 - ret programmet til, så det også angives hvor mange 
            appelsiner man IKKE greb med turbanen

 Opgave 5 - Undersøg hvad scriptet  kurv.js  er og gør, samt hvad de 
            funktioner, scriptet indeholder, skal bruges til. Skriv 
            det som kommentarer oven over hver funktion. Forklar tillige,
            hvad sammenhængen mellem dette script og turbanen i hoved-
            programmet er, og forklar det med kommentarer i toppen af 
            kurv.js

 Opgave 6 - find et billede af en turban og sæt det ind i stedet 
            for firkanten. Find eventuelt også en lyd, der kan afspilles, 
            når appelsinen gribes. Se gerne i "p5 Reference" hvordan, 
            hvis ikke I kan huske det:   https://p5js.org/reference/
            Lav programmet om, så man kan flytte turbanen med musen

 Opgave 7 - lav en Appelsin-klasse, lige som der er en Kurv-klasse. 
            Flyt koden til appelsinen ud i et selvstændigt script.
            Overvej hvad det skal hedde, oghvilke variabler og funktioner, 
            der skal lægges over i det nye script, herunder hvordan det 
            kommer til at berøre turbanen. Skriv jeres overvejelser i 
            kommentarerne

 Opgave 8 - ret programmet til, så der kan være flere appelsiner i 
            luften på en gang, dvs. at der kan skydes en ny appelsin
            afsted før den foregående er forsvundet. Overvej hvordan 
            og hvor hurtigt de skal skydes af, og forklar jeres tanker
            i kommentarerne

 Opgave 9 - ret programmet til, så det kan vindes og/eller tabes ved
            at man griber eller misser et antal appelsiner. Sørg for 
            at der vises en "Game Over"-skærm, som fortæller om man 
            vandt eller tabte, og som giver mulighed for at starte et
            nyt spil.

*/