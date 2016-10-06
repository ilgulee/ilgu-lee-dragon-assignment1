var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Soldier = (function (_super) {
        __extends(Soldier, _super);
        //private _noBtn : objects.Button;
        //private _yesBtn : objects.Button;
        // Menu Class Contructor
        function Soldier() {
            _super.call(this);
        }
        Soldier.prototype.start = function () {
            console.log("Soldier Scene Started");
            this._soldierBG = new createjs.Bitmap(assets.getResult("Soldier"));
            this.addChild(this._soldierBG);
            this.playAgainBtn = new objects.Button("Again", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y + 100);
            this.addChild(this.playAgainBtn);
            this.playAgainBtn.on("click", this.playAgainBtnClick, this);
            stage.addChild(this);
        };
        Soldier.prototype.update = function () {
        };
        Soldier.prototype.playAgainBtnClick = function (evetn) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Soldier;
    }(objects.Scene));
    scenes.Soldier = Soldier;
})(scenes || (scenes = {}));
//# sourceMappingURL=soldier.js.map