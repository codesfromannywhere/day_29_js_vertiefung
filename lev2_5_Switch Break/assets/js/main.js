console.log("läuft");

let text = "text"

function check() {
    const inputBundesland = document.getElementById('bundeslandInfo').value;

    switch (inputBundesland) {
        case "Baden-Württemberg":
            text = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Bayern":
            text = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt.";
            break;
        case "Berlin":
            text = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            text = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            text = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            text = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            text = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        default:
            text = "Ein solches Bundesland gibt es in Deutschland nicht.";
    }
    document.getElementById('bundeslandInfoErgebnis').innerHTML = text;
}

