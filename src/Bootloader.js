class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        
        this.load.image('bomb', '../assets/bomb.png');
        this.load.image('dude','../assets/dude.png');
        this.load.image('platform','../assets/platform.png');
        this.load.image('sky','../assets/sky.png');
        this.load.image('star','../assets/star.png');

        this.load.on("complete", () =>{
            this.scene.start("Scene_play");
        });
    }

    create() {
        
    }
}
export default Bootloader;