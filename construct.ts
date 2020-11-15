class Pint{
    x: number;
    y: number;

    //Cannot have multiple in a class
    constructor(x?:number, y?:number){
        //?=Make parameter optional
        this.x=x;
        this.y=y;
    }

    draw(){
        console.log('X:'+this.x+'  Y:'+this.y);
    }
}

let pints= new Pint(3,4);
pints.x=1;
pints.y=1;

let drawl=new Pint();

