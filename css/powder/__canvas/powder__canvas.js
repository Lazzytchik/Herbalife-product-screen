let clicked = false;
let canvas;
let config;
let colorPalette;
//let particles;
let drawBg;
let Particle;
let colorVariation;
let updateParticleModel;
let drawParticle;
let cleanUpArray;
let initParticles;
let frame;

$(document).ready(function (){
    // Little Canvas things
    canvas = document.getElementsByClassName('powder__canvas')[0],
        ctx = canvas.getContext('2d');

// Set Canvas to be window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

// Configuration, Play with these
    config = {
        particleNumber: 2000,
        maxParticleSize: 40,
        maxSpeed: 8,
        colorVariation: 50
    };

// Colors
    colorPalette = {
        bg: {r:12,g:9,b:29},
        matter: [
            {r:150,g:185,b:78}, // darkPRPL
            {r:50,g:90,b:35}, // rockDust
            {r:200,g:230,b:200}, // solorFlare
            {r:235,g:235,b:235} // totesASun
        ]
    };

// Some Variables hanging out
    let particles = [],
        centerX = canvas.width / 2,
        centerY = canvas.height / 2
        //drawBg

// Draws the background for the canvas, because space
    drawBg = function (ctx, color) {
        //ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        //ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

// Particle Constructor
    Particle = function (x, y) {
        // X Coordinate
        this.x = x || Math.round(Math.random() * canvas.width);
        // Y Coordinate
        this.y = y || Math.round(Math.random() * canvas.height);
        // Radius of the space dust
        this.r = config.maxParticleSize;
        // Color of the rock, given some randomness
        this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],true );
        // Speed of which the rock travels
        this.s = config.maxSpeed//Math.pow(Math.ceil(Math.random() * config.maxSpeed), 1);
        // Direction the Rock flies
        this.d = Math.round(Math.random() * 360);
    };

// Provides some nice color variation
// Accepts an rgba object
// returns a modified rgba object or a rgba string if true is passed in for argument 2
    colorVariation = function (color, returnString) {
        let r,g,b,a, variation;
        r = Math.round(color.r);
        g = Math.round(color.g);
        b = Math.round(color.b);
        a = Math.random() + .5;
        if (returnString) {
            return "rgba(" + r + "," + g + "," + b + "," + a + ")";
        } else {
            return {r,g,b,a};
        }
    };

// Used to find the rocks next point in space, accounting for speed and direction
    updateParticleModel = function (p) {
        let a = 180 - (p.d + 90); // find the 3rd angle
        p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
        p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
        return p;
    };

// Just the function that physically draws the particles
// Physically? sure why not, physically.
    drawParticle = function (x, y, r, c) {
        ctx.beginPath();
        ctx.fillStyle = c;
        ctx.arc(x, y, r, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();
    };

// Remove particles that aren't on the canvas
    cleanUpArray = function () {
        particles = particles.filter((p) => {
            return (p.x > -100 && p.y > -100);
        });
    };


    initParticles = function (numParticles, x, y) {
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(x, y));
        }
        particles.forEach((p) => {
            drawParticle(p.x, p.y, p.r, p.c);
        });
    };

// That thing
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();


// Our Frame function
    frame = function () {
        // Draw background first
        drawBg(ctx, colorPalette.bg);
        // Update Particle models to new position
        particles.map((p) => {
            return updateParticleModel(p);
        });
        // Draw em'
        particles.forEach((p) => {
            drawParticle(p.x, p.y, p.r, p.c);
        });
        // Play the same song? Ok!
        window.requestAnimFrame(frame);
    };

// First Frame
    //frame();

// First particle explosion
    //initParticles(config.particleNumber);
    let canImage = document.getElementsByClassName('product-main__product-image')[0];

    $(canImage).one('click', () => bindAction());
    $(canImage).click(function (){
        bindAction();
    })

    async function bindAction(){
        if (!clicked){
            clicked = true;
            animate(canImage);

            await sleep(4000);
            $(".powder__canvas").toggleClass('powder__canvas--hidden');
            console.log('jey');
            frame();
            initParticles(config.particleNumber);

            //onCall();
            await sleep(4000);
            console.log('awaiyed');
            //playFullscreen();

            $(".powder__canvas").toggleClass('powder__canvas--hidden');
            cleanUpArray();
            enableScroll();

            clicked = false;
        }

    }
})
