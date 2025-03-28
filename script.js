const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ship = { x: canvas.width / 2, y: canvas.height / 2, angle: 0, thrust: 0 };
let asteroids = [];
let bullets = [];
let cheeseSlices = []; // Array to store cheese slices
let cheeseBullets = []; // Array to store bullets fired by cheese slices
let shipExploded = false; // Track if the ship has exploded
let score = 0; // Track the player's score
const keys = {};

// Initialize event listeners
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
    if (shipExploded) return; // Stop updating if the ship has exploded

    // Ship movement
    if (keys['ArrowUp']) {
        ship.thrust = Math.min(ship.thrust + 0.1, 5); // Accelerate up to a max speed
    } else {
        ship.thrust = Math.max(ship.thrust - 0.05, 0); // Gradually decelerate
    }
    ship.x += Math.cos(ship.angle) * ship.thrust;
    ship.y += Math.sin(ship.angle) * ship.thrust;

    if (keys['ArrowLeft']) ship.angle -= 0.1;
    if (keys['ArrowRight']) ship.angle += 0.1;

    // Wrap ship around edges
    if (ship.x < 0) ship.x = canvas.width;
    if (ship.x > canvas.width) ship.x = 0;
    if (ship.y < 0) ship.y = canvas.height;
    if (ship.y > canvas.height) ship.y = 0;

    // Update asteroids
    asteroids.forEach(asteroid => {
        asteroid.x += asteroid.dx;
        asteroid.y += asteroid.dy;

        // Wrap asteroids around edges
        if (asteroid.x < 0) asteroid.x = canvas.width;
        if (asteroid.x > canvas.width) asteroid.x = 0;
        if (asteroid.y < 0) asteroid.y = canvas.height;
        if (asteroid.y > canvas.height) asteroid.y = 0;
    });

    // Update bullets
    bullets.forEach((bullet, index) => {
        bullet.x += Math.cos(bullet.angle) * 10;
        bullet.y += Math.sin(bullet.angle) * 10;

        // Remove bullets that go off-screen
        if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
            bullets.splice(index, 1);
        }
    });

    // Check for collisions between bullets and asteroids
    bullets.forEach((bullet, bulletIndex) => {
        asteroids.forEach((asteroid, asteroidIndex) => {
            const dx = bullet.x - asteroid.x;
            const dy = bullet.y - asteroid.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < asteroid.size) {
                // Replace asteroid with a cheese slice and remove the bullet
                cheeseSlices.push({ x: asteroid.x, y: asteroid.y, size: asteroid.size, hits: 2 });
                asteroids.splice(asteroidIndex, 1);
                bullets.splice(bulletIndex, 1);
            }
        });
    });

    // Check for collisions between bullets and cheese slices
    bullets.forEach((bullet, bulletIndex) => {
        cheeseSlices.forEach((cheese, cheeseIndex) => {
            const dx = bullet.x - cheese.x;
            const dy = bullet.y - cheese.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < cheese.size / 2) {
                cheese.hits -= 1; // Decrease hit count
                bullets.splice(bulletIndex, 1);
                if (cheese.hits <= 0) {
                    // Turn cheese back into an asteroid
                    asteroids.push({
                        x: cheese.x,
                        y: cheese.y,
                        dx: (Math.random() - 0.5) * 2,
                        dy: (Math.random() - 0.5) * 2,
                        size: cheese.size
                    });
                    cheeseSlices.splice(cheeseIndex, 1);
                }
            }
        });
    });

    // Update cheese bullets
    cheeseBullets.forEach((bullet, index) => {
        bullet.x += Math.cos(bullet.angle) * 5; // Move cheese bullets slower than ship bullets
        bullet.y += Math.sin(bullet.angle) * 5;

        // Remove cheese bullets that go off-screen and increase score
        if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
            cheeseBullets.splice(index, 1);
            score++; // Increment score for missed cheese bullets
        }
    });

    // Check for collisions between cheese bullets and the ship
    cheeseBullets.forEach((bullet, bulletIndex) => {
        const dx = bullet.x - ship.x;
        const dy = bullet.y - ship.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 10) { // Ship hit
            shipExploded = true;
            cheeseBullets.splice(bulletIndex, 1);
        }
    });

    // Cheese slices fire back at the ship
    cheeseSlices.forEach(cheese => {
        if (Math.random() < 0.01) { // Random chance to fire
            cheeseBullets.push({
                x: cheese.x,
                y: cheese.y,
                angle: Math.atan2(ship.y - cheese.y, ship.x - cheese.x)
            });
            score++; // Increment score for each cheese bullet fired
        }
    });
}

