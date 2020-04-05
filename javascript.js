const icon = document.querySelector('#menuicon');
const nav = document.querySelector('#headercontent>nav');
let toggle = false;

icon.addEventListener('click', function(){  
    if (toggle){
       nav.style.display = 'none';
       toggle = false; 
    } 
    else{
        toggle = true; 
        nav.style.display = 'flex';
    
    }
   console.log(toggle)
})


