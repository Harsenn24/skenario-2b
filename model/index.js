const mongoose = require('mongoose');
const TodoCollection = require('../schema/index');
const Schema = mongoose.Schema

const todos = new Schema(TodoCollection, { collection: "todo" })
const Todo = mongoose.model("todos", todos)

module.exports = { Todo }


