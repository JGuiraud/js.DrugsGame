var InfiniteScroller = InfiniteScroller || {};

//loading the game assets
InfiniteScroller.Preload = function () { };

InfiniteScroller.Preload.prototype = {
    preload: function () {
        //show loading screen
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(3);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.spritesheet('lsdback', 'assets/images/lsdBackground2.jpg')
        //load game assets
        this.load.spritesheet('girl', 'assets/images/girl.png', 82, 80, 6);
        this.load.spritesheet('playerScratch', 'assets/images/pls3.png', 53, 61, 2);
        this.load.spritesheet('playerDig', 'assets/images/open.png', 63, 80, 2);


        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('background', 'assets/images/bckg2.png');


        // this.load.image('grass', 'assets/images/grass.png');
        this.load.audio('whine', ['assets/audio/whine.ogg', 'assets/audio/music_snoop.mp3']);
        //this.load.audio('bark', ['assets/audio/bark.ogg', 'assets/audio/bark.mp3']);

        //from http://www.gamedevacademy.org/html5-phaser-tutorial-spacehipster-a-space-exploration-game/
        this.load.image('mound', 'assets/images/chest2.png');

        //Adapted from https://openclipart.org/detail/6570/flea:
        this.load.image('pills', 'assets/images/pill2.png');
        this.load.image('boobs', 'assets/images/boob.png');
        this.load.image('seringue', 'assets/images/seringue.png');
        this.load.image('wine', 'assets/images/wine.png');
        this.load.image('console', 'assets/images/console.png');
        this.load.image('canabi', 'assets/images/canabi.png');

        //https://openclipart.org/detail/188266/bone:
        this.load.image('heart', 'assets/images/toys/heart.png');

        //https://openclipart.org/detail/139615/tennis-ball:
        this.load.image('kit', 'assets/images/toys/medikit.jpg');
        this.load.image('lsdpill', 'assets/images/toys/lsdface.png');

    },
    create: function () {
        this.state.start('Game');
    }
};