import React from 'react';
import { CompanyDetails, ClientDetails } from '../types';

interface ClientInfoSectionProps {
  companyDetails: CompanyDetails;
  clientDetails: ClientDetails;
}

const ClientInfoSection: React.FC<ClientInfoSectionProps> = ({
  companyDetails,
  clientDetails
}) => {
  return (
    <div className="flex mb-6">
      {/* Company Information */}
      <div className="w-1/2 pr-4">
        <h3 className="font-bold mb-1">From</h3>
        <h4 className="font-bold uppercase mb-1">{companyDetails.name}</h4>
        <div className="text-sm">
          <p className="text-blue-600">{companyDetails.supportEmail}</p>
          <p>{companyDetails.phone}</p>
          <p>{companyDetails.address}</p>
        </div>
      </div>
      
      {/* Client Information */}
      <div className="w-1/2 pl-4">
        <h3 className="font-bold mb-1">Quote To</h3>
        <h4 className="font-bold mb-1">{clientDetails.name}</h4>
        <div className="text-sm">
          <p>{clientDetails.email}</p>
          <p>{clientDetails.phone}</p>
          <p>{clientDetails.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoSection;