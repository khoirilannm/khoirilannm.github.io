const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
});

const topSlider = document.querySelector(".top");
const botSlider = document.querySelector(".bottom");

window.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 20){
    topSlider.style.display = "block";
    botSlider.style.visibility = "hidden";
  }else{
    topSlider.style.display = "none";
    botSlider.style.visibility = "";
  }
})

const toggleBtn = document.querySelector('.toggle');
const toggleBtnIcon = document.querySelector('.toggle i');
const dropDownMenu = document.querySelector('header nav ul');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen 
    ? 'ri-close-line'
    : 'ri-menu-line';
}

const menu = document.querySelectorAll("header nav ul li");

menu.forEach(element => {
  element.addEventListener("click", function(){
    menu.forEach(menu=>menu.classList.remove("active"))

    this.classList.add("active")
  })
});

document.addEventListener('click', function(event) {
  menu;

  const isClickInsideMenu = Array.from(menu).some(element => element.contains(event.target));

  if (!isClickInsideMenu) {
    menu.forEach(element => {
      element.classList.remove("active");
    });
  }
});