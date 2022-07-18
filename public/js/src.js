const contentImg = document.getElementById('content-img');
const smooth = document.getElementById('smooth');

smooth.addEventListener('click', (e) => {
    scrollToTop();
    time();
    contentImg.style.transform = 'scale(1.1)';
    contentImg.style.transition = '0.5s';
    contentImg.style.transitionDelay = '0.4s';
    e.preventDefault();
});

function scrollToTop() {
    window.scrollTo({
        top: 550,
        time: 1000,
        behavior: 'smooth'
    });
}
function time(){
    timer = setTimeout(() => {
        contentImg.style.transform = 'scale(1)';
        contentImg.style.transition = '0.5s';
    }, 3000);
}