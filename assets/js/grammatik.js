//---Variablen in Form von Arrays---//

// alle Ausdrücke
var arrayRandom = ["( 0 )", "( 2 )", "( 4 )", "( 6 )", "( 8 )",
                 "1 + 1", "6 + 5", "9 - 2", "8 - 7", "4 * 4", 
                 "9 / 3", "( 7 * 3 )", "( 5 - 2 )", "( 8 ) / 4", "( 0 ) + 1",
                 "( ( 1 ) )", "( ( 3 ) )", "( ( 5 ) )", "( ( 7 ) )", "( ( 9 ) )",
                   "( 8 ) * 3 + ( 2 ) - ( ( 1 ) )", 
                   "( 7 * 3 ) + ( 3 * 3 ) + ( 2 )",
                   "( 5 + 4 ) / ( 9 - 6 ) * ( 7 )",
                   "(( 3 )) + ( 8 * 2 ) + ( 9 )",
                   "( 6 / 3 ) * (( 5 )) - ( 0 )",
                   "( 9 + 8 + 7 ) / ( 3 + 2 + 1 ) * ( 6 + 5 + 4 ) - 0",
                   "(( 5 )) * (( 4 )) - ( 9 / 3 ) + ( 7 + 1 + 2 )",
                   "(( 2 )) * (( 2 )) + ( 8 / 4 ) + ( 9 + 6 - 5 )",
                   "( 3 ) - (( 9 / 9 )) - (( 7 / 7 )) - (( 5 / 5 ))",
                   "( 8 ) - (( 2 * 2 )) + (( 5 - 3 )) - (( 9 - 6 ))"];

// 3 bis 5 Zeichen
var arrayKurz = ["( 0 )", "( 2 )", "( 4 )", "( 6 )", "( 8 )",
                 "1 + 1", "6 + 5", "9 - 2", "8 - 7", "4 * 4", 
                 "9 / 3", "( 7 * 3 )", "( 5 - 2 )", "( 8 ) / 4", "( 0 ) + 1",
                 "( ( 1 ) )", "( ( 3 ) )", "( ( 5 ) )", "( ( 7 ) )", "( ( 9 ) )"];

// 15 Zeichen
var arrayMittel = ["( 8 ) * 3 + ( 2 ) - ( ( 1 ) )", 
                  "( 7 * 3 ) + ( 3 * 3 ) + ( 2 )",
                  "( 5 + 4 ) / ( 9 - 6 ) * ( 7 )",
                  "(( 3 )) + ( 8 * 2 ) + ( 9 )",
                  "( 6 / 3 ) * (( 5 )) - ( 0 )"];	

// 25 Zeichen
var arrayLang = ["( 9 + 8 + 7 ) / ( 3 + 2 + 1 ) * ( 6 + 5 + 4 ) - 0",
                 "(( 5 )) * (( 4 )) - ( 9 / 3 ) + ( 7 + 1 + 2 )",
                 "(( 2 )) * (( 2 )) + ( 8 / 4 ) + ( 9 + 6 - 5 )",
                 "( 3 ) - (( 9 / 9 )) - (( 7 / 7 )) - (( 5 / 5 ))",
                 "( 8 ) - (( 2 * 2 )) + (( 5 - 3 )) - (( 9 - 6 ))"];

//---Funktion zur Ausgabe des zufälligen Ausdrucks---//

function getItem(){
    
    var select = document.getElementById("select");
    var value = select.options[select.selectedIndex].value;
    
    if (value == 0) {
        document.getElementById("expression").innerHTML = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
    } 
    else if (value == 1) {
        document.getElementById("expression").innerHTML = arrayKurz[Math.floor(Math.random() * arrayKurz.length)];
    }
    else if (value == 2) {
        document.getElementById("expression").innerHTML = arrayMittel[Math.floor(Math.random() * arrayMittel.length)];
    }
    else if (value == 3) {
        document.getElementById("expression").innerHTML = arrayLang[Math.floor(Math.random() * arrayLang.length)];
    }
}

//---Visualisierung der Schritte---//
 
function display() {
  var inhalt_div = document.getElementById("animation").innerHTML;
  document.getElementById("animation").innerHTML=inhalt_div+step[i];
  i++;
  if (i == step.length){
  clearInterval(aktiv);
  }
} 

// globale Variablen für die Funktion showAnimation
var aktiv;
var i = 0;
var time = 1000;

