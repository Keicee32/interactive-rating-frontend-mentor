let ratings = document.querySelectorAll('.ratings-level')
let button = document.querySelector('.btn')
let rating_selected = document.querySelector("#rating-selected")
let cardAppreciation = document.querySelector('.card-appreciation')
let card = document.querySelector('.card')

console.log(cardAppreciation)

ratings.forEach(element => {
    let isClicked = false

    element.addEventListener('click', function() {
        isClicked = true;

        if(isClicked) {

            element.style.backgroundColor = "hsl(216, 12%, 54%)"
        } else {
            element.style.backgroundColor = ""
        }


        button.addEventListener('click', function() {
            rating_selected.innerHTML = element.textContent

            cardAppreciation.classList.remove('hide')
            card.classList.add('hide')

            // console.log(` You gave us ${element.textContent} over 5 rating`)
        })
    })
})

