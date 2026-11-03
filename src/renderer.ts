const info = document.getElementById('info')!;
const minimizeButton = document.getElementById('titlebar-button-minimize')!;
const maximizeButton = document.getElementById('titlebar-button-maximize')!;
const closeButton = document.getElementById('titlebar-button-close')!;
const testButton = document.getElementById('test-button')!;
//declare elements inside the html file as variables in the typescript file
info.innerText = `
This app is using Chrome (v${versions.chrome()}),
Node.js (v${versions.node()}),
and Electron (v${versions.electron()}),
preload.ts to renderer.ts is working as well
`

testButton.addEventListener("click", () => { console.log("test button clicked") })
minimizeButton.addEventListener("click", () => { TitleBarFunction.minimize() });
maximizeButton.addEventListener("click", () => {
    TitleBarFunction.maximize()
    //if win.normal/ if window is fullscreen then change the svg to the other svg, else leave it

});
closeButton.addEventListener("click", () => { TitleBarFunction.close() });
//addEventListener's to the element variables that when clicked they will
//execute the arrow function which will log something to the console

console.log(tester.VariableTest);
console.log(tester.FunctionTest());
//check if the preload scripts are working


//TODO: create custom menu bar/frame

// description: This example demonstrates how to use a Container to group and manipulate multiple sprites
import { Application, Assets, Container, Sprite } from 'pixi.js';
(async () => {
    // Create a new application
    const app = new Application();

    // Initialize the application
    await app.init({ background: '#1099bb', resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Create and add a container to the stage
    const container = new Container();

    app.stage.addChild(container);

    // Load the bunny texture
    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

    // Create a 5x5 grid of bunnies in the container
    for (let i = 0; i < 25; i++) {
        const bunny = new Sprite(texture);

        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
    }

    // Move the container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center the bunny sprites in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    app.ticker.add((time) => {
        // Continuously rotate the container!
        // * use delta to create frame-independent transform *
        container.rotation -= 0.01 * time.deltaTime;
    });
})();
