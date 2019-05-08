//lista de todos os cards da classe "memory-card" colocadas em uma variável tipo let
let cards = document.querySelectorAll('.memory-card');            

let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard = false;


function flipCard(){
    if(lockboard) return;
    if(this === firstCard) return;
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

        CheckCards();
    }
} 
  
//os cards são iguais?
function CheckCards(){      
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        DisableCards();
    }else{
        UnflipCards();
    }
}

function DisableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function UnflipCards(){
    lockboard = true;

    setTimeout(() => {
        firstCard.classList.toggle('flip');
        secondCard.classList.toggle('flip');
        lockboard = false;
    }, 1000);    
}


//função executada logo após sua definição "(funcion(){})()"
function Shuffle(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 10);
        card.style.order = randomPos;
    })

}

function CreateCards(){
    var newCard;
    var cardsN = document.getElementById("cardsN").value;
    
    for(var i=0; i < cardsN; i++){
        newCard +=         
        '<div class="memory-card" data-framework="'+i+'"><img class="front-face" src="imagens/img'+i+'.png" alt="Card"><img class="back-face" src="https://d1oxuuwezf1xh6.cloudfront.net/assets/editorial/2018/09/magni-verso.png" alt="Card"></div>'
        '<div class="memory-card" data-framework="'+i+'"><img class="front-face" src="imagens/img'+i+'.png" alt="Card"><img class="back-face" src="https://d1oxuuwezf1xh6.cloudfront.net/assets/editorial/2018/09/magni-verso.png" alt="Card"></div>';
        
       
        document.querySelector(".memory-game").innerHTML += newCard;       

        console.log("cleiton");
    }    
}


//para cada um dos cards na lista, criamos um "event listener", que cada vez que o evento 'click' for chamado ele irá executar uma função
cards.forEach(card => card.addEventListener('click',flipCard))