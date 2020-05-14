const profile = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 18,
};

//destructuring object
const { firstName: localFirstName } = profile;

console.log(localFirstName);
