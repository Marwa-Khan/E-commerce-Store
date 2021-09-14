
// changing menu bars to cross
let menu = document.querySelector('#menu-bar')
let navbar= document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')

}

// menu.addEventListener("click", () => {
//     menu.classList.toggle("fa-times");
//     navbar.classList.toggle("active");
//   });

// automatically close the menu bar
window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}



