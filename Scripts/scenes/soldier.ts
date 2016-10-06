module scenes {
    export class Soldier extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 

        private playAgainBtn:objects.Button;
        private _soldierBG:createjs.Bitmap;
        //private _noBtn : objects.Button;
        //private _yesBtn : objects.Button;
        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Soldier Scene Started");
            this._soldierBG=new createjs.Bitmap(assets.getResult("Soldier"));
            this.addChild(this._soldierBG);

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