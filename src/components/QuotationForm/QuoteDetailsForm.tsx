import React from 'react';
import { QuoteDetails } from '../../types';

interface QuoteDetailsFormProps {
  quoteDetails: QuoteDetails;
  onChange: (field: keyof QuoteDetails, value: string | number) => void;
}

const QuoteDetailsForm: React.FC<QuoteDetailsFormProps> = ({ 
  quoteDetails, 
  onChange 
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-3">Quote Details</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Quote Number</label>
          <input
            type="text"
            value={quoteDetails.quoteNumber}
            onChange={(e) => onChange('quoteNumber', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Quote Number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Quote Date</label>
          <input
            type="date"
            value={quoteDetails.quoteDate}
            onChange={(e) => {
              const date = new Date(e.target.value);
              const formattedDate = date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              });
              onChange('quoteDate', formattedDate);
            }}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Discount (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={quoteDetails.discountPercentage}
            onChange={(e) => onChange('discountPercentage', parseFloat(e.target.value) || 0)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Discount Percentage"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Tax</label>
          <input
            type="number"
            min="0"
            value={quoteDetails.tax}
            onChange={(e) => onChange('tax', parseFloat(e.target.value) || 0)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Tax Amount"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteDetailsForm;