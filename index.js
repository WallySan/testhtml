const timeout = (delay) => new Promise((res) => setTimeout(res, delay));
//import { Game } from 'lib/Game';
 
window.addEventListener('DOMContentLoaded', () => {

  // Example 5:
  // Slot Machine
	
  let count = 0;
  const shuffleButton = document.querySelector('#casinoShuffle');
  const valorElement = document.querySelector('#saldocliente');
  const valorCasa = document.querySelector('#saldocasa');
const floatingText = document.getElementById("floatingText");
const botaoExecutar = document.getElementById("executarScript");



  const stopButton = document.querySelector('#casinoStop');
  const casino1Element = document.querySelector('#casino1');
  const casino2Element = document.querySelector('#casino2');
  const casino3Element = document.querySelector('#casino3');
  const casino1 = new SlotMachine(casino1Element, {
    active: 0,
    delay: 500,
    direction: 'up'
  });
  const casino2 = new SlotMachine(casino2Element, {
    active: 1,
    delay: 500,
  });
  const casino3 = new SlotMachine(casino3Element, {
    active: 2,
    delay: 500,
    direction: 'up'
  });
hideFloatingText();

  shuffleButton.addEventListener('click', () => {
hideFloatingText();
	if(casino1.running || casino2.running  || casino3.running)
{}
else
{

    count = 3;
    casino1.shuffle(Infinity);
    casino2.shuffle(Infinity);
    casino3.shuffle(Infinity);

}
  });

  stopButton.addEventListener('click', () => {
    switch (count) {
      case 3:
        casino1.stop(2);
        break;
      case 2:
        casino2.stop(3);
        break;
      case 1:
        casino3.stop(4);
		casino3.game.roleta3 = 98;
        break;
    }
    count--;
  });


function verificaPremio()
{

casino3.game.roleta1 = casino1.active;
casino3.game.roleta2 = casino2.active;
valorElement.textContent = String(casino3.game.getSaldoCliente());



	if(casino3.game.roleta3 != 99)
	{	
		

	
		if(casino1.running || casino2.running  || casino3.running )
		{
			casino3.game.roleta3 = casino3.active;
		}
		else
		{
			
			valorElement.textContent = String(casino3.game.verificaPremio());
			valorCasa.textContent = String(casino3.game.getSaldoCasa());
			casino3.game.roleta3 = 99;
			let ganho = casino3.game.getUltimoGanho();
			
			if(ganho>0)
			{	
				floatingText.textContent = "GANHOU R$ "+String(ganho)+" !";
				showFloatingText();
			}
	
	
		}
	}
}
function showFloatingText() {
floatingText.style.display = "block"; 
  floatingText.style.animation = "float 3s linear"; // Iniciar a animação
}

// Função para ocultar o texto flutuante
function hideFloatingText() {
  floatingText.style.display = "none"; // Ocultar o elemento
}

function executarScript() {
  // Seu código ou script a ser executado aqui
casino3.game.depositaPIX();

}

botaoExecutar.addEventListener("click", executarScript);


const intervalo = setInterval(verificaPremio, 1000);


});