function showAnimation(){
    
    var expression = document.getElementById("expression").value;   
    
    switch(expression){

    //---kurze Ausdrücke---//
    
    case "( 0 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → ( Z ) <br>";
    step[3] = "Regel 3: ( Z ) → ( 0 ) <br>";
    aktiv = setInterval(display, time);     
    break;
            
    case "( 2 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → ( Z ) <br>";
    step[3] = "Regel 3: ( Z ) → ( 2 ) <br>";
    aktiv = setInterval(display, time);    
    break; 
            
    case "( 4 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → ( Z ) <br>";
    step[3] = "Regel 3: ( Z ) → ( 4 ) <br>";
    aktiv = setInterval(display, time);    
    break;
    
    case "( 6 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → ( Z ) <br>";
    step[3] = "Regel 3: ( Z ) → ( 6 ) <br>";
    aktiv = setInterval(display, time);  
    break; 
    
    case "( 8 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → ( Z ) <br>";
    step[3] = "Regel 3: ( Z ) → ( 8 ) <br>";
    aktiv = setInterval(display, time);  
    break;

    case "1 + 1":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → Z O A <br>"
    step[3] = "Regel 2: Z O A → Z + A <br>"
    step[4] = "Regel 1: Z + A → Z + Z <br>"
    step[5] = "Regel 3: Z + Z → 1 + Z <br>"
    step[6] = "Regel 3: 1 + Z → 1 + 1 <br>"
    aktiv = setInterval(display, time);
    break;

    case "6 + 5":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1:  A → A O A <br>";
    step[2] = "Regel 1:  A O A → Z O A <br>"
    step[3] = "Regel 2:  Z O A → Z + A <br>"
    step[4] = "Regel 1:  Z + A → Z + Z <br>"
    step[5] = "Regel 3:  Z + Z → 6 + Z <br>"
    step[6] = "Regel 3:  6 + Z → 6 + 5 <br>"
    aktiv = setInterval(display, time);
    break;

    case "9 - 2":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → Z O A <br>"
    step[3] = "Regel 2: Z O A → Z - A <br>"
    step[4] = "Regel 1: Z - A → Z - Z <br>"
    step[5] = "Regel 3: Z - Z → 9 - Z <br>"
    step[6] = "Regel 3: 9 - Z → 9 - 2 <br>"
    aktiv = setInterval(display, time); 
    break;   

    case "8 - 7":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → Z O A <br>"
    step[3] = "Regel 2: Z O A → Z - A <br>"
    step[4] = "Regel 1: Z - A → Z - Z <br>"
    step[5] = "Regel 3: Z - Z → 8 - Z <br>"
    step[6] = "Regel 3: 8 - Z → 8 - 7 <br>"
    aktiv = setInterval(display, time); 
    break;

    case "4 * 4":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → Z O A <br>"
    step[3] = "Regel 2: Z O A → Z * A <br>"
    step[4] = "Regel 1: Z * A → Z * Z <br>"
    step[5] = "Regel 3: Z * Z → 4 * Z <br>"
    step[6] = "Regel 3: 4 * Z → 4 * 4 <br>"
    aktiv = setInterval(display, time);
    break;  

    case "9 / 3":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → Z O A <br>"
    step[3] = "Regel 2: Z O A → Z / A <br>"
    step[4] = "Regel 1: Z / A → Z / Z <br>"
    step[5] = "Regel 3: Z / Z → 9 / Z <br>"
    step[6] = "Regel 3: 9 / Z → 9 / 3 <br>"
    aktiv = setInterval(display, time);   
    break;

    case "( 7 * 3 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → (A) <br>";
    step[2] = "Regel 1: (A) → (A O A) <br>";
    step[3] = "Regel 1: (A O A) → (Z O A) <br>";
    step[4] = "Regel 2: (Z O A) → (Z * A) <br>";
    step[5] = "Regel 1: (Z * A) → (Z * Z) <br>";
    step[6] = "Regel 3: (Z * Z) → (7 * Z) <br>";
    step[7] = "Regel 3: (7 * Z) → (7 * 3) <br>";
    aktiv = setInterval(display, time);    
    break;

    case "( 5 - 2 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → (A) <br>";
    step[2] = "Regel 1: (A) → (A O A) <br>";
    step[3] = "Regel 1: (A O A) → (Z O A) <br>";
    step[4] = "Regel 2: (Z O A) → (Z - A) <br>";
    step[5] = "Regel 1: (Z - A) → (Z - Z) <br>";
    step[6] = "Regel 3: (Z - Z) → (5 - Z) <br>";
    step[7] = "Regel 3: (5 - Z) → (5 - 2) <br>";
    aktiv = setInterval(display, time); 
    break;

    case "( 8 ) / 4":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → (A) O A <br>";
    step[3] = "Regel 1: (A) O A → (Z) O A <br>";
    step[4] = "Regel 2: (Z) O A → (Z) / A <br>";
    step[5] = "Regel 1: (Z) / A → (Z) / Z <br>";
    step[6] = "Regel 3: (Z) / Z → (8) / Z <br>";
    step[7] = "Regel 3: (8) / Z → (8) / 4 <br>";
    aktiv = setInterval(display, time);   
    break;

    case "( 0 ) + 1":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → (A) O A <br>";
    step[3] = "Regel 1: (A) O A → (Z) O A <br>";
    step[4] = "Regel 2: (Z) O A → (Z) + A <br>";
    step[5] = "Regel 1: (Z) + A → (Z) + Z <br>";
    step[6] = "Regel 3: (Z) + Z → (0) + Z <br>";
    step[7] = "Regel 3: (0) + Z → (0) + 1 <br>";
    aktiv = setInterval(display, time);    
    break;     
    
    case "( ( 1 ) )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → (( A )) <br>";
    step[3] = "Regel 1: (( A )) → (( Z )) <br>";
    step[4] = "Regel 3: (( Z )) → (( 1 )) <br>";
    aktiv = setInterval(display, time);
    break;  

    case "( ( 3 ) )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → (( A )) <br>";
    step[3] = "Regel 1: (( A )) → (( Z )) <br>";
    step[4] = "Regel 3: (( Z )) → (( 3 )) <br>";
    aktiv = setInterval(display, time);
    break;

    case "( ( 5 ) )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → (( A )) <br>";
    step[3] = "Regel 1: (( A )) → (( Z )) <br>";
    step[4] = "Regel 3: (( Z )) → (( 5 )) <br>";
    aktiv = setInterval(display, time);
    break;
    
    case "( ( 7 ) )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → (( A )) <br>";
    step[3] = "Regel 1: (( A )) → (( Z )) <br>";
    step[4] = "Regel 3: (( Z )) → (( 7 )) <br>";
    aktiv = setInterval(display, time);
    break;

    case "( ( 9 ) )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → ( A ) <br>";
    step[2] = "Regel 1: ( A ) → (( A )) <br>";
    step[3] = "Regel 1: (( A )) → (( Z )) <br>";
    step[4] = "Regel 3: (( Z )) → (( 9 )) <br>";
    aktiv = setInterval(display, time);
    break;
            
    //---mittellange Ausdrücke---//
    
    case "( 8 ) * 3 + ( 2 ) - ( ( 1 ) )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → A O A O A <br>";
    step[3] = "Regel 1: A O A O A → A O A O A O A <br>";
    step[4] = "Regel 1: A O A O A O A → (A) O A O A O A <br>";
    step[5] = "Regel 1: (A) O A O A O A → (A) O A O (A) O A <br>";
    step[6] = "Regel 1: (A) O A O (A) O A → (A) O A O (A) O (A) <br>";  
    step[7] = "Regel 1: (A) O A O (A) O (A) → (A) O A O (A) O ((A)) <br>";
    step[8] = "Regel 1: (A) O A O (A) O ((A)) → (Z) O A O (A) O ((A)) <br>";
    step[9] = "Regel 2: (Z) O A O (A) O ((A)) → (Z) * A O (A) O ((A)) <br>";
    step[10] = "Regel 1: (Z) * A O (A) O ((A)) → (Z) * Z O (A) O ((A)) <br>";
    step[11] = "Regel 2: (Z) * Z O (A) O ((A)) → (Z) * Z + (A) O ((A)) <br>";
    step[12] = "Regel 1: (Z) * Z + (A) O ((A)) → (Z) * Z + (Z) O ((A)) <br>";
    step[13] = "Regel 2: (Z) * Z + (Z) O ((A)) → (Z) * Z + (Z) - ((A)) <br>";
    step[14] = "Regel 1: (Z) * Z + (Z) - ((A)) → (Z) * Z + (Z) - ((Z)) <br>";
    step[15] = "Regel 3: (Z) * Z + (Z) - ((Z)) → (8) * Z + (Z) - ((Z)) <br>";
    step[16] = "Regel 3: (8) * Z + (Z) - ((Z)) → (8) * 3 + (Z) - ((Z)) <br>";
    step[17] = "Regel 3: (8) * 3 + (Z) - ((Z)) → (8) * 3 + (2) - ((Z)) <br>";
    step[18] = "Regel 3: (8) * 3 + (2) - ((Z)) → (8) * 3 + (2) - ((1)) <br>";
    aktiv = setInterval(display, time);
    break;
            
    case "( 7 * 3 ) + ( 3 * 3 ) + ( 2 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → A O A O A <br>";
    step[3] = "Regel 1: A O A O A → (A O A) O A O A <br>";
    step[4] = "Regel 1: (A O A) O A O A → (A O A) O (A O A) O A <br>";
    step[5] = "Regel 1: (A O A) O (A O A) O A → (A O A) O (A O A) O (A) <br>";
    step[6] = "Regel 1: (A O A) O (A O A) O (A) → (Z O A) O (A O A) O (A) <br>";
    step[7] = "Regel 2: (Z O A) O (A O A) O (A) → (Z * A) O (A O A) O (A) <br>";
    step[8] = "Regel 1: (Z * A) O (A O A) O (A) → (Z * Z) O (A O A) O (A) <br>";
    step[9] = "Regel 2: (Z * Z) O (A O A) O (A) → (Z * Z) + (A O A) O (A) <br>";
    step[10] = "Regel 1: (Z * Z) + (A O A) O (A) → (Z * Z) + (Z O A) O (A) <br>";
    step[11] = "Regel 2: (Z * Z) + (Z O A) O (A) → (Z * Z) + (Z * A) O (A) <br>";
    step[12] = "Regel 1: (Z * Z) + (Z * A) O (A) → (Z * Z) + (Z * Z) O (A) <br>";
    step[13] = "Regel 2: (Z * Z) + (Z * Z) O (A) → (Z * Z) + (Z * Z) + (A) <br>";
    step[14] = "Regel 1: (Z * Z) + (Z * Z) + (A) → (Z * Z) + (Z * Z) + (Z) <br>";
    step[15] = "Regel 3: (Z * Z) + (Z * Z) + (Z) → (7 * Z) + (Z * Z) + (Z) <br>";
    step[16] = "Regel 3: (7 * Z) + (Z * Z) + (Z) → (7 * 3) + (Z * Z) + (Z) <br>";
    step[17] = "Regel 3: (7 * 3) + (Z * Z) + (Z) → (7 * 3) + (3 * Z) + (Z) <br>";
    step[18] = "Regel 3: (7 * 3) + (3 * Z) + (Z) → (7 * 3) + (3 * 3) + (Z) <br>";
    step[19] = "Regel 3: (7 * 3) + (3 * 3) + (Z) → (7 * 3) + (3 * 3) + (2) <br>";
    aktiv = setInterval(display, time);
    break;
            
    case "( 5 + 4 ) / ( 9 - 6 ) * ( 7 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → A O A O A <br>";
    step[3] = "Regel 1: A O A O A → (A O A) O A O A <br>";
    step[4] = "Regel 1: (A O A) O A O A → (A O A) O (A O A) O A <br>";
    step[5] = "Regel 1: (A O A) O (A O A) O A → (A O A) O (A O A) O (A) <br>";
    step[6] = "Regel 1: (A O A) O (A O A) O (A) → (Z O A) O (A O A) O (A) <br>";
    step[7] = "Regel 2: (Z O A) O (A O A) O (A) → (Z + A) O (A O A) O (A) <br>";
    step[8] = "Regel 1: (Z + A) O (A O A) O (A) → (Z + Z) O (A O A) O (A) <br>";
    step[9] = "Regel 2: (Z + Z) O (A O A) O (A) → (Z + Z) / (A O A) O (A) <br>";
    step[10] = "Regel 1: (Z + Z) / (A O A) O (A) → (Z + Z) / (Z O A) O (A) <br>";
    step[11] = "Regel 2: (Z + Z) / (Z O A) O (A) → (Z + Z) / (Z - A) O (A) <br>";
    step[12] = "Regel 1: (Z + Z) / (Z - A) O (A) → (Z + Z) / (Z - Z) O (A) <br>";
    step[13] = "Regel 2: (Z + Z) / (Z - Z) O (A) → (Z + Z) / (Z - Z) * (A) <br>";
    step[14] = "Regel 1: (Z + Z) / (Z - Z) * (A) → (Z + Z) / (Z - Z) * (Z) <br>";
    step[15] = "Regel 3: (Z + Z) / (Z - Z) * (Z) → (5 + Z) / (Z - Z) * (Z) <br>";
    step[16] = "Regel 3: (5 + Z) / (Z - Z) * (Z) → (5 + 4) / (Z - Z) * (Z) <br>";
    step[17] = "Regel 3: (5 + 4) / (Z - Z) * (Z) → (5 + 4) / (9 - Z) * (Z) <br>";
    step[18] = "Regel 3: (5 + 4) / (9 - Z) * (Z) → (5 + 4) / (9 - 6) * (Z) <br>";
    step[19] = "Regel 3: (5 + 4) / (9 - 6) * (Z) → (5 + 4) / (9 - 6) * (7) <br>";
    aktiv = setInterval(display, time);
    break;
            
    case "(( 3 )) + ( 8 * 2 ) + ( 9 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → A O A O A <br>";
    step[3] = "Regel 1: A O A O A → (A) O A O A <br>";
    step[4] = "Regel 1: (A) O A O A → ((A)) O A O A <br>";
    step[5] = "Regel 1: ((A)) O A O A → ((A)) O (A) O A <br>";
    step[6] = "Regel 1: ((A)) O (A) O A → ((A)) O (A O A) O A <br>";
    step[7] = "Regel 1: ((A)) O (A O A) O A → ((A)) O (A O A) O (A) <br>";
    step[8] = "Regel 1: ((A)) O (A O A) O (A) → ((Z)) O (A O A) O (A) <br>";
    step[9] = "Regel 2: ((Z)) O (A O A) O (A) → ((Z)) + (A O A) O (A) <br>";
    step[10] = "Regel 1: ((Z)) + (A O A) O (A) → ((Z)) + (Z O A) O (A) <br>";
    step[11] = "Regel 2: ((Z)) + (Z O A) O (A) → ((Z)) + (Z * A) O (A) <br>";
    step[12] = "Regel 1: ((Z)) + (Z * A) O (A) → ((Z)) + (Z * Z) O (A) <br>";
    step[13] = "Regel 2: ((Z)) + (Z * Z) O (A) → ((Z)) + (Z * Z) + (A) <br>";
    step[14] = "Regel 1: ((Z)) + (Z * Z) + (A) → ((Z)) + (Z * Z) + (Z) <br>";
    step[15] = "Regel 3: ((Z)) + (Z * Z) + (Z) → ((3)) + (Z * Z) + (Z) <br>";
    step[16] = "Regel 3: ((3)) + (Z * Z) + (Z) → ((3)) + (8 * Z) + (Z) <br>";
    step[17] = "Regel 3: ((3)) + (8 * Z) + (Z) → ((3)) + (8 * 2) + (Z) <br>";
    step[18] = "Regel 3: ((3)) + (8 * 2) + (Z) → ((3)) + (8 * 2) + (9) <br>";
    aktiv = setInterval(display, time);
    break;
            
    case "( 6 / 3 ) * (( 5 )) - ( 0 )":
    step = new Array();
    step[0] = "Start: A <br>";
    step[1] = "Regel 1: A → A O A <br>";
    step[2] = "Regel 1: A O A → A O A O A <br>";
    step[3] = "Regel 1: A O A O A → (A) O A O A <br>";
    step[4] = "Regel 1: (A) O A O A → (A O A) O A O A <br>";
    step[5] = "Regel 1: (A O A) O A O A → (A O A) O (A) O A <br>";
    step[6] = "Regel 1: (A O A) O (A) O A → (A O A) O ((A)) O A <br>";
    step[7] = "Regel 1: (A O A) O ((A)) O A → (A O A) O ((A)) O (A) <br>";
    step[8] = "Regel 1: (A O A) O ((A)) O (A) → (Z O A) O ((A)) O (A) <br>";
    step[9] = "Regel 2: (Z O A) O ((A)) O (A) → (Z / A) O ((A)) O (A) <br>";
    step[10] = "Regel 1: (Z / A) O ((A)) O (A) → (Z / Z) O ((A)) O (A) <br>";
    step[11] = "Regel 2: (Z / Z) O ((A)) O (A) → (Z / Z) * ((A)) O (A) <br>";
    step[12] = "Regel 1: (Z / Z) * ((A)) O (A) → (Z / Z) * ((Z)) O (A) <br>";
    step[13] = "Regel 2: (Z / Z) * ((Z)) O (A) → (Z / Z) * ((Z)) - (A) <br>";
    step[14] = "Regel 1: (Z / Z) * ((Z)) - (A) → (Z / Z) * ((Z)) - (Z) <br>";
    step[15] = "Regel 3: (Z / Z) * ((Z)) - (Z) → (6 / Z) * ((Z)) - (Z) <br>";
    step[16] = "Regel 3: (6 / Z) * ((Z)) - (Z) → (6 / 3) * ((Z)) - (Z) <br>";
    step[17] = "Regel 3: (6 / 3) * ((Z)) - (Z) → (6 / 3) * ((5)) - (Z) <br>";
    step[18] = "Regel 3: (6 / 3) * ((5)) - (Z) → (6 / 3) * ((5)) - (0) <br>";
    aktiv = setInterval(display, time);
    break;

    //---lange Ausdrücke---//
            
    case "( 9 + 8 + 7 ) / ( 3 + 2 + 1 ) * ( 6 + 5 + 4 ) - 0":
    step = new Array();
    step[0] = "Start: A <br><br>";
    step[1] = "Regel 1: A <br> → A O A <br><br>";
    step[2] = "Regel 1: A O A <br> → A O A O A <br><br>";
    step[3] = "Regel 1: A O A O A <br> → A O A O A O A <br><br>";
    step[4] = "Regel 1: A O A O A O A <br> → (A) O A O A O A <br><br>";
    step[5] = "Regel 1: (A) O A O A O A <br> → (A) O (A) O A O A <br><br>";
    step[6] = "Regel 1: (A) O (A) O A O A <br> → (A) O (A) O (A) O A <br><br>";
    step[7] = "Regel 1: (A) O (A) O (A) O A <br> → (A O A) O (A) O (A) O A <br><br>";
    step[8] = "Regel 1: (A O A) O (A) O (A) O A <br> → (A O A O A) O (A) O (A) O A <br><br>";
    step[9] = "Regel 1: (A O A O A) O (A) O (A) O A <br> → (A O A O A) O (A O A) O (A) O A <br><br>";
    step[10] = "Regel 1: (A O A O A) O (A O A) O (A) O A <br> → (A O A O A) O (A O A O A) O (A) O A <br><br>";
    step[11] = "Regel 1: (A O A O A) O (A O A O A) O (A) O A <br> → (A O A O A) O (A O A O A) O (A O A) O A <br><br>";
    step[12] = "Regel 1: (A O A O A) O (A O A O A) O (A O A) O A <br> → (A O A O A) O (A O A O A) O (A O A O A) O A <br><br>";
    step[13] = "Regel 1: (A O A O A) O (A O A O A) O (A O A O A) O A <br> → (Z O A O A) O (A O A O A) O (A O A O A) O A <br><br>";
    step[14] = "Regel 2: (Z O A O A) O (A O A O A) O (A O A O A) O A <br> → (Z + A O A) O (A O A O A) O (A O A O A) O A <br><br>";
    step[15] = "Regel 1: (Z + A O A) O (A O A O A) O (A O A O A) O A <br> → (Z + Z O A) O (A O A O A) O (A O A O A) O A <br><br>";
    step[16] = "Regel 2: (Z + Z O A) O (A O A O A) O (A O A O A) O A <br> → (Z + Z + A) O (A O A O A) O (A O A O A) O A <br><br>";
    step[17] = "Regel 1: (Z + Z + A) O (A O A O A) O (A O A O A) O A <br> → (Z + Z + Z) O (A O A O A) O (A O A O A) O A <br><br>";
    step[18] = "Regel 2: (Z + Z + Z) O (A O A O A) O (A O A O A) O A <br> → (Z + Z + Z) / (A O A O A) O (A O A O A) O A <br><br>";
    step[19] = "Regel 1: (Z + Z + Z) / (A O A O A) O (A O A O A) O A <br> → (Z + Z + Z) / (Z O A O A) O (A O A O A) O A <br><br>";
    step[20] = "Regel 2: (Z + Z + Z) / (Z O A O A) O (A O A O A) O A <br> → (Z + Z + Z) / (Z + A O A) O (A O A O A) O A <br><br>";
    step[21] = "Regel 1: (Z + Z + Z) / (Z + A O A) O (A O A O A) O A <br> → (Z + Z + Z) / (Z + Z O A) O (A O A O A) O A <br><br>";
    step[22] = "Regel 2: (Z + Z + Z) / (Z + Z O A) O (A O A O A) O A <br> → (Z + Z + Z) / (Z + Z + A) O (A O A O A) O A <br><br>";
    step[23] = "Regel 1: (Z + Z + Z) / (Z + Z + A) O (A O A O A) O A <br> → (Z + Z + Z) / (Z + Z + Z) O (A O A O A) O A <br><br>";
    step[24] = "Regel 2: (Z + Z + Z) / (Z + Z + Z) O (A O A O A) O A <br> → (Z + Z + Z) / (Z + Z + Z) * (A O A O A) O A <br><br>";
    step[25] = "Regel 1: (Z + Z + Z) / (Z + Z + Z) * (A O A O A) O A <br> → (Z + Z + Z) / (Z + Z + Z) * (Z O A O A) O A <br><br>";
    step[26] = "Regel 2: (Z + Z + Z) / (Z + Z + Z) * (Z O A O A) O A <br> → (Z + Z + Z) / (Z + Z + Z) * (Z + A O A) O A <br><br>";
    step[27] = "Regel 1: (Z + Z + Z) / (Z + Z + Z) * (Z + A O A) O A <br> → (Z + Z + Z) / (Z + Z + Z) * (Z + Z O A) O A <br><br>";    
    step[28] = "Regel 2: (Z + Z + Z) / (Z + Z + Z) * (Z + Z O A) O A <br> → (Z + Z + Z) / (Z + Z + Z) * (Z + Z + A) O A <br><br>";       
    step[29] = "Regel 1: (Z + Z + Z) / (Z + Z + Z) * (Z + Z + A) O A <br> → (Z + Z + Z) / (Z + Z + Z) * (Z + Z + Z) O A <br><br>";   
    step[30] = "Regel 2: (Z + Z + Z) / (Z + Z + Z) * (Z + Z + Z) O A <br> → (Z + Z + Z) / (Z + Z + Z) * (Z + Z + Z) - A <br><br>";   
    step[31] = "Regel 1: (Z + Z + Z) / (Z + Z + Z) * (Z + Z + Z) O A <br> → (Z + Z + Z) / (Z + Z + Z) * (Z + Z + Z) - Z <br><br>";          
    step[32] = "Regel 3: (Z + Z + Z) / (Z + Z + Z) * (Z + Z + Z) - Z <br> → (9 + Z + Z) / (Z + Z + Z) * (Z + Z + Z) - Z <br><br>";         
    step[33] = "Regel 3: (9 + Z + Z) / (Z + Z + Z) * (Z + Z + Z) - Z <br> → (9 + 8 + Z) / (Z + Z + Z) * (Z + Z + Z) - Z <br><br>";   
    step[34] = "Regel 3: (9 + 8 + Z) / (Z + Z + Z) * (Z + Z + Z) - Z <br> → (9 + 8 + 7) / (Z + Z + Z) * (Z + Z + Z) - Z <br><br>";        
    step[35] = "Regel 3: (9 + 8 + 7) / (Z + Z + Z) * (Z + Z + Z) - Z <br> → (9 + 8 + 7) / (3 + Z + Z) * (Z + Z + Z) - Z <br><br>";      
    step[36] = "Regel 3: (9 + 8 + 7) / (3 + Z + Z) * (Z + Z + Z) - Z <br> → (9 + 8 + 7) / (3 + 2 + Z) * (Z + Z + Z) - Z <br><br>";         
    step[37] = "Regel 3: (9 + 8 + 7) / (3 + 2 + Z) * (Z + Z + Z) - Z <br> → (9 + 8 + 7) / (3 + 2 + 1) * (Z + Z + Z) - Z <br><br>";  
    step[38] = "Regel 3: (9 + 8 + 7) / (3 + 2 + 1) * (Z + Z + Z) - Z <br> → (9 + 8 + 7) / (3 + 2 + 1) * (6 + Z + Z) - Z <br><br>"; 
    step[39] = "Regel 3: (9 + 8 + 7) / (3 + 2 + 1) * (6 + Z + Z) - Z <br> → (9 + 8 + 7) / (3 + 2 + 1) * (6 + 5 + Z) - Z <br><br>";
    step[40] = "Regel 3: (9 + 8 + 7) / (3 + 2 + 1) * (6 + 5 + Z) - Z <br> → (9 + 8 + 7) / (3 + 2 + 1) * (6 + 5 + 4) - Z <br><br>";
    step[41] = "Regel 3: (9 + 8 + 7) / (3 + 2 + 1) * (6 + 5 + 4) - Z <br> → (9 + 8 + 7) / (3 + 2 + 1) * (6 + 5 + 4) - 0 <br><br>";    
    aktiv = setInterval(display, time);
    break;
            
    case "(( 5 )) * (( 4 )) - ( 9 / 3 ) + ( 7 + 1 + 2 )":
    step = new Array();
    step[0] = "Start: A <br><br>";
    step[1] = "Regel 1: A <br> → A O A <br><br>";
    step[2] = "Regel 1: A O A <br> → A O A O A <br><br>";
    step[3] = "Regel 1: A O A O A <br> → A O A O A O A <br><br>";
    step[4] = "Regel 1: A O A O A O A <br> → (A) O A O A O A <br><br>";
    step[5] = "Regel 1: (A) O A O A O A <br> → (A) O (A) O A O A <br><br>";
    step[6] = "Regel 1: (A) O (A) O A O A <br> → (A) O (A) O (A) O A <br><br>";
    step[7] = "Regel 1: (A) O (A) O (A) O A <br> → (A) O (A) O (A) O (A) <br><br>";
    step[8] = "Regel 1: (A) O (A) O (A) O (A) <br> → ((A)) O (A) O (A) O (A) <br><br>";
    step[9] = "Regel 2: ((A)) O (A) O (A) O (A) <br> → ((A)) * (A) O (A) O (A) <br><br>";
    step[10] = "Regel 1: ((A)) * (A) O (A) O (A) <br> → ((A)) * ((A)) O (A) O (A) <br><br>";
    step[11] = "Regel 2: ((A)) * ((A)) O (A) O (A) <br> → ((A)) * ((A)) - (A) O (A) <br><br>";
    step[12] = "Regel 1: ((A)) * ((A)) - (A) O (A) <br> → ((A)) * ((A)) - (A O A) O (A) <br><br>";
    step[13] = "Regel 2: ((A)) * ((A)) - (A O A) O (A) <br> → ((A)) * ((A)) - (A O A) + (A) <br><br>";
    step[14] = "Regel 1: ((A)) * ((A)) - (A O A) + (A) <br> → ((A)) * ((A)) - (A O A) + (A O A) <br><br>";
    step[15] = "Regel 1: ((A)) * ((A)) - (A O A) + (A O A) <br> → ((A)) * ((A)) - (A O A) + (A O A O A) <br><br>";
    step[16] = "Regel 2: ((A)) * ((A)) - (A O A) + (A O A O A) <br> → ((A)) * ((A)) - (A / A) + (A O A O A) <br><br>";
    step[17] = "Regel 2: ((A)) * ((A)) - (A / A) + (A O A O A) <br> → ((A)) * ((A)) - (A / A) + (A + A O A) <br><br>";
    step[18] = "Regel 2: ((A)) * ((A)) - (A / A) + (A + A O A) <br> → ((A)) * ((A)) - (A / A) + (A + A O A) <br><br>";
    step[19] = "Regel 2: ((A)) * ((A)) - (A / A) + (A + A O A) <br> → ((A)) * ((A)) - (A / A) + (A + A + A) <br><br>";
    step[20] = "Regel 3: ((A)) * ((A)) - (A / A) + (A + A + A) <br> → ((5)) * ((A)) - (A / A) + (A + A + A) <br><br>";
    step[21] = "Regel 3: ((5)) * ((A)) - (A / A) + (A + A + A) <br> → ((5)) * ((4)) - (A / A) + (A + A + A) <br><br>";
    step[22] = "Regel 3: ((5)) * ((4)) - (A / A) + (A + A + A) <br> → ((5)) * ((4)) - (9 / A) + (A + A + A) <br><br>";
    step[23] = "Regel 3: ((5)) * ((4)) - (9 / A) + (A + A + A) <br> → ((5)) * ((4)) - (9 / 3) + (A + A + A) <br><br>";
    step[24] = "Regel 3: ((5)) * ((4)) - (9 / 3) + (A + A + A) <br> → ((5)) * ((4)) - (9 / 3) + (7 + A + A) <br><br>";
    step[25] = "Regel 3: ((5)) * ((4)) - (9 / 3) + (7 + A + A) <br> → ((5)) * ((4)) - (9 / 3) + (7 + 1 + A) <br><br>";
    step[26] = "Regel 3: ((5)) * ((4)) - (9 / 3) + (7 + 1 + A) <br> → ((5)) * ((4)) - (9 / 3) + (7 + 1 + 2) <br><br>";
    aktiv = setInterval(display, time);
    break;
    
    case "(( 2 )) * (( 2 )) + ( 8 / 4 ) + ( 9 + 6 - 5 )":
    step = new Array();
    step[0] = "Start: A <br><br>";
    step[1] = "Regel 1: A <br> → A O A <br><br>";
    step[2] = "Regel 1: A O A <br> → A O A O A <br><br>";
    step[3] = "Regel 1: A O A O A <br> → A O A O A O A <br><br>";
    step[4] = "Regel 1: A O A O A O A <br> → (A) O A O A O A <br><br>";
    step[5] = "Regel 1: (A) O A O A O A <br> → (A) O (A) O A O A <br><br>";
    step[6] = "Regel 1: (A) O (A) O A O A <br> → (A) O (A) O (A) O A <br><br>";
    step[7] = "Regel 1: (A) O (A) O (A) O A <br> → (A) O (A) O (A) O (A) <br><br>";
    step[8] = "Regel 1: (A) O (A) O (A) O (A) <br> → ((A)) O (A) O (A) O (A) <br><br>";
    step[9] = "Regel 2: ((A)) O (A) O (A) O (A) <br> → ((A)) * (A) O (A) O (A) <br><br>";
    step[10] = "Regel 1: ((A)) * (A) O (A) O (A) <br> → ((A)) * ((A)) O (A) O (A) <br><br>";
    step[11] = "Regel 2: ((A)) * ((A)) O (A) O (A) <br> → ((A)) * ((A)) - (A) O (A) <br><br>";
    step[12] = "Regel 1: ((A)) * ((A)) + (A) O (A) <br> → ((A)) * ((A)) - (A O A) O (A) <br><br>";
    step[13] = "Regel 2: ((A)) * ((A)) + (A O A) O (A) <br> → ((A)) * ((A)) - (A O A) + (A) <br><br>";
    step[14] = "Regel 1: ((A)) * ((A)) + (A O A) + (A) <br> → ((A)) * ((A)) - (A O A) + (A O A) <br><br>";
    step[15] = "Regel 1: ((A)) * ((A)) + (A O A) + (A O A) <br> → ((A)) * ((A)) - (A O A) + (A O A O A) <br><br>";
    step[16] = "Regel 2: ((A)) * ((A)) + (A O A) + (A O A O A) <br> → ((A)) * ((A)) + (A / A) + (A O A O A) <br><br>";
    step[17] = "Regel 2: ((A)) * ((A)) + (A / A) + (A O A O A) <br> → ((A)) * ((A)) + (A / A) + (A + A O A) <br><br>";
    step[18] = "Regel 2: ((A)) * ((A)) + (A / A) + (A + A O A) <br> → ((A)) * ((A)) + (A / A) + (A + A O A) <br><br>";
    step[19] = "Regel 2: ((A)) * ((A)) + (A / A) + (A + A O A) <br> → ((A)) * ((A)) + (A / A) + (A + A - A) <br><br>";
    step[20] = "Regel 3: ((A)) * ((A)) + (A / A) + (A + A - A) <br> → ((2)) * ((A)) + (A / A) + (A + A - A) <br><br>";
    step[21] = "Regel 3: ((2)) * ((A)) + (A / A) + (A + A - A) <br> → ((2)) * ((2)) + (A / A) + (A + A - A) <br><br>";
    step[22] = "Regel 3: ((2)) * ((2)) + (A / A) + (A + A - A) <br> → ((2)) * ((2)) + (8 / A) + (A + A - A) <br><br>";
    step[23] = "Regel 3: ((2)) * ((2)) + (8 / A) + (A + A - A) <br> → ((2)) * ((2)) + (8 / 4) + (A + A - A) <br><br>";
    step[24] = "Regel 3: ((2)) * ((2)) + (8 / 4) + (A + A - A) <br> → ((2)) * ((2)) + (8 / 4) + (9 + A - A) <br><br>";
    step[25] = "Regel 3: ((2)) * ((2)) + (8 / 4) + (9 + A - A) <br> → ((2)) * ((2)) + (8 / 4) + (9 + 6 - A) <br><br>";
    step[26] = "Regel 3: ((2)) * ((2)) + (8 / 4) + (9 + 6 - A) <br> → ((2)) * ((2)) + (8 / 4) + (9 + 6 - 5) <br><br>";
    aktiv = setInterval(display, time);
    break;
            
    case "( 3 ) - (( 9 / 9 )) - (( 7 / 7 )) - (( 5 / 5 ))":
    step = new Array();
    step[0] = "Start: A <br><br>";
    step[1] = "Regel 1: A <br> → A O A <br><br>";
    step[2] = "Regel 1: A O A <br> → A O A O A <br><br>";
    step[3] = "Regel 1: A O A O A <br> → A O A O A O A <br><br>";
    step[4] = "Regel 1: A O A O A O A <br> → (A) O A O A O A <br><br>";
    step[5] = "Regel 1: (A) O A O A O A <br> → (A) O (A) O A O A <br><br>";
    step[6] = "Regel 1: (A) O (A) O A O A <br> → (A) O (A) O (A) O A <br><br>";
    step[7] = "Regel 1: (A) O (A) O (A) O A <br> → (A) O (A) O (A) O (A) <br><br>";
    step[8] = "Regel 1: (A) O (A) O (A) O (A) <br> → (A) O ((A)) O (A) O (A) <br><br>";
    step[9] = "Regel 1: (A) O ((A)) O (A) O (A) <br> → (A) O ((A)) O ((A)) O (A) <br><br>";
    step[10] = "Regel 1: (A) O ((A)) O ((A)) O (A) <br> → (A) O ((A)) O ((A)) O ((A)) <br><br>";
    step[11] = "Regel 1: (A) O ((A)) O ((A)) O ((A)) <br> → (A) O ((A O A)) O ((A)) O ((A)) <br><br>";
    step[12] = "Regel 1: (A) O ((A O A)) O ((A)) O ((A)) <br> → (A) O ((A O A)) O ((A O A)) O ((A)) <br><br>";
    step[13] = "Regel 1: (A) O ((A O A)) O ((A O A)) O ((A)) <br> → (A) O ((A O A)) O ((A O A)) O ((A O A)) <br><br>";
    step[14] = "Regel 2: (A) O ((A O A)) O ((A O A)) O ((A O A)) <br> → (A) - ((A O A)) O ((A O A)) O ((A O A)) <br><br>";
    step[15] = "Regel 2: (A) - ((A O A)) O ((A O A)) O ((A O A)) <br> → (A) - ((A / A)) O ((A O A)) O ((A O A)) <br><br>";
    step[16] = "Regel 2: (A) - ((A / A)) O ((A O A)) O ((A O A)) <br> → (A) - ((A / A)) - ((A O A)) O ((A O A)) <br><br>";
    step[17] = "Regel 2: (A) - ((A / A)) - ((A O A)) O ((A O A)) <br> → (A) - ((A / A)) - ((A / A)) O ((A O A)) <br><br>";
    step[18] = "Regel 2: (A) - ((A / A)) - ((A / A)) O ((A O A)) <br> → (A) - ((A / A)) - ((A / A)) - ((A O A)) <br><br>";
    step[19] = "Regel 2: (A) - ((A / A)) - ((A / A)) - ((A O A)) <br> → (A) - ((A / A)) - ((A / A)) - ((A / A)) <br><br>";
    step[20] = "Regel 3: (A) - ((A / A)) - ((A / A)) - ((A / A)) <br> → (3) - ((A / A)) - ((A / A)) - ((A / A)) <br><br>";
    step[21] = "Regel 3: (3) - ((A / A)) - ((A / A)) - ((A / A)) <br> → (3) - ((9 / A)) - ((A / A)) - ((A / A)) <br><br>";
    step[22] = "Regel 3: (3) - ((9 / A)) - ((A / A)) - ((A / A)) <br> → (3) - ((9 / 9)) - ((A / A)) - ((A / A)) <br><br>";
    step[23] = "Regel 3: (3) - ((9 / 9)) - ((A / A)) - ((A / A)) <br> → (3) - ((9 / 9)) - ((7 / A)) - ((A / A)) <br><br>";
    step[24] = "Regel 3: (3) - ((9 / 9)) - ((7 / A)) - ((A / A)) <br> → (3) - ((9 / 9)) - ((7 / 7)) - ((A / A)) <br><br>";
    step[25] = "Regel 3: (3) - ((9 / 9)) - ((7 / 7)) - ((A / A)) <br> → (3) - ((9 / 9)) - ((7 / 7)) - ((5 / A)) <br><br>";
    step[26] = "Regel 3: (3) - ((9 / 9)) - ((7 / 7)) - ((5 / A)) <br> → (3) - ((9 / 9)) - ((7 / 7)) - ((5 / 5)) <br><br>";
    aktiv = setInterval(display, time);
    break;
            
    case "( 8 ) - (( 2 * 2 )) + (( 5 - 3 )) - (( 9 - 6 ))":
    step = new Array();
    step[0] = "Start: A <br><br>";
    step[1] = "Regel 1: A <br> → A O A <br><br>";
    step[2] = "Regel 1: A O A <br> → A O A O A <br><br>";
    step[3] = "Regel 1: A O A O A <br> → A O A O A O A <br><br>";
    step[4] = "Regel 1: A O A O A O A <br> → (A) O A O A O A <br><br>";
    step[5] = "Regel 1: (A) O A O A O A <br> → (A) O (A) O A O A <br><br>";
    step[6] = "Regel 1: (A) O (A) O A O A <br> → (A) O (A) O (A) O A <br><br>";
    step[7] = "Regel 1: (A) O (A) O (A) O A <br> → (A) O (A) O (A) O (A) <br><br>";
    step[8] = "Regel 1: (A) O (A) O (A) O (A) <br> → (A) O ((A)) O (A) O (A) <br><br>";
    step[9] = "Regel 1: (A) O ((A)) O (A) O (A) <br> → (A) O ((A)) O ((A)) O (A) <br><br>";
    step[10] = "Regel 1: (A) O ((A)) O ((A)) O (A) <br> → (A) O ((A)) O ((A)) O ((A)) <br><br>";
    step[11] = "Regel 1: (A) O ((A)) O ((A)) O ((A)) <br> → (A) O ((A O A)) O ((A)) O ((A)) <br><br>";
    step[12] = "Regel 1: (A) O ((A O A)) O ((A)) O ((A)) <br> → (A) O ((A O A)) O ((A O A)) O ((A)) <br><br>";
    step[13] = "Regel 1: (A) O ((A O A)) O ((A O A)) O ((A)) <br> → (A) O ((A O A)) O ((A O A)) O ((A O A)) <br><br>";
    step[14] = "Regel 2: (A) O ((A O A)) O ((A O A)) O ((A O A)) <br> → (A) - ((A O A)) O ((A O A)) O ((A O A)) <br><br>";
    step[15] = "Regel 2: (A) - ((A O A)) O ((A O A)) O ((A O A)) <br> → (A) - ((A * A)) O ((A O A)) O ((A O A)) <br><br>";
    step[16] = "Regel 2: (A) - ((A * A)) O ((A O A)) O ((A O A)) <br> → (A) - ((A * A)) + ((A O A)) O ((A O A)) <br><br>";
    step[17] = "Regel 2: (A) - ((A * A)) + ((A O A)) O ((A O A)) <br> → (A) - ((A * A)) + ((A - A)) O ((A O A)) <br><br>";
    step[18] = "Regel 2: (A) - ((A * A)) + ((A - A)) O ((A O A)) <br> → (A) - ((A * A)) + ((A - A)) - ((A O A)) <br><br>";
    step[19] = "Regel 2: (A) - ((A * A)) + ((A - A)) - ((A O A)) <br> → (A) - ((A * A)) + ((A - A)) - ((A - A)) <br><br>";
    step[20] = "Regel 3: (A) - ((A * A)) + ((A - A)) - ((A - A)) <br> → (8) - ((A * A)) + ((A - A)) - ((A - A)) <br><br>";
    step[21] = "Regel 3: (8) - ((A * A)) + ((A - A)) - ((A - A)) <br> → (8) - ((2 * A)) + ((A - A)) - ((A - A)) <br><br>";
    step[22] = "Regel 3: (8) - ((2 * A)) + ((A - A)) - ((A - A)) <br> → (8) - ((2 * 2)) + ((A - A)) - ((A - A)) <br><br>";
    step[23] = "Regel 3: (8) - ((2 * 2)) + ((A - A)) - ((A - A)) <br> → (8) - ((2 * 2)) + ((5 - A)) - ((A - A)) <br><br>";
    step[24] = "Regel 3: (8) - ((2 * 2)) + ((5 - A)) - ((A - A)) <br> → (8) - ((2 * 2)) + ((5 - 3)) - ((A - A)) <br><br>";
    step[25] = "Regel 3: (8) - ((2 * 2)) + ((5 - 3)) - ((A - A)) <br> → (8) - ((2 * 2)) + ((5 - 3)) - ((9 - A)) <br><br>";
    step[26] = "Regel 3: (8) - ((2 * 2)) + ((5 - 3)) - ((9 - A)) <br> → (8) - ((2 * 2)) + ((5 - 3)) - ((9 - 6)) <br><br>";
    aktiv = setInterval(display, time);
    break;        
            
    } // Ende switch expression
    
} // Ende showAnimation

// Funktion des Reset-Buttons
function reloadThePage(){
    window.location.reload();
}
