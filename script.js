let ratings = document.querySelectorAll('.ratings-level')
let button = document.querySelector('.btn')
let rating_selected = document.querySelector("#rating-selected")
let cardAppreciation = document.querySelector('.card-appreciation')
let card = document.querySelector('.card')


ratings.forEach(element => {

    element.addEventListener('click', function() {

        for (let i = 0; i < ratings.length; i++) {
            if (ratings[i].style.backgroundColor = "hsl(216, 12%, 54%)") {
                ratings[i].style.backgroundColor = ""
            }
        }

        element.style.backgroundColor = "hsl(216, 12%, 54%)"


        button.addEventListener('click', function() {
            rating_selected.innerHTML = element.textContent

            cardAppreciation.classList.remove('hide')
            card.classList.add('hide')

            // console.log(` You gave us ${element.textContent} over 5 rating`)
        })
    })
})

