const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const search_menu = document.querySelector('.search');
const search_content = document.querySelector('.search-text');
menu_btn.addEventListener('click',function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});
search_menu.addEventListener('click',function(){
    search_content.classList.toggle('is-active');
});