const searchButton = () =>{
    const input = document.getElementById('input-value')
    const inputValue = input.value
    // console.log(inputValue)
    const error = document.getElementById('error')

    if(isNaN(inputValue) || (inputValue=='')){
        error.innerText = 'please give a valid number'
        input.value = ''
    }

    else if(inputValue <= 0){
        error.innerText = 'please enter the positive value'
        input.value = ''
    }

    // work the API
    else{
      fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=10')
      .then()
    }
}