//lista de todos os cards da classe "memory-card" colocadas em uma variável tipo let
let cards = document.querySelectorAll('.memory-card');            

function flipCard(){
    //toggle = se a classe estiver lá, remova-a. Se não estiver, coloque-a
    this.classList.toggle('flip');
} 

//para cada um dos cards na lista, criamos um "event listener", que cada vez que o evento 'click' for chamado ele irá executar uma função
cards.forEach(card => card.addEventListener('click',flipCard))