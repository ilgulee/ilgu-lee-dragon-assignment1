/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 

  
        private _startBG:createjs.Bitmap;
        private _noBtn : objects.Button;
        private _yesBtn : objects.Button;
        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            this._startBG=new createjs.Bitmap(assets.getResult("Egg"));
            this.addChild(this._startBG);

            this._noBtn = new objects.Button("No", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y+100);
            this.addChild(this._noBtn);
            this._noBtn.on("click", this._noBtnClick, this);

            this._yesBtn = new objects.Button("Yes", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y+100);
            this.addChild(this._yesBtn);
            this._yesBtn.on("click", this._yesBtnClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _yesBtnClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME_ANGRYMOM;
            changeScene();
        }

        private _noBtnClick(event : createjs.MouseEvent) {
            scene = config.Scene.GAME_TAME;
            changeScene();
        }

      
    }
}