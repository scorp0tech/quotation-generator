import React from 'react';
import { DeliverableItem, QuoteDetails, PaymentDetails } from '../types';

interface DeliverableTableProps {
  deliverables: DeliverableItem[];
  quoteDetails: QuoteDetails;
  paymentDetails?: PaymentDetails;
}

const DeliverableTable: React.FC<DeliverableTableProps> = ({ 
  deliverables, 
  quoteDetails,
  paymentDetails
}) => {
  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en-IN');
  };
  
  return (
    <div className="mb-6">
      <h3 className="font-bold mb-2">Deliverables</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 py-2 px-3 text-left">Item</th>
            <th className="border border-gray-200 py-2 px-3 text-center">Rate</th>
            <th className="border border-gray-200 py-2 px-3 text-center">Quantity</th>
            <th className="border border-gray-200 py-2 px-3 text-right">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {deliverables.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-200 py-2 px-3">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </td>
              <td className="border border-gray-200 py-2 px-3 text-center">
                {formatCurrency(item.rate)}
              </td>
              <td className="border border-gray-200 py-2 px-3 text-center">
                {item.quantity}
              </td>
              <td className="border border-gray-200 py-2 px-3 text-right">
                {formatCurrency(item.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-between mt-4">
        {/* Payment Details - Start (Left) */}
        {paymentDetails && (
          <div className="w-1/2">
            <h3 className="font-bold mb-2">Payment Instructions</h3>
            <div className="text-sm">
              <p className="mb-1"><span className="font-semibold">Account Details:</span></p>
              <p className="mb-1"><span className="font-semibold">Account No: </span>{paymentDetails.accountNumber}</p>
              <p className="mb-1"><span className="font-semibold">IFSC No: </span>{paymentDetails.ifscCode}</p>
              <p className="mb-1"><span className="font-semibold">Bank: </span>{paymentDetails.bankName}</p>
              <p className="mb-1"><span className="font-semibold">Name: </span>{paymentDetails.accountHolderName}</p>
            </div>
          </div>
        )}

        {/* Financial Summary - End (Right) */}
        <div className="w-1/3">
          <div className="flex justify-between py-1">
            <span className="font-semibold">Subtotal:</span>
            <span>₹ {formatCurrency(quoteDetails.subtotal)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="font-semibold">Discount ({quoteDetails.discountPercentage}%):</span>
            <span>₹ {formatCurrency(quoteDetails.discountAmount)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="font-semibold">Tax:</span>
            <span>₹ {formatCurrency(quoteDetails.tax)}</span>
          </div>
          <div className="flex justify-between py-1 border-t border-black font-bold">
            <span>Total</span>
            <span>₹ {formatCurrency(quoteDetails.total)}</span>
          </div>
          
        </div>
      </div>
      {paymentDetails && (
            <div className="py-1 mt-2">
              <p className="mb-1"><span className="font-semibold">Amount in Words: </span>{paymentDetails.amountInWords}</p>
            </div>
          )}
    </div>
  );
};

export default DeliverableTable;