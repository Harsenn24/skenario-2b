const { Todo } = require("../model");
const { ObjectId } = require("bson");


class ReadById {
  static async todo(req, res) {
    try {
      const { id } = req.params;

      let data = await Todo.aggregate([
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
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

module.exports = ReadById;
