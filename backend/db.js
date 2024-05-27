const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sasanknasika555:SUvhdtdfNQY8dmW1@cluster0.pglsjhi.mongodb.net/paytm"
);
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});

const accoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accoutSchema);

module.exports = {
  User,
  Account,
};
