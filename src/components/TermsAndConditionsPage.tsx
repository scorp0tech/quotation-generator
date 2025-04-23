import React from 'react';
import watermarkImg from '../assets/watermark.png';

interface TermsAndConditionsPageProps {
  termsAndConditions: string[];
}

const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({ 
  termsAndConditions
}) => {
  return (
    <>
      {/* Direct watermark image */}
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

      <div className="page-content">
        <div className="border-b border-gray-300 pb-2 mb-6 relative" style={{ zIndex: 10 }}>
          <h2 className="font-bold text-xl">Terms and Conditions</h2>
        </div>
        
        <div className="relative" style={{ zIndex: 10 }}>
          <ol className="list-decimal pl-6">
            {termsAndConditions.map((term, index) => (
              <li key={index} className="mb-2">{term}</li>
            ))}
          </ol>
        </div>
      </div>
      
      <div className="thank-you-message">
        <p>Thank you for your trust in Scorp Tech Innovations</p>
      </div>
    </>
  );
};

export default TermsAndConditionsPage; 