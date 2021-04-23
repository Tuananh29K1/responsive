$(document).ready(function () {
  var itemContent = document.getElementsByClassName("content--item--image");
  for (let i = 0; i < itemContent.length; i++) {
    itemContent[
      i
    ].innerHTML = `<img src="${cars[i].image}" alt="${cars[i].name}" class="img-fluid" />
    <div class="content--item--icon d-md-block d-none">
        <img src="./img/icon.png" alt="iconCost" class="img-fluid">
        <p class="costItem">${cars[i].cost}</p>
    </div>
    <p class="costItem d-block d-md-none">${cars[i].cost}</p>
    <p class="content--item--name">${cars[i].name}</p>`;
  }

  // Code cho One page
  $(".header--navBar--menu ul li:nth-child(2) a").on("click", function (event) {
    event.preventDefault();
    var positionTip = $(".content--tips").offset().top;
    $("html").animate({ scrollTop: positionTip }, 400);
  });
  $(".header--navBar--menu ul li:nth-child(1) a").on("click", function (event) {
    event.preventDefault();
    var positionSearch = $(".content--title").offset().top;
    $("html").animate({ scrollTop: positionSearch }, 400);
  });
  $(".header--navBar--menu ul li:nth-child(3) a").on("click", function (event) {
    event.preventDefault();
    var positionTip = $(".content--tips").offset().top;
    $("html").animate({ scrollTop: positionTip }, 400);
  });
  $('.header--navBar--menu ul li:nth-child(4) a').on('click', function (event) {
    event.preventDefault();
    var positionMessage = $('.content--message').offset().top; 
    $('html').animate({scrollTop: positionMessage}, 400);
});
});
