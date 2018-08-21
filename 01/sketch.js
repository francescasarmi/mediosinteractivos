function setup() {
  createCanvas(550, 550);
}

function draw() {
  background(255, 239, 213);
  fill(99,135, 70, 200);
  ellipse(400, 425, 104, 104); // Círculo Verde
  noFill();
  
  push();
  strokeWeight(2);
  line(630, 600, 280,80);// línea larga
  pop();
  
  push();
  stroke(201, 176, 52,100);
  fill(252,215, 19, 100);
  triangle(316, 377, 418, 410, 395, 290);
  pop();
  pop();
  
  push();
  fill(152, 0, 0);
  rect(446, 450, 37, 34);
  line(467, 465, 495, 465);
  strokeWeight(2);
  line(468, 470, 495, 470);
  fill(255, 255, 102, 150);
  pop();
  
  push();
  stroke(81, 57, 97);
  fill(120, 80, 147, 200);
	ellipse (270, 364, 55, 55) // Circulo Morado 
  noFill();
  pop();
  
 
  push();
  fill(255, 255, 255)
  arc(243,288, 83, 85, PI, TWO_PI);//Arco 1
  arc (159,288, 83, 85, PI, TWO_PI); // Arco Rojo
  strokeWeight(3);
  stroke(250, 20, 0, 170)
  arc (159,288, 80, 83, PI, TWO_PI); // Arco Rojo
  pop();  
  
  push();
  fill(255, 255, 255)
  arc(73,288, 83, 85, PI, TWO_PI);
  strokeWeight(3);
  stroke(250, 232, 63, 150);//Arco Amarillo
  arc(73,288, 80, 82, PI, TWO_PI);
  pop();
  
  push();
  fill(255, 255, 255)
  strokeWeight(1)
	arc(-11,288, 83, 85, PI, TWO_PI);//Arco negro 
  strokeWeight(2);
  stroke(128, 128, 117, 200);
  arc(-11,288, 80, 82, PI, TWO_PI);//Arco gris
  pop();
  
  push();
  strokeWeight(3);
  line(0, 288, 395, 288); //línea horizontal de los arcos
  strokeWeight(2);
  line(125, 600, 114, 263);//Línea vertical de los arcos
  pop();
  
  
  
  arc(125,339, 90, 98, PI, TWO_PI+0.17);
  arc(34,339, 90, 98, PI, TWO_PI);
  arc(165,395, 90, 98, PI, TWO_PI+0.26);
  
  push();
  strokeWeight(1)
  arc(210,455, 90, 95, PI, TWO_PI);
  strokeWeight(3);
  stroke(250, 232, 63, 150);//Arco Amarillo
  arc(210,455, 86, 91, PI, TWO_PI);
  pop();
  
  push();
  strokeWeight(2);
	line(259, 448, 380, 448);
  line(208, 365, 360, 365);
  line(320, 480, 120, 5);
  line(120, 5, -72, 480);
  pop();
	

  
  

  


  
  
  
  

 
  
}