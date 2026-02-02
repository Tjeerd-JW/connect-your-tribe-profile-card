getPerson()

async function getPerson() {
    personResponse = await fetch('https://fdnd.directus.app/items/person/256')
    person = await personResponse.json()
    let customData = JSON.parse(person.data.custom)
    console.log(customData)

}

