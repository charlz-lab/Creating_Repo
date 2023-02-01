let quotesArray = [
    "“Be yourself; everyone else is already taken.” - Oscar Wilde",
    "“A room without books is like a body without a soul.” - Marcus Tullius Cicero",
    "“A friend is someone whoe knows all about you and still loves you.” - Elbert Hubbard",
];

let randomItem = quotesArray[Math.floor(Math.random() * quotesArray.length)];
console.log("Created quote app\n", randomItem)