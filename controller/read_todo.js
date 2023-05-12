const { Todo } = require("../model");

class Read {
  static async todo(req, res) {
    try {
      const data = await Todo.aggregate([
        {
          $project: {
            task: "$task",
          },
        },
      ]);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Read;
