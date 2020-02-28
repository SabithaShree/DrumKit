var btns = document.getElementsByClassName("drum");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var btnHtml = this.innerHTML;
    playSound(btnHtml);
  });
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      alert("invalid key");
  }

  addAnimation(key);
}

function addAnimation(key)
{
  var btnEle = document.querySelector("." + key);
  btnEle.classList.add("pressed");

  setTimeout(function() {
    btnEle.classList.remove("pressed")
  }, 100);
}
