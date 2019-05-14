// Set up function run once at beginning of set up
// creating a canvas
function setup () {
  createCanvas (500, 500); 
  vroom = new p5.Oscillator('square');
  vroom.start();
}


//let is used when declare variable; a box for value
let carX = 50;
let vroom;





// go to reference page for P5 that you can tap into 
// draw happen over and over and over in a loop
// the () is to pass in the value, the last value is transparency

function draw () {
  background (150, 50, 255, 80); 

  vroom.freq (carX)
  carX += 3;

  if (frameCount > 120) { 
    if (carX >= 500) {
        carX = -50;
      } else if (carX >= 300) {
        carX += 6;
      } else {
        carX += 3;
      }


  // outline or stroke like Illustrator 
  // fill is a function like background for color
  noStroke(); 
  fill(255, 50, 50); 
  
  // triangle(50, 50, 110, 80, 50, 80);
  // 0,0 point is at top left coordinate
  // rect (50, 50, 60, 30); 
  triangle(carX, 50, carX + 60, 80, carX, 80);
  

  // code read top to bottom
  // wheels
  fill(0); 
  ellipse (carX, 80, 20, 20); 
  ellipse(carX + 45, 80, 20);
  
  
}


function mouseReleased() {
  vroom.stop();
}







}
