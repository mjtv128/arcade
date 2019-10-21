let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 440, 
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

    this.load.spritesheet('character', 'assets/sprite_run.png', 
            { frameWidth: 31, 
               frameHeight: 25}
               );
    this.load.image('treebackground', 'assets/treebackground.png');
    // this.load.spritesheet('coin', 'assets/coin.png');
    this.load.image('column', "assets/column_no_background.png");
    this.load.image('ground', 'assets/ground.png');
    this.load.image('tree', 'assets/tree_no_background.png');
    this.load.image('grey_block', 'assets/grey_block.png');
    this.load.image('ground_block', 'assets/ground_block.png');
    this.load.image('bigblock', 'assets/big_ground.png');
    // this.load.image('redbrick', 'assets/red_block.png');
}

function create() {
    // game.physics.startSystem(Phaser.Physics.ARCADE);
    let bg = this.add.image(0, 0, 'treebackground');
    bg.setOrigin(0, 0);
    bg.setScale(3.5);
    
    let grounds = this.physics.add.staticGroup();

    grounds.create(0, 400, 'ground').setScale(3).setOrigin(0,0).refreshBody();
    grounds.create(131, 400, 'ground').setScale(3).setOrigin(0, 0).refreshBody();
    grounds.create(262, 400, 'ground').setScale(3).setOrigin(0, 0).refreshBody();
    grounds.create(393, 400, 'ground').setScale(3).setOrigin(0, 0).refreshBody();

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

    let tree1 = this.add.image(108, 290, 'tree');
    tree1.setOrigin(0, 0);
    tree1.setScale(2.5);

    let greyBlock1 = this.add.image(50, 200, 'grey_block')
    greyBlock1.setScale(2.3);

    let greyBlock2 = this.add.image(85, 200, 'grey_block')
    greyBlock2.setScale(2.3);

    let groundBlock1 = this.add.image(260, 387, 'ground_block');
    groundBlock1.setScale(2);

    let bigBlock1 = this.add.image(370, 352, 'bigblock');
    bigBlock1.setScale(2);

    // let redBrick1 = this.add.image(340, 180, 'redbrick');
    // redBrick1.setScale(2);

    mysprite = this.physics.add.sprite(50, 380, 'character');
    mysprite.setScale(2);
    mysprite.setBounce(0.2);
    mysprite.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('character', { start: 0, end: 2 }),
        frameRate: 23,
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

    mysprite.body.setGravityY(200);

    // this.physics.add.collider(mysprite, grounds); --- fix this

    cursors = this.input.keyboard.createCursorKeys();
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


