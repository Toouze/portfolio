import "./index.scss"
import "./scss/general.scss"
import "./scss/media.scss"


const advantages = document.querySelector('.nav_advant'),
    works = document.querySelector('.nav_works'),
    prices = document.querySelector('.nav_prices'),
    scheme = document.querySelector('.nav_scheme'),
    reviews = document.querySelector('.nav_reviews'),
    contacts = document.querySelector('.nav_contacts')

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

const scrollTo = function(link, px) {
    link.addEventListener('click', () => {
        window.scrollTo({
            top: px,
            behavior: "smooth"
        })
    })
}

scrollTo(advantages, 730);
scrollTo(works, 1320);
scrollTo(prices, 2282);
scrollTo(scheme, 3649);
scrollTo(reviews, 4104);
scrollTo(contacts, 5173);





// btn to up


const btnUp = document.querySelector('.btn-up')

window.addEventListener('scroll', () => {

  if (window.pageYOffset > 50) {
    btnUp.style.opacity = 0.5
  } else if (window.pageYOffset < 50){
    btnUp.style.opacity = 0
  }
})

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})