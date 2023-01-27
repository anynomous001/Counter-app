let countEl = document.getElementById("count-el");
let entry = document.getElementById("entries");
let count = 0;



function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let data = count + " - ";
    entry.textContent += data;
    count = 0;
    countEl.textContent = count;
}