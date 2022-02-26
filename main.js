document.addEventListener('DOMContentLoaded', () => {


    //card options
    const cardArray = [
        {
            name: 'dev_jnr',
            img: 'images/dev_jnr.jpg'
        },
        {
            name: 'star-wars',
            img: 'images/star-wars.jpg'
        },
        {
            name: 'dev_jnr',
            img: 'images/dev_jnr.jpg'
        },
        {
            name: 'star-wars',
            img: 'images/star-wars.jpg'
        },
        {
            name: 'what-if',
            img: 'images/what-if.jpg'
        },
        {
            name: 'star-head',
            img: 'images/star-head.jpg'
        },
        {
            name: 'skull',
            img: 'images/skull.jpg'
        },
        {
            name: 'oz',
            img: 'images/oz.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'deadpool',
            img: 'images/deadpool.jpg'
        },
        {
            name: 'chill',
            img: 'images/chill.jpg'
        },
        {
            name: 'castle',
            img: 'images/castle.jpg'
        },
        {
            name: 'what-if',
            img: 'images/what-if.jpg'
        },
        {
            name: 'star-head',
            img: 'images/star-head.jpg'
        },
        {
            name: 'skull',
            img: 'images/skull.jpg'
        },
        {
            name: 'oz',
            img: 'images/oz.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'deadpool',
            img: 'images/deadpool.jpg'
        },
        {
            name: 'chill',
            img: 'images/chill.jpg'
        },
        {
            name: 'castle',
            img: 'images/castle.jpg'
        },
    ]



    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.getElementById('#result')


    var cardsChosen  = []
    var cardsChosenId = []
    var cardsWon =[]

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/abstract.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/book-burger.jpg')
            cards[optionTwoId].setAttribute('src', 'images/book-burger.jpg')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/abstract.jpg')
            cards[optionTwoId].setAttribute('src', 'images/abstract.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId= []

        console.log(cardsWon.length)

        resultDisplay.innerHTML = cardsWon.length 
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.innerHTML = 'Congratulations! You found them all'
        }

    }


    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    
    createBoard()
})

