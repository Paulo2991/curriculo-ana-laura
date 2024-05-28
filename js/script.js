document.addEventListener("DOMContentLoaded",function(){
	const contato = document.getElementById('contato');
	const modalContent = document.querySelectorAll('.modalContent');
	const myModal = document.getElementById('myModal');
	const closeButtons = document.querySelectorAll('.close');

	function eventosButton(button,type){
		if(type === true){
			button.addEventListener('click',function(){
				contratosAvista();
				myModal.style.display = 'block';
			});
		}else{
			button.addEventListener("click", function () {
				myModal.style.display = "none";
			});
		}
	}

	function mostrarContatos(modalDescription){
		modalContent.forEach(function (modalContent) {
			modalContent.innerHTML = modalDescription;
		});
	}

	window.addEventListener('click', function(event){
		if(event.target === myModal){
			eventosButton(myModal,false);	
		}
	});

	closeButtons.forEach(function (button) {
		eventosButton(myModal,false);
	});


	function contratosAvista(){
		let contatos = `
		<span class="close">&times;</span>
		<p>Telefone: (61) 982997227</p>
		<p>Email: aninha12127@gmail.com</p>
		<p>Endereço: Quadra 01, Lote 160, Setor Industrial, Residencial Renascença, Gama DF</p>`;
		mostrarContatos(contatos);
	}

	eventosButton(contato,true);
});

