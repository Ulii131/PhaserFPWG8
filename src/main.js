import Bootloader from './Bootloader.js';
import Scene_play from './scenes/Scene_play.js';
import Menu from './scenes/Menu.js';
import Winner from './scenes/Winner.js';
import Game_over from './scenes/Game_over.js';

const config = {
    scene: [Bootloader, Menu, Scene_play, Winner, Game_over],
    title: "FPWTP04",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 800,
        height: 600,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#ffffff",
    pixelArt: false,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    
};

new Phaser.Game(config);