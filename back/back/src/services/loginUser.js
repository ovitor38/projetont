const { PrismaClient } = require(".prisma/client");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

const prisma = new PrismaClient();

class LoginUserServe {

  async verifyUser(username, password) {
    console.log(username, password)
    
      const verifyUsername = await prisma.user.findUnique({
        where: {
          username: username
        },
      });

      if (!verifyUsername) {
        throw new Error( `O usuario ${username} não existe`)
      }

      if (!(await bcrypt.compare(String(password), verifyUsername.password))) {
        throw new Error ('A senha incorreta')
      }

      const token = jwt.sign(
        {
          id: verifyUsername.id
        },
        config.secret,
        { expiresIn: config.expireIn }
      )
      return 'token ' + token;
  
  }

  async userExists(datas) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          username: datas
        }
      });
      return `Welcom ${user.username}`
    } catch (error) {
      console.log(error)
    }

  }

}


module.exports = new LoginUserServe();