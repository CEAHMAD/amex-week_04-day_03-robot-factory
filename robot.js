// 1
// Create a class called Robot
// Each instance should have one property; name
// Each new robot should create its own name
// the name should be "RobotXX", ex. Robot42
// Math.random()

// 2
// Create a rename() function inside the Robot class
// renames the name of the robot and gives a new name

// 3
// Create a robot counter that increments every time we ask the robot to perform a task (such as; print the name, rename)

class Robot {
  constructor() {
    this.name = this.makeName();
    this.counter = 0;
  }

  rename() {
    this.name = this.makeName();
    this.counter++;
  }

  makeName() {
    return "Robot" + Math.floor(Math.random() * 1000);
  }
}

let robot1 = new Robot();
console.log(robot1.name);
console.log(robot1.counter);
robot1.rename();
console.log(robot1.name);
console.log(robot1.counter);
