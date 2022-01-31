const tag = require('../services/tagCreate');

class tagCreate {

    async index(req, res) {
        const { name, color } = req.body;
        const idUser = req.user.id;
        try {
            const createTag = await tag.createTag(idUser, name, color);
            return res.status(200).json(createTag);
        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: error.message })
        }
    }
}

module.exports = new tagCreate();