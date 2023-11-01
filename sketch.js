//https://api.exchangerate-api.com/v4/latest/USD

let speedx1;
let speedy1;
let speedx2;
let speedy2;
let speedx3;
let speedy3;
let speedx4;
let speedy4;
let speedx5;
let speedy5;

let usdimg;
let eurimg;
let jpyimg;
let gbpimg;
let cadimg;
let earth;

let mov1;
let mov2;
let mov3;
let mov4;
let mov5;
let mov6;
let mov7;
let mov8;
let mov9;
let mov10;

let moni;
let url;
let speedx;
let speedy;

function gotData(data){
  print(data);
  moni=data;
}

//function preload(){
// usdimg=loadImage('EARTH.png');
//}
function setup() {
  createCanvas(windowWidth,windowHeight);
  let url='https://api.exchangerate-api.com/v4/latest/USD'
  loadJSON(url,gotData);
   mov1=windowWidth/4 + random(-100,100);
   mov2=windowHeight/4+ random(-100,700);
   mov3= random(0,1200);
   mov4= random(100,300);
   mov5= random(100,1300);
   mov6= random(700,900);
   mov7=windowWidth- random(100,400);
   mov8= windowHeight-random(100,900);
   mov9=windowWidth-random(100,400);
   mov10=windowHeight- random(100,900);

   speedx1=5;
   speedy1=5;
   speedx2=5;
   speedy2=5;
   speedx3=5;
   speedy3=5;
   speedx4=5;
   speedy4=5;
   speedx5=5;
   speedy5=5;
   
   print(windowWidth)
   print(windowHeight)
   print(mov9)
}



function draw() {
  background(55);
 
  extracircles();
  maincircle();



}


function maincircle(){

  fill(255,80,0);
  ellipseMode(CENTER);
  ellipse(windowWidth/2,windowHeight/2,moni.rates.USD*300);
  fill(55);

  
}

function extracircles(){






  

//print(moni.rates.EUR*2)
//print(moni.rates.JPY*2)
fill(255);
  circle(mov1,mov2,moni.rates.JPY);
  circle(mov3,mov4,moni.rates.EUR*100);
  circle(mov5,mov6,moni.rates.GBP*100);
  ellipse(mov7,mov8,moni.rates.USD*100);
  ellipse(mov9,mov10,moni.rates.CAD*100);
  

  mov1=mov1+speedx1*-1;
  mov2=mov2+speedy1;
  mov3=mov3+speedx2;
  mov4=mov4+speedy2;
  mov5=mov5+speedx3;
  mov6=mov6+speedy3;
  mov7=mov7+speedx4;
  mov8=mov8+speedy4;
  mov9=mov9+speedx5;
  mov10=mov10+speedy5;

  print(moni.rates.CAD*100)
  if(mov1>0){
  speedx1=speedx1*-1
 }
  if (mov1<windowWidth){
    speedx1=speedx1*-1
  }
  if(mov2>0){
    speedy1=speedy1*-1
  }
    if (mov2<windowHeight){
      speedy1=speedy1*-1
    }

    let d = dist(mov1,mov2,windowWidth/2,windowHeight/2);
    if(d<1*210){
       speedx1=speedx1*-1;
       speedy1=speedy1*-1;
    }

    if(mov3>0){
      speedx2=speedx2*-1
     }
      if (mov3<windowWidth){
        speedx2=speedx2*-1
      }
      if(mov4>0){
        speedy2=speedy2*-1
      }
        if (mov4<windowHeight){
          speedy2=speedy2*-1
        }
    
        let d1 = dist(mov3,mov4,windowWidth/2,windowHeight/2);
        if(d1<1*210){
           speedx2=speedx2*-1;
           speedy2=speedy2*-1;
        }

      
    if(mov5>0){
      speedx3=speedx3*-1
     }
      if (mov5<windowWidth){
        speedx3=speedx3*-1
      }
      if(mov6>0){
        speedy3=speedy3*-1
      }
        if (mov6<windowHeight){
          speedy3=speedy3*-1
        }
    
        let d2 = dist(mov5,mov6,windowWidth/2,windowHeight/2);
        if(d2<1*210){
           speedx3=speedx3*-1;
           speedy3=speedy3*-1;
        }
        if(mov7>0){
          speedx4=speedx4*-1
         }
          if (mov7<windowWidth){
            speedx4=speedx4*-1
          }
          if(mov8>0){
            speedy4=speedy4*-1
          }
            if (mov8<windowHeight){
              speedy4=speedy4*-1
            }
        
            let d3 = dist(mov7,mov8,windowWidth/2,windowHeight/2);
            if(d3<1*210){
               speedx5=speedx5*-1;
               speedy5=speedy5*-1;
            }
            if(mov9>0){
              speedx5=speedx5*-1
             }
              if (mov9<windowWidth){
                speedx5=speedx5*-1
              }
              if(mov10>0){
                speedy5=speedy5*-1
              }
                if (mov10<windowHeight){
                  speedy5=speedy5*-1
                }
            
                let d4 = dist(mov9,mov10,windowWidth/2,windowHeight/2);
                if(d4<1*210){
                   speedx5=speedx5*-1;
                   speedy5=speedy5*-1;
                }     
}