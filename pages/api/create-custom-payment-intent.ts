import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

interface IReqBody {
  amount: number;
  currency: string;
  receipt_email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    if (!req.body.amount || !req.body.currency)
      res.status(422).send({ message: "Please enter a valid quantity" });

    const amount = Number(((req.body as IReqBody).amount * 100).toFixed(2));
    if (amount <= 0)
      res.status(422).send({ message: "Please enter a valid quantity" });

    const currency = req.body.currency;
    if (
      currency != "aed" &&
      currency != "cad" &&
      currency != "gbp" &&
      currency != "usd"
    )
      res.status(422).send({ message: "Please select a valid currency" });

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: req.body.currency,
      automatic_payment_methods: { enabled: true },
      receipt_email: req.body.receipt_email,
      description: "Donation",
    });

    res.status(200).send({
      clientSecret: intent.client_secret,
    });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
