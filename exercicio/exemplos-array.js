// lista de exemplos array
// criando uma array
let frutas = ["morango", "banana", "maça"];

console.log(frutas); // output: ["maçã", "banana", "laranja"];

//Criando array de numeros
let numeros = [ 1, 2, 3, 4, 5];

console.log(numeros); // Output: [1, 2, 3, 4, 5]

//Acessando elementos do array
let carros = ["Fusca", "Gol", "Palio"];

console.log(carros[0]); // Output:"Fusca"
console.log(carros[1]); //Output:"Gol"

//Alterando elementos do array
let cores = ["vermelho", "verde", "azul"];

cores[1] = "amarelo";
console.log(cores); // Output ["vermelho", "amarelo", "azul"];

//Descobrindo o  tamanho do array
let animais = ["cachorro", "gato", "coelho", "hamster", "papagaio", "paixe", "tartaruga", "cobra", "leão", "tigre" ],
console.log(animais.length); // Output: 10

//Adicionando elementos e tamanho do array
let paises = ["Brasil", "Argentina", "Chile"];
paises.push("Uruguai");
console.log(paises); // Output:("Brasil", "Argentina", "Chile", "Uruguai");

//Removendo o útimo elemento do arry com push()
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
cidades.pop()
console.log(cidades); // output: ["São Paulo", "Rio de Janeiro"];


//Adicionando elementos ao inicio do array com unshift()
let coresPrimarias = ["vermelho", "verde"];
coresPrimarias.unshift("azul");
console.log(coresPrimarias); // Output: ["azul", "vermelho", "verde"]

//Removendo o primeiro elemento do array com shift()
let frutasCitrica = ["limão", "laranja", "tangerina"];
frutasCitrica.shift();
console.log(frutasCitrica); // Output: ["laranja", "tangerina"]

//Mostrando todos os elementos do array com for
let animaisDomesticos = ["cachorro", "gato", "hamster"];
for (let i = 0; i < animaisDomesticos.length; i++) {
console.log(animaisDomesticos[i]);
}
// Output:
// cachorro
// gato
// hamster