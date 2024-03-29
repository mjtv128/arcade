
window.addEventListener('DOMContentLoaded', () => {
    
    // CONSTANTS

        const leaderboardDiv = document.querySelector('#leaderboard-side');
        const leaderboardUl = document.querySelector('#name-score');
        const submitForm = document.querySelector('#submit-form');
        let scoreInput = document.getElementById('score');
        const usernameInput = document.getElementById('username');
        let submitFormDiv = document.querySelector("#submit-form-div");
        const gameDiv = document.getElementById('game-div');
        const charger = document.getElementById('charger');


    // API CONSTANTS

        const baseURL = "http://localhost:3000/games"
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json"
        }


    // API FUNCTIONALITY

        function get(){
            return fetch(baseURL).then(resp => resp.json())
        }

        function postNewScore(e){
            debugger;
            return fetch(baseURL, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    player: e.target.elements[0].value,
                    score: e.target.elements[1].value
                })
            })
        }


    // FUNCTIONALITY

        function renderLeaderboard(){
            leaderboardUl.innerHTML = ""
            get().then(games => {
                games.forEach(game => {
                    renderGame(game)
                })
            })
        }

        function renderGame(game){
            p = document.createElement('li')
            p.innerText = `${game.player} scored ${game.score}`
            leaderboardUl.append(p)
        }

        submitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            postNewScore(e)
            .then( () => displayNewScore())
            })

        function displayNewScore(e){
            renderLeaderboard()
            rerenderGame()
        }

        function rerenderGame(){
            submitFormDiv.className = 'submit-form'
            charger.className = 'charger'
            setTimeout(hideCharger, 2000)
            gameDiv.innerText = ""
            cleanUp()
            new Phaser.Game(config)
        }   

        function hideCharger(){
            charger.className = 'charger-hidden'
        }

        function cleanUp(){
            score = 0
            scoreInput.value = ''
            usernameInput.value = ''
        }

        renderLeaderboard()
})

