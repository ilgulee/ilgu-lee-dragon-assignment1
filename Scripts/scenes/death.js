var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Death = (function (_super) {
        __extends(Death, _super);
        function Death() {
            _super.call(this);
        }
        Death.prototype.start = function () {
            console.log("Death Scene Started");
            this._deathBG = new createjs.Bitmap(assets.getResult("Death"));
            this.addChild(this._deathBG);
            this.playAgainBtn = new objects.Button("Again", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 100);
            this.addChild(this.playAgainBtn);
            this.playAgainBtn.on("click", this.playAgainBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Death.prototype.update = function () {
        };
        Death.prototype.playAgainBtnClick = function (evetn) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Death;
    }(objects.Scene));
    scenes.Death = Death;
})(scenes || (scenes = {}));
//# sourceMappingURL=death.js.map