const { PrismaClient } = require(".prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/auth");

const prisma = new PrismaClient();

class LoginUserServe {
  async verifyUser(username, password) {
    console.log(username, password)
    if (!username) {
      throw new Error("username não pode estar em branco")
    } else if (!password || password == null || password == '' || password == ""){
      throw new Error ("password não pode estar em branco")
    }
    
      const verifyUsername = await prisma.user.findUnique({
      where: {
        username: username
      },
    });

    if (!verifyUsername) {
      throw new Error(`O usuario ${username} ou senha está incorreta`)
    }

    if (!(await bcrypt.compare(String(password), verifyUsername.password))) {
      throw new Error('O usuario ou senha está incorreta')
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

    if (!(await bcrypt.compare(String(password), verifyUsername.password))) {
      throw new Error("A senha incorreta");
    }

    const token = jwt.sign(
      {
        id: verifyUsername.id,
      },
      config.secret,
      { expiresIn: config.expireIn }
    );
    return "token " + token;
  }

  async consultUserInformation(idUser) {
    try {
      const infoUser = await prisma.user.findMany({
        where: {
          id: idUser,
        },
        select: {
          username: true,
        },
      });

      const consultTask = await prisma.task.findMany({
        where: {
          userId: idUser,
        },
        select: {
          name: true,
          description: true,
          createdAt: true,
        },
      });

      const consultTag = await prisma.tags.findMany({
        where: {
          userTagId: idUser,
        },
        select: {
          name: true,
          color: true,
          createdAt: true,
        },
      });
      return { infoUser, consultTask, consultTag };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new LoginUserServe();
