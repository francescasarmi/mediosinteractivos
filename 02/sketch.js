
function setup() {
  createCanvas(200, 200);
  background(255);
  // Esta pintando cuadrados desde 0 que aumentan de 25 en 25 hasta 200
  for(var x=0;x<200;x=x+25) {
    
    fill(1)
    noStroke()
    
    //Columnas
    triangle(x,175+x,25+x,175-x,200+x)
    triangle(x,175-x,25-x,175+x,200+x)
    
    triangle(x,125-x,x,150-x,25+x,150-x)
    triangle(x,100-x,x,125-x,25+x,125-x)
    
    triangle(x,75-x,25+x,75-x,25+x,100-x)
    triangle(x,50-x,25+x,50-x,25+x,100-x)
    
    triangle(x,25-x,x,50-x,25+x,50-x)
    triangle(x,0-x,x,25-x,25+x,25-x)
    
    //Filas 
    triangle(25+x,175-x,25+x,200-x,50+x,200-x)
    triangle(50+x,175-x,50+x,200-x,75+x,200-x)
    
    triangle(75+x,175-x,100+x,175-x,100+x,200-x)
    triangle(100+x,175-x,100+x,200-x,175+x,200-x)
    
    triangle(125+x,175-x,125+x,200-x,150+x,200-x)
    triangle(150+x,175-x,150-x,200-x,175+x,200-x)
    
    triangle(175+x,175-x,200+x,175-x,200+x,200-x)
    triangle(175+x,175-x,200+x,175-x,200+x,200-x)
}
}

