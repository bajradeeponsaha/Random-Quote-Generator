const quoteText = document.querySelector(".quote"),
author = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound")
copyBtn = document.querySelector(".copy")
twitterBtn = document.querySelector(".twitter")

//random quote function
function randomQuote(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    //fetching random quotes/data from the API and parsing it into JavaScript object
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        quoteText.textContent = result.content
        author.textContent = result.author
        quoteText.classList.add("loading")
        quoteBtn.innerText = "New Quote"
        quoteBtn.classList.remove("loading")

    })
}

soundBtn.addEventListener("click", () => {
    //SpeechSynthesisUtterance is a web api that represents a speech request
    let speak = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.textContent}`)
    speechSynthesis.speak(speak)
})

copyBtn.addEventListener("click", () => {
    //Copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.textContent)
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank")
})

quoteBtn.addEventListener("click", randomQuote)