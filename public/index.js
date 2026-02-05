getPerson()

async function getPerson() {
    personResponse = await fetch('https://fdnd.directus.app/items/person/256')
    person = await personResponse.json()
    let customData = JSON.parse(person.data.custom)
    console.log(person)
    console.log(customData)

}

let profileCard = document.querySelector('.profile-card')
let body = document.querySelector('body')

profileCard.addEventListener("click", profileCardOpener)
profileCard.addEventListener("dblclick", profileCardCloser)

function profileCardOpener() {
profileCard.classList.add('open-card')
}

function profileCardCloser(){
    profileCard.classList.remove('open-card')

}
