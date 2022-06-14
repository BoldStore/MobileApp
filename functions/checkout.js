import RazorpayCheckout from 'react-native-razorpay';
import React from 'react';

function Checkout() {
  var options = {
    description: 'Buying a product',
    image: 'https://i.ibb.co/hWwbwxH/B-1.png',
    currency: 'INR',
    key: 'rzp_test_Cvgmp7sLxim68t', // Your api key
    amount: '5000',
    name: 'Avi Vashishta',
    prefill: {
      email: 'void@razorpay.com',
      contact: '9899659815',
      name: 'Razorpay Software',
    },
    theme: {color: '#000'},
  };
  RazorpayCheckout.open(options)
    .then(data => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    })
    .catch(error => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
}

export default Checkout;
