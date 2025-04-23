import React from 'react';
import { PaymentDetails } from '../../types';

interface PaymentDetailsFormProps {
  paymentDetails: PaymentDetails;
  onChange: (field: keyof PaymentDetails, value: string) => void;
  amountInWords: string;
}

const PaymentDetailsForm: React.FC<PaymentDetailsFormProps> = ({ 
  paymentDetails, 
  onChange,
  amountInWords
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-3">Payment Details</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Account Number</label>
          <input
            type="text"
            value={paymentDetails.accountNumber}
            onChange={(e) => onChange('accountNumber', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Account Number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">IFSC Code</label>
          <input
            type="text"
            value={paymentDetails.ifscCode}
            onChange={(e) => onChange('ifscCode', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="IFSC Code"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Bank Name</label>
          <input
            type="text"
            value={paymentDetails.bankName}
            onChange={(e) => onChange('bankName', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Bank Name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Account Holder Name</label>
          <input
            type="text"
            value={paymentDetails.accountHolderName}
            onChange={(e) => onChange('accountHolderName', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Account Holder Name"
          />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Amount in Words</label>
          <input
            type="text"
            value={amountInWords}
            readOnly
            className="w-full border rounded px-3 py-2 text-sm bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsForm;