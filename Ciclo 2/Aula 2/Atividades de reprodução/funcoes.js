
function soma(){
	var x=1;
	var y=2;
	console.log(x+2);
}

//soma();

function somaPar(x, y){
	var r = x+y;
	console.log(r);
}

function mult(n, o){
	var resultado = (n * o); //variável local
	console.log(resultado);
}

function pot(n, o){
	var resultado = Math.pow(n,o); //potênciação
	console.log(resultado);
}

mult(3,4);
pot(7,2);

//somaPar(4, 9)]

/*(function respostaF(){
	var nome="Pedro";
	alert(nome);
	return nome;
})(); */

/*var f = function(){ //função anônima
	alert("Função sem nome");
}*/
	
	//f();

//respostaF();

//var d = respostaF();

//var ar = ()=>{alert("ArFunc")} // Arrow Function
//ar();

//(()=>{alert("ArFunc")})(); // Fuñção auto-executável sem precisar chama-la
