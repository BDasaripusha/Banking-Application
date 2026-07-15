import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

/*
 * Transfer Money
 */
export const transfer = async (req, res) => {

  try {

    const { accountNumber, amount } = req.body;

    const sender = await User.findById(req.user.id);

    if (sender.balance < amount) {

      return res.status(400).json({
        message: "Insufficient Balance"
      });

    }

    const receiver = await User.findOne({
      accountNumber
    });

    if (!receiver) {

      return res.status(404).json({
        message: "Receiver Not Found"
      });

    }

    sender.balance -= Number(amount);

    receiver.balance += Number(amount);

    await sender.save();

    await receiver.save();

    await Transaction.create({
      userId: sender._id,
      type: "Transfer",
      amount,
      receiver: accountNumber
    });

    res.json({
      message: "Transfer Successful"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

/*
 * Transaction History
 */
export const history = async (req, res) => {

  try {

    const history = await Transaction.find({
      userId: req.user.id
    }).sort({
      createdAt: -1
    });

    res.json(history);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
