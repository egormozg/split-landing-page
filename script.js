const hover = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () =>
    hover.classList.add('hover-left'));
left.addEventListener('mouseleave', () => 
    hover.classList.remove('hover-left'));


right.addEventListener('mouseenter', () =>
    hover.classList.add('hover-right'));
right.addEventListener('mouseleave', () =>
    hover.classList.remove('hover-right'));