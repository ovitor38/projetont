const { PrismaClient } = require(".prisma/client");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

const prisma = new PrismaClient();

class tagCreateService {

  async createTask(idUser, name, color) {

    try {

      const tag = await prisma.tag.create({
        data: {
          tagId: idUser,
          name: String(name),
          color: String(color)
        },
        select: {
          name: true,
          color: true
        }
      })
      return tag
    } catch (error) {
      throw new Error(error)
    }

  }

}


module.exports = new tagCreateService();