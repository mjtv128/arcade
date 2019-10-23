
const gameDiv = document.getElementById('game-div')
let hidden = document.querySelector(".hidden");
let scoreInput = document.getElementById('score')
scoreInput.value = 0

let config = {
    type: Phaser.AUTO,
    width: 874,
    height: 703,
    parent: gameDiv,
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

function initiate(config){
    new Phaser.Game(config)
}
initiate(config)

let cursors;
let mysprite;
let score = 0;


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
            frameWidth: 16,
            frameHeight: 26,
    });
    this.load.spritesheet('blue', 'assets/blue.png', {
        frameWidth: 16, 
        frameHeight: 16,
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

    let coin1 = this.physics.add.sprite(170, 470, 'coin');
    coin1.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', {start: 0, end: 3})
    });
    coin1.play('spin');
    coin1.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin1, points, null, this);

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
    this.physics.add.overlap(mysprite, coin2, points, null, this);

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
    this.physics.add.overlap(mysprite, coin3, points, null, this);

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
    this.physics.add.overlap(mysprite, coin4, points, null, this);

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
    this.physics.add.overlap(mysprite, coin5, points, null, this);

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
    this.physics.add.overlap(mysprite, coin6, points, null, this);

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
    this.physics.add.overlap(mysprite, coin7, points, null, this);

    let coin8 = this.physics.add.sprite(120, 220, 'coin');
    coin8.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin8.play('spin');
    coin8.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin8, points, null, this);

    let coin9 = this.physics.add.sprite(120, 280, 'coin');
    coin9.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin9.play('spin');
    coin9.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin9, points, null, this);

    let coin10 = this.physics.add.sprite(120, 340, 'coin');
    coin10.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin10.play('spin');
    coin10.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin10, points, null, this);

    let coin11 = this.physics.add.sprite(120, 400, 'coin');
    coin11.setScale(1.8);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin11.play('spin');
    coin11.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin11, points, null, this);

    // let coins = this.add.group();
    // coins.add(coin1);
   
    let turnip1 = this.physics.add.sprite(540, 360, 'turnip').setScale(2.3); 
    turnip1.body.allowGravity = false;
    this.anims.create({
        key: 'tur',
        frames: this.anims.generateFrameNumbers('turnip', { start: 0, end: 2 }),
        frameRate: 20,
        repeat: -1
    });
    turnip1.play('tur');

    let turnip2 = this.physics.add.sprite(430, 290, 'turnip').setScale(2.3);
    turnip2.body.allowGravity = false;  
    this.anims.create({
        key: 'tur',
        frames: this.anims.generateFrameNumbers('turnip', { start: 0, end: 2 }),
        frameRate: 20,
        repeat: -1
    });
    turnip2.play('tur');
    
    let turnip3 = this.physics.add.sprite(320, 220, 'turnip').setScale(2.3);
    turnip3.body.allowGravity = false; 
    this.anims.create({
        key: 'tur',
        frames: this.anims.generateFrameNumbers('turnip', { start: 0, end: 2 }),
        frameRate: 20,
        repeat: -1
    });
    turnip3.play('tur');

    turnip1.setImmovable(true);
    this.physics.add.collider(mysprite, turnip1, bounceTurnip, null, this);
    turnip2.setImmovable(true);
    this.physics.add.collider(mysprite, turnip2, bounceTurnip, null, this);
    turnip3.setImmovable(true);
    this.physics.add.collider(mysprite, turnip3, bounceTurnip, null, this);
    
    function bounceTurnip(sprite, turnip) {
        sprite.setVelocityY(sprite.body.velocity.y + 5);
    }
    
    let blue1 = this.physics.add.sprite( 170, 141, 'blue').setScale(2.3);
    blue1.body.allowGravity = false;
    this.physics.add.overlap(mysprite, blue1, bluepoints, null, this);
    
    // this.gameOverText.visible = true;

    let scoreText;

    scoreText = this.add.text(630, 50, 'score: 0', {
        fontSize: '30px',
        fill: '#000'
    });

    function points(mysprite, object) {
        object.disableBody(true, true);
        ++score;
        ++scoreInput.value;
        scoreText.setText("score: " + score);
    }

    

    function bluepoints(mysprite, blueobject){
        blueobject.disableBody(true, true);
        score *= 2;
        scoreInput.value*=2;
        scoreText.setText("score: " + score);  
        this.physics.pause();
        this.gameOver = true;  
        let gameOverText = this.add.text(300, 350, 'GAME OVER', { fontSize: '60px', fill: '#000' }) 
        hidden.className = "unhidden";
    }

}

function update() {
    const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   

    if (cursors.left.isDown) {
        mysprite.setVelocityX(-300);
        mysprite.anims.play('left', true);
    } else if (cursors.right.isDown){
        mysprite.setVelocityX(300);
        mysprite.anims.play('right', true);
    } else {
        mysprite.setVelocityX(0);
        mysprite.anims.play('turn');
    }

    if (spaceBar.isDown){
        jumptimer = 1;
        mysprite.setVelocityY(-200);  
        } 

};
