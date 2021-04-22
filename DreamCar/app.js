var itemContent=document.getElementsByClassName('content--item--image');
for (let i = 0; i < itemContent.length; i++) {
    itemContent[i].innerHTML=`<img src="${cars[i].image}" alt="${cars[i].name}" class="img-fluid" />
    <div class="content--item--icon d-md-block d-none">
        <img src="./img/icon.png" alt="iconCost" class="img-fluid">
        <p class="costItem">${cars[i].cost}</p>
    </div>
    <p class="costItem d-block d-md-none">${cars[i].cost}</p>
    <p class="content--item--name">${cars[i].name}</p>`
}; 