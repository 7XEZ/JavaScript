const right = document.querySelector('#right');
const left = document.querySelector('#left');
const items = document.querySelector('.items');


left.addEventListener('click', function(){
    const currentLeft = items.style.right;

    if (currentLeft === '600px') {
        items.style.right = '300px';
    } else {
        items.style.right = '0px';
    }
}) 

right.addEventListener('click', function(){
    const currentRight = items.style.right;

    if (currentRight === '300px') {
        items.style.right = '600px';
    } else {
        items.style.right = '300px';
    }
})

