
/*
var let const
*/

/*
var nome="Pedro"; //variável global
let sobreNome = "Niza";

if(true){
	console.log("Var nome= "+ nome);
	var nm = nome;
	console.log("Chamando o sobreNome "+ sobreNome);
	let sn = "Da Silva" // a variável let só vale para o escopo onde ela foi criada (no caso o if)
	console.log(sobreNome);
}

console.log("Meu nome é "+nm+" "+sobreNome+" "+sn);
console.log("Var nome= "+ nm);
*/

var Pessoa = {
		nome : "Pedro",
		rua  : "Rua Florianópolis",
		ncasa: "270",
		dados: function(){
			document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. casa...:"+this.ncasa+"<br>")
		}	
}

Pessoa.dados();

console.log("Nome "+Pessoa.nome+" Endereço "+Pessoa.rua+" N. "+Pessoa.ncasa);
