// Write your solution in this file!
const driver = {
  name: 'Bob',
  age: 32,
  gender: 'male',
  hobby: 'music',
  address: 'home',
}

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, driver, { ['age']: 40 });
  const newDriver = updateDriverWithKeyAndValue(driver, age, 40)
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  driver["gender"] = "female";

  return obj;
}
