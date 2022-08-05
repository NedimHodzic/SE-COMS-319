let x = 0;
let y = 200;
let hitSelf = 0;
let direction = 0;
let timer;

function startstop() {
    if(document.getElementById("startstop").value === "Start" && hitSelf === 0) {
        document.getElementById("startstop").value = "Stop";
        timer = setInterval(function drawSnake() {
            let snake = document.getElementById("canvasId").getContext("2d");
            snake.fillStyle = "rgb(45, 179, 136)";
            snake.fillRect(x, y, 10, 10);

            if(x > 1100 || x < 0 || y > 750 || y < 0) {
                document.getElementById("startstop").value = "Start";
            }
            else {
                if(direction === 0) {
                    x += 1;
                    if(snake.getImageData(x + 9, y, 1, 1).data[0] == "45") {
                        document.getElementById("startstop").value = "Start";
                        hitSelf = 1;
                    }
                    else {
                        snake.fillRect(x, y, 10, 10);
                    }
                }
                if(direction === 1 || direction === -3) {
                    y += 1;
                    if(snake.getImageData(x, y + 9, 1, 1).data[0] == "45") {
                        document.getElementById("startstop").value = "Start";
                        hitSelf = 1;
                    }
                    else {
                        snake.fillRect(x, y, 10, 10);
                    }
                }
                if(direction === 2 || direction === -2) {
                    x -= 1;
                    if(snake.getImageData(x, y, 1, 1).data[0] == "45") {
                        document.getElementById("startstop").value = "Start";
                        hitSelf = 1;
                    }
                    else {
                        snake.fillRect(x, y, 10, 10);
                    }
                }
                if(direction === 3 || direction === -1) {
                    y -= 1;
                    if(snake.getImageData(x, y, 1, 1).data[0] == "45") {
                        document.getElementById("startstop").value = "Start";
                        hitSelf = 1;
                    }
                    else {
                        snake.fillRect(x, y, 10, 10);
                    }
                }
                if(direction === 4 || direction === -4) {
                    direction = 0;
                    x += 1;
                    if(snake.getImageData(x + 9, y, 1, 1).data[0] == "45") {
                        document.getElementById("startstop").value = "Start";
                        hitSelf = 1;
                    }
                    else {
                        snake.fillRect(x, y, 10, 10);
                    }
                }

                if(hitSelf === 1) {
                    clearInterval(timer);
                }
            }
        }, 25);
    }
    else {
        document.getElementById("startstop").value = "Start";
        clearInterval(timer);
    }
}

function leftTurn() {
    direction--;
}

function rightTurn() {
    direction++;
}