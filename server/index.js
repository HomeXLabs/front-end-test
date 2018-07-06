import faker from 'faker'

const createUser = () => {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName()
  }
}

// Try changing this to test your input!
const USER_COUNT = 10000

const users = Array(USER_COUNT)
  .fill('')
  .map(x => createUser())

// This method is for you to edit, create the filtering however you deem necessary.
const filterUsers = () => {
  return users
}

export default filterUsers
