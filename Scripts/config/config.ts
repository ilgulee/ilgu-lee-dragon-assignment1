/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static MENU : number = 0;
        public static GAME_ANGRYMOM : number = 1;
        public static GAME_TAME : number = 2;
        public static GAME_HERO:number=3
        public static GAME_SOLDIER:number=4
        public static GAME_HOPELESS:number=5;
        public static GAME_DEATH:number=6;
       
    }

    export class Screen {
        public static WIDTH : number = 500;
        public static HEIGHT : number = 350;
        public static CENTER_X : number = 250;
        public static CENTER_Y : number = 175;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}