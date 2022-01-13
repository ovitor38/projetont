const login = require('../services/loginUser');

class LoginUser {

  async index(req, res) {
    try {
      const { username, password } = req.body;
      const verifLogin = await login.verifyUser(username, password);
      return res.status(200).json(verifLogin);
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: 'Não foi possivel localizar usuario!!' })
    }
  }

  async show(req, res) {
    const { username } = req.body;
    try {
      const returnUser = await login.userExists(username);
      return res.status(200).json(returnUser);
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: 'Não foi possivel localizar usuario!!!' })
    }
  }
}

module.exports = new LoginUser();