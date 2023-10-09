// ESCERCIZIO 1
// creiamo la classe User
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

    comparationAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} ${this.lastName} è più vecchio di ${otherUser.firstName} ${otherUser.lastName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} ${this.lastName} è più giovane di ${otherUser.firstName} ${otherUser.lastName}`;
        } else {
            return `${this.firstName} ${this.lastName} ha la stessa età di ${otherUser.firstName} ${otherUser.lastName}`;
        }
    }
}

const user1 = new User('Cristiano', 'Ronaldo', 50, 'Roma')
const user2 = new User('Vito', 'Ippolito', 82, 'Milano')

console.log(user1.comparationAge(user2))

// ESERCIZIO 2
// creiamo la classe PETS
class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    sameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const allPet = []

const petForm = document.querySelector('form');
const petList = document.getElementById('petList')

petForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const pet = new Pet(petName, ownerName, species, breed);
    allPet.push(pet);
    // crea la lista dei vari animali
    // const listPet = document.createElement('li');
    // listPet.textContent = `Nome dell'animale: ${pet.petName}, Nome del proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`
    // petList.appendChild(listPet);
    const listPet = document.createElement('li');
    listPet.innerHTML = `<li>Nome dell'animale: ${pet.petName}</li>
    <li>Nome del proprietario: ${pet.ownerName}</li>
    <li>Specie: ${pet.species}</li>
    <li>Razza: ${pet.breed}</li>`
    petList.appendChild(listPet);
    // verifichiamo se ci sono animali con lo stesso proprietario
    const sameOwnerPet = allPet.filter(otherPet => pet.sameOwner(otherPet));
    if (sameOwnerPet.length > 1) {
        alert(`${pet.ownerName} ha più di un animale`)
    }
    petForm.reset();
});

