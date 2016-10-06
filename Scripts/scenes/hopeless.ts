module scenes {
    export class Hopeless extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 

        private playAgainBtn:objects.Button;
        private _hopelessBG:createjs.Bitmap;
        
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Hopeless Scene Started");
            this._hopelessBG=new createjs.Bitmap(assets.getResult("Hopeless"));
            this.addChild(this._hopelessBG);

            this.playAgainBtn =new objects.Button("Again", config.Screen.CENTER_X-50, config.Screen.CENTER_Y+100);
            this.addChild(this.playAgainBtn);
            this.playAgainBtn.on("click",this.playAgainBtnClick,this);

          
            stage.addChild(this);
        }

        public update() : void {

        }

       
        private playAgainBtnClick(evetn:createjs.MouseEvent){
            scene=config.Scene.MENU;
            changeScene();
        }

      
    }
}