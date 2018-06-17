const key = "20b64dfca46a4f88943dff0d3fc395b4"
const allaUrl = `https://newsapi.org/v2/everything?q=(socialdemokraterna)OR(moderaterna)OR(liberalerna)OR(miljöpartiet)OR(liberalerna)OR(vänsterpartiet)OR(kristdemokraterna)OR(feministiskt iniativ)&sortBy=publishedAt&apiKey=${key}`
const socialdemokraternaUrl = `https://newsapi.org/v2/everything?q=(socialdemokraterna)&sortBy=publishedAt&apiKey=${key}`
const moderaternaUrl = `https://newsapi.org/v2/everything?q=(moderaterna)&sortBy=publishedAt&apiKey=${key}`
const miljopartietUrl = `https://newsapi.org/v2/everything?q=(miljöpartiet)&sortBy=publishedAt&apiKey=${key}`
const vansterpartietUrl = `https://newsapi.org/v2/everything?q=(vänsterpartiet)&sortBy=publishedAt&apiKey=${key}`
const liberalernaUrl = `https://newsapi.org/v2/everything?q=(liberalerna)&sortBy=publishedAt&apiKey=${key}`
const centerpartietUrl = `https://newsapi.org/v2/everything?q=(centerpartiet)&sortBy=publishedAt&apiKey=${key}`
const sverigedemokraternaUrl = `https://newsapi.org/v2/everything?q=(sverigedemokraterna)&sortBy=publishedAt&apiKey=${key}`


const allaLinkDiv = document.querySelector(".alla");
const socialdemokraternaLinkDiv = document.querySelector("#socialdemokraterna");
const moderaternaLinkDiv = document.querySelector(".moderaterna");
const miljopartietLinkDiv = document.querySelector(".miljopartiet");
const vansterpartietLinkDiv = document.querySelector(".vansterpartiet");
const liberalernaLinkDiv = document.querySelector(".liberalerna");
const centerpartietLinkDiv = document.querySelector(".centerpartiet");
const sverigedemokraternaLinkDiv = document.querySelector(".sverigedemokraterna");

const articlesDiv = document.querySelector(".articles")
const countDiv = document.querySelector(".count")

const largeArticlesDiv = document.querySelector(".large-article")
const recievedNews = (newsdata) => {
	articlesDiv.innerHTML = null;
	countDiv.innerHTML = null;
	const antalArtiklar = (newsdata.totalResults);
	const div3 = document.createElement("div")
	div3.className = "antal-artiklar"
	div3.innerHTML = `
	<p> ${newsdata.totalResults} artiklar</p>
	` 
	countDiv.appendChild(div3)	

    newsdata.articles.forEach((article, index) => {
		
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



const fetchAllaNews = () => {
	fetch(allaUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

const fetchSocialdemokraternaNews = () => {
	fetch(socialdemokraternaUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

const fetchModeraternaNews = () => {
	fetch(moderaternaUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

const fetchMiljopartietNews = () => {
	fetch(miljopartietUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

const fetchVansterpartietNews = () => {
	fetch(vansterpartietUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

const fetchLiberalernaNews = () => {
	fetch(liberalernaUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

const fetchCenterpartietNews = () => {
	fetch(centerpartietUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

const fetchSverigedemokraternaNews = () => {
	fetch(sverigedemokraternaUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

socialdemokraternaLinkDiv.onclick = fetchSocialdemokraternaNews;
moderaternaLinkDiv.onclick = fetchModeraternaNews;
miljopartietLinkDiv.onclick = fetchMiljopartietNews;
vansterpartietLinkDiv.onclick = fetchVansterpartietNews;
liberalernaLinkDiv.onclick = fetchLiberalernaNews;
centerpartietLinkDiv.onclick = fetchCenterpartietNews;
sverigedemokraternaLinkDiv.onclick = fetchSverigedemokraternaNews;
allaLinkDiv.onclick = fetchAllaNews;

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetchAllaNews()
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