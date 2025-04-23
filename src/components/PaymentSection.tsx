import React from 'react';
import { PaymentDetails } from '../types';

interface PaymentSectionProps {
  paymentDetails: PaymentDetails;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ paymentDetails }) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold mb-2">Payment Instructions</h3>
      <div className="text-sm">
        <p className="mb-1"><span className="font-semibold">Account Details:</span></p>
        <p className="mb-1"><span className="font-semibold">Account No: </span>{paymentDetails.accountNumber}</p>
        <p className="mb-1"><span className="font-semibold">IFSC No: </span>{paymentDetails.ifscCode}</p>
        <p className="mb-1"><span className="font-semibold">Bank: </span>{paymentDetails.bankName}</p>
        <p className="mb-1"><span className="font-semibold">Name: </span>{paymentDetails.accountHolderName}</p>
      </div>
      
      <div className="mt-4">
        <p className="mb-1"><span className="font-semibold">Amount in Words: </span>{paymentDetails.amountInWords}</p>
      </div>
    </div>
  );
};

export default PaymentSection;