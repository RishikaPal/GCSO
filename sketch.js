
var car , wall ;
var speed , weight ;
   
    function Setup() {
        createCanvas(1600,400);
    
        car = createSprite(50,200,50,50);
        car.shapeColor=color(255);

        wall = createSprite(1200,200,60,100);
        wall.shapeColor=color(80,80,80)
    
    
        speed = random(55,90);
        weight = random(400,1500);
    
        car.velocityX = speed ;
    
    
    }
    
    function draw() {
    
        background(0);
    
        if(wall.x-car.x <(car.width+wall.width)/2){
            car.velocityX=0;
            var deformation=0.5 * weight * speed* speed/22500; 
            if(deformation>180){
                car.shapecolour="red";
            }
            if(deformation<180 && deformation>100){
           car.shapecolour="yellow";
        }
        if(deformation<100){
            car.shapecolour="green";
        }

        

    }
    
    drawSprites();
    
}
