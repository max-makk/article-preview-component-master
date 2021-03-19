const btn = document.querySelector('button');
const btnArrow = document.querySelector('path');
const share = document.querySelector('ul');

btn.addEventListener('click', () => {
    share.classList.toggle('share');
    btn.classList.toggle('active');
    btn.classList.toggle('transformY');
    btnArrow.classList.toggle('active');
});