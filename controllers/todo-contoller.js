const {Todo} = require("../models")
module.exports = {
    getAllTodo: async (req, res) => {
      const todos = await Todo.findAll()
  
      res.json({
        message: "berhasil mendapatkan data todo",
        data: todos,
      });
    },
  
    getTodoById: async (req, res) => {
        const {id} = req.params
        const todo = await Todo.findOne({
            where:{id:id}
        })

      res.json({
        message: "berhasil mendapatkan todo id",
        data: todo,
      });
    },

    addNewTodo: async (req, res) => {
        const data = req.body;
        await Todo.create(data);
        res.status(201).json({
          message: "Berhasil menambahkan todo",
        });
      },

      deleteTodo: async (req, res) => {
        try {
          const { id } = req.params;
          await Todo.destroy({
            where: {
              id : id
            }
          });
          res.json({
            message : "Data Todo Berhasil dihapus"
          })
        } catch (error) {
          res.status(500).json({
            message: "Gagal menghapus data todo",
            error: error.message,
          });
        }
      },

      updateTodo: async (req, res) => {
        try {
          const { id } = req.params;
          const data = req.body;
          await Todo.update(data, {
            where: {
              id: id,
            },
          });
    
          res.status(201).json({
            message: "Berhasil mengubah data todo",
          });
        } catch (error) {
          res.status(500).json({
            message: "Gagal mengubah data todo",
            error: error.message,
          });
        }
      },
}