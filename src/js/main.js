// ### 1. let phrase = 'Bonjour tout le monde    '

let phrase = "Bonjour tout le monde    ";

// ### 2. Afficher la longueur de la phrase

console.log(phrase.length);

// ### 3. Enlever l'espace à la fin grâce à une méthode

phrase = phrase.trimEnd();
console.log(phrase);

// ### 4. Reafficher la longueur de la phrase
console.log(phrase.length);

// ### 5. Afficher uniquement la dernière lettre de la phrase
console.log(phrase.charAt(phrase.length-1));

// ### 6. Enlever "Bonjour" de la phrase

phrase = phrase.replace("Bonjour", "");
console.log(phrase);

// ### 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode

phrase = phrase.replace("", "Bonjour");
console.log(phrase);
// ### 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode


// ### 9. Remplacer dans la phrase le mot "number" par le mot "string"

let nb = "number";
nb = nb.replace("number", "string");
console.log(nb);

// ### 10. Bonus : Donner un chiffre aléatoire

let random = Math.round(Math.random()*100);
console.log(random);

// Math.round() => Arrondit à l'entier le + proche 
let nombre = 9/4;
console.log(nombre);
console.log(Math.round(nombre));

// Math.ceil() => Arrondit à l'entier le + haut
console.log(Math.ceil(nombre));

// Math.floor()=> Arrondit à l'entier le + bas 
console.log(Math.floor(nombre));

// Math.random() => Génère un nombre à virgule aléatoire entre 0 et 1
let nombre2 = Math.random();
console.log(nombre2); 
