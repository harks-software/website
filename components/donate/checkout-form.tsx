import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentIntentResult } from "@stripe/stripe-js";

interface ICheckoutFormProps {
    setClientSecret: (value: string) => void;
}

export default function CheckoutForm({ setClientSecret }: ICheckoutFormProps) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe
            .retrievePaymentIntent(clientSecret)
            .then(({ paymentIntent }: PaymentIntentResult) => {
                switch (paymentIntent?.status) {
                    case "succeeded":
                        break;
                    case "processing":
                        break;
                    case "requires_payment_method":
                        setMessage("Your payment was not successful, please try again.");
                        break;
                    default:
                        setMessage("Something went wrong.");
                        break;
                }
            });
    }, [stripe]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: window.location.protocol + "//hussainsark.com/copy-of-donate",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message as string);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    return (
        <>
            <form
                id="payment-form"
                onSubmit={handleSubmit}
                className="checkout-form flex flex-col gap-4"
            >
                {message && (
                    <div className="items-center bg-red-100 text-black text-sm font-bold px-4 py-3">
                        {message}
                    </div>
                )}
                <PaymentElement id="payment-element" />
                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                    className="checkout-button"
                >
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Donate"}
                    </span>
                </button>
            </form>
        </>
    );
}
