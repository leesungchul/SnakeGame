(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Snake = SnakeGame.Snake = function (startPos) {
    this.dir = Snake.DIRECTIONS[0];
    this.segments = []; //add startpos
    this.snakeLength = 1;
  }

  Snake.DIRECTIONS = [[-1,0], [1,0], [0,-1], [0,1]];

  Snake.prototype.turn = function(newDir) {
    this.dir = newDir;
  }

  Snake.prototype.move = function() {
    var that = this;
    var startCoords = this.segments[0].data("id").split(",");
    var row = (parseInt(startCoords[0]) + this.dir[0]);
    var col = (parseInt(startCoords[1]) + this.dir[1]);
    this.segments.unshift($('[data-id="' + row + "," + col + '"]'));
    $('[data-id="' + row + "," + col + '"]').toggleClass(that.cssClass);
    if (this.segments.length > this.snakeLength){
      var oldSegment = this.segments.pop();
      oldSegment.toggleClass(that.cssClass);
    }
  }

  var Coord = SnakeGame.Coord = function () {};

  Coord.prototype.plus = function() {} //add later



  $(document).ready(function () {
    var board = new SnakeGame.Board();
    board.play();

  });

})(this);