/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var menuScene;
var gameScene;
// Preload Assets required
var assetData = [
    { id: "AngryMom", src: "../../Assets/images/Angrydragon.png" },
    { id: "Egg", src: "../../Assets/images/Egg.png" },
    { id: "Tame", src: "../../Assets/images/Tame.png" },
    { id: "Hero", src: "../../Assets/images/Hero.png" },
    { id: "Soldier", src: "../../Assets/images/Soldier.png" },
    { id: "Hopeless", src: "../../Assets/images/Hopeless.png" },
    { id: "Death", src: "../../Assets/images/Death.png" },
    { id: "Again", src: "../../Assets/images/Again.png" },
    { id: "No", src: "../../Assets/images/NoButton.png" },
    { id: "Yes", src: "../../Assets/images/YesButton.png" },
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME_ANGRYMOM:
            stage.removeAllChildren();
            currentScene = new scenes.AngryMom();
            console.log("Starting Angry mom GAME scene");
            break;
        case config.Scene.GAME_TAME:
            stage.removeAllChildren();
            currentScene = new scenes.Tame();
            console.log("Starting Tame scene");
            break;
        case config.Scene.GAME_HERO:
            stage.removeAllChildren();
            currentScene = new scenes.Hero();
            console.log("Starting Here scenes");
            break;
        case config.Scene.GAME_SOLDIER:
            stage.removeAllChildren();
            currentScene = new scenes.Soldier();
            console.log("Starting Soldier Scenes");
            break;
        case config.Scene.GAME_HOPELESS:
            stage.removeAllChildren();
            currentScene = new scenes.Hopeless();
            console.log("Starting Hopeless dragon Scenes");
            break;
        case config.Scene.GAME_DEATH:
            stage.removeAllChildren();
            currentScene = new scenes.Death();
            console.log("Starting Death scenes");
            break;
    }
}
//# sourceMappingURL=game.js.map