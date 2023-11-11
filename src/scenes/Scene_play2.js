class Scene_play2 extends Phaser.Scene{

    constructor(){
        super("Scene_play2");
    }

    preload(){
        
    }

    create(){
      //se decalara las vidas del personaje 
      this.vidas = 1

      //se agrega el fondo
        this.add.tileSprite(0, 0, 2400, 600, 'fondo').setOrigin(0, 0).setScrollFactor(0);
    
      //Piso de lava
        this.lavaPlatforms = this.physics.add.staticGroup();
          //----Se agrega las propiedades de lava
          this.lavaPlatforms.create(1400, 560, 'lava').setSize(2500, 80).setOffset(-1, 17);

      //Plataformas
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(0, 568, 'platform').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'platform');
        this.platforms.create(50, 250, 'platform');
        this.platforms.create(750, 220, 'platform');
        this.platforms.create(1300, 220, 'platform');
        this.platforms.create(1900, 220, 'platform');

        //Se crea la variable para player
        this.player = this.physics.add.sprite(100,100,'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

      //puntuacion que se mostrara en pantalla
        let score = 0;
        let scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

      //Aqui la animacion del jugador
        this.anims.create({
            key: 'left', //--movimiento hacia la izq.
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
            });
        
        this.anims.create({
            key: 'turn', //--estado quieto
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
            });
        
        this.anims.create({
            key: 'right', //--movmiento hacia la dcha.
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
            });

        this.physics.add.collider(this.player, this.platforms);

       // Se agregan las estrellas
            this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11, // cantidad de estrellas
            setXY: { x: 12, y: 0, stepX: 70 } // empieza en la posición x e y, se repite cada 70 en x
            });
            this.stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); 
            });


        this.physics.world.gravity.y = 300;
        //Habilita las colisiones de las entrellas con la plataforma
        this.physics.add.collider(this.stars, this.platforms);
        this.cursors = this.input.keyboard.createCursorKeys();
        //Choque entre las estrellas y el jugador
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
        //Colision de personaje con lava
        this.physics.add.overlap(this.player, this.lavaPlatforms, this.colisionPlayerLava, null, this);
        this.cursors = this.input.keyboard.createCursorKeys();

        //camara para el personaje
        this.cameras.main.setBounds(0, 0, 2400, 600); //--establece los limites de la camara
        this.cameras.main.startFollow(this.player); //--comando de seguimiento de camara a player 
        this.physics.world.setBounds(0, 0, 2400, 600); //--establece los limites del nivel (visualmente)
   
        //codigo para colision lava-personaje
        
      }

    update() 
  {

    //Controladores de movimiento de personaje izq. y dcha. 
    if (this.cursors.left.isDown) 
    {
      this.player.setVelocityX(-200);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    //logica para saltar
    if ((this.cursors.up.isDown || this.cursors.space.isDown) && this.player.body.touching.down) {
      this.player.setVelocityY(-400);
    }
  }

  //funcion para colisionar entre player y lava
  colisionPlayerLava(player, lavaPlatforms) {
    this.vidas--;
    //this.actualizartexto();
    
    player.setTint(0xff0000); //--color para cambiar a player 

    if (this.vidas <= 0) {
        console.log('perdiste'),
          player.clearTint(); //--cambia el color del player cuando choca con lava
          this.scene.start('Game_over');
      
    }
  }
}
export default Scene_play2;