// onscroll navbar

const navbar = document.getElementById('navbar');
const btnUp = document.querySelector('.up-btn');
window.onscroll = function () {
    if(window.pageYOffset > navbar.offsetTop){
        navbar.classList.add('fixed-navbar');
        btnUp.classList.add('appear-upbtn');
    }
    else{
        navbar.classList.remove('fixed-navbar');
        btnUp.classList.remove('appear-upbtn');
    }
}

btnUp.onclick = function(){
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
// xu ly hamburger

const ham = document.querySelector('.hamburger-menu') ;
const navList = document.querySelector('.nav__list') ;
console.log(navList); 
ham.onclick = () => {
    navList.classList.toggle('appear-navlist');
}