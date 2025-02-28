const player = document.getElementsByClassName('player');

const arrplayer = Array.from(player);

//adding number in first of the player
(function () {
    const numbers = document.getElementsByClassName('number');

    const numArray = Array.from(numbers);

    numArray.forEach((span, index) => {
        span.innerHTML = `${index + 1}.`

    });
})();


function showAllPlayers() {
    arrplayer.forEach((player) => {
        player.style.display = "block";
    })
}

function nicknameFilter() {
    arrplayer.forEach((player) => {
        const span = player.querySelector('span.nickname');
        if (span.textContent === '') {
            player.style.display = 'none';
        }
    });
}

function midfielderFilter() {
    arrplayer.forEach((player) => {
        const span = player.querySelector('span.position');
        player.style.display = span.textContent !== 'midfielder' ? 'none' : 'block';
    });
}

function forwardFilter() {
    arrplayer.forEach((player) => {
        const span = player.querySelector('span.position');
        player.style.display = span.textContent !== 'forward' ? 'none' : 'block';
    });
}

function defenderFilter() {
    arrplayer.forEach((player) => {
        const span = player.querySelector('span.position');
        player.style.display = span.textContent !== 'defender' ? 'none' : 'block';
    });
}

function goalkeeperFilter() {
    arrplayer.forEach((player) => {
        const span = player.querySelector('span.position');
        player.style.display = span.textContent !== 'goalkeeper' ? 'none' : 'block';
    });
}


// handling the changes and ggving respose accordingly
(function () {
    const select = document.getElementById('filter');
    let filter = select.value;

    select.addEventListener('change', () => {

        let filter = select.value;

        switch (filter) {
            case 'nickname':
                nicknameFilter()
                break;
            case 'forward':
                forwardFilter();

                break;
            case 'midfielder':
                midfielderFilter();

                break;
            case 'defender':
                defenderFilter();

                break;
            case 'goalkeeper':
                goalkeeperFilter();
                break;
            default:
                showAllPlayers();
        }
    })
})();