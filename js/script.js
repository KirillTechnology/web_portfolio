const btn_menu = document.querySelector('.btn-menu');
const nav_top = document.querySelector('nav.top');
const body = document.querySelector('body');


// Moble menu button event listener
btn_menu.addEventListener('click', () => {
    btn_menu.classList.toggle('active');
    nav_top.classList.toggle('active');
});


// Hide mobile menu when tap on non-menu item
body.addEventListener('click', (event) => {
    if (btn_menu.className === 'btn-menu active' 
        && event.target.tagName !== 'NAV' 
        && event.target.tagName !== 'SPAN'
        && event.target.tagName !== 'HR') {
            btn_menu.classList.toggle('active');
            nav_top.classList.toggle('active');
    }
});


// Animation, transition stopper during window resize
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});