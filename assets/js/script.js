const Header= document.getElementById("headerColorata");
const btnStart= document.getElementById("btnGetStarted");

window.addEventListener('scroll', function() {
    if (window.scrollY > 350) {
        Header.style.backgroundColor = 'white';
    } else {
        Header.style.backgroundColor = '#ffc017';
    }
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 350) {
        btnStart.style.backgroundColor = '#1a8917';
    } else {
        btnStart.style.backgroundColor = 'black';
    }
});