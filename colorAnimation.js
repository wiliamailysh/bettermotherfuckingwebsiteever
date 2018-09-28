//  Déclarations des variables 

var upOrDownBlue = true;
var upOrDownRed = false;
var upOrDownGreen = false;

var red = 155;
var green = 235;
var blue = 71;

//  Changer les valeurs min et max pour chaque fonction !

function upDownRed() {
    if (red < 235 && upOrDownRed == true) {
        red++;
        document.getElementById("titre").style.color = "rgb(" + red + "," + green + "," + blue +")";
        if (red == 235) {
            upOrDownRed = false;
        }
    } else if (red > 71 && upOrDownRed == false) {
        red--;
        document.getElementById("titre").style.color = "rgb(" + red + "," + green + "," + blue +")";
        if (red == 71) {
            upOrDownRed = true;
        }
    }
}
function upDownBlue() {
    if (blue < 235 && upOrDownBlue == true) {
        blue++;
        document.getElementById("titre").style.color = "rgb(" + red + "," + green + "," + blue +")";
        if (blue == 235) {
            upOrDownBlue = false;
        }
    } else if (blue > 71 && upOrDownBlue == false) {
        blue--;
        document.getElementById("titre").style.color = "rgb(" + red + "," + green + "," + blue +")";
        if (blue == 71) {
            upOrDownBlue = true;
        }
    }
}
function upDownGreen() {
    if (green < 235 && upOrDownGreen == true) {
        green++;
        document.getElementById("titre").style.color = "rgb(" + red + "," + green + "," + blue +")";
        if (green == 235) {
            upOrDownGreen = false;
        }
    } else if (green > 71 && upOrDownGreen == false) {
        green--;
        document.getElementById("titre").style.color = "rgb(" + red + "," + green + "," + blue +")";
        if (green == 71) {
            upOrDownGreen = true;
        }
    }
}

//    Animation du texte avec setInterval

setInterval(upDownRed, 10);
setInterval(upDownBlue, 10);
setInterval(upDownGreen, 10);