// Draw game objects
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (shipExploded) {
        // Draw explosion
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(ship.x, ship.y, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(ship.x, ship.y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Display total score
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText(`Game Over! Total Score: ${score}`, canvas.width / 2 - 150, canvas.height / 2);
        return;
    }

    // Draw score
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);

    // Draw ship
    ctx.save();
    ctx.translate(ship.x, ship.y); // Move to the ship's position
    ctx.rotate(ship.angle); // Rotate to the ship's angle
    ctx.beginPath();
    ctx.moveTo(10, 0); // Front tip of the triangle
    ctx.lineTo(-10, 5); // Bottom-right corner
    ctx.lineTo(-10, -5); // Bottom-left corner
    ctx.closePath(); // Close the triangle
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.restore();

    // Draw asteroids
    asteroids.forEach(asteroid => {
        drawAsteroid(ctx, asteroid);
    });

    // Draw bullets
    bullets.forEach(bullet => {
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, 2, 0, Math.PI * 2); // Small circle
        ctx.fillStyle = 'white';
        ctx.fill();
    });

    // Draw cheese slices
    cheeseSlices.forEach(cheese => {
        drawCheese(ctx, cheese);
    });

    // Draw cheese bullets
    cheeseBullets.forEach(bullet => {
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, 3, 0, Math.PI * 2); // Slightly larger circle
        ctx.fillStyle = 'red';
        ctx.fill();
    });
}

// Function to draw an irregular asteroid shape
function drawAsteroid(ctx, asteroid) {
    ctx.beginPath();
    const points = 8; // Number of points for the irregular shape
    for (let i = 0; i < points; i++) {
        const angle = (Math.PI * 2 / points) * i; // Angle for each point
        const distance = asteroid.size + (Math.random() - 0.5) * asteroid.size * 0.4; // Randomize distance
        const x = asteroid.x + Math.cos(angle) * distance;
        const y = asteroid.y + Math.sin(angle) * distance;
        if (i === 0) ctx.moveTo(x, y); // Start at the first point
        else ctx.lineTo(x, y); // Connect to the next point
    }
    ctx.closePath();
    ctx.strokeStyle = 'white';
    ctx.stroke();
}

// Function to draw a square slice of Swiss cheese
function drawCheese(ctx, cheese) {
    ctx.save();
    ctx.translate(cheese.x, cheese.y); // Move to the cheese's position
    ctx.fillStyle = 'yellow';
    ctx.fillRect(-cheese.size / 2, -cheese.size / 2, cheese.size, cheese.size); // Draw the square

    // Add holes to the cheese
    for (let i = 0; i < 5; i++) {
        const holeX = (Math.random() - 0.5) * cheese.size; // Random x position
        const holeY = (Math.random() - 0.5) * cheese.size; // Random y position
        const holeRadius = Math.random() * (cheese.size / 6); // Random radius
        ctx.beginPath();
        ctx.arc(holeX, holeY, holeRadius, 0, Math.PI * 2); // Draw the hole
        ctx.fillStyle = 'black';
        ctx.fill();
    }
    ctx.restore();
}

// Function to break an asteroid into smaller pieces
function breakAsteroid(asteroid) {
    if (asteroid.size > 10) { // Only break if the asteroid is large enough
        const pieces = Math.floor(Math.random() * 3) + 2; // Break into 2-4 pieces
        for (let i = 0; i < pieces; i++) {
            asteroids.push({
                x: asteroid.x,
                y: asteroid.y,
                dx: (Math.random() - 0.5) * 2,
                dy: (Math.random() - 0.5) * 2,
                size: asteroid.size / 2
            });
        }
    }
}

// Spawn asteroids
function spawnAsteroids(count) {
    for (let i = 0; i < count; i++) {
        asteroids.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
            size: 20 + Math.random() * 30
        });
    }
}

// Shoot bullets
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') { // Space bar to fire bullets
        bullets.push({
            x: ship.x,
            y: ship.y,
            angle: ship.angle
        });
    }
});

// Start the game
spawnAsteroids(5);
gameLoop();
