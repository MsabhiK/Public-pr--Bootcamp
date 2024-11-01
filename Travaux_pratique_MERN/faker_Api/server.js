const express = require("express")
console.log(express())

const app = express()

const { faker, PhoneModule, fakerEN_AU_ocker } = require('@faker-js/faker');

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

    const users = [
        //name: faker.commerce.productName(),
        //price: "$" + faker.commerce.price(),
        //department: faker.commerce.department(),
        //username: faker.internet.username(), // before version 9.1.0, use userName()
        //avatar: faker.image.avatar(),
        //password: faker.internet.password(),
        //birthdate: faker.date.birthdate(),
        //address: faker.address.streetAddress(),
        //city: faker.address.city(),
        //country: faker.address.country(),
        //zipcode: faker.address.zipCode(),
        //latitude: faker.address.latitude(),
        //longitude: faker.address.longitude(),
        //company: faker.company.companyName(),
        //catchPhrase: faker.company.catchPhrase(),
        //bs: faker.company.bs(),
        //catchPhraseAdjective: faker.company.catchPhraseAdjective(),
        //catchPhraseNoun: faker.company.catchPhraseNoun(),
        //bsAdjective: faker.company.bsAdjective(),
        //bsNoun: faker.company.bsNoun()
        {
        first_Name: faker.person.firstName(),
        last_Name: faker.person.lastName(),
        userId: faker.string.uuid(), 
        email: faker.internet.email(),
        phone_Number: faker.phone.number(),
        registeredAt: faker.date.past()
        
        }
    ];

    const companies = [
        {
            company_name: faker.company.name(),
            company_id: faker.string.uuid(),
            registeredAt: faker.date.past(),
            adresses: [{
                        street: faker.location.streetAddress(), 
                        city: faker.location.city(), 
                        state: faker.location.state(), 
                        zip: faker.location.zipCode(), 
                        country: faker.location.country()
                    },
                    {
                        street: faker.location.streetAddress(), 
                        city: faker.location.city(), 
                        state: faker.location.state(), 
                        zip: faker.location.zipCode(), 
                        country: faker.location.country()
                    }
                ]
        }

    ];
    const MyUsers = (req, res) => {
        res.json(users)
    }
    const MyCompanies = (req, res) => {
        res.json(companies)
        }
    
    //------READ ALL users------//
    app.get("/api/users", MyUsers)

    //------READ ALL companies------//
    app.get("/api/companies", MyCompanies)

    //------CREATE new user------//
    app.post("/api/users/new", (req, res) => {
        console.log(req.body)
        users.push(req.body);
        res.json( users );
    })

    //------CREATE new company------//
    app.post("/api/companies/new", (req, res) => {
        console.log(req.body)
        users.push(req.body);
        res.json( companies );
    })

    //------READ ALL users and companies------//
    app.get("/api/users/companies", (req, res) => {
        const ALL = [{MyUsers, MyCompanies}]
        res.json( ALL )
    })



app.listen(4000, () => {console.log("Server is up and running on port: 4000")})