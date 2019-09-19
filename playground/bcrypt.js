const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'Red12345!'
    const hashPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashPassword)

    const isMatch = await bcrypt.compare('Red12345!', hashPassword)
    console.log(isMatch)
}

myFunction()