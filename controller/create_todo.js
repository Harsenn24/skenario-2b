const { Todo } = require("../model");

class Create {
  static async todo(req, res) {
    try {
      const { task } = req.body;

      const new_data = {
        task,
      };

      await Todo.insertMany(new_data);

      res.status(200).json(new_data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Create;
