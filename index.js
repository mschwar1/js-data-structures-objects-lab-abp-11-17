// Write your solution in this file!
const driver = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing']
}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { ['age']: 40 });
}
