import React, { forwardRef } from 'react';
import { QuotationData } from '../types';
import QuoteHeader from './QuoteHeader';
import ClientInfoSection from './ClientInfoSection';
import DeliverableTable from './DeliverableTable';
import ScopeOfWorkPage from './ScopeOfWorkPage';
import TermsAndConditionsPage from './TermsAndConditionsPage';
import watermarkImg from '../assets/watermark.png';

interface QuotationPreviewProps {
  data: QuotationData;
}

const QuotationPreview = forwardRef<HTMLDivElement, QuotationPreviewProps>(
  ({ data }, ref) => {
    return (
      <div ref={ref} className="bg-white max-w-4xl mx-auto">
        {/* First Page */}
        <div className="preview-page relative p-8 shadow-md mb-8 border border-gray-200 min-h-[1000px]">
          {/* Absolute positioned watermark */}
          <img 
            src={watermarkImg} 
            alt="Watermark" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70%', 
              maxWidth: '600px',
              opacity: 0.15,
              zIndex: 5,
              pointerEvents: 'none',
            }}
          />
          
          <div className="page-content" style={{ position: 'relative', zIndex: 10 }}>
            <QuoteHeader 
              companyDetails={data.companyDetails}
              quoteDetails={data.quoteDetails}
              contactPhone={data.companyDetails.phone}
            />
            
            <ClientInfoSection 
              companyDetails={data.companyDetails}
              clientDetails={data.clientDetails}
            />
            
            <DeliverableTable 
              deliverables={data.deliverables}
              quoteDetails={data.quoteDetails}
              paymentDetails={data.paymentDetails}
            />
          </div>
          
          {/* Fixed footer for first page */}
          <div className="thank-you-message">
            <p>Thank you for your trust in Scorp Tech Innovations</p>
          </div>
          
          {/* Page number indicator */}
          <div className="page-number absolute bottom-2 right-2 text-xs text-gray-500">Page 1</div>
        </div>
        
        {/* Second Page - Scope of Work */}
        <div className="preview-page p-8 shadow-md mb-8 border border-gray-200 min-h-[1000px] relative">
          {/* Scope of Work content */}
          <ScopeOfWorkPage 
            scopeOfWork={data.scopeOfWork}
          />
          
          {/* Page number indicator */}
          <div className="page-number absolute bottom-2 right-2 text-xs text-gray-500">Page 2</div>
        </div>
        
        {/* Third Page - Terms and Conditions */}
        <div className="preview-page p-8 shadow-md border border-gray-200 min-h-[1000px] relative">
          {/* Terms and Conditions content */}
          <TermsAndConditionsPage 
            termsAndConditions={data.termsAndConditions}
          />
          
          {/* Page number indicator */}
          <div className="page-number absolute bottom-2 right-2 text-xs text-gray-500">Page 3</div>
        </div>
      </div>
    );
  }
);

QuotationPreview.displayName = 'QuotationPreview';

export default QuotationPreview;