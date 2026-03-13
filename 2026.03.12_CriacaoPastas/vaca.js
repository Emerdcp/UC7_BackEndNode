const cowsay = require("cowsay");

// Exemplo com a vaquinha padrão
console.log(cowsay.say({ text: "Hello World!" }));

// Chamando o dragão
console.log(
  cowsay.say({
    text: "Sou um dragão",
    f: "dragon",
    e: ">O",
    T: true,
  }),
);

// Chamando o Tux (pinguim do Linux)
console.log(
  cowsay.say({
    text: "Sou o pinguim do Linux",
    f: "tux",
    d: true,
  }),
);
