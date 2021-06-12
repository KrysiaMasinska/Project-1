const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const span1 = document.querySelector('.original');
const span2 = document.querySelector('.new');

let $score;

const add = (x, y) => {
    $score = x + y;
    span1.innerHTML = $score;
};

const multiply = (x, y) => {
    span2.innerHTML = $score * 2;
};

const devide = (x, y) => {
    span2.innerHTML = $score / 2;
};

btn1.addEventListener('click', multiply);
btn2.addEventListener('click', devide);

add(3, 15);