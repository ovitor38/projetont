const { PrismaClient } = require(".prisma/client");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

class createUsers {
  
  async createUser(data) {
    console.log('Aqui', data.username, data.email)
     
    if (!data.username) {
      return 'Username não pode ser null'
    } else if (!data.email) {
      return 'E-mail não pode ser null'
    } else if (data.password !== data.confirmPassword) {
      return 'Senhas devem ser iguais!!'
    }

  try {
   let encryptedPassword = await bcrypt.hash(String(data.password), 10);
   let createNewUser =  await prisma.user.create({
      data: {
        username: String(data.username),
        email: String(data.email),
        password: encryptedPassword
      },
      select: {
        username: true,
        email: true
      },
    });
    console.log(createNewUser)
    return createNewUser
  } catch (error) {
      console.log(error)
      return error.meta.target  + ' já em uso'
    }
  }
}

module.exports = new createUsers();