document.addEventListener("DOMContentLoaded", function () {

  var buttons = document.querySelectorAll(".puzzle-item");
  var arrPos = [90, 180, 270];

  function getRandomPos() {
    return arrPos[Math.floor(Math.random() * arrPos.length)];
  }

  function userClick(e) {
    e.preventDefault();

    var currentPos = parseInt(this.style.transform.replace("rotate(", "").replace(")", ""));

    var sumPos = currentPos + 90;

    this.style.transform = "rotate(" + sumPos + "deg)";
    console.log(this.style.transform);

  }

  function puzzleInit() {

    var puzzle = document.querySelector(".puzzle.active");
    var piece = puzzle.querySelectorAll(".piece");

    for (var i = 0; i < piece.length; i++) {
      var piecePos = piece[i].style.transform = "rotate(" + getRandomPos() + "deg)";
    }

    for (var i = 0; i < piece.length; i++) {
      piece[i].onclick = userClick;
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = choosePuzzle;
  }

  function choosePuzzle(e) {
    e.preventDefault();

    var targetTab = this.dataset.target;

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }

    this.classList.add('active');

    var puzzle = document.querySelector(".puzzle.active");

    puzzle.classList.remove('active');

    document.getElementById(targetTab).classList.add('active');
    puzzleInit();
  }

  puzzleInit();

});

