document.addEventListener('DOMContentLoaded', function() {
    const player = document.querySelector('.player');
    const tiger = document.querySelector('.tiger');
    const finishLine = document.querySelector('.finish-line');

    let playerPosition = 5;
    let tigerPosition = 2;

    function runGame() {
        playerPosition += 2;
        tigerPosition += 1.8;

        player.style.left = playerPosition + 'px';
        tiger.style.left = tigerPosition + 'px';

        if (playerPosition >= finishLine.offsetLeft - player.offsetWidth) {
            alert('You Win! The hunter killed the tiger.');
            resetGame();
        } else if (tigerPosition >= playerPosition - tiger.offsetWidth) {
            alert('Game Over! The tiger caught you.');
            resetGame();
        } else {
            requestAnimationFrame(runGame);
        }
    }

    function resetGame() {
        playerPosition = 0;
        tigerPosition = 0;
        player.style.left = playerPosition + 'px';
        tiger.style.left = tigerPosition + 'px';
    }

    runGame();
});