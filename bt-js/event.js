/* Viết chương trình gồm một ô input và một thẻ div dùng để hiển thị nội dung (giá trị của ô input) 
khi người dùng gõ vào ô input*/
var inputText = document.getElementById("input--Text");
var outputText = document.getElementById("output--Text");
var captionCopy = document.getElementById("caption");

var valueOutput = inputText.addEventListener("keyup", function () {
  outputText.innerHTML = inputText.value;
  return inputText.value;
  
});

 
console.log(valueOutput); 
/**Viết chương trình khi người dùng copy nội dung của website thì thông báo là bạn đã copy thành công */
