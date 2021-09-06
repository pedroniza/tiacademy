// concat() Junta os elementos de dois ou mais arrays e retoma uma cópia com os elementos juntos

var frutas=["Pera", "Uva", "Maçã", "Salada Mista"]; // var frutas= Array()
console.log(`Qtd do array: ${frutas.length} Fruta: ${frutas[0]}`);

var frutas2 = ["Cereja", "Banana", "Laranja"];
var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);

// indexOf() procura por um elemento específico no array e retorna a sua posição

var retornoIndexOf = todasAsFrutas.indexOf("Maçã");
console.log(retornoIndexOf); //2

// join() Junta todos os elementos de um array em uma string

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);

// push() Insere um novo elemento no final do array

var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca","Qualquer brinquedo");
console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

// pop() Remove o último elemento do array

console.log(outraLista.pop());
console.log(outraLista);

// reverse() Inverte a ordem dos elementos do array

console.log(outraLista.reverse());

// shift() Remove primeiro elemento do array

var removerPrimeiro = ["fusca", "variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

//sort() Ordena os elementos do array em ordem crescente

var alfa = [7, 4, 2, 9, "b", "z", "t", "a"]; //só deu certo com números de uma unidade
alfa.sort();
console.log(alfa);

// toString() Converte um array em string e retorna essa string

	//vide Join

// unshift() Insere um elemento no início do array

alfa.unshift(10);
console.log(alfa);

// splice() Corta o array em um ponto indicado dois parâmetros indice e quantos elementos quer remover a partir da posição

/*
var f= ["Pera", "Uva", "Maçã", "Salada Mista"]; // Elimina o restante de um array a partir de um ponto
console.log(f.splice(1, 2)); // 1 (eliminar um - Pera), 2 (mostrar os dois seguintes - Uva, Maçã)
*/

var f= ["Uva", "Banana", "Amora", "Melão"];
var idx = f.indexOf("Banana");
console.log(idx);
console.log( f.splice(idx, 2) );
console.log(f);
//var r = f.splice();
//console.log(f);

// Arrays de objetos

var dados = [
			{nome: "Marcelo"}, //0
			{nome: "Rafael"}   //1
			]
//console.log(dados[0].nome);
//console.log(dados[1].nome);

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg: doc[0],
		cpf : doc[1],
	}
}

var pessoa2 = new Pessoa2("Jorge","","",['22','555']);
//console.log("Nome: "+ pessoa2.nome+ ", " + pessoa2.doc.rg );
console.log(`Nome ${pessoa2.nome} - cpf: ${pessoa2.doc.cpf}`);
