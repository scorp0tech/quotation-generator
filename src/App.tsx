import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { QuotationData } from './types';
import { initialData } from './data/initialData';
import { calculateFinancials, convertToWords } from './utils/helpers';
import QuotationForm from './components/QuotationForm';
import QuotationPreview from './components/QuotationPreview';
import './styles/pdf.css';

function App() {
  const [quotationData, setQuotationData] = useState<QuotationData>(initialData);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  
  const printRef = useRef<HTMLDivElement>(null);
  
  const handleDataChange = (newData: QuotationData) => {
    // Make sure financial calculations are accurate
    const financials = calculateFinancials(
      newData.deliverables,
      newData.quoteDetails.discountPercentage
    );
    
    // Update the data with accurate financials
    const updatedData = {
      ...newData,
      quoteDetails: {
        ...newData.quoteDetails,
        subtotal: financials.subtotal,
        discountAmount: financials.discountAmount,
        total: financials.total,
      },
      paymentDetails: {
        ...newData.paymentDetails,
        amountInWords: convertToWords(financials.total),
      },
    };
    
    setQuotationData(updatedData);
  };
  
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: `Quotation_${quotationData.quoteDetails.quoteNumber}`,
  });
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Professional Quotation Generator</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`py-2 px-4 ${
              activeTab === 'form'
                ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('form')}
          >
            Edit Quotation
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 'preview'
                ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
        </div>
        
        {/* Export Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Export to PDF
          </button>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Column */}
          <div className={activeTab === 'form' ? 'block' : 'hidden lg:block'}>
            <QuotationForm 
              data={quotationData}
              onDataChange={handleDataChange}
            />
          </div>
          
          {/* Preview Column */}
          <div className={activeTab === 'preview' ? 'block' : 'hidden lg:block'}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-1">
                <div className="overflow-hidden" style={{ zoom: '0.8' }}>
                  <QuotationPreview 
                    ref={printRef}
                    data={quotationData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;