window.addEventListener('DOMContentLoaded', () => {


    // CONSTANTS

        const leaderboardDiv = document.querySelector('#leaderboard-side')
        const leaderboardUl = document.querySelector('#name-score')
        


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

        function postNewScore(){
            return fetch(baseURL, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    // feed in information from event object
                    player: "testPlayer",
                    score: 300
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


            let button = document.getElementById('button')
            // pass on e (including player name and score)
            button.addEventListener('click', () => {
                postNewScore(),
                displayNewScore()
                })

        function displayNewScore(){
            p = document.createElement('li')
            // connect to input data! Adjust
            p.innerText = 'testPlayer scored 300'
            leaderboardUl.append(p)
        }


        renderLeaderboard()
})