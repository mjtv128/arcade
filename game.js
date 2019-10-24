
const gameDiv = document.getElementById('game-div')
let hidden = document.querySelector(".hidden");
let scoreInput = document.getElementById('score')
scoreInput.value = 0

let config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 620,
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
let iter = 0;
let mtnSpeed = 0.01;


function preload() {

    this.load.spritesheet('character', 'assets/sprite_run.png', {
            frameWidth: 31, 
            frameHeight: 25,
    });
    this.load.image('background', 'assets/moon_background.png');
    this.load.image('onemountain', 'assets/onemountain.png');
    this.load.image('mountains', 'assets/mountains.png');
    this.load.image('trees', 'assets/trees.png');
    this.load.image('moretrees', 'assets/moretrees.png');




    this.load.spritesheet('coin', 'assets/coin.png', {
            frameWidth: 16,
            frameHeight: 17, 

    });
    this.load.image('ground', 'assets/slab.png');
    this.load.image('vertical', 'assets/vertical_slab.png');
    this.load.image('shortslab', 'assets/shortslab.png');
    this.load.spritesheet('flames', 'assets/flames.png', {
        frameWidth: 15.7,
        frameHeight: 17
    })
    this.load.image('diamond', 'assets/diamond.png');

  
}

function create() {

    let bg = this.add.image(0, 0, 'background');
    bg.setOrigin(0, 0);
    bg.setScale(4);
  
    onemountain = this.add.tileSprite(890, 494, 620, 275, 'onemountain').setScale(4);
    mountain = this.add.tileSprite(160, 544, 620, 275, 'mountains').setScale(4);
    moretrees = this.add.tileSprite(160, 544, 620, 275, 'moretrees').setScale(4);
    trees = this.add.tileSprite(160, 544, 620, 275, 'trees').setScale(4);
    
    static = this.physics.add.staticGroup();

    static.create(43, 605, 'ground').setScale(0.2).refreshBody();
    static.create(126, 605, 'ground').setScale(0.2).refreshBody();
    static.create(209, 605, 'ground').setScale(0.2).refreshBody();
    static.create(292, 605, 'ground').setScale(0.2).refreshBody();
    static.create(375, 605, 'ground').setScale(0.2).refreshBody();
    static.create(458, 605, 'ground').setScale(0.2).refreshBody();
    static.create(541, 605, 'ground').setScale(0.2).refreshBody();
    static.create(624, 605, 'ground').setScale(0.2).refreshBody();
    static.create(707, 605, 'ground').setScale(0.2).refreshBody();
    static.create(790, 605, 'ground').setScale(0.2).refreshBody();
    static.create(873, 605, 'ground').setScale(0.2).refreshBody();
    static.create(956, 605, 'ground').setScale(0.2).refreshBody();
    static.create(1039, 605, 'ground').setScale(0.2).refreshBody();

    static.create(43, 500, 'ground').setScale(0.2).refreshBody();
    static.create(126, 500, 'ground').setScale(0.2).refreshBody();
    static.create(209, 500, 'ground').setScale(0.2).refreshBody();
    static.create(292, 500, 'ground').setScale(0.2).refreshBody();
    static.create(375, 500, 'ground').setScale(0.2).refreshBody();
    static.create(458, 500, 'ground').setScale(0.2).refreshBody();
    static.create(541, 500, 'ground').setScale(0.2).refreshBody();
    static.create(624, 500, 'ground').setScale(0.2).refreshBody();
    static.create(707, 500, 'ground').setScale(0.2).refreshBody();
    static.create(790, 500, 'ground').setScale(0.2).refreshBody();
    static.create(873, 500, 'ground').setScale(0.2).refreshBody();
    static.create(956, 500, 'ground').setScale(0.2).refreshBody();

    static.create(1039, 400, 'ground').setScale(0.2).refreshBody();

    static.create(10, 415, 'ground').setScale(0.2).refreshBody(); 
    //first left platform
    static.create(130, 340, 'ground').setScale(0.2).refreshBody();
    static.create(193, 340, 'ground').setScale(0.2).refreshBody();

    static.create(43, 260, 'ground').setScale(0.2).refreshBody(); //second outer left platform
    static.create(80, 260, 'ground').setScale(0.2).refreshBody();

    static.create(200, 184, 'ground').setScale(0.2).refreshBody();

    static.create(235, 323, 'vertical').setScale(0.2).refreshBody();
    static.create(235, 240, 'vertical').setScale(0.2).refreshBody();
    static.create(235, 157, 'vertical').setScale(0.2).refreshBody();
    static.create(235, 120, 'vertical').setScale(0.2).refreshBody();

    static.create(20, 120, 'ground').setScale(0.2).refreshBody();

    static.create(160, 64, 'ground').setScale(0.2).refreshBody();
    static.create(243, 64, 'ground').setScale(0.2).refreshBody();
    static.create(326, 64, 'ground').setScale(0.2).refreshBody();

    static.create(580, 64, 'ground').setScale(0.2).refreshBody();
    static.create(659, 64, 'ground').setScale(0.2).refreshBody();
    static.create(742, 64, 'ground').setScale(0.2).refreshBody();

    static.create(580, 118, 'vertical').setScale(0.2).refreshBody();
    static.create(580, 201, 'vertical').setScale(0.2).refreshBody();
    static.create(580, 284, 'vertical').setScale(0.2).refreshBody();

    static.create(612, 330, 'ground').setScale(0.2).refreshBody();
    static.create(695, 330, 'ground').setScale(0.2).refreshBody();
    static.create(778, 330, 'ground').setScale(0.2).refreshBody();
    static.create(840, 330, 'ground').setScale(0.2).refreshBody();

    static.create(1040, 230, 'ground').setScale(0.2).refreshBody();
    static.create(957, 230, 'ground').setScale(0.2).refreshBody();
    static.create(874, 230, 'ground').setScale(0.2).refreshBody();
    static.create(791, 230, 'ground').setScale(0.2).refreshBody();
    static.create(708, 230, 'ground').setScale(0.2).refreshBody();

    static.create(1050, 64, 'ground').setScale(0.2).refreshBody();

    static.create(896, 64, 'shortslab').setScale(0.2).refreshBody();

    
    static.create(330, 145, 'shortslab').setScale(0.2).refreshBody();
    static.create(500, 205, 'shortslab').setScale(0.2).refreshBody();
    static.create(375, 305, 'shortslab').setScale(0.2).refreshBody();


    mysprite = this.physics.add.sprite(40, 500, 'character');
    mysprite.setScale(1.8);
    // mysprite.setBounce(4 );
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

    ///// COINS START /////////////

    let coin1 = this.physics.add.sprite(140, 470, 'coin');
    coin1.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', {start: 0, end: 3})
    });
    coin1.play('spin');
    coin1.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin1, points, null, this);

    let coin2 = this.physics.add.sprite(314, 470, 'coin');
    coin2.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin2.play('spin');
    coin2.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin2, points, null, this);

    let coin3 = this.physics.add.sprite(406, 470, 'coin');
    coin3.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin3.play('spin');
    coin3.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin3, points, null, this);

    let coin4 = this.physics.add.sprite(450, 470, 'coin');
    coin4.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin4.play('spin');
    coin4.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin4, points, null, this);

    let coin5 = this.physics.add.sprite(693, 473, 'coin');
    coin5.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 8,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin5.play('spin');
    coin5.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin5, points, null, this);

    let coin6 = this.physics.add.sprite(724, 473, 'coin');
    coin6.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin6.play('spin');
    coin6.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin6, points, null, this);

    let coin7 = this.physics.add.sprite(530, 575, 'coin');
    coin7.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin7.play('spin');
    coin7.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin7, points, null, this);

    let coin8 = this.physics.add.sprite(260, 575, 'coin');
    coin8.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin8.play('spin');
    coin8.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin8, points, null, this);

    let coin9 = this.physics.add.sprite(230, 575, 'coin');
    coin9.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin9.play('spin');
    coin9.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin9, points, null, this);

    let coin10 = this.physics.add.sprite(290, 575, 'coin');
    coin10.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin10.play('spin');
    coin10.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin10, points, null, this);

    let coin11 = this.physics.add.sprite(800, 575, 'coin');
    coin11.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin11.play('spin');
    coin11.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin11, points, null, this);

    let coin12 = this.physics.add.sprite(840, 575, 'coin');
    coin12.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin12.play('spin');
    coin12.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin12, points, null, this);


    let coin13 = this.physics.add.sprite(880, 575, 'coin');
    coin13.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin13.play('spin');
    coin13.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin13, points, null, this);


    let coin14 = this.physics.add.sprite(920, 575, 'coin');
    coin14.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin14.play('spin');
    coin14.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin14, points, null, this);


    let coin15 = this.physics.add.sprite(960, 575, 'coin');
    coin15.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin15.play('spin');
    coin15.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin15, points, null, this);

    let coin16 = this.physics.add.sprite(1025, 370, 'coin');
    coin16.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin16.play('spin');
    coin16.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin16, points, null, this);

    let coin17 = this.physics.add.sprite(725, 300, 'coin');
    coin17.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin17.play('spin');
    coin17.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin17, points, null, this);

    let coin18 = this.physics.add.sprite(695, 300, 'coin');
    coin18.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin18.play('spin');
    coin18.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin18, points, null, this);

    let coin19 = this.physics.add.sprite(845, 300, 'coin');
    coin19.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin19.play('spin');
    coin19.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin19, points, null, this);

    let coin20 = this.physics.add.sprite(945, 200, 'coin');
    coin20.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin20.play('spin');
    coin20.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin20, points, null, this);

    let coin21 = this.physics.add.sprite(1045, 200, 'coin');
    coin21.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin21.play('spin');
    coin21.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin21, points, null, this);

    let coin22 = this.physics.add.sprite(735, 200, 'coin');
    coin22.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin22.play('spin');
    coin22.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin22, points, null, this);

    let coin23 = this.physics.add.sprite(895, 33, 'coin');
    coin23.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin23.play('spin');
    coin23.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin23, points, null, this);

    let coin24 = this.physics.add.sprite(495, 175, 'coin');
    coin24.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin24.play('spin');
    coin24.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin24, points, null, this);


    let coin25 = this.physics.add.sprite(200, 155, 'coin');
    coin25.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin25.play('spin');
    coin25.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin25, points, null, this);

    let coin26 = this.physics.add.sprite(200, 313, 'coin');
    coin26.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin26.play('spin');
    coin26.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin26, points, null, this);

    let coin27 = this.physics.add.sprite(30, 387, 'coin');
    coin27.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin27.play('spin');
    coin27.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin27, points, null, this);

    let coin28 = this.physics.add.sprite(260, 33, 'coin');
    coin28.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin28.play('spin');
    coin28.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin28, points, null, this);

    let coin29 = this.physics.add.sprite(670, 33, 'coin');
    coin29.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin29.play('spin');
    coin29.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin29, points, null, this);

    let coin30 = this.physics.add.sprite(640, 33, 'coin');
    coin30.setScale(1.4);
    this.anims.create({
        key: 'spin',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('coin', { start: 0, end: 3 })
    });
    coin30.play('spin');
    coin30.body.allowGravity = false;
    this.physics.add.overlap(mysprite, coin30, points, null, this);

    //////////COINS END/////////////////////

    ////////// FLAMES ////////

    let flame1 = this.physics.add.sprite(480, 578, 'flames').setScale(1.7);
    this.anims.create({
        key: 'fire',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('flames', { start: 0, end: 3 })
    });
    flame1.play('fire');
    flame1.body.allowGravity = false;
    // this.physics.add.overlap(mysprite, flame1, points, null, this); 

    let flame2 = this.physics.add.sprite(620, 578, 'flames').setScale(1.7);
    this.anims.create({
        key: 'fire',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('flames', { start: 0, end: 3 })
    });
    flame2.play('fire');
    flame2.body.allowGravity = false;

    let flame3 = this.physics.add.sprite(680, 579, 'flames').setScale(1.7);
    this.anims.create({
        key: 'fire',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('flames', { start: 0, end: 3 })
    });
    flame3.play('fire');
    flame3.body.allowGravity = false;

    let flame4 = this.physics.add.sprite(790, 472, 'flames').setScale(1.7);
    this.anims.create({
        key: 'fire',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('flames', { start: 0, end: 3 })
    });
    flame4.play('fire');
    flame4.body.allowGravity = false;

    let flame5 = this.physics.add.sprite(100, 472, 'flames').setScale(1.7);
    this.anims.create({
        key: 'fire',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('flames', { start: 0, end: 3 })
    });
    flame5.play('fire');
    flame5.body.allowGravity = false;

    let flame6 = this.physics.add.sprite(800, 200, 'flames').setScale(1.7);
    this.anims.create({
        key: 'fire',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('flames', { start: 0, end: 3 })
    });
    flame6.play('fire');
    flame6.body.allowGravity = false;

    flame1.setImmovable(true);
    flame2.setImmovable(true);
    flame3.setImmovable(true);
    flame4.setImmovable(true);
    flame5.setImmovable(true);
    flame6.setImmovable(true);
    this.physics.add.collider(mysprite, flame1, fireCollide, null, this);
    this.physics.add.collider(mysprite, flame2, fireCollide, null, this);
    this.physics.add.collider(mysprite, flame3, fireCollide, null, this);
    this.physics.add.collider(mysprite, flame4, fireCollide, null, this);
    this.physics.add.collider(mysprite, flame5, fireCollide, null, this);
    this.physics.add.collider(mysprite, flame6, fireCollide, null, this);

    function fireCollide(mysprite, flame){
        flame.disableBody(true, true);
        this.physics.pause();
        this.gameOver = true;
        let gameOverText = this.add.text(300, 350, 'GAME OVER', { fontSize: '60px', fill: '#000' })
        hidden.className = "unhidden";   
    }

    //////// FLAMES END /////

    ///// DIAMOND///////

   
    let diamond1 = this.physics.add.image(1030, 33, 'diamond').setScale(0.015);
    let diamond2 = this.physics.add.image(30, 85, 'diamond').setScale(0.015);
    let diamond3 = this.physics.add.image(330, 115, 'diamond').setScale(0.015);
    let diamond4 = this.physics.add.image(376, 275, 'diamond').setScale(0.015);
    let diamond5 = this.physics.add.image(902, 197, 'diamond').setScale(0.015);
    let diamond6 = this.physics.add.image(1057, 370, 'diamond').setScale(0.015);

    diamond1.body.allowGravity = false;
    diamond2.body.allowGravity = false;
    diamond3.body.allowGravity = false;
    diamond4.body.allowGravity = false;
    diamond5.body.allowGravity = false;
    diamond6.body.allowGravity = false;

    this.physics.add.overlap(mysprite, diamond1, pointDiamond, null, this);

    let scoreText;

    scoreText = this.add.text(630, 50, 'score: 0', {
        fontSize: '30px',
        fill: '#fff'
    });

    function points(mysprite, object) {
        object.disableBody(true, true);
        ++score;
        ++scoreInput.value;
        scoreText.setText("score: " + score);
    }

    function pointDiamond(mysprite, diamond){
        diamond.disableBody(true, true);
        score += 10;
        scoreText.setText("score: " + score);
    }

//     function bluepoints(mysprite, blueobject){
//         blueobject.disableBody(true, true);
//         score += 5;
//         scoreInput.value += 5;
//         scoreText.setText("score: " + score);  
//         this.physics.pause();
//         this.gameOver = true;  
//         let gameOverText = this.add.text(300, 350, 'GAME OVER', { fontSize: '60px', fill: '#000' }) 
//         hidden.className = "unhidden";         

//     }

}

function update() {

    mountain.tilePositionX = Math.fround(iter) * 200;
    trees.tilePositionX = Math.fround(iter) * 200;
    moretrees.tilePositionX = Math.fround(iter) * 200;
    onemountain.tilePositionX = Math.fround(iter) * 200;


    iter += mtnSpeed;

    const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    let cursors = this.input.keyboard.createCursorKeys();

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
