console.log("O arquivo 'ex1.js' ja esta funcionando.");

var nome = "Caio Henrique";
var nascimento = 2001;
var atual = 2021;
var idade = atual - nascimento;

console.log("Ola, eu me chamo " + nome + " tenho " +
idade + " anos e estou estudando Javascript");

var nomeAluno = "Pedro";
var matricula = "465353";
var prova1 = 9;
var prova2 = 8;
var media = (prova1 + prova2) / 2;

console.log("O aluno " + nomeAluno + ", matricula: " +
matricula + ", obteve a media final " + media);

var telefone = "997586900";
console.log("Resultado do teste: " + (telefone.length == 9));
 
console.log(Math.pow(32,6));

//var NOME; = certo
//var $num1; = certo 
//var typeof; = errado, palavra reservada
//var nome-aluno; = errado, nome usa -
//var tentativa_2; = certo
//var 2a_tentativa; = errado, nome comeca com numero
//var nome completo; = errado, nome usa espaco

var quantidade = "25"; // string 25
var numero = 6; // inteiro 6
var pressao; // indefinido
var temperatura = 40; // inteiro 40
temperatura = null; // nulo

console.log(quantidade += quantidade); // 2525
console.log( (7+5) / numero + 2 ); // 4 
console.log(pressao); // undefined
console.log(temperatura); // null
console.log(typeof pressao); // undefined
console.log(typeof temperatura); // object

var idade = 65;

console.log(idade != 65); // false
console.log(idade >= 65);  // true
console.log("65" == idade); // true
console.log(65 !== idade); // false
console.log(typeof (idade > 60)); // boolean
console.log(typeof (idade > 70)); // boolean