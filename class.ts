import { throws } from "assert";

//Cohesion-Things related shall be part of a unit
class Point{
    x: number;
    y: number;
    //We can only have method signatures here
    draw () {
        //logic
        console.log('X:'+this.x+'Y: '+this.y);
    }
    getDistance(another: Point){
        //logic
        console.log(this.x+this.y);
    }
}

let point: Point;
point.draw();
