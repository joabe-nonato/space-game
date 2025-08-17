import { PATH_INVADER_IMAGE } from "../utils/constants.js";
import ProjectTiles from "./ProjectTiles.js";

class Invaders {

    constructor(position, velocity)
    {   
        this.velocity = velocity;
        this.position = position;

        this.width = 60;
        this.height = 63;        

        this.image = this.getImage(PATH_INVADER_IMAGE);
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
        }, 11);

        projectiles.push(p);
    }


    draw(ctx){
        // ctx.fillStyle = "red";
    //    ctx.fillRect(this.position.x , this.position.y, this.width, this.height);
    
    // // NAVE
    ctx.drawImage(this.image, this.position.x , this.position.y, this.width, this.height);     
    
}

}


export default Invaders;