var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var AngryMom = (function (_super) {
        __extends(AngryMom, _super);
        // Menu Class Contructor
        function AngryMom() {
            _super.call(this);
        }
        AngryMom.prototype.start = function () {
            console.log("angry mom Scene Started");
            this._angryMom = new createjs.Bitmap(assets.getResult("AngryMom"));
            this.addChild(this._angryMom);
            this._noBtn = new objects.Button("No", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._noBtn);
            this._noBtn.on("click", this._noBtnClick, this);
            this._yesBtn = new objects.Button("Yes", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._yesBtn);
            this._yesBtn.on("click", this._yesBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        AngryMom.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        AngryMom.prototype._yesBtnClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME_HERO;
            changeScene();
        };
        AngryMom.prototype._noBtnClick = function (event) {
            scene = config.Scene.GAME_DEATH;
            changeScene();
        };
        return AngryMom;
    }(objects.Scene));
    scenes.AngryMom = AngryMom;
})(scenes || (scenes = {}));
//# sourceMappingURL=angrymom.js.map