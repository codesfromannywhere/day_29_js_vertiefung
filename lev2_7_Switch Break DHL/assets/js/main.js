console.log("läuft");

let text = "text";

function showtxt() {
    const sendung = document.getElementById('mylist').value

    switch (sendung) {
        case value="0":
            text = `<b>Brief und Postkarte</b> <br>
            L: 10 - 23,5cm
            B: 7-12,5cm
            H: bis 1cm`;
            break;
        case value="1":
            text = `<b>DHL Paket 2 kg</b> <br>
            bis 60x30 x15cm`;
            break;
        case value="2":
            text = `<b>DHL Paket 5 kg</b> <br>
            bis 120x60x60cm`;
            break;
        case value="3":
            text = `<b>DHL Paket 10 kg</b> <br>
            bis 120x60x60cm`;
            break;
        default:
            text = `<b>Extra große Größe</b>`;
            break;
    }

    document.getElementById('masse').innerHTML = text;
}