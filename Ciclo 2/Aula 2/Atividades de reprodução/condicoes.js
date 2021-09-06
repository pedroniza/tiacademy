/*
// (==) Igualdade
var v1=1; //usar = para atribuir valores
var v2=1;
if(v1==v2){ //usar == para comparar valores
	console.log("Sim, é verdade");
} else{
	console.log("Isto é falso");
}
*/

/*
//(===) Idêntico
var v3=1;
var v4;
if(v3===v4){
	console.log("v3 é exatamente igual a v4")
} else{
	console.log("v3 não é igual a v4");
	console.log(v4);
}

var v3=1;
var v4=2;
if(v3===v4){
	console.log("v3 é exatamente igual a v4");
	console.log(typeof(v4))
} else{
	console.log("v3 não é igual a v4");
	console.log(typeof(v3)); // typeof mostra o tipo da informação
}
*/

/*
// (!=) Diferente
var v5=1;
var v6=0;

//
var v6=prompt("Digite um valor");
console.log(v6+" este valor é uma "+typeof(v6)); //teste
//

if(v5 != v6){
	console.log("v5 é diferente de v6");
} else{
	console.log("São iguais")
}
*/

/*
//(!==) Estritamente diferente
var v7=1;
var v8='1';
if(v7 !== v8){
	console.log("Estritamente diferente");
} else {
	console.log("São iguais");
}
*/

/*
//(<) menor que
var vx=200;
var vy=400;
if(vx<vy){
	console.log("Sim, vx é menor que vy");
} else {
	console.log("vx não é menor que vy");
}
*/

/*
//(>) maior que
var va=600;
var vb=400;
if(va>vb){
	console.log("Sim, va é maior que vb");
} else {
	console.log("va não é maior que vb");
}
*/

/*
//(<=) menor ou igual que
var vc=399;
var vd=399;
if(vc<=vd){
	console.log("Vc="+vc +
		" é menor ou igual a vd="+vd); 
}
*/

/*
//(>=) maior ou igual que
var ve=400;
var vf=200;
if(ve>=vf){
	console.log("Ve="+ve +" é maior ou igual a vf="+vf); 
}
*/


/* 
if/else e Operadores Lógicos
AND 'E'       lógico (&&) E comercial
OR  'OU'      lógico (||) pipe/pipe
NOT 'NEGAÇÃO' lógico (!)  exclamação
*/

/*
// && Todas as condições precisam ser atendidas
var a=0;
var b=1;
if (a==0 && b==0){ //precisam ser satisfeitas as duas condições. Podem ser colocadas nas variáveis.
	console.log("Verdadeiro")
}	else{
	console.log("Falso")
}
*/

/*
//|| Alguma das opções precisam ser atendidas pra retornar "Verdadeiro"
var c=0;
var d=1;
if(c==0 || d==0){
	console.log("Verdadeiro")
} else{
	console.log("Falso")
}
*/

/*
// ! - Negação. Neste caso s é um number e o navegador dirá que "É uma string"
var s = 1;
if(!typeof(s)){
	console.log("Não é uma string")
} else{
	console.log("É uma string")
}
*/

/*
//switch - Atribui possibilidades e o browser responde de acordo
var op = 3;
switch(op){

	case 1:
		alert("Estou sendo enviado pelo case 1");
	break;
	
	case 2:
		console.log("Caí dentro do case 2");
	break;

	case 3:
		console.log("Caí dentro do case 3");
	break;

	default:
		console.log("Nenhuma das opções");
	break;
}
*/