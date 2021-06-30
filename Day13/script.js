

function newQuoteGenerator(){
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById("myData")
        let authorName = document.getElementById("author")
        console.log(data);
        container.innerText = data.content
        authorName.innerHTML = " - "+data.author
    });
}


let newQuoteGeneratorBtn = document.getElementById("newQuoteGeneratorBtn")
newQuoteGeneratorBtn.addEventListener("click", (e) =>{
    newQuoteGenerator()
});
