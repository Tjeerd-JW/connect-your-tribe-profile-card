getPerson()

async function getPerson() {
    personResponse = await fetch('https://fdnd.directus.app/items/person/256')
    person = await personResponse.json()
    let customData = JSON.parse(person.data.custom)
    console.log(person)
    console.log(customData)

}

let profileCard = document.querySelector('.profile-card')

profileCard.addEventListener("click", profileCardHandler)

function profileCardHandler() {
profileCard.classList.toggle('open-card')
}

