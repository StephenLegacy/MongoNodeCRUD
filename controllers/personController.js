// Import Mongoose Person model (adjust path if needed)
const Person = require('../models/person');

/* 
  Step 1: Create and Save a Single Person Document
  Creates a new person and saves it to the database.
*/
const createAndSavePerson = (personData, done) => {
  const person = new Person(personData);

  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

/* 
  Step 2: Create Many Records with Model.create()
  Takes an array of people objects and saves them all at once.
*/
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// Sample data to seed multiple people
const arrayOfPeople = [
  { name: "John", age: 30, favoriteFoods: ["Pizza", "Pasta"] },
  { name: "Mary", age: 25, favoriteFoods: ["Salad", "Fries"] },
  { name: "Alice", age: 28, favoriteFoods: ["Burgers", "Kuku"] },
  { name: "Warui", age: 24, favoriteFoods: ["Chapat", "Rice"] },
];

/* 
  Step 3: Use model.find() to search all people by name
  Returns an array of all people with the given name.
*/
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, people) => {
    if (err) return done(err);
    done(null, people);
  });
};

/* 
  Step 4: Use model.findOne() to return a single matching document
  Finds one person who has a certain food in their favoriteFoods.
*/
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return done(err);
    done(null, person);
  });
};

/* 
  Step 5: Use model.findById() to search by _id
  Finds a person by their unique _id.
*/
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return done(err);
    done(null, person);
  });
};

/* 
  Step 6: Perform classic updates (find, edit, save)
  Find a person by _id, add "hamburger" to favoriteFoods, then save.
*/
const addFoodToPerson = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return done(err);
    if (!person) return done(new Error('Person not found'));

    person.favoriteFoods.push("hamburger");

    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

/* 
  Step 7: Perform new updates with findOneAndUpdate()
  Find a person by name and update their age to 20.
  Return the updated document.
*/
const updatePersonAge = (personName, done) => {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true }, // return updated document
    (err, updatedDoc) => {
      if (err) return done(err);
      done(null, updatedDoc);
    }
  );
};

/* 
  Step 8: Delete one document by _id using findByIdAndRemove()
  Finds and removes a person by their _id.
*/
const deletePersonById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedDoc) => {
    if (err) return done(err);
    done(null, removedDoc);
  });
};

/* 
  Step 9: Delete many documents by name using deleteMany()
  Removes all people named "Mary".
*/
const deleteManyPeople = (done) => {
  Person.deleteMany({ name: "Mary" }, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
};

/* 
  Step 10: Chain search query helpers
  Find people who like "burritos", sort by name ascending,
  limit to 2 results, exclude age field, then execute.
*/
const queryChain = (done) => {
  Person.find({ favoriteFoods: "burritos" })
    .sort({ name: 1 })        // sort ascending by name
    .limit(2)                 // limit results to 2
    .select('-age')           // exclude 'age' field
    .exec((err, data) => {
      if (err) return done(err);
      done(null, data);
    });
};

/* ============================= */
/* Example usages (uncomment to run) */
/* ============================= */

// createAndSavePerson(console.log);

// createManyPeople(arrayOfPeople, console.log);

// findPeopleByName("Mary", console.log);

// findOneByFood("Sushi", console.log);

// findPersonById("665742d2b76ff26fa142de50", console.log);

// addFoodToPerson("665742d2b76ff26fa142de50", console.log);

// updatePersonAge("John", console.log);

// deletePersonById("665742d2b76ff26fa142de50", console.log);

// deleteManyPeople(console.log);

// queryChain(console.log);

module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  addFoodToPerson,
  updatePersonAge,
  deletePersonById,
  deleteManyPeople,
  queryChain
};
