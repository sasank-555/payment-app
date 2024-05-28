const express = require("express");
const router = express.Router();
const { Account, User } = require("../db");
const z = require("zod");
const { authMiddleware } = require("../middleware");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const signupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  firstname: z.string(),
  lastname: z.string(),
});
router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    return res.status(401).json({
      msg: "Incorrect Inputs",
    });
  }

  const user = await User.findOne({ username: body.username });
  if (user) {
    res.status(401).json({
      msg: "User already Exists",
    });
  }
  const dbuser = await User.create(body);

  await Account.create({
    userId: dbuser._id,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId: dbuser._id,
    },
    JWT_SECRET
  );

  res.json({
    msg: "User Created Succesfully",
    token: token,
  });
});

const signinSchema = z.object({
  username: z.string().email(),
  password: z.string(),
});
router.post("/signin", async (req, res) => {
  const body = req.body;
  const { success } = signinSchema.safeParse(body);
  if (!success) {
    res.status(403).json({
      msg: "Enter Valid Data",
    });
  }

  const user = await User.findOne({
    username: body.username,
    password: body.password,
  });
  if (!user) {
    res.status(401).json({
      msg: "Please SignUp First",
    });
    return;
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  res.json({
    token: token,
  });
});
const updateBody = z.object({
  password: z.string().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
});
router.put("/", authMiddleware, async (req, res) => {
  const body = req.body;
  const { success } = updateBody.safeParse(body);
  if (!success) {
    res.json({
      msg: "Send Correct Data",
    });
  }
  console.log(req.userId);
  await User.updateOne(
    { _id: req.userId }, // Query to find the document
    body // Update operation
  );

  res.json({
    msg: "Succesfully Updated",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users,
  });
});

module.exports = router;
