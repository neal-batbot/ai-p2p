var canvas = document.createElement('canvas');
//var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var particles = [];
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

document.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener('click', function (e) {
    for (var i = 0; i < 20; i++) {
        var particle = new Particle(e.clientX, e.clientY);
        particles.push(particle);
    }
});

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.size = Math.random() * 10 + 1;
    this.alpha = 1;

    this.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.15;

        if (this.x + this.size < 0 || this.x - this.size > canvas.width || this.y + this.size < 0 || this.y - this.size > canvas.height) {
            this.alpha = 0;
        }

        this.alpha -= 0.01;
    };

    this.draw = function () {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].alpha <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);