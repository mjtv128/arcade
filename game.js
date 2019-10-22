let config = {
    type: Phaser.AUTO,
    width: 874,
    height: 703, 
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload, 
        create: create, 
        update: update
    }
}


const game = new Phaser.Game(config)
let cursors;
let mysprite;
let grounds;
let groundBlock1;
let coin1;
let coins;


function preload() {

    this.load.spritesheet('character', 'assets/sprite_run.png', {
            frameWidth: 31, 
            frameHeight: 25,
    });
    this.load.image('treebackground', 'assets/treebackground.png');
    this.load.spritesheet('coin', 'assets/coin.png', {
            frameWidth: 16,
            frameHeight: 17, 

    });
    this.load.image('column', "assets/column_no_background.png");
    this.load.image('ground', 'assets/ground.png');
    this.load.image('tree', 'assets/tree_no_background.png');
    this.load.image('grey_block', 'assets/grey_block.png');
    this.load.image('ground_block', 'assets/ground_block.png');
    this.load.image('bigblock', 'assets/big_ground.png');
    this.load.image('redbig', 'assets/red_bigsquare.png');
    this.load.image('redsmall', 'assets/red_smallsquare.png');
    this.load.spritesheet('turnip', 'assets/turnip.png', {
            frameWidth: 16.4,
            frameHeight: 26,
    });
}

function create() {

    let bg = this.add.image(0, 0, 'treebackground');
    bg.setOrigin(0, 0);
    bg.setScale(5.5);
  
    
    static = this.physics.add.staticGroup();

    static.create(0, 644, 'ground').setScale(4).setOrigin(0,0).refreshBody();
    static.create(176, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();
    static.create(342, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();
    static.create(518, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();
    static.create(694, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();
    static.create(700, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();

    static.create(313, 625, 'ground_block').setScale(2.8);
    static.create(166, 180, 'grey_block').setScale(3);
    static.create(166, 180, 'grey_block').setScale(3);
    static.create(212, 180, 'grey_block').setScale(3);
    static.create(313, 625, 'ground_block').setScale(2.8);
    static.create(450, 578, 'bigblock').setScale(2.8);
    static.create(700, 480, 'redbig').setScale(2.3);
    static.create(664, 471, 'redsmall').setScale(2.3);
    static.create(736, 471, 'redsmall').setScale(2.3);

    let tree1 = this.add.image(108, 490, 'tree');
    tree1.setOrigin(0, 0);
    tree1.setScale(3.5);

    mysprite = this.physics.add.sprite(50, 380, 'character');
    mysprite.setScale(2.4);
    // mysprite.setBounce(0.5);
    mysprite.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('character', { start: 0, end: 2 }),
        frameRate: 50,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('character', { start: 0, end: 2 }),
        frameRate: 50,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{key: 'character', frame: 0}],
        frameRate: 50
    })

    mysprite.body.setGravityY(80);
    // mysprite.body.velocity.x = 100;

    this.physics.add.collider(mysprite, static); 

    cursors = this.input.keyboard.createCursorKeys();

    /////NEED TO REFACTOR////////

    coin1 = this.physics.add.sprite(170, 470, 'coin');
    coin1.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', {start: 0, end: 3})
    });
    coin1.play('spin');
    coin1.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin1, collectCoin, null, this);

    function collectCoin(mysprite, coin1){
        coin1.disableBody(true, true);
    }
    

    let coin2 = this.physics.add.sprite(314, 585, 'coin');
    coin2.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin2.play('spin');
    coin2.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin2, collectCoin, null, this);

    function collectCoin(mysprite, coin2) {
        coin2.disableBody(true, true);
    }

    let coin3 = this.physics.add.sprite(406, 493, 'coin');
    coin3.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin3.play('spin');
    coin3.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin3, collectCoin, null, this);

    function collectCoin(mysprite, coin3) {
        coin3.disableBody(true, true);
    }

    let coin4 = this.physics.add.sprite(450, 493, 'coin');
    coin4.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin4.play('spin');
    coin4.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin4, collectCoin, null, this);

    function collectCoin(mysprite, coin4) {
        coin4.disableBody(true, true);
    }

    let coin5 = this.physics.add.sprite(493, 493, 'coin');
    coin5.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin5.play('spin');
    coin5.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin5, collectCoin, null, this);

    function collectCoin(mysprite, coin5) {
        coin5.disableBody(true, true);
    }
  

    let coin6 = this.physics.add.sprite(680, 445, 'coin');
    coin6.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin6.play('spin');
    coin6.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin6, collectCoin, null, this);

    function collectCoin(mysprite, coin6) {
        coin6.disableBody(true, true);
    }


    let coin7 = this.physics.add.sprite(720, 445, 'coin');
    coin7.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin7.play('spin');
    coin7.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin7, collectCoin, null, this);

    function collectCoin(mysprite, coin7) {
        coin7.disableBody(true, true);
    }

    let turnip1 = this.physics.add.sprite(540, 360, 'turnip').setScale(2.3); 
    turnip1.body.allowGravity = false;  

    let turnip2 = this.physics.add.sprite(430, 290, 'turnip').setScale(2.3);
    turnip2.body.allowGravity = false;  
    
    let turnip3 = this.physics.add.sprite(320, 220, 'turnip').setScale(2.3);
    turnip3.body.allowGravity = false;  
}

function update() {
    const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    if (cursors.left.isDown) {
        mysprite.setVelocityX(-160);
        mysprite.anims.play('left', true);
    } else if (cursors.right.isDown){
        mysprite.setVelocityX(300);
        mysprite.anims.play('right', true);
    } else {
        mysprite.setVelocityX(0);
        mysprite.anims.play('turn');
    }

    if (spaceBar.isDown){
        mysprite.setVelocityY(-200);  
        }


};


