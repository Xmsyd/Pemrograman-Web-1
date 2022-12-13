// Mengambil semua element a dengan looping
document.querySelector("option a").forEach((a) => {
    // Jika diklik akan menjalankan fungsi computerChoice()
    a.addEvenListener("click", (element) => {
        computerChoice(element);
    })
})
function computerChoice(element)  {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap Element result dengan queryselector untuk menampung nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // Membuat Array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan Random untuk Komputer
    pilihanComputer.innerHtml =
    choices[Math.round (Math.random() * choices.length)]
    pilihanComputer = pilihanComputer.innerHTML;

    // Jika pilihan komputer sama dengan pilihan user(Draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }

    // Jika pilihanUser yang menang :V
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Papper") {
        alert("YOU WIN");
    }else {
        alert("Tidak ada pilihan");
    }

    //  Jika pilihanComputer yang Menang :V
    if (pilihanUser == "Rock" && pilihanComputer == "Papper") {
        alert("YOU LOSE!!!");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Scissor") {
        alert("YOU LOSE!!!");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("YOU LOSE!!!");
    }else {
        alert("Tidak ada pilihan")
}
}