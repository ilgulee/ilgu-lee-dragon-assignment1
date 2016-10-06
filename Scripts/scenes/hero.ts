module scenes{
    export class Hero extends objects.Scene{
        private playAgainBtn:objects.Button;
        private _hero:createjs.Bitmap;
       
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("angry mom Scene Started");
            this._hero=new createjs.Bitmap(assets.getResult("Hero"));
            this.addChild(this._hero);

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