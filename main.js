/*******  SideBar Navigation *******/
const sidebar = document.querySelector('.sidebar'); 
const componentList = document.querySelector('.sidebar__content');

sidebar.addEventListener('click' , () => {
    sidebar.classList.toggle('sidebar-active');
});

/********** Header Navbar Navigation *********/
const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerLeftNav = document.querySelector('.header__left');
const navCloseBtn = document.querySelector('.nav-closeBtn');

navCloseBtn.addEventListener('click' , () => {
    headerLeftNav.classList.remove('active');
});

hamburgerMenu.addEventListener('click' , ()=>{
    headerLeftNav.classList.add('active');
});