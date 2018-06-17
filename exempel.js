const key = "e6ef2cde327f46e3820d0344025b79fc"
const businessUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`
const sportsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${key}`

const businessLinkDiv = document.querySelector(".business");
const sportsLinkDiv = document.querySelector(".sports");
const articlesDiv = document.querySelector(".articles")
const largeArticlesDiv = document.querySelector(".large-article")


const recievedNews = (newsdata) => {
	articlesDiv.innerHTML = null;
    newsdata.articles.forEach((article, index) => {
	let imageUrl = article.urlToImage;

	if (article.urlToImage === null) {
		imageUrl = "https://media.istockphoto.com/photos/tree-picture-id543052538"
	}

	const enlargeArticle = () => {
		largeArticlesDiv.className = "large-news";
		largeArticlesDiv.innerHTML = `
			  <h2>${article.title}</h2>
			  <img src="${imageUrl}"/>`
	}

	if(index === 0) {
		largeArticlesDiv.className = "large-news";
		largeArticlesDiv.innerHTML = `
			  <h2>${article.title}</h2>
			  <img src="${imageUrl}"/>`
	}

	//Here we create and add html elements to our html file
	  if(index < 20 && index > 0) {
		  const div = document.createElement("div")
	      div.className = "news "
	      div.innerHTML = `
				<h2>${article.title}</h2>
				<img src="${imageUrl}"/>`
		  div.onclick = enlargeArticle;
	      articlesDiv.appendChild(div)
	  }
    })
}

const fetchBusinessNews = () => {
	fetch(businessUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

const fetchSportsNews = () => {
	fetch(sportsUrl)
	  .then(response => response.json())
	  .then(recievedNews)
}

businessLinkDiv.onclick = fetchBusinessNews;
sportsLinkDiv.onclick = fetchSportsNews;

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetchBusinessNews()