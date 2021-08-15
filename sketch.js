const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine, world;
var wall1, wall2, bridge, link, ground, group;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(60);

  wall1 = new Base(150, 600, 300, 200);
  bridge = new Bridge(int((width-600)/50), {x: 150, y: 600});
  wall2 = new Base(width-150, 600, 300, 200);
  Composite.add(bridge.body, wall2)
  link = new Link(bridge, wall2, -150);
  ground = new Base(width/2, 1000, width, 20);

  for (var i = 0; i < 8; i++) {
    var stone = new Stone();
    stones.push(stone);
  }



}

function draw() {
  background(51);
  Engine.update(engine);

  wall1.display();
  wall2.display();
  bridge.show();
  //bridge.showConstraints(link);
  ground.display();

  for (var i = 0; i < stones.length; i++) {
    stones[i].display();
  }
}
