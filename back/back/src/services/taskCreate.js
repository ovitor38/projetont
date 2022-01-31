const { PrismaClient } = require(".prisma/client");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

const prisma = new PrismaClient();

class taskCreateService {

  async createTask(idUser, title, description, expiresIn) {

    try {

      const task = await prisma.task.create({
        data: {
          taskId: idUser,
          title: String(title),
          description: String(description), 
          expiresIn: Date(expiresIn)
        },
        select: {
          title: true,
          description: true
        }
      })
      return task
    } catch (error) {
      throw new Error(error)
    }

  }

}


module.exports = new taskCreateService();