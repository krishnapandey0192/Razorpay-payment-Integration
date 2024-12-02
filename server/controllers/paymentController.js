import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.js";
export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    console.log(order);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(401).json({
      success: false,
      message: "Failed to create order",
    });
  }
};

export const paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    console.log(expectedSignature, razorpay_signature);
    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // TODO: Database entry for payment
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      res.redirect(
        `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      return res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(401).json({
      success: false,
      message: "Failed to create order",
    });
  }
};
