function toggleMenu() { /*defining the function that was used earlier*/
    const menu = document.querySelector(".menu-links"); /*a constant called menu, document means targetign an element on our webpage and we're gonna be basically be using that element*/
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); /*whenever we click it, its gonna be either add or remove the open class, and that open class is gonna have some styling*/
    icon.classList.toggle("open"); 
}