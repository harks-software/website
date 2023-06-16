import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

interface IReqBody {
    amount: number;
    currency: string;
    receipt_email: string;
}

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
    methods: ["POST", "GET", "HEAD"],
    origin: [
        "https://hussainsark.com",
        "https://hussainsark.org",
        /(.*)sensational-pixie-18ca8f.netlify.app$/,
        /(.*)clever-pastelito-57b6ed.netlify.app$/,
        "https://www.hussainsark.com",
        "https://www.hussainsark.org",
        "http://localhost:3000",
    ],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Run the middleware
    await runMiddleware(req, res, cors);

    if (req.method === "POST") {
        if (!req.body.amount || !req.body.currency)
            res.status(422).send({ message: "Please enter a valid quantity" });

        const amount = Number(((req.body as IReqBody).amount * 100).toFixed(2));
        if (amount <= 0) res.status(422).send({ message: "Please enter a valid quantity" });

        const currency = req.body.currency;
        if (currency != "aed" && currency != "cad" && currency != "gbp" && currency != "usd")
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
