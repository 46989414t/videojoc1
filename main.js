/// <reference path="phaser/phaser.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mainState = (function (_super) {
    __extends(mainState, _super);
    function mainState() {
        _super.apply(this, arguments);
    }
    mainState.prototype.preload = function () {
        _super.prototype.preload.call(this);
        this.game.load.image("player", "assets/player.png");
    };
    mainState.prototype.create = function () {
        _super.prototype.create.call(this);
        this.physics.startSystem(Phaser.Physics.ARCADE);
        var _bgColor = '#150';
        this.stage.setBackgroundColor(_bgColor);
        var player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
        /*Object.defineProperty(Phaser.Stage.prototype, "backgroundColor", {

            get: function () {

                return this._bgColor.color;

            },

            set: function (color) {

                this.setBackgroundColor(color);

            }

        });*/
    };
    mainState.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    return mainState;
})(Phaser.State);
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');
        this.game.state.add('main', mainState);
        this.game.state.start('main');
    }
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
//# sourceMappingURL=main.js.map