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
  obj[key] = value;

  return obj;
}

function deleteFromDriverByKey (obj, key) {
  return delete obj.key;
}

function destructivelyDeleteFromDriverByKey (obj, key) {
  obj[key] = undefined;
  return obj;
}
