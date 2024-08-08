const createRef = (peopleArray, key = 'name', val = 'phoneNumber' ) => {
    const people = {};
    peopleArray.forEach(person => {
        const objKey = person.hasOwnProperty(key);
        const objValue = person.hasOwnProperty(val);
        if (objKey && objValue) people[person[key]] = person[val];
    });

    return people;
};

module.exports = createRef;
