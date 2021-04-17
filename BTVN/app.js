var titleCard = document.getElementsByTagName("h5");
var captionCard = document.getElementsByClassName("card--body--content--caption");
var rankCard = document.getElementsByClassName("card--body--content--rank");
var buyCard = document.getElementsByClassName("card--body--cost--buy");
var saleCard = document.getElementsByClassName("card--body--cost--sale");
var addLink = document.getElementsByClassName("add--link");
var buttonDelete = document.querySelector(".hide--button--delete");
var checkRadio = document.getElementsByClassName("check--radio-left");
var menuMobile = document.querySelector('.navBar--right--menu--mobile'); 
var buttonMenu = document.querySelector('.button--menu');
var container = document.getElementById('container');
var subMenu = document.querySelector('.sub-menu');
var itemMenu = document.querySelector('.item-menu');
  
 
/*========= add nội dung card ======*/
for (let i = 0; i < titleCard.length; i++) {
  titleCard[i].innerText = sanPham[i].title;
}

for (let i = 0; i < captionCard.length; i++) {
  captionCard[i].innerText = sanPham[i].caption;
}

for (let i = 0; i < rankCard.length; i++) {
  rankCard[i].innerHTML = `${sanPham[i].rank} <i class="fas fa-star"></i>`;
}

for (let i = 0; i < buyCard.length; i++) {
  buyCard[i].innerText = `${sanPham[i].buy}.000 đ`;
}

for (let i = 0; i < saleCard.length; i++) {
  if (sanPham[i].sale == "") {
    saleCard[i].innerText = `${sanPham[i].sale}`;
  } else {
    saleCard[i].innerText = `${sanPham[i].sale}.000 đ`;
  }
}

for (let i = 0; i < addLink.length; i++) {
  addLink[i].href = sanPham[i].href;
}

/** Thao tác với Container */
container.addEventListener("click", hideMenu);
function hideMenu (){
  menuMobile.style.display ="none";
  subMenu.style.display ="none";
  itemMenu.style.color ="#e5e7ea";
}

/**  Nút Menu Mobile */
 
buttonMenu.addEventListener("click", hereMenu);
function hereMenu(){
  menuMobile.style.display ="block";
}
/** Nút Delete  */
buttonDelete.addEventListener("click", resetDisplay);
function resetDisplay() {
  buttonDelete.style.display = "none";
}

for (let i = 0; i < checkRadio.length; i++) {
  checkRadio[i].addEventListener("click", hideDelete);
  function hideDelete() {
    buttonDelete.style.display = "block";
  }
}
/**Thao tác với sub Menu */
let count = true;
function clickSubMenu(){
  
  if(count == true){
    subMenu.style.display ="block";
    itemMenu.style.color ="red"  
    count = !count;
  }else{  
    subMenu.style.display ="none";
    itemMenu.style.color ="#e5e7ea";
    count = !count;
  }
  
}
 
 