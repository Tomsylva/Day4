const person = {
    name: "Tom",
    job: "Musician",
    age: 28,
    from: "New Zealand",
    sucks: true,
    hobbies: ["coding", "music", "climbing"],
    isHealthy: true,
    hasPreviousCareer: true
};

const person2 = {
    name: "Marlene",
    job: "Musician",
    age: 28,
    from: "New Zealand",
    sucks: true,
    hobbies: ["coding", "music", "climbing"],
    isHealthy: true,
    hasPreviousCareer: true
};

//accessing a property or key
//dot property
person.isHealthy = false;
console.log(person.name);

//square brackets
person["isHealthy"] = true;
console.log(person["name"]);

//with a string
const healthyCheck = "isHealthy";
console.log(person[healthyCheck]);

//for in loop ("key" can be anything, but usually prop or property)
//square brackets access values of key, just key looks for property keys
for (let key in person){
    console.log(person[key])
};

console.clear();

const people = [person, person2];

console.log(people[1].hobbies[2]);

console.log(people[1].sucks.toString().toUpperCase());
console.log(people[0].isHealthy.toString().toUpperCase());

console.clear();

const student1 = {
    name: "John",
    job: "Student",
    ageAccordingToGoogle: 18,
    age: 37,
    from: "DR",
    isBald: false,
    hobbies: ["music", "bouldering", "comics"],
    isHealthy: true,
    hasPreviousCareer: true,
  };
  const student2 = {
    name: "Brittney",
    job: "Tech Specialist",
    ageAccordingToGoogle: 29,
    from: "US",
    age: 29,
    isBald: "truthy",
    hobbies: ["volleyball", "surfing", "snowboarding"],
    isHealthy: true,
    hasPreviousCareer: true,
  };
  const student3 = {
    name: "Tadej",
    from: "Eslovenia",
    job: "Product Specialist",
    ageAccordingToGoogle: 20,
    age: 32,
    isBald: false,
    hobbies: ["surfing", "sailing"],
    isHealthy: true,
    hasPreviousCareer: true,
  };
  const student4 = {
    name: "Luca",
    from: "Belgium",
    job: "Technical Writer",
    ageAccordingToGoogle: 16,
    age: 31,
    isBald: false,
    hobbies: ["writing", "running", "bouldering"],
    isHealthy: true,
    hasPreviousCareer: true,
  };
  const studentArr = [student1, student2, student3, student4];
  //function printAllHobbies(arr) {}
  printAllHobbies(studentArr); // ["music", "bouldering", "comics", "surfing", "sailing", "volleyball", "surfing", "snowboarding", "writing", "running", "bouldering"]

// const studentArr = [student1, student2, student3, student4];

function printAllHobbies(arr) {
    let hobbyArr = [];
    for (student of arr){
        for (hobby of student.hobbies){
            hobbyArr.push(hobby)
        }
    }
    return hobbyArr;
}
console.log(printAllHobbies(studentArr));