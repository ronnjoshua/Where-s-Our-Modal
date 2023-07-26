// Variables

let openBtn_btn = document.getElementById('open-btn');
let modalContainer_div= document.getElementById('modal-container');
let closeBtn_btn = document.getElementById('close-btn');

// Event Listeners

openBtn_btn.addEventListener('click', function() {

    modalContainer_div.style.display = 'block';

});

closeBtn_btn.addEventListener('click', function() {

    modalContainer_div.style.display = 'none';

});

window.addEventListener('click', function(e){

    if(e.target === modalContainer_div) {

        modalContainer_div.style.display = 'none';
    }

});