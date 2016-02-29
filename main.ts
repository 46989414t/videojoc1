/// <reference path="phaser/phaser.d.ts"/>

class mainState extends Phaser.State {
    game: Phaser.Game;

    preload():void {
        super.preload();
        this.game.load.image("player", "assets/player.png");
    }

    create():void {
        super.create();
        this.physics.startSystem(Phaser.Physics.ARCADE);
        var _bgColor='#150';
        this.stage.setBackgroundColor(_bgColor);
        var player = this.game.add.sprite(
            this.game.world.centerX,
            this.game.world.centerY,
            'player');
        /*Object.defineProperty(Phaser.Stage.prototype, "backgroundColor", {

            get: function () {

                return this._bgColor.color;

            },

            set: function (color) {

                this.setBackgroundColor(color);

            }

        });*/
    }

    update():void {
        super.update();
    }
}

class SimpleGame {
    game:Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

        this.game.state.add('main', mainState);
        this.game.state.start('main');
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
