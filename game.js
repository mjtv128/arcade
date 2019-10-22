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


function preload() {
    // game.load.onLoadStart.add(loadStart, this);
    // game.load.onFileComplete.add(fileComplete, this);
    // game.load.onLoadComplete.add(loadComplete, this);

    this.load.spritesheet('character', 'assets/sprite_run.png', {
            frameWidth: 31, 
            frameHeight: 25
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
}

function create() {
    // game.physics.startSystem(Phaser.Physics.ARCADE);
    let bg = this.add.image(0, 0, 'treebackground');
    bg.setOrigin(0, 0);
    bg.setScale(5.5);
  
    
    let grounds = this.physics.add.staticGroup();

    grounds.create(0, 644, 'ground').setScale(4).setOrigin(0,0).refreshBody();
    grounds.create(176, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();
    grounds.create(342, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();
    grounds.create(518, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();
    grounds.create(694, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();
    grounds.create(700, 644, 'ground').setScale(4).setOrigin(0, 0).refreshBody();


    // let ground = this.add.image(0, 400, 'ground');
    // ground.setOrigin(0,0);
    // ground.setScale(3);

    // let ground2 = this.add.image(131, 400, 'ground');
    // ground2.setOrigin(0,0);
    // ground2.setScale(3);

    // let ground3 = this.add.image(262, 400, 'ground');
    // ground3.setOrigin(0, 0);
    // ground3.setScale(3);

    // let ground4 = this.add.image(393, 400, 'ground');
    // ground4.setOrigin(0, 0);
    // ground4.setScale(3);

    // let column1 = this.add.image(340, 301, 'column');
    // column1.setOrigin(0,0);
    // column1.setScale(1.8);

    let tree1 = this.add.image(108, 490, 'tree');
    tree1.setOrigin(0, 0);
    tree1.setScale(3.5);

    let greyBlock1 = this.add.image(120, 180, 'grey_block');
    greyBlock1.setScale(3);

    let greyBlock2 = this.add.image(166, 180, 'grey_block');
    greyBlock2.setScale(3);

    let greyBlock3 = this.add.image(212, 180, 'grey_block');
    greyBlock3.setScale(3);

    let groundBlock1 = this.add.image(313, 625, 'ground_block');
    groundBlock1.setScale(2.8);

    let bigBlock1 = this.add.image(450, 578, 'bigblock');
    bigBlock1.setScale(2.8);

    let redBigSquare1 = this.add.image(650, 420, 'redbig');
    redBigSquare1.setScale(2.3);

    let redSmallSquare1 = this.add.image(614, 411, 'redsmall');
    redSmallSquare1.setScale(2.3);

    let redSmallSquare2 = this.add.image(686, 411, 'redsmall');
    redSmallSquare2.setScale(2.3);

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

    mysprite.body.setGravityY(10);

    // this.physics.add.collider(mysprite, grounds); --- fix this

    cursors = this.input.keyboard.createCursorKeys();

    /////NEED TO REFACTOR////////
    // let coins = this.add.group();
    // coins.create(260, 358, 'coin').setScale(1.2);
    // coins.create(350, 290, 'coin').setScale(1.2);
    // coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3], 6, true);
    // coins.callAll('animations.play', 'animations', 'spin');
    // this.anims.create({
    //     key: 'spin',
    //     repeat: -1,
    //     frameRate: 6,
    //     frames: this.anims.generateFrameNames('coin', {start: 0, end: 3})
    // });
    // coins.play('spin');
    
    let coin1 = this.add.sprite(170, 470, 'coin');
    coin1.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', {start: 0, end: 3})
    });
    coin1.play('spin');

    let coin2 = this.add.sprite(314, 585, 'coin');
    coin2.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin2.play('spin');

    let coin3 = this.add.sprite(406, 493, 'coin');
    coin3.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin3.play('spin');

    let coin4 = this.add.sprite(450, 493, 'coin');
    coin4.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin4.play('spin');

    let coin5 = this.add.sprite(493, 493, 'coin');
    coin5.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin5.play('spin');
  

    let coin6 = this.add.sprite(676, 385, 'coin');
    coin6.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin6.play('spin');


    let coin7 = this.add.sprite(624, 385, 'coin');
    coin7.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin7.play('spin');
}

function update() {
    const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    if (cursors.left.isDown) {
        mysprite.setVelocityX(-160);
        mysprite.anims.play('left', true);
    } else if (cursors.right.isDown){
        mysprite.setVelocityX(160);
        mysprite.anims.play('right', true);
    } else {
        mysprite.setVelocityX(0);
        mysprite.anims.play('turn');
    }

    if (spaceBar.isDown){
        mysprite.setVelocityY(-200);  
        }
};


