// Write your solution in this file!
const driver = {
  name: 'Sam',
  age: 32,
  gender: 'male',
  interests: 'music',
  address: '11 Broadway'
}

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, driver, { ['age']: 40 });
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  driver["gender"] = "female";

  return obj;
}
