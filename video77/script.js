function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
     if (views < 1000) {
        viewStr = views
    }
    else if (views < 1000000) {
        viewStr = views / 1000 + "K"
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else {
        viewStr = views / 1000 + "K"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to JavaScript | Sigma Web Dev video #23", "CodeWithHarry", 50000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to JavaScript | Sigma Web Dev video #23", "CodeWithHarry", 560000000, 17, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to NOde jsd | Sigma Web Dev video #23", "CodeWithHarry", 54, 12, "51:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")