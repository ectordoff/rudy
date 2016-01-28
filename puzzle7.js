var red = getColor();

function move() {

while (getColor() != "red") {
  getColor();
  down();
  
}

if (getColor() == "red"){
   right();
   right();
} else {
  left();
  left();
  
}
}
  

function move2() {

while (getColor() != "red") {
  getColor();
  up();
  
}

if (getColor() == "red"){
   right();
   right();
} else {
  left();
  left();
  
}
}

move();
move2();
move();
move2();
move();
