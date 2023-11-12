const container = document.querySelector('.container');
const button = document.querySelector('#button');



button.addEventListener('click', function(){
    const overflow = document.createElement('div');
    const overflow_text = document.createElement('h1');
    const close = document.createElement('a');


    overflow_text.textContent = "Hello World!";


    overflow.classList.add('overflow__menu');
    overflow_text.classList.add('overflow__text');
    close.classList.add('close');

    overflow.appendChild(close)
    overflow.appendChild(overflow_text);
    container.appendChild(overflow);

    close.addEventListener('click', function(){
        overflow.style.display = 'none';
    })
});








