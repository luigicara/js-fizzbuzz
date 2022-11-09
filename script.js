let div = document.createElement("div")

div.classList.add("container")

document.body.appendChild(div)

let i

for (i = 1; i <= 100; i++) {
    let risultato = i;

    if(i % 3 === 0 && i % 5 ===0) {
        risultato= "fizzbuzz";
    } else if (i % 5 ===0) {
        risultato= "buzz";
    } else if (i % 3 === 0) {
        risultato= "fizz";
    } else {
        
    }

    let element = document.createElement("div");

    div.append(element)

    element.classList.add("box", `box-${risultato}`)

    element.append(risultato)
}