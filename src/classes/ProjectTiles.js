class ProjectTiles
{
    constructor(position, velocity){
          
        this.width = 2;
        this.height = 20;
        this.position = position;
        this.velocity = velocity;
    }

    update(){
        this.position.y += this.velocity;        
    }

     draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x , this.position.y, this.width, this.height);
    }

}

export default ProjectTiles;