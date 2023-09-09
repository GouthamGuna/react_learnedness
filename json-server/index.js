const dev = require('gmsk');

let database = { users: []};
const threshold = 1000;

for (let i = 1; i<= threshold; i++) {
  database.users.push({
    id: i,
    name: dev.name.firstName() + " " + dev.name.lastName(),
    job: dev.name.jobTitle(),
    about: dev.lorem.paragraph(),
    phone: dev.phone.phoneNumber(),
    userName: dev.internet.userName(),
    email: dev.internet.email(),
    salary: "$" + dev.finance.amount() + "M",
    image: "https://source.unsplash.com/1600x900/?user", // faker.image.people()
    country: dev.address.country()
  });
}

console.log(JSON.stringify(database));