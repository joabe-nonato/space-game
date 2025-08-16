import ProjectFiles from "./ProjectFiles.js";

class Player {

    constructor(canvasWidth, canvasHeight)
    {    
        this.width = 100;
        this.height = 100;
        this.velocity = 10;
        this.position = {
            x: (canvasWidth / 2) - (this.width / 2), 
            y: canvasHeight - this.height - 30,            
        };
    }

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
        const p = new ProjectFiles({
            x: this.position.x + this.width / 2,
            y: this.position.y - 20
        }, -11);

        projectiles.push(p);
    }


    draw(ctx){
        ctx.fillStyle = "red";
       ctx.fillRect(this.position.x , this.position.y, this.width, this.height);
    }
}


export default Player;