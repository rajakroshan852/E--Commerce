import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      user,
      items,
      shippingAddress,
      totalPrice,
    } = req.body;

    if (!user) {
      return res.status(400).json({
        message: "User is required",
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    if (!shippingAddress) {
      return res.status(400).json({
        message: "Shipping address is required",
      });
    }

    const order = await Order.create({
      user,
      items,
      shippingAddress,
      totalPrice,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getMyOrders = async (req, res) => {
  try {
    const { user } = req.query;

    if (!user) {
      return res.status(400).json({
        message: "User is required",
      });
    }

    const orders = await Order.find({ user }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};