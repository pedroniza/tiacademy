/*
var nome = "Niza"; //string;sss
console.log(typeof(nome));

var nome = 12 //number;
console.log(typeof(nome));

document.write("Idade" + nome + "<br") //concatenar valores/string
*/
/*
var nome = "Pedro"; //string
console.log(typeof(nome));

var nome = 12
console.log(typeof(nome)) //number - Interpreta os dois valores "nome" sem problemas;
// tipeof mostra o tipo de variável
// numeros não vão entre "", se forem serão lidas como strings;

// concatenar valore/strings (+)
document.write("Idade" + nome + "<br>"); //imprime na pg HTML
*/

var fruta = "laranja";
var oque = "doce";
var tudoJunto = fruta+" "+oque;
//console.log(tudoJunto);

//aritimeticos
//var valor1 = parseInt('1'); // parseInt analisa a string, converte o valor para inteiro e realiza a operação garantindo que é um número
var valor1 = '2';
var valor2 = 2;
var total = valor1+valor2; // o sinal de adição tem dupla funcionalidade
document.write(total); //saindo no html
console.log(valor1-valor2); //soma/subtração - saindo no navegador

var i = 2;
var j = 2;
console.log(i % j); // % (módulo) resto de divisão - Ex: 2/2=1 inteiro + resto=zero. Ex2: 2/3=0 inteiros + resto=2. Ex3: 3/2=1 inteiro + resto=1

var x = 3;
var y = 2;
console.log(x * y); //multiplicação, divisão(/) 

//comparadores
var v = (valor1 == valor2); // IMPORTANTE: = (atribui) == (compara os valores) === (idêntico)
console.log(v);

var v = (valor1 === valor2); // idêntico
console.log(v);

 