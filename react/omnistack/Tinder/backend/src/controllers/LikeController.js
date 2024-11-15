const modelUser = require('../models/User');

module.exports = {
    async store(req, res) {
        const { userId} = req.params;
        const { user } = req.headers;

        const loggeUser = await modelUser.findById(user);
        const targetUser = await modelUser.findById(userId);
        
        /*
        erro
        if(!targetUser._id)
            return res.status(400).json({erro: "Usuario não existe" })
        */

        if(targetUser.likes.includes(loggeUser._id)){
            console.log('Deu MATCH');
        }
            
        loggeUser.likes.push(targetUser._id);


        return res.json(loggeUser);
    }
}