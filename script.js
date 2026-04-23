function exercice1() 
{
    let n1 = parseFloat(prompt("Entrez le premier nombre :"));
    let n2 = parseFloat(prompt("Entrez le deuxième nombre :"));
    
    console.log("Somme: " + (n1 + n2));
    console.log("Différence: " + (n1 - n2));
    console.log("Produit: " + (n1 * n2));
    if (n2 !== 0) {
        console.log("Quotient: " + (n1 / n2));
    } else {
        console.log("Erreur: Division par zéro");
    }
    alert("النتائج ظهرت في الـ Console (F12)");
}

function exercice2()
 {
    let solution = Math.floor(Math.random() * 10) + 1;
    let score = 0;
    let tentative;
    
    do {
        tentative = parseInt(prompt("Devinez le nombre (1-10) :"));
        score++;
        if (tentative > solution) alert("Plus petit !");
        else if (tentative < solution) alert("Plus grand !");
    } while (tentative !== solution);
    
    alert("Bravo ! Trouvé en " + score + " tentatives.");
}
function lancerQuiz() 
{
    const QUESTIONS = [
        ["Quelle est la capitale de la France ?", "Paris"],
        ["Combien font 2+2 ?", "4"]
    ];
    let score = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
        let rep = prompt(QUESTIONS[i][0]);
        if (rep && rep.toLowerCase() === QUESTIONS[i][1].toLowerCase()) {
            alert("Réponse juste !");
            score++;
        } else {
            alert("Réponse fausse.");
        }
    }
    alert("Score final : " + score + "/" + QUESTIONS.length);
}