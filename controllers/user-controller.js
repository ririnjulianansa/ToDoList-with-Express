const {User} = require("../models")
module.exports = {
    getAllUser: async (req, res) => {
      const users = await User.findAll()
  
      res.json({
        message: "berhasil mendapatkan data user",
        data: users,
      });
    },
  
    getUserById: async (req, res) => {
        const {id} = req.params
        const users = await User.findOne({
            where:{id:id}
        })

      res.json({
        message: "berhasil mendapatkan data id",
        data: users,
      })
    },
}