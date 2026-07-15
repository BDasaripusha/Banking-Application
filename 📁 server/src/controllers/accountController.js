import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

/*
 * Get Profile
 */
export const getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user.id).select("-password");

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

/*
 * Get Balance
 */
export const getBalance = async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    res.json({
      balance: user.balance
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

/*
 * Deposit
 */
export const deposit = async (req, res) => {

  try {

    const { amount } = req.body;

    const user = await User.findById(req.user.id);

    user.balance += Number(amount);

    await user.save();

    await Transaction.create({
      userId: user._id,
      type: "Deposit",
      amount
    });

    res.json({
      message: "Deposit Successful",
      balance: user.balance
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

/*
 * Withdraw
 */
export const withdraw = async (req, res) => {

  try {

    const { amount } = req.body;

    const user = await User.findById(req.user.id);

    if (user.balance < amount) {

      return res.status(400).json({
        message: "Insufficient Balance"
      });

    }

    user.balance -= Number(amount);

    await user.save();

    await Transaction.create({
      userId: user._id,
      type: "Withdraw",
      amount
    });

    res.json({
      message: "Withdraw Successful",
      balance: user.balance
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
