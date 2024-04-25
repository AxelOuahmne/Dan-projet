import { useState } from 'react';

function Paiement() {
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  return (
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Payment Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Payment Details</h2>

              {/* Payment Methods */}
              <div className="flex justify-between mb-4">
                <button onClick={() => handlePaymentMethodChange('visa')} className={`payment-method ${paymentMethod === 'visa' ? 'active' : ''}`}>
                  <img src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/Visa-logo.png" alt="Visa" className="w-16 h-10" />
                </button>
                <button onClick={() => handlePaymentMethodChange('mastercard')} className={`payment-method ${paymentMethod === 'mastercard' ? 'active' : ''}`}>
                  <img src="https://www.mastercard.us/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" alt="Mastercard" className="w-16 h-10" />
                </button>
                <button onClick={() => handlePaymentMethodChange('amex')} className={`payment-method ${paymentMethod === 'amex' ? 'active' : ''}`}>
                  <img src="https://www.americanexpress.com/content/dam/amex/us/credit-cards/features-benefits/advanced-security/digital-wallet/_0029-amex-acceptance-logo-small.png" alt="American Express" className="w-16 h-10" />
                </button>
              </div>

              {/* Payment Form */}
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="cardNumber" className="text-sm font-semibold text-gray-600">Card Number</label>
                  <input type="text" id="cardNumber" className="p-2 border rounded-md" value={cardNumber} onChange={handleCardNumberChange} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="expiryDate" className="text-sm font-semibold text-gray-600">Expiry Date</label>
                  <input type="text" id="expiryDate" className="p-2 border rounded-md" placeholder="MM/YY" value={expiryDate} onChange={handleExpiryDateChange} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cvv" className="text-sm font-semibold text-gray-600">CVV</label>
                  <input type="text" id="cvv" className="p-2 border rounded-md" value={cvv} onChange={handleCvvChange} />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Pay Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Paiement;
