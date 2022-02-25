// const main = document.getElementById('main')
const searchButton = () =>{
    const input = document.getElementById('input-value')
    const inputValue = parseInt(input.value )
    // console.log(inputValue)
    const error = document.getElementById('error')

    if(isNaN(inputValue) || (inputValue=='')){
        error.innerText = 'please give a valid number'
        input.value = ''
        main.innerHTML = ''
    }

    else if(inputValue <= 0){
        error.innerText = 'please enter the positive value'
        input.value = ''
        main.innerHTML = ''
    }

    // work the API
    else{
      fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count= ${inputValue}`)
      .then(res => res.json())
      .then(data => cardsDispaly(data.cards))
      input.value = ''
      error.innerHTML = ''
      main.innerHTML = ''
    }

}

const cardsDispaly = cards =>{
    // console.log(cards)
    const main = document.getElementById('main')
    for(const card of cards){
        console.log(card)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')
        div.innerHTML =` 
        <div class="card" style="width: 18rem;">
  <img src="${card.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.suit}</h5>
    <p class="card-text">${card.code}</p>
    <button href="#" class="btn btn-primary">See Details</button>
  </div>
</div>
        `
        main.appendChild(div)
    }
}