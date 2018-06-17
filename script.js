/*// 

// What you want to print on your page goes here:
var button = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');
button.addEventListener('click', function (event) {
      if (menu.style.display == "") {
          menu.style.display = "none";
      } else {
          menu.style.display = "";
      }
    }
  );

  

  // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




 var greeting = 'Hej';
 var name = ' Rebecca';
// What you want to print on your page goes here:
document.querySelector(".result").innerHTML = greeting + name;

const articles = [{
    "title":"Unga prioriterar miljö och jämställdhet","description":"Unga väljare prioriterar jämställdhet och miljö betydligt högre än vad äldre gör, visar DN/Ipsos mätningar. V, C, MP och Fi är partier som är särskilt starka bland de yngre. Men mönstret med två jämnstora block och SD som vågmästare skulle bestå även om de un…","url":"https://www.dn.se/nyheter/politik/unga-prioriterar-miljo-och-jamstalldhet/","urlToImage":"https://cached-images.bonnier.news/picsearch/img/B/V/v/P/title_BVvPWY1DYZRVSMUauoVCWQ","publishedAt":"2018-06-16T04:55:00Z"},{"source":{"id":null,"name":"Aftonbladet.se"},"author":"Peter Kadhammar"
    },
    {
        "title": "Vilken version av dig umgås dina vänner med i kväll?",
        "description": "Hur vi beter oss under påverkan av alkohol kan ha stark påverkan på människorna runtomkring oss. I grund och botten handlar det om hur alkoholen styr kemiska processer i din hjärna.",
        "urlToImage": "https://imgix.kitcdn.se/https%3A%2F%2Fstatic.kitcdn.se%2Fcws%2F2018%2F05%2F6ecc7c419c3f1ff7eab2217534f3e518_1525442257910.jpg?fit=crop&h=&ixlib=php-1.1.0&w=2880&s=0b82f2b0d9309324328c7dc04af614d3",
        "url": "https://kit.se/2018/04/27/106963/iq-vilken-version-av-dig-traffar-dina-vanner/"
      },
    {
        "title": "Männen, självmorden och tystnaden",
        "description": "Efter en lögn som gick för långt ville Fredrik få slut på allt. Något är skevt med män och självmord – men varför är de mindre benägna än kvinnor att söka hjälp när livet brister?",
        "urlToImage": "https://imgix.kitcdn.se/https%3A%2F%2Fstatic.kitcdn.se%2Fcws%2F2018%2F05%2F5c6f651a1191238c6ec4a0204374a48c_1525778979943.jpg?fit=crop&h=&ixlib=php-1.1.0&w=2880&s=d1507518b94794dc78f560a5dec68bb3",
        "url": "https://kit.se/2018/05/14/107391/mannen-sjalvmorden-och-tystnaden/"
      }
 ]

articles.forEach((article) => {
document.querySelector(".result").appendChild(document.createTextNode(`${article.title}`));
})

*/