import Bootloader from './Bootloader.js';
import Scene_play from './scenes/Scene_play.js';

const config = {
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
    scene: [
        Bootloader,
        Scene_play
    ]
};

new Phaser.Game(config);