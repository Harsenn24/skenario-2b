const mongoose = require("mongoose");
const db = process.env.MONGO_URI;


async function connect_db() {
  try {
    const testConnection = await mongoose.connect(db);
    return testConnection;
  } catch (error) {
    throw error;
  }
}

connect_db();

module.exports = { connect_db };
