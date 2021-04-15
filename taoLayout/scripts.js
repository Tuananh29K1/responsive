
var listMenu = document.getElementById('list-menu');
var info = document.getElementById('info');


var click = true;
function menu1(){
    if(click == false){
    listMenu.classList.add('hide');
    info.classList.add('hide');
    click = !click; 
  }else{
      listMenu.classList.remove('hide');
      info.classList.remove('hide');
      click = !click;
  } 
}
function menu(){
    if(click == false){
    listMenu.classList.add('hide'); 
    click = !click; 
  }else{
      listMenu.classList.remove('hide'); 
      click = !click;
  } 
}
