window.addEventListener('DOMContentLoaded', () => {


    // CONSTANTS

        const leaderboardDiv = document.querySelector('#leaderboard-side')


    // API CONSTANTS

        const getURL = "http://localhost:3000/games"

    // API FUNCTIONALITY

        function get(){
            return fetch(getURL).then(resp => resp.json())
        }

    // FUNCTIONALITY

        function renderLeaderboard(){
            get().then(games => {
                games.forEach(game => {
                    renderGame(game)
                })
            })
        }

        function renderGame(game){
            p = document.createElement('p')
            p.innerText = `${game.player} scored ${game.score}`
            leaderboardDiv.append(p)
        }


        renderLeaderboard()

})