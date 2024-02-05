const ref={
    buttonOpenBurger: document.querySelector(".js-open-burger"),
    burgerCloseBurger: document.querySelector(".js-close-buttonBurger"),
    burgerMenu :document.querySelector(".js-burger-menu")
}


const handelBurgerMenu=()=>{
    const isMenuOpen = ref.buttonOpenBurger.getAttribute('aria-expanded') === 'true' || false;
    console.log(ref.buttonOpenBurger.getAttribute('aria-expanded'));
    ref.buttonOpenBurger.setAttribute('aria-expanded', !isMenuOpen);
    ref.burgerMenu.classList.toggle('is-open');
    if(isMenuOpen){
        ref.burgerMenu.style.overflow = "hidden"
    }
    ref.burgerMenu.style.overflow = "auto"
}


ref.buttonOpenBurger.addEventListener("click",handelBurgerMenu);
ref.burgerCloseBurger.addEventListener("click",handelBurgerMenu);