class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        
        this.load.image('bomb', '../assets/bomb.png');
        this.load.spritesheet('dude','../assets/dude.png',{frameWidth: 32, frameHeight: 48});
        this.load.image('platform','../assets/platform.png');
        this.load.image('sky','../assets/sky.png');
        this.load.image('star','../assets/star.png');
        this.load.audio('sonidoBG', '../assets/MenuSound.mp3');
        this.load.image('MenuBG', '../assets/MenuBG.png');
        this.load.spritesheet('button', '../assets/StartButton.png', {frameWidth:290, frameHeight:130});

        this.load.image('winner', '../assets/winner.png');
        this.load.image('GameOver', '../assets/GameOver.png');

        this.load.audio('Lose', './assets/lose.mp3');
        this.load.audio('Win', './assets/win.wav');

        this.load.on("complete", () =>{
            this.scene.start("Menu");
        });
    }

    create() {
        
    }
}
export default Bootloader;