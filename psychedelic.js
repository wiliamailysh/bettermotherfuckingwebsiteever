var inverted = false;  

function switchNormalPsy() {
    if (!inverted) {
        document.getElementById("body").setAttribute("class", "psychedelic");
        inverted = true;
    }
    else if (inverted) {
        document.getElementById("body").setAttribute("class", "normal");
        inverted = false;
    }
}