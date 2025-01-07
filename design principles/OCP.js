// Galat Tareeka: Har baar naye payment method ke liye code change karna padta hai.
function processPayment(type) {
    if (type === "credit") {
      console.log("Credit payment processed.");
    } else if (type === "paypal") {
      console.log("PayPal payment processed.");
    }
  }
  
  // Sahi Tareeka: Naye payment methods asani se add ho sakte hain.
  class Payment {
    pay() {
      console.log("Payment processed.");
    }
  }
  
  class CreditPayment extends Payment {
    pay() {
      console.log("Credit payment processed.");
    }
  }
  
  class PayPalPayment extends Payment {
    pay() {
      console.log("PayPal payment processed.");
    }
  }
  
  //calling 
  const payment1 = new CreditPayment();
  payment1.pay();
  
  const payment2 = new PayPalPayment();
  payment2.pay();
  