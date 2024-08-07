const createRef = (peopleArray) => {
    const people = {};
    peopleArray.forEach(person => {
        const name = person.hasOwnProperty('name');
        const number = person.hasOwnProperty('phoneNumber');
        if (name && number) people[person.name] = person.phoneNumber;
    });

    return people;
};

module.exports = createRef;
 