var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Hopeless = (function (_super) {
        __extends(Hopeless, _super);
        function Hopeless() {
            _super.call(this);
        }
        Hopeless.prototype.start = function () {
            console.log("Hopeless Scene Started");
            this._hopelessBG = new createjs.Bitmap(assets.getResult("Hopeless"));
            this.addChild(this._hopelessBG);
            this.playAgainBtn = new objects.Button("Again", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 100);
            this.addChild(this.playAgainBtn);
            this.playAgainBtn.on("click", this.playAgainBtnClick, this);
            stage.addChild(this);
        };
        Hopeless.prototype.update = function () {
        };
        Hopeless.prototype.playAgainBtnClick = function (evetn) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Hopeless;
    }(objects.Scene));
    scenes.Hopeless = Hopeless;
})(scenes || (scenes = {}));
//# sourceMappingURL=hopeless.js.map