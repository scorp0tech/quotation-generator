import React from 'react';

interface TermsFormProps {
  terms: string[];
  onChange: (terms: string[]) => void;
}

const TermsForm: React.FC<TermsFormProps> = ({ terms, onChange }) => {
  const handleChange = (index: number, value: string) => {
    const updatedTerms = [...terms];
    updatedTerms[index] = value;
    onChange(updatedTerms);
  };
  
  const addTerm = () => {
    onChange([...terms, '']);
  };
  
  const removeTerm = (index: number) => {
    const updatedTerms = terms.filter((_, i) => i !== index);
    onChange(updatedTerms);
  };
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">Terms & Conditions</h3>
        <button
          type="button"
          onClick={addTerm}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Add Term
        </button>
      </div>
      
      {terms.map((term, index) => (
        <div key={index} className="mb-2 flex items-start">
          <textarea
            value={term}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Term & Condition"
            rows={2}
          />
          <button
            type="button"
            onClick={() => removeTerm(index)}
            className="ml-2 text-red-500 font-bold"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default TermsForm;