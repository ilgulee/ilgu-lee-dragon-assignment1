/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.GAME_ANGRYMOM = 1;
        Scene.GAME_TAME = 2;
        Scene.GAME_HERO = 3;
        Scene.GAME_SOLDIER = 4;
        Scene.GAME_HOPELESS = 5;
        Scene.GAME_DEATH = 6;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 500;
        Screen.HEIGHT = 350;
        Screen.CENTER_X = 250;
        Screen.CENTER_Y = 175;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map