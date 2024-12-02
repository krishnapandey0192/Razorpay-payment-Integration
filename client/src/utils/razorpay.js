export const initiatePayment = async (data) => {
  const response = await fetch("http://localhost:3000/api/getkey");
  const res = await response.json();
  const options = {
    key: res.key,
    amount: data.order.amount,
    currency: "INR",
    name: "Krishna Pandey",
    description: "Test Transaction",
    image:
      "https://avatars.githubusercontent.com/u/121028355?s=400&u=8153d662ebed305b2cb0435432bd2ab6d006d4f7&v=4",
    order_id: data.order.id,
    callback_url: "http://localhost:3000/api/paymentVerification",
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9000090000",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#121212",
    },
  };
  const razor = new window.Razorpay(options);

  razor.open();
};
