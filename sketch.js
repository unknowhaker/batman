const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, drop, umbrella;
var drops = [];
var tund1, tund2, tund3, tund4;
function preload() {
  tund1 = loadImage("thunderbolt/1.png");
  tund2 = loadImage("thunderbolt/2.png");
  tund3 = loadImage("thunderbolt/3.png");
  tund4 = loadImage("thunderbolt/4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  engine = Engine.create();
  world = engine.world;
  land = new Land();
  for (var i = 0; i < 100; i++) {
    drops.push(new Drop(random(0, width), random(-200, 300)));
  };
  umbrella = new Umbrella(200, 100);
}

function draw() {
  background("darkblue");
  Engine.update(engine);
  console.log(random(1,4))
  switch (Math.round(random(1, 40))) {
    case 1:
      image(tund1, width/2, -50,300,450)
      break;
    case 2:
      image(tund2, width/2,-50,300,450)
      break;
    case 3:
      image(tund3, width/2, -50,300,450)
      break
      case 4:
        image(tund4, width/2,-50,300,450)
        break;
    default:
      break;
  }
  for (var i = 0; i < 100; i++) {
    drops[i].display();
    drops[i].ubdate();
  };
  umbrella.display();
  land.display();
}

