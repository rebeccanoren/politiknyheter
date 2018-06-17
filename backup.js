const key = "20b64dfca46a4f88943dff0d3fc395b4"
const url = `https://newsapi.org/v2/everything?q=(socialdemokraterna)OR(moderaterna)OR(liberalerna)OR(miljöpartiet)OR(liberalerna)OR(vänsterpartiet)OR(kristdemokraterna)OR(feministiskt iniativ)&sortBy=publishedAt&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    const largeArticlesDiv = document.querySelector(".large-article")
    newsdata.articles.forEach((article) => {
			
        const res = article.publishedAt.split("T");
        
        //Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `
           
            <img src="${article.urlToImage}"/>
            <div class='news-article'><h2>${article.title}</h2>
            <p> ${article.description}</p>
            <div class='published-date'> ${res[0]} </div>
            <button class='read-article-button'><a href="${article.url}">Läs mer</a></button>
            ` 
            
      articlesDiv.appendChild(div)	
    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

/*
  //  const filterFunction =() => {}

  const buttonSoc = document.getElementById("#soc")
  buttonSoc.addEventListener("click", () => {
	var socialdemokraterna = buttonSoc.textContent
	
	articles.filter(article => {
		return article.description.includes(socialdemokraterna) || article.titel.includes(socialdemokraterna)
	}).forEach(articel => {
		document.querySelector("place").append(article)
	})
})

*/