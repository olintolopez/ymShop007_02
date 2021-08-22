let todosBtn    = document.querySelector('button.todosBtn');
let cactusBtn   = document.querySelector('button.cactusBtn');
let jardinesBtn = document.querySelector('button.jardinesBtn');


todosBtn.addEventListener('click', function(){
     if(!todosBtn.classList.contains('active')){
         todosBtn.classList.add('active');
         if(cactusBtn.classList.contains('active')){
             cactusBtn.classList.remove('active');
         }
         if(jardinesBtn.classList.contains('active')){
             jardinesBtn.classList.remove('active');
         }
     }

     console.log('Se mostraran todas las imagenes ');
});

cactusBtn.addEventListener('click',function(){
    if(!cactusBtn.classList.contains('active')){
        cactusBtn.classList.add('active');
        if(todosBtn.classList.contains('active')){
            todosBtn.classList.remove('active');
        }
        if(jardinesBtn.classList.contains('active')){
            jardinesBtn.classList.remove('active');
        }
    }
    console.log('Se mostraran todas las imagenes  de la categoria cactus');
});

jardinesBtn.addEventListener('click',function(){
      
    if(!jardinesBtn.classList.contains('active')){
        
        jardinesBtn.classList.add('active');
        if(cactusBtn.classList.contains('active')){
            cactusBtn.classList.remove('active');
        }
        if(todosBtn.classList.contains('active')){
            todosBtn.classList.remove('active');
        }
    }

    console.log('Se mostraran todas las imagenes de minijardines '); 
});
