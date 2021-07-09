var button = document.querySelectorAll("button")[0];
button.addEventListener('click',function(){
  random = Math.floor(Math.random() * 16777215)
  str = random.toString();
  var body = document.querySelectorAll("body")[0];
  body.style.backgroundColor = "#"+str;
  var changer = document.querySelector("#lol");
  changer.innerHTML = "#"+str;
})
