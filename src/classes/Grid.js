import Invaders from "./Invaders.js";

class Grid {

    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.direction = 'right';
        this.moveDown = false;
        this.invaderVelocity = 1;
        this.invaders = this.init();
    }

    init()
    {
        const array = [];

        for (let row = 0; row < this.rows; row += 1) {
            
            for (let col = 0; col < this.cols ; col += 1) {
                
                const invader = new Invaders(
                    {
                        x: row * 90,
                        y: col * 70,
                    },
                    this.invaderVelocity
                );                

                array.push(invader);
            }
        }
        return array;
    }

    draw(ctx){
        this.invaders.forEach(invader => invader.draw(ctx));        
    }

    update()
    {
        if (this.chegaNaBordaDireita()) {
            this.direction = 'left';
            this.moveDown = true;
        }else if (this.chegaNaBordaEsquerda()) {
            this.direction = 'right';
            this.moveDown = true;
        }

        this.invaders.forEach(invader => {

            if (this.moveDown === true) {
                invader.moveDownLine();
            }

            if (this.direction === 'right') invader.moveRight();
            if (this.direction === 'left') invader.moveLeft();


        });

        this.moveDown = false;
    }

    chegaNaBordaDireita(){

    }

    chegaNaBordaEsquerda(){
        
    }

}

export default Grid;