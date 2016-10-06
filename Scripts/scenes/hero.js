var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Hero = (function (_super) {
        __extends(Hero, _super);
        function Hero() {
            _super.call(this);
        }
        Hero.prototype.start = function () {
            console.log("angry mom Scene Started");
            this._hero = new createjs.Bitmap(assets.getResult("Hero"));
            this.addChild(this._hero);
            this.playAgainBtn = new objects.Button("Again", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 100);
            this.addChild(this.playAgainBtn);
            this.playAgainBtn.on("click", this.playAgainBtnClick, this);
            stage.addChild(this);
        };
        Hero.prototype.update = function () {
        };
        Hero.prototype.playAgainBtnClick = function (evetn) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Hero;
    }(objects.Scene));
    scenes.Hero = Hero;
})(scenes || (scenes = {}));
//# sourceMappingURL=hero.js.map