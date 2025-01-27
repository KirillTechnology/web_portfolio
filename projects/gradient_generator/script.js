let c1 = document.querySelector('#color1');
let c2 = document.querySelector('#color2');
let h3 = document.querySelector('#out');
let gradient_back = document.querySelector('.gradient');
let btn_random1 = document.querySelector('#random1');
let btn_random2 = document.querySelector('#random2');
let btn_random = document.querySelector('#random');


function gradient_set() {
    gradient_back.style.background = 'linear-gradient(to right, ' + c1.value + ', ' + c2.value + ')';
    h3.textContent = gradient_back.style.background + ';';
}

function random_color() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function set_random1() {
    c1.value = random_color();
    gradient_set()
}

function set_random2() {
    c2.value = random_color();
    gradient_set()
}

function set_random() {
    set_random1();
    set_random2();
}

// Initial color values
c1.value = '#e01010';
c2.value = '#211c22';
gradient_set();

c1.addEventListener('input', gradient_set);
c2.addEventListener('input', gradient_set);

btn_random.addEventListener('click', set_random);
btn_random1.addEventListener('click', set_random1);
btn_random2.addEventListener('click', set_random2);