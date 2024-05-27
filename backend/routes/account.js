const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;
  const account = await Account.findOne({ userId: req.userId });
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    res.json({
      msg: "Not Enough Balance ",
    });
    return;
  }
  const reciveAcc = await Account.findOne({ userId: to });
  if (!reciveAcc) {
    await session.abortTransaction();
    res.json({
      msg: "No Such User Exist",
    });
    return;
  }
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();

  res.json({
    msg: "Transfer Successful",
  });
});

module.exports = router;
