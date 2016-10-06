module scenes {
    export class Death extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 

  //Game again Btn
        private playAgainBtn:objects.Button;
        private _deathBG:createjs.Bitmap;
       
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Death Scene Started");
            this._deathBG=new createjs.Bitmap(assets.getResult("Death"));
            this.addChild(this._deathBG);

            this.playAgainBtn =new objects.Button("Again", config.Screen.CENTER_X-50, config.Screen.CENTER_Y+100);
            this.addChild(this.playAgainBtn);
            this.playAgainBtn.on("click",this.playAgainBtnClick,this);
           
            // Add menu scene to global stage container
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