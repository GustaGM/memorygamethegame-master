//lista de todos os cards da classe "memory-card" colocadas em uma variável tipo let
let cards = document.querySelectorAll('.memory-card');            

let hasFlippedCard = false;
let firstCard, secondCard;
function flipCard(){
    //toggle = se a classe estiver lá, remova-a. Se não estiver, coloque-a
    this.classList.toggle('flip');

    //primeiro clique
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }
    //segundo clique
    else{        
        hasFlippedCard = false;
        secondCard = this;    
    
    //os cards são iguais?
        if(firstCard.dataset.framework === secondCard.dataset.framework){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }else{
            setTimeout(() => {
                firstCard.classList.toggle('flip');
                secondCard.classList.toggle('flip');
            }, 1000);        
        }
    }
    console.log("ta funcionando o caraiiii");
} 

//para cada um dos cards na lista, criamos um "event listener", que cada vez que o evento 'click' for chamado ele irá executar uma função
cards.forEach(card => card.addEventListener('click',flipCard))