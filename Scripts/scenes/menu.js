/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Menu Class Contructor
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            this._startBG = new createjs.Bitmap(assets.getResult("Egg"));
            this.addChild(this._startBG);
            this._noBtn = new objects.Button("No", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._noBtn);
            this._noBtn.on("click", this._noBtnClick, this);
            this._yesBtn = new objects.Button("Yes", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._yesBtn);
            this._yesBtn.on("click", this._yesBtnClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Menu.prototype._yesBtnClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME_ANGRYMOM;
            changeScene();
        };
        Menu.prototype._noBtnClick = function (event) {
            scene = config.Scene.GAME_TAME;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map