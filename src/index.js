/*
Aplicação: space game
Tippo: Shmups
Autor: Joabe Nonato
*/

import Invaders from "./classes/Invaders.js";
import Player from "./classes/Player.js";
// import ProjectTiles from "./classes/ProjectTiles.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.imageSmoothingEnabled = false;


const player = new Player(canvas.width, canvas.height);

const playerProjectiles = [];

// // POSIÇÃO INICIAL
// player.position.x = (canvas.width / 2) - (player.width / 2);
// player.position.y = canvas.height - player.height - 30;

// const p = new ProjectTiles({x: 200, y: 400}, -1);
const invader = new Invaders({x : (canvas.width / 2), y: 20 }, 10);

//AÇÂO
const keys ={
    left: false,
    right: false,
    up: false,
    down: false,
    shoot01: 
    {
        pressed: false, 
        released: false
    },
}

const drawProjectiles = () =>{
    playerProjectiles.forEach((projectile) =>{
        projectile.draw(ctx);
        projectile.update();
    });
}

const clearProjectiles = () =>{
    playerProjectiles.forEach((projectile, index) =>{
        if(projectile.position.y <= 0){
            playerProjectiles.splice(index, 1);
            // console.log(projectile.position.y);
        }
    });
}

//LOOPING DO JOGO: DESENHAR | RENDERIZAR
const gameLoop = () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height);

    invader.draw(ctx);
    
    // p.draw(ctx);
    // p.update();
    // console.log(player.position.y);

    if(keys.left && player.position.x > 0){
        player.moveLeft();
    }
    else if(keys.right && player.position.x <= canvas.width - player.width ){
        player.moveRight();
    }

    if(keys.up && player.position.y > 0){
        player.moveUp();
    }
    else if(keys.down && player.position.y <= canvas.height - player.height )
    {
        player.moveDown();
    }

    if( keys.shoot01.pressed && keys.shoot01.released)
    {
        player.shoot(playerProjectiles);
        keys.shoot01.released = false;
        console.log(playerProjectiles);
    }    

    drawProjectiles();
    clearProjectiles();

    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();

// // CAPTURAR EVENTOS DO PLAYER
addEventListener("keydown", (event)=>{
    let key = event.key.toLocaleLowerCase();
    // console.log(key);

        if(key == " ")
        {
            keys.shoot01.pressed = true;
        }

        if(key == "a")
        {
            keys.left = true;
        }
        else if(key == "d")
        {
            keys.right = true;
        }

        if(key == "w")
        {
            keys.up = true;
        }
        else if(key == "s")
        {
            keys.down = true;
        }

});

addEventListener("keyup", (event)=>{
    let key = event.key.toLocaleLowerCase();
        // console.log(key);

        if(key == " ")
        {
            keys.shoot01.pressed = false;
            keys.shoot01.released = true;
        }

        if(key == "a")
        {
            keys.left = false;
        }
        else if(key == "d")
        {
            keys.right = false;
        }

        if(key == "w")
        {
            keys.up = false;
        }
        else if(key == "s")
        {
            keys.down = false;
        }

});


