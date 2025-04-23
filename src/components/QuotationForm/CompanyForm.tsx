import React from 'react';
import { CompanyDetails } from '../../types';

interface CompanyFormProps {
  companyDetails: CompanyDetails;
  onChange: (field: keyof CompanyDetails, value: string) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ companyDetails, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-3">Company Details</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            value={companyDetails.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Company Name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">CIN</label>
          <input
            type="text"
            value={companyDetails.cin}
            onChange={(e) => onChange('cin', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="CIN Number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Support Email</label>
          <input
            type="email"
            value={companyDetails.supportEmail}
            onChange={(e) => onChange('supportEmail', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Support Email"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            value={companyDetails.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Phone Number"
          />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            value={companyDetails.address}
            onChange={(e) => onChange('address', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Company Address"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;