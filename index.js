function evenorodd() {
    const a = prompt(`What do you want to Find? 1)Even 2)Odd`).toLowerCase();
    if (a === "1" || a === "even") {
        let limit = prompt(`How much even numbers do you want to print`);
        for (let i = 0; i <= limit; i += 2) {
            document.getElementById("paragraph").innerHTML += `<center><h3>${i}</h3></center>`;
        }
    } else if (a === "2" || a === "odd") {
        let limit = prompt(`How much odd numbers do you want to print`);
        for (let i = 1; i <= limit; i += 2) {
            document.getElementById("paragraph").innerHTML += `<center><h3>${i}</h3></center>`;
        }
    }
}
