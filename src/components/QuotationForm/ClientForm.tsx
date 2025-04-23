import React from 'react';
import { ClientDetails } from '../../types';

interface ClientFormProps {
  clientDetails: ClientDetails;
  onChange: (field: keyof ClientDetails, value: string) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ clientDetails, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-3">Client Details</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Client Name</label>
          <input
            type="text"
            value={clientDetails.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Client Name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={clientDetails.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Client Email"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            value={clientDetails.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Client Phone"
          />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            value={clientDetails.address}
            onChange={(e) => onChange('address', e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Client Address"
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientForm;