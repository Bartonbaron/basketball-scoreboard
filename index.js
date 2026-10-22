let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function highlightLeader() {

    homeScoreEl.style.color = "#f94f6d"
    guestScoreEl.style.color = "#f94f6d"

    if (homeScore > guestScore) {
        homeScoreEl.style.color = "green"
    } else if (guestScore > homeScore) {
        guestScoreEl.style.color = "green"
    }
}

function incrementByOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function incrementByTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function incrementByThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function incrementByOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function incrementByTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function incrementByThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    highlightLeader()
}