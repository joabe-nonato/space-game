import { PATH_COMB_IMAGE, PATH_MOTOR_IMAGE, PATH_SPACESHIP_IMAGE } from "../utils/constants.js";
import ProjectTiles from "./ProjectTiles.js";

class Player {

    constructor(canvasWidth, canvasHeight)
    {    
        this.width = 128;
        this.height = 128;
        this.velocity = 10;
        this.position = {
            x: (canvasWidth / 2) - (this.width / 2), 
            y: canvasHeight - this.height - 30,            
        };

        this.image = this.getImage(PATH_SPACESHIP_IMAGE);
        this.motor = this.getImage(PATH_MOTOR_IMAGE);
        this.comb = this.getImage(PATH_COMB_IMAGE);
    }

// // // RECUPERAR IMAGENS    

getImage(path){
    const image = new Image();
    image.src = path;
    return image;
}

// // // AÇÕES \ MOVIMENTOS
    moveLeft(){
        this.position.x -= this.velocity;
    }

    moveRight(){
        this.position.x += this.velocity;
    }

    moveUp(){
        this.position.y -= this.velocity;
    }

    moveDown(){
        this.position.y += this.velocity;
    }


    shoot(projectiles){
        const p = new ProjectTiles({
            x: this.position.x + this.width / 2,
            y: this.position.y - 20
        }, -11);

        projectiles.push(p);
    }


    draw(ctx){
        // ctx.fillStyle = "red";
    //    ctx.fillRect(this.position.x , this.position.y, this.width, this.height);
        
    // COMBUSTÃO MOTOR
    ctx.drawImage(this.comb, 
        0,0,
        128,
        128,
        this.position.x , 
        this.position.y, 
        this.width, 
        this.height);     

    // NAVE
    ctx.drawImage(this.image, this.position.x , this.position.y, this.width, this.height);     
    
    // MOTOR
    ctx.drawImage(this.motor, this.position.x , this.position.y, this.width, this.height);       
    }
}


export default Player;