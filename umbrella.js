class Umbrella {
    constructor(x, y){
        var option ={
            isStatic: true
        };

        this.image = loadAnimation("walking_1.png", "walking_2.png");
        this.umbrella = Bodies.circle(x, y, 50, option);
        this.radius = 50;
        World.add(world, this.umbrella);
    }
    display(){
        
    }
}