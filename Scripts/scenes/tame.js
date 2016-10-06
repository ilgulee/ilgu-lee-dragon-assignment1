var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Tame = (function (_super) {
        __extends(Tame, _super);
        // Menu Class Contructor
        function Tame() {
            _super.call(this);
        }
        Tame.prototype.start = function () {
            console.log("Menu Scene Started");
            this._tameBG = new createjs.Bitmap(assets.getResult("Tame"));
            this.addChild(this._tameBG);
            this._noBtn = new objects.Button("No", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._noBtn);
            this._noBtn.on("click", this._noBtnClick, this);
            this._yesBtn = new objects.Button("Yes", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._yesBtn);
            this._yesBtn.on("click", this._yesBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Tame.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Tame.prototype._yesBtnClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME_SOLDIER;
            changeScene();
        };
        Tame.prototype._noBtnClick = function (event) {
            scene = config.Scene.GAME_HOPELESS;
            changeScene();
        };
        return Tame;
    }(objects.Scene));
    scenes.Tame = Tame;
})(scenes || (scenes = {}));
//# sourceMappingURL=tame.js.map