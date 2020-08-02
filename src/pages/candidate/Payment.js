import React from "react";
import { Row, Col } from "reactstrap";

import PageTitle from "../../components/PageTitle";
import { storage, auth, db } from "../../helpers/firebase";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

const _DEV_ = document.domain === "18.223.114.212";

const Payment = () => {
    const name = "User_demo";

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const data = await fetch("http://18.223.114.212:1337/razorpay", {
            method: "POST",
        }).then((t) => t.json());

        console.log(data);

        const options = {
            key: _DEV_
                ? "rzp_test_hXdPUh3IoDNxi3"
                : "rzp_test_hXdPUh3IoDNxi3",
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Donation",
            description: "Thank you for nothing. Please give us some money",
            image: "http://localhost:1337/logo.svg",
            handler: function (response) {
                try {
                    var data = db
                        .collection("Payment")
                        .doc(auth.currentUser.uid);
                    data.set({
                        payment_id: response.razorpay_payment_id,
                        order_id: response.razorpay_order_id,
                        payment_status: true,
                    });

                    window.location.reload();
                } catch (error) {
                    console.log("payment");
                    console.log(error);
                    alert(error.message);
                }
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name,
                email: "demo@stet.com",
                phone_number: "9899999999",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: "Pages", path: "/pages/starter" },
                            {
                                label: "Starter",
                                path: "/pages/starter",
                                active: true,
                            },
                        ]}
                        title={"Starter"}
                    />
                </Col>
            </Row>
            <button id="rzp-button1" onClick={displayRazorpay}>
                Pay
            </button>
        </React.Fragment>
    );
};

export default Payment;