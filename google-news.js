const key = '20b64dfca46a4f88943dff0d3fc395b4'
const allaUrl = `https://newsapi.org/v2/everything?q=(socialdemokraterna)OR(moderaterna)OR(liberalerna)OR(miljöpartiet)OR(liberalerna)OR(vänsterpartiet)OR(kristdemokraterna)OR(feministiskt iniativ)&sortBy=publishedAt&pageSize=30&apiKey=${key}`

const allaLinkDiv = document.getElementById('alla')
const articlesDiv = document.querySelector('.articles')
const largeArticlesDiv = document.querySelector('.large-article')
const countDiv = document.querySelector('.count')

const articlesFunction = parti => {
  return `https://newsapi.org/v2/everything?q=(${parti})&sortBy=publishedAt&pageSize=30&apiKey=${key}`
}

const recievedNews = newsdata => {
  console.log(newsdata)
  articlesDiv.innerHTML = null
  countDiv.innerHTML = null
  const antalArtiklar = newsdata.totalResults
  const div3 = document.createElement('div')
  div3.className = 'antal-artiklar'
  div3.innerHTML = `
	<p> ${newsdata.totalResults} artiklar</p>
	`
  countDiv.appendChild(div3)

  newsdata.articles.forEach((article, index) => {
    const res = article.publishedAt.split('T')

    //Here we create and add html elements to our html file

    const div = document.createElement('div')
    div.innerHTML = `<p>${article.description}</p>`
    div.className = 'news'
    div.innerHTML = `
            <img src="${article.urlToImage}"/>
            <div class='news-article'><h2>${article.title}</h2>
            <p> ${article.description}</p>
            <div class='published-date'> ${res[0]} </div>
            <button class='read-article-button'><a href="${
              article.url
            }">Läs mer</a></button>
            `
    articlesDiv.appendChild(div)
  })
}

const fetchAllaNews = () => {
  fetch(allaUrl)
    .then(response => response.json())
    .then(recievedNews)
}

const buttons = document.querySelectorAll('.filter-button:not(#alla)')
const buttonArray = Array.prototype.slice.call(buttons)

const activeButton = () => {
  allaLinkDiv.classList.remove('active')
  buttonArray.forEach(button => {
    button.classList.remove('active')
  })
}

buttonArray.forEach(button => {
  button.addEventListener('click', () => {
    activeButton()
    button.classList.add('active')
    const parti = button.getAttribute('id')
    const url = articlesFunction(parti)
    fetch(url)
      .then(resp => resp.json())
      .then(recievedNews)
  })
})

allaLinkDiv.addEventListener('click', () => {
  activeButton()
  allaLinkDiv.classList.add('active')
  fetchAllaNews()
})

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetchAllaNews()
