import React from 'react';

interface TermsSectionProps {
  terms: string[];
}

const TermsSection: React.FC<TermsSectionProps> = ({ terms }) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold mb-2">Terms & Conditions</h3>
      <div className="text-sm">
        {terms.map((term, index) => (
          <p key={index} className="mb-1">{term}</p>
        ))}
      </div>
    </div>
  );
};

export default TermsSection;