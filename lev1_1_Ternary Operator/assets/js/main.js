console.log("läuft")

function checkAge() {
    const input = document.querySelector('form input[type="number"]').value;
    const result = document.querySelector('p');

    result.innerHTML = input >= 18 ? "Volljährig" : "Minderjährig"
}


