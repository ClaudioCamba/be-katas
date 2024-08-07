const treatDoggos = (dogs) => {

    const newDogArray = dogs.map((dog)=>{
        dog.hasRabies = false;
        return dog;
    });

    return newDogArray;
};

module.exports = treatDoggos;
