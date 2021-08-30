const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    async store(req, res){
        const {name, email, password } = req.body;

        //Verificar se o usuário já existe
        let user = await User.findOne({
            where: {
                email: email
            }
        })
        
        if (user) 
             return res.status(400)
                  .send({ error: "Este e-mail já está sendo utilizado"});

        //gerar o hash da senha
        const passwordHashed = bcrypt.hashSync(password);

        //Inserir o usuário no banco
        user = await User.create({
            name: name,
            email: email,
            password: passwordHashed
        })
                
        //Gerar um tokem

        //retornar o usuário
        res.send({
            user: {
                name: user.name,
                email: user.email
            }
        });
    }
}