window.onload = function(){
	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const btnSomar = document.querySelector("#soma");
	const spResultado = document.querySelector("#resultado");
	const valor3 = document.querySelector("#v3");

	btnSomar.addEventListener('click',()=>{
		var cx1 = valor1.value;
		var cx2 = valor2.value;
		var cx3 = valor3.value;
		var r = Number(cx1)+ Number(cx2);
		var inp = Number(cx3);

		console.log(r);

		if(r == inp){ //switch funcionaria?

			alert("Acertou");

		}else if(isNaN(r)){

			alert("Você não digitou um número");

		}else if(isNaN(inp)){

			alert("Você não digitou um número");

		}else{

			alert("Errou");
		}
	})
}
	
