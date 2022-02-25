const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data))
}

const displayDog = dogList => {
    const main = document.getElementById('main')
    const limitData = dogList.slice(0,90)
    for(const dog of limitData){
        console.log(dog.image)
        const div = document.createElement('div')
        div.className = 'col-lg-4'
        div.innerHTML = `
        <h5> ${dog.name} </h5>
        <p> ${dog.life_span} </p>
        <img width="400px" height="250" src=" ${dog.image.url}" >
        `
        main.appendChild(div)
    }

}