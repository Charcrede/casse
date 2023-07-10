'use strict'
import { bricker } from "./bricker.js";
import { game } from "./main.js";
import { ball } from "./main.js";
import { paddle } from "./main.js";
import { ctx } from "./main.js";
import { score } from "./bricker.js";
import { live } from "./move.js";
import { nbrBrick } from "./bricker.js";
import { init } from "./init.js";
import { moveWithKey } from "./moveWithKey.js";
import { move } from "./move.js";
let image = document.getElementById('img')
let timeoutId;
function display() {
    ctx.clearRect(0, 0, game.width, game.height);
    ctx.fillStyle = game.color;
    ctx.drawImage(image,0, 0, game.width, game.height);
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = paddle.color;
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = "black";
    ctx.font = " bold 25px Verdana";
    ctx.fillText(`score = ${score}`, 20, 400)
    ctx.fillStyle = "black";
    ctx.font = " bold 25px Verdana";
    ctx.fillText(`live = ${live}`, 650, 400)
    if (live === 0) {
        ctx.fillStyle = "red";
        ctx.font = " bold 100px Verdana";
        ctx.fillText("Game Over", (game.width - ctx.measureText("Game Over").width) / 2, 295)
    }
    if (nbrBrick === 0) {
            ctx.fillStyle = "purple";
            ctx.font = " bold 100px Verdana";
            ctx.fillText("Level End", (game.width - ctx.measureText("Level End").width) / 2, 295);
            init();
            // cancelAnimationFrame(rafId);
    }
    bricker();
}
export {display}
function tuto() {
    display();
	ctx.fillStyle = "white";
	ctx.font = " bold 30px Verdana";
	ctx.fillText("veuillez retourner votre écran", (game.width - ctx.measureText("veuillez retourner votre écran").width) / 2, 295);
	timeoutId = setTimeout(() => {
		display();
		ctx.fillStyle = "white";
		ctx.font = " bold 30px Verdana";
		ctx.fillText("appuyez le côté droite de l'écran", (game.width - ctx.measureText("appuyez le côté droite de l'écran").width) / 2, 295);
		ctx.fillText("pour bouger a droite", (game.width - ctx.measureText("pour bouger a droite").width) / 2, 345);
	}, 3000);
	timeoutId = setTimeout(() => {
		display();
		ctx.fillStyle = "white";
		ctx.font = " bold 30px Verdana";
		ctx.fillText("appuyez au milieu pour mettre", (game.width - ctx.measureText("appuyez au milieu pour mettre").width) / 2, 295);
		ctx.fillText("sur pause et sur play", (game.width - ctx.measureText("sur pause et sur play").width) / 2, 345);
	}, 6000);
	timeoutId = setTimeout(() => {
		display();
		ctx.fillStyle = "white";
		ctx.font = " bold 30px Verdana";
		ctx.fillText("appuyez le côté gauche de l'écran", (game.width - ctx.measureText("appuyez le côté gauche de l'écran").width) / 2, 295);
		ctx.fillText("pour bouger a gauche", (game.width - ctx.measureText("pour bouger a gauche").width) / 2, 345);
	}, 9000);
    
}
export {tuto}
export{timeoutId}