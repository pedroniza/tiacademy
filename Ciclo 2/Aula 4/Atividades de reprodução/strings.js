/*
var nome = "Pedro";
console.log(nome.length); // 5
console.log(nome[0]); // P
*/

/* match()
O método match procura uma palavra em uma string.
Existem alguns parâmetros de pesquisa que permitem uma maior precisão
flags g / i / m  / s-> g=global; i=ignorar case-sensitive; m=multiline; s=single line
*/

	//var palavras = "Maçã doce";
	//console.log(palavras.match(/D/gi)); // supondo que eu queira identificar se há, e qual a posição daletra "d" (aparentemente ele conta os espaços em branco também)

/* search()
O método search() procura pela ocorrência eretornando a posição na cadeia da string
A posição é em relação ao  primeiro caractere da ocorrência.
*/

	//console.log(palavras.search(/d/gi));

/* replace()
Permite substituir uma string por outra. ELe pesquisa a string informada, como no match(),
e substitui por outra string nas aspas informada como segundo parâmetro.
*/

	/*
	var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt fuga recusandae, excepturi quos ducimus inventore maiores repellendus veritatis autem, doloribus, deserunt commodi culpa. Esse, assumenda? In minima libero illo."
	var mudarStr = str.replace(/ipsum/gi,'XXXX'); // é necessário a flag "g" para que ele não troque apensa a primeira letra ou palavra
	console.log(mudarStr);
	*/

/* localeCompare()
O método localeCompare() compara e efetua a comparação entre duas strings,
se elas forem iguais, o retorno será "0". Os valores -1 e 1 podem ser
esperado caso elas não sejam iguais
*/

	/*
	var comp1 = "Comparar";
	var comp2 = "Comparar";

	var c1 = comp1.toLowerCase();
	var c2 = comp2.toLowerCase();

	//console.log(`Este é o c1: ${c1}, este é o c2: ${c2}`);

	var comparação = c1.localeCompare(c2);
	console.log(comparação);
	*/

/* trim()
Faz a remoção de espaços antes e depois da string especificada
*/

	/*
	var p = '  palavra  ';
	console.log(p);
	console.log(p.trim());
	*/

	/*
	var p = '  fpalavra+  ';
	var r = p.trim();
	console.log(r);
	var s = r.replace(/f/gi,'');
	console.log(s);
	sub_a = s.replace('+',''); //remover e substituir sinal de +
	console.log(`Removido: ${sub_a}`);
	*/

// toLocaleString - Formatação de moédas

	var valor = 1.35 // 1,35; também faz arredondamento de valores
	var formatarMoeda = valor.toLocaleString('pt-BR',{
		style:'currency',
		currency:'BRL'
	})
	console.log(formatarMoeda);