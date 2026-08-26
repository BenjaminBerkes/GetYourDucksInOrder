let img;
let WindowsTaskbarSize = 20;
async function setup() {
    img = await loadImage("Duck.png");
    createCanvas(windowWidth - WindowsTaskbarSize, windowHeight - WindowsTaskbarSize);
    background("red");
    frameRate(60);
    imageMode(CENTER);
    image(img, random(width - 64) + 32, random(height - 64) + 32, 64, 64)
    //Draws the first duck inside the window by a 32px margin
}

function draw() {
    if (mouseIsPressed) {
        if (mouseButton.left) {
            image(img, mouseX, mouseY, 64, 64)
        }
        if (mouseButton.right) {
            image(img, mouseX, mouseY, 32, 32)
        }
        if (mouseButton.center) {
            image(img, mouseX, mouseY, 16, 16)
        }
    }
}