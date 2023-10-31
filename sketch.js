let information = [];
let moni

let mov1;
let mov2;
let speedx;
let speedy;
let mcirc;
let mcirc2;

function gotData(data){
  moni=data;
}

function setup() {
  createCanvas(1700,1000);
  let url='https://api.exchangerate-api.com/v4/latest/USD'
  loadJSON(url,gotData);
  mov1=200;
  mov2=200;
  speedx=5;
  speedy=5;
  mcirc = 850;
  mirc2 = 500;
  for(let i = 0;i<=4;i++){
    let p = new info(1700,1000,random(-300,300));
    information.push(p);
  }
}

function draw() {

  background(55);
  fill(255,80,0);
  ellipseMode(CENTER);
  ellipse(850,500,moni.rates.USD*300);
  fill(55);
  extracicrcles();
  for(let k=0;k<information.length;k++){
    information[k].move();
  }
fill(255);
circle(mov1,mov2,40)

 mov1=mov1 + speedx;
 mov2 = mov2 + speedy;

 if(mov1>0){
  speedx=speedx*-1
 }
  if (mov1<windowWidth){
    speedx=speedx*-1
  }
  if(mov2>0){
    speedy=speedy*-1
  }
    if (mov2<windowHeight){
      speedy=speedy*-1
    }

    let d = dist(mov1,mov2,windowWidth/2,windowHeight/2);
    if(d<1*210){
       speedx=speedx*-1;
       speedy=speedy*-1;
    }
}

function extracicrcles(){
  fill(255);
  circle(information[0].numx()/2,information[0].numy()/2,moni.rates.EUR*100);
  //circle(information[1].numx(),information[1].numy(),moni.rates.JPY);
  //circle(information[2].numx(),information[2].numy(),moni.rates.GBP*100);
  //circle(information[3].numx(),information[3].numy(),moni.rates.USD*100);
  //circle(information[4].numx(),information[4].numy(),moni.rates.CAD*100)

}

class info{
  constructor(tempx,tempy,tempran){
    this.x = tempx;
    this.y = tempy;
    this.speedx = 5;
    this.speedy = 5;
    this.ran=tempran;

  }


  move(){
    this.x = this.speedx+this.x;
    //print(this.y)
    this.y=this.speedy+this.y;

if(this.x<0){
    this.speedx=this.speedx*-1;
  }
if(this.x>3550){
    this.speedx=this.speedx*-1;
  }
  if(this.y<0){
   this.speedy=this.speedy*-1
 }
  if(this.y>2100){
   this.speedy=this.speedy*-1
 }

 let d = dist(this.x,this.y,850,500);
    if(d<moni.rates.EUR*100){
      print("intersecting")
       //speedx=speedx*-1;
       //speedy=speedy*-1;
    }
    //print(d);
  }

  numx(){
    return(this.x+this.ran);
  }
  numy(){
    return(this.y+this.ran);
  }
  speedx(){
    return(this.speedx);
  }
  speedy(){
    return(this.speedy);
  }

 
}