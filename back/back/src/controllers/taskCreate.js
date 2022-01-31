const task = require('../services/taskCreate');

class taskCreate {

    async index(req, res) {
        const { title, description } = req.body;
        const idUser = req.user.id;
        try {
            const createTask = await task.createTask(idUser, title, description);
            return res.status(200).json(createTask);
        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: error.message })
        }
    }
}

module.exports = new taskCreate();