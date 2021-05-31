const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const content = document.querySelector('.modal-overlay');

openBtn.addEventListener('click', function(){
    content.classList.add('open-modal');
})

closeBtn.addEventListener('click', function(){
    content.classList.remove('open-modal');
})