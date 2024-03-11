// function evenorodd() {
//     const a = prompt(`What do you want to Find? 1)Even 2)Odd`).toLowerCase();
//     if (a === "1" || a === "even") {
//         let limit = prompt(`How much even numbers do you want to print`);
//         for (let i = 0; i <= limit; i += 2) {
//             document.getElementById("paragraph").innerHTML += `<center><h3>${i}</h3></center>`;
//         }
//     } else if (a === "2" || a === "odd") {
//         let limit = prompt(`How much odd numbers do you want to print`);
//         for (let i = 1; i <= limit; i += 2) {
//             document.getElementById("paragraph").innerHTML += `<center><h3>${i}</h3></center>`;
//         }
//     }
// }

function finiteorinfinite(){
  let a=prompt(`Enter the first number to divide`);
  let b=prompt("Enter the second number to divide with");
  if(isFinite(a/b)){
    alert(`Value is approx ${a/b}`);
  }else{
    alert(`Division is not possible due to infinite value`);
  }  
}