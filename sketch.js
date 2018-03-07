var rickya, grape, billie;
function setup(){
    createCanvas(600,400);
    background(0);
    
    rickya = createSlider(0,255,125);
   rickya.position(20, 20);
   
   grape = createSlider(0,255,125);
   grape.position(20, 50);
   
   billie = createSlider(0,255,10);
   billie.position(20, 80);
   
}
  

function draw(){
    rv= rickya.value();
    gv= grape.value();
    bv= billie.value();
    
    background(rv,gv,bv);
    
    textSize(30);
    textAlign(CENTER,CENTER);
    message = rv + "," + gv + "," + bv;
    text(message, width/2, height/2);
}