function setup() {
  createCanvas(400, 400); // Tamaño Papel
  background(229,214,198); // Color Papel

  noStroke(); //Sin Contorno
  fill(108,119,105,240); //Relleno
  ellipse(275,256,124,124); //Circulo
  
  noStroke(); //Sin Contorno
  fill(212,176,69,190); //Relleno
  triangle(187,207,266,117,296,235);//Triangulo
  
  strokeWeight(5); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  fill(129,24,23); //Relleno
  rect(334,280,43,43);//Cuadrado
  
  strokeWeight(5); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(353,308,387,308);//Linea Cuadrado Rojo
  
  strokeWeight(5); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(353,300,387,300);//Linea Cuadrado Rojo 2
  
  strokeWeight(1); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  fill(166,117,41); //Relleno
  triangle(283,0,290,0,335,59);//Triangulo Amarillo 1
  
  strokeWeight(1); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  fill(166,117,41); //Relleno
  triangle(244,0,253,0,307,76);//Triangulo Amarillo 2
  
  strokeWeight(1); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  fill(166,117,41); //Relleno
  triangle(222,0,230,0,318,125);//Triangulo Amarillo 3
  
  strokeWeight(10); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(240,-20,380,30);//Linea Negra SuperiorDerecha
  
  strokeWeight(2); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(200,0,401,294);//Linea Larga Negra
  
  noStroke(); //Sin Contorno
  fill(107,78,142); //Relleno
  ellipse(128,194,74,74); //Circulo Morado
  
  strokeWeight(2); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(112,294,255,290);//Linea Larga 1
  
  strokeWeight(2.5); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(39,194,242,195);//Linea Larga 2

  strokeWeight(1); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  fill(255,255,255); //Relleno
  arc(100,115,107,105, PI, TWO_PI);//Semicirculo 1
  
  strokeWeight(4); //Tamaño Pincel
	stroke(255,0,0); //Color Pincel
  fill(255,255,255); //Relleno
  arc(-8,115,107,105, PI, TWO_PI);//Semicirculo 2

  strokeWeight(3); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(0,114,265,118);//Linea Larga 5
  
  strokeWeight(1); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  noFill(); //No Relleno
  arc(42,310,128,126, PI, TWO_PI);//Semicirculo 3
  
  strokeWeight(1); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  noFill(); //No Relleno
  arc(-7,247,109,135, PI, TWO_PI);//Semicirculo 4
  
  strokeWeight(6); //Tamaño Pincel
	stroke(181,178,155,100); //Color Pincel
  noFill(); //No Relleno
  arc(41,311,128,126, PI, TWO_PI);//Sombra Semicirculo 3
  
  strokeWeight(5); //Tamaño Pincel
	stroke(255,206,194,110); //Color Pincel
  noFill(); //No Relleno
  arc(-10,245,109,135, PI, TWO_PI);//Sombra Semicirculo 4
  
  strokeWeight(2); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(-1,162, 40,124);//Linea Negra Pequeña 1
  
  strokeWeight(2); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(-1,170, 44,128);//Linea Negra Pequeña 2
  
  strokeWeight(2); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(-1,178, 49,132);//Linea Negra Pequeña 3
  
  strokeWeight(0.4); //Tamaño Pincel
  stroke(0,0,0);//Color Pincel
  fill(184,192,102)//Relleno
	beginShape();//Empezar Figura Verde
	vertex(98,-3);//Vertice
	vertex(91,3);//Vertice
	vertex(141,65);//Vertice
  vertex(151,52);//Vertice
	endShape(CLOSE);
  

  strokeWeight(3); //Tamaño Pincel
  stroke(0,0,0); //Color Pincel
  fill(0,0,0,180)//Relleno Negra
	beginShape();//Empezar Figura
	vertex(-12,67);//Vertice
	vertex(4,56);//Vertice
	vertex(17,57);//Vertice
  vertex(-12,82);//Vertice
	endShape(CLOSE);
  
  strokeWeight(3); //Tamaño Pincel
  stroke(0,0,0); //Color Pincel 
  fill(0,0,0)//Relleno Negra
	beginShape();//Empezar Figura
	vertex(4,56);//Vertice
	vertex(41,28);//Vertice
	vertex(49,35);//Vertice
  vertex(17,57);//Vertice
	endShape(CLOSE);
  
  strokeWeight(3); //Tamaño Pincel
  stroke(0,0,0); //Color Pincel
  fill(255,0,0)//Relleno Roja
	beginShape();//Empezar Figura
	vertex(41,28);//Vertice
	vertex(49,35);//Vertice
	vertex(95,-3);//Vertice
  vertex(80,-3);//Vertice
	endShape(CLOSE);
  
  strokeWeight(5); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(40,8,270,249);//Linea Larga 3
  
  strokeWeight(3); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(71,0,172,338);//Linea Larga 4
  
  strokeWeight(2); //Tamaño Pincel
	stroke(0,0,0); //Color Pincel
  line(-4,84,27,50);//Linea Larga 4

  
  





}