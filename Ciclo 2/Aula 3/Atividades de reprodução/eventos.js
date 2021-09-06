/* click Ao clicar em algum elemento HTML
mousemove Ao mover o cursoso do mouse acessa (entra) o elemento
mouseover Ao mover o cursor dentro do elemento
mouseout Ao mover o cursor para fora do elemento
dbclick Ao efetuar o duplo click (rápido) sobre o elemento
blur Ao perder o foco do elemento, geralmente associado ao elemento HTML text
*/
window.onload = function(){

	//alert("alerta");

	const btn1 = document.querySelector(".btn-click");
	const legP = document.querySelector(".legenda");
	const cxTexto = document.querySelector("#texto");

	btn1.addEventListener('click', ()=>{

		// escrever no elemento
		legP.innerHTML += cxTexto.value; // o sinal de positivo concatena os valores digitados na pg.
	});
	legP.addEventListener('click',()=>{
		legP.innerHTML = '';
	})

	/*legP.addEventListener('mouseout',()=>{
		alert("Teste");
	})*/

	// TROCAR TIPO DO ELEMENTO password para text

	const trocaSenha = document.querySelector("#verSenha");
	const cxSenha = document.querySelector("#senha");

	trocaSenha.addEventListener('click', ()=>{
		//getAttribute()
		//setAttribute()
		if(cxSenha.getAttribute('type') == 'password'){
			cxSenha.setAttribute('type','text')
		} else{
			cxSenha.setAttribute('type','password')
		}
	});

	// alterar background quando sai do foco

	const cxTrocaBg = document.querySelector("#cxTbg");

	cxTrocaBg.addEventListener('blur',()=>{

		cxTrocaBg.setAttribute('class', 'corBg');

	})

	//somar valores cx input text

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const btnSomar = document.querySelector("#soma");
	const spResultado = document.querySelector("#resultado");

	btnSomar.addEventListener('click',()=>{
		var cx1 = valor1.value;
		var cx2 = valor2.value;
		var r = Number(cx1)+ Number(cx2);

		spResultado.innerHTML = r;
	})

		//Evento modal
		const btnModal = document.querySelector("#chamarModal");
		const janelaM = document.querySelector("#janModal");
		
		btnModal.addEventListener('click', ()=>{
			janelaM.setAttribute('class','modal');
		})

		janelaM.addEventListener('click', ()=>{
			janelaM.classList.remove('modal');
		})
}