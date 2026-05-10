

function visaVideo() {
    document.querySelector(".video").style.display = "block"
}


function merText() {
    document.querySelector(".mertext").style.display = "block"
}


function tabort() {
    document.querySelector(".mertext").style.display = "none"
}

function visabilder() {
    document.querySelector(".bilder").style.display = "block"
}

function bortbilder() {
    document.querySelector(".bilder").style.display = "none"
}







function startaQuiz() {
    let poäng = 0;

    // Fråga 1
    let svar1 = prompt("Vad var Opportunitys huvuduppdrag på Mars?");
    if (svar1 == "vatten") {
        poäng++;
    }

    // Fråga 2
    let svar2 = prompt("Hur många astronauter deltog i Artemis II?");
    if (svar2 && svar2.toLowerCase() == "4") {
        poäng++;
    }

    // Fråga 3
    let svar3 = prompt("Vad kallas stjärnor som är i sin stabila fas där de fusionerar väte till helium?");
    if (svar3 == "huvud") {
        poäng++;
    }

    // Resultat
    if (poäng === 3) {
        alert("Alla rätt!");
    } else if (poäng === 2) {
        alert("Bra jobbat! Du fick 2 av 3 rätt");
    } else {
        alert("Du fick " + poäng + " rätt. Försök igen!");
    }
}

