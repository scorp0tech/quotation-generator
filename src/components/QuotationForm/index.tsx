import React from 'react';
import { QuotationData } from '../../types';
import CompanyForm from './CompanyForm';
import ClientForm from './ClientForm';
import QuoteDetailsForm from './QuoteDetailsForm';
import DeliverablesForm from './DeliverablesForm';
import PaymentDetailsForm from './PaymentDetailsForm';
import ScopeOfWorkForm from './ScopeOfWorkForm';

interface QuotationFormProps {
  data: QuotationData;
  onDataChange: (data: QuotationData) => void;
}

const QuotationForm: React.FC<QuotationFormProps> = ({ data, onDataChange }) => {
  // Company Details
  const handleCompanyChange = (field: keyof typeof data.companyDetails, value: string) => {
    onDataChange({
      ...data,
      companyDetails: {
        ...data.companyDetails,
        [field]: value,
      },
    });
  };
  
  // Client Details
  const handleClientChange = (field: keyof typeof data.clientDetails, value: string) => {
    onDataChange({
      ...data,
      clientDetails: {
        ...data.clientDetails,
        [field]: value,
      },
    });
  };
  
  // Quote Details
  const handleQuoteDetailsChange = (
    field: keyof typeof data.quoteDetails,
    value: string | number
  ) => {
    onDataChange({
      ...data,
      quoteDetails: {
        ...data.quoteDetails,
        [field]: value,
      },
    });
  };
  
  // Deliverables
  const handleDeliverablesChange = (deliverables: typeof data.deliverables) => {
    // Calculate new subtotal
    const subtotal = deliverables.reduce(
      (total, item) => total + item.amount,
      0
    );
    
    // Calculate new discount amount based on percentage
    const discountAmount = (subtotal * data.quoteDetails.discountPercentage) / 100;
    
    // Calculate new total
    const total = subtotal - discountAmount;
    
    onDataChange({
      ...data,
      deliverables,
      quoteDetails: {
        ...data.quoteDetails,
        subtotal,
        discountAmount,
        total,
      },
      paymentDetails: {
        ...data.paymentDetails,
        amountInWords: `${total} Rupees Only`, // This will be converted properly in the actual app
      },
    });
  };
  
  // Payment Details
  const handlePaymentDetailsChange = (
    field: keyof typeof data.paymentDetails,
    value: string
  ) => {
    onDataChange({
      ...data,
      paymentDetails: {
        ...data.paymentDetails,
        [field]: value,
      },
    });
  };
  
  // Scope of Work
  const handleScopeOfWorkChange = (
    field: keyof typeof data.scopeOfWork,
    value: any
  ) => {
    onDataChange({
      ...data,
      scopeOfWork: {
        ...data.scopeOfWork,
        [field]: value,
      },
    });
  };
  
  // Tech Stack
  const handleTechStackChange = (
    field: keyof typeof data.scopeOfWork.techStack,
    value: string
  ) => {
    onDataChange({
      ...data,
      scopeOfWork: {
        ...data.scopeOfWork,
        techStack: {
          ...data.scopeOfWork.techStack,
          [field]: value,
        },
      },
    });
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6">Quotation Details</h2>
      
      <CompanyForm 
        companyDetails={data.companyDetails}
        onChange={handleCompanyChange}
      />
      
      <ClientForm 
        clientDetails={data.clientDetails}
        onChange={handleClientChange}
      />
      
      <QuoteDetailsForm 
        quoteDetails={data.quoteDetails}
        onChange={handleQuoteDetailsChange}
      />
      
      <DeliverablesForm 
        deliverables={data.deliverables}
        onChange={handleDeliverablesChange}
      />
      
      <PaymentDetailsForm 
        paymentDetails={data.paymentDetails}
        onChange={handlePaymentDetailsChange}
        amountInWords={data.paymentDetails.amountInWords}
      />
      
      <ScopeOfWorkForm 
        scopeOfWork={data.scopeOfWork}
        onChange={handleScopeOfWorkChange}
        onChangeTechStack={handleTechStackChange}
        termsAndConditions={data.termsAndConditions}
        onTermsChange={(terms) => {
          onDataChange({
            ...data,
            termsAndConditions: terms,
          });
        }}
      />
    </div>
  );
};

export default QuotationForm;