import{ faker } from "@faker-js/faker";

function generateRating() {
    return "⭐"+ Math.floor(Math.random() * 5) + 1+" AUTHOR: "+faker.person.lastName();
    
  }
function generateDescription(){
    return "DESCRIPTION: sanctioned web developer @ node.js"
}

const FreelancersList = [

    {
        key:0,
        avatar: faker.internet.avatar(),
        name: faker.person.firstName(),
        position: faker.person.jobTitle(),
        description: generateDescription(),
        rating: generateRating()
    },
    {
        key:1,
        avatar: faker.internet.avatar(),
        name: faker.person.firstName(),
        name1: faker.person.lastName(),
        position: faker.person.jobTitle(),
        description: generateDescription(),
        rating: generateRating()
    },
    {
        key:2,
        avatar: faker.internet.avatar(),
        name: faker.person.firstName(),
        name1: faker.person.lastName(),
        position: faker.person.jobTitle(),
        description: generateDescription(),
        rating: generateRating()
    },
    


]

export default FreelancersList