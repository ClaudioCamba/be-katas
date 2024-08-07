const ageDog = (dog, num) => {
    const agedDog = {...dog};

    if (num === undefined || num <= 0 || num === null){
        return agedDog;
    }
    
    agedDog.age += num;
    return agedDog;
};

module.exports = ageDog;
