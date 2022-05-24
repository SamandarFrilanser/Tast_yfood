//  Hamburger menu---------->
let showmenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

// Hide/show hamburger menu if click nav__link---->
showmenu('nav-togge','nav-menu');

let navitem = document.querySelectorAll('.nav__link');

navitem.forEach(item=>{
    item.addEventListener('click',linkAction);
    
})
function linkAction(){
    const navmenu = document.getElementById('nav-menu');
    navmenu.classList.remove('show-menu');
}

// Scroll REveal library ----------->
let sc = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

sc.reveal(`.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .app__data, .app_img, .contact, .footer__content`,{
    interval: 200
})

// Scroll section active link

const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active');
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active');
        }
    })
}
window.addEventListener('scroll',scrollActive);

// Scroll header add box-shadow


function scrollheader(){
    let nav = document.getElementById('header');
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll',scrollheader);

// Dark theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']
    (darkTheme)
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']
    (iconTheme)
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme());
    localStorage.setItem('selected-icon',getCurrentIcon());
})


// ScrollTop

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll');
    }else{
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollTop);
