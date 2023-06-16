'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

const openModal = function(){
         modal.classList.remove('hidden')
         overlay.classList.remove('hidden');
};

const closeModal =function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden');
};

//open the modal window
for ( let i=0; i<btnShowModal.length; i++)
      btnShowModal[i].addEventListener('click',openModal);
         
 
//hides the modal window
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);  

//keyboard events

 document.addEventListener('keydown',function(e){
    console.log(e.key)
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        
        
            closeModal();
        }
    }
)