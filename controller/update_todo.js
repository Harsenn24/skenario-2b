const { Todo } = require("../model");
const { ObjectId } = require("bson");

class Update {
  static async todo(req, res) {
    try {
      const { id } = req.params;

      const { update_todo } = req.body;

      const update_data = await Todo.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            task: update_todo,
          },
        }
      );

      if (update_data.modifiedCount === 0) {
        throw "id not found.";
      }

      res.status(200).json("success update data");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Update;
