const ref={
    buttonOpenBurger: document.querySelector(".js-open-burger"),
    burgerCloseBurger: document.querySelector(".js-close-buttonBurger"),
    burgerMenu :document.querySelector(".js-burger-menu")
}


const handelBurgerMenu=()=>{
    const toggle = ref.burgerMenu.classList.toggle("hidden")
    console.log(toggle);
}

ref.buttonOpenBurger.addEventListener("click",handelBurgerMenu);
ref.burgerCloseBurger.addEventListener("click",handelBurgerMenu)