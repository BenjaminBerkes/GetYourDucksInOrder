//MousePressed() is when the button is pushed down
//MouseReleased() is when the button is released
//MouseClicked() is when the button is pushed down and then released
//MouseMoved() is when the mouse is moved
//MouseDragged() is when the mouse is moved while a button is pressed
//MouseButton is an object that can return a boolean depending on what value is accessed
//mouseX and mouseY are variables that return the x and y position of the mouse

const WindowsTaskbarSize = 20;
ArrayOfDucks = [];
async function setup() {
    img = await loadImage("Duck.png");
    desk = await loadImage("Desk.png");
    createCanvas(windowWidth - WindowsTaskbarSize, windowHeight - WindowsTaskbarSize);
    background("red");
    frameRate(60);
    image(desk, 0, 0, windowWidth, windowHeight);
    let NewDuck = new Duck()
    ArrayOfDucks.push(NewDuck);
    //first duck is created at a random position
}

function draw() {
    background("red");
    image(desk, 0, 0, windowWidth, windowHeight);
    drawText();

    //CheckDucks()
    for (let i = 0; i < ArrayOfDucks.length; i++) {
        LocalMouseX = int(mouseX) - int(ArrayOfDucks[i].x)
        LocalMouseY = int(mouseY) - int(ArrayOfDucks[i].y)
        if ((LocalMouseX < 64) && (LocalMouseY < 64) && (LocalMouseX > 0) && (LocalMouseY > 0)) {
            ArrayOfDucks[i].CurrentlySelected = true;
        }
        else {
            ArrayOfDucks[i].CurrentlySelected = false;
        }
    }

    //UpdateDucks()
    for (let i = 0; i < ArrayOfDucks.length; i++) {
        if (mouseButton.left && (ArrayOfDucks[i].CurrentlySelected)) {
            ArrayOfDucks[i].move();
        }
    }

    //DrawDucks()
    for (let i = 0; i < ArrayOfDucks.length; i++) {
        image(img, ArrayOfDucks[i].x, ArrayOfDucks[i].y, ArrayOfDucks[i].size, ArrayOfDucks[i].size)
    }

    LastMouseX = mouseX;
    LastMouseY = mouseY;
}

class Duck {
    constructor() {
        this.CurrentlySelected = false;
        this.x = random(width - 64) + 32;
        this.y = random(height - 64) + 32;
        this.size = 64;
        this.sprite = img;
    }

    move() {
        this.x = mouseX;
        this.y = mouseY;
    }
}

function mousePressed() {
    if (mouseButton.right) {
        newDuck = new Duck();
        ArrayOfDucks.push(newDuck);
    }
}


//
/*
detect if mouse is above duck
detect if mouse is left clicking and holding
detect if mouse is moving, if so, move the duck with the mouse
*/

/*
somehow connect the duck to the mouse position when clicked

*/


function drawText() {
    fill("white");
    text("FrameCount: " + frameCount +
        "\nAll ducks: " + ArrayOfDucks.length +
        "\nFrameRate: " + int(frameRate()) +
        "\nMouse X: " + int(mouseX) +
        "\nMouse Y: " + int(mouseY) +
        "\n Duck #1 x + y:" + int(ArrayOfDucks[0].x) + " and " + int(ArrayOfDucks[0].y)

        , 100, 100);
}