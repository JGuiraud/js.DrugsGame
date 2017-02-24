var InfiniteScroller = InfiniteScroller || {};

InfiniteScroller.GameStart = function () { };

var background2;
var button;

function create (){
	background2 =  game.stage.backgroundColor(0, 0, 3495, 600, 'img');
	button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

};
function onclick(){

};

//this.state.start('Game');