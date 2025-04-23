import React from 'react';
import scorpLogoDark from '../assets/scorp-logo-dark.png';
import { CompanyDetails, QuoteDetails } from '../types';

interface QuoteHeaderProps {
  companyDetails: CompanyDetails;
  quoteDetails: QuoteDetails;
  contactPhone: string;
}

const QuoteHeader: React.FC<QuoteHeaderProps> = ({ 
  companyDetails, 
  quoteDetails,
  contactPhone
}) => {
  return (
    <div className="mb-6 relative z-20">
      {/* CIN Number */}
      <div className="absolute top-0 left-0 text-xs">
        <span className="font-semibold">CIN: </span>
        {companyDetails.cin}
      </div>
      
      {/* Quote Title */}
      <div className="text-center mb-4 mt-6">
        <h1 className="text-xl font-bold">Quote</h1>
      </div>
      
      {/* Contact Number */}
      <div className="absolute top-0 right-0 text-xs">
        <div>Contact: {contactPhone}</div>
      </div>
      
      {/* Company Logo and Name */}
      <div className="flex items-center gap-2 relative z-20">
        <div className="w-20 h-20">
          <img 
            src={scorpLogoDark} 
            alt="Scorp Logo" 
            className="w-full h-full object-contain" 
            style={{ zIndex: 20 }}
          />
        </div>
        <h2 className="text-4xl font-light">Scorp</h2>
      </div>
      
      {/* Quote Details */}
      <div className="absolute right-0 top-16">
        <div className="text-sm">
          <div>
            <span className="font-semibold">Quote no: </span>
            <span className="ml-4">{quoteDetails.quoteNumber}</span>
          </div>
          <div>
            <span className="font-semibold">Quote date: </span>
            <span className="ml-4">{quoteDetails.quoteDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteHeader;