// Write your solution in this file!
const driver = {
  name: 'Bob',
  age: 32,
  gender: 'male',
  hobby: 'music',
  address: 'home',
}

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}


function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  driver["gender"] = "female";

  return obj;
}
