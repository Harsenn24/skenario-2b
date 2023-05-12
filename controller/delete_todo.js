const { ObjectId } = require("bson");
const { Todo } = require("../model");

class DeleteData {
  static async todo(req, res) {
    try {
      const { id } = req.params;

      let deleteData = await Todo.deleteOne({ _id: new ObjectId(id) });

      if (deleteData.deletedCount === 0) {
        throw "id not found";
      }

      res.status(200).json("data has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DeleteData;
