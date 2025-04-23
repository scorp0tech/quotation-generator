import React from 'react';
import { DeliverableItem } from '../../types';
import { generateId } from '../../utils/helpers';

interface DeliverablesFormProps {
  deliverables: DeliverableItem[];
  onChange: (deliverables: DeliverableItem[]) => void;
}

const DeliverablesForm: React.FC<DeliverablesFormProps> = ({ 
  deliverables, 
  onChange 
}) => {
  const handleChange = (index: number, field: keyof DeliverableItem, value: string | number) => {
    const updatedDeliverables = [...deliverables];
    
    updatedDeliverables[index] = {
      ...updatedDeliverables[index],
      [field]: value,
    };
    
    // Recalculate amount when rate or quantity changes
    if (field === 'rate' || field === 'quantity') {
      const rate = field === 'rate' ? Number(value) : updatedDeliverables[index].rate;
      const quantity = field === 'quantity' ? Number(value) : updatedDeliverables[index].quantity;
      updatedDeliverables[index].amount = rate * quantity;
    }
    
    onChange(updatedDeliverables);
  };
  
  const addDeliverable = () => {
    onChange([
      ...deliverables,
      {
        id: generateId(),
        name: '',
        description: '',
        rate: 0,
        quantity: 1,
        amount: 0,
      },
    ]);
  };
  
  const removeDeliverable = (index: number) => {
    const updatedDeliverables = deliverables.filter((_, i) => i !== index);
    onChange(updatedDeliverables);
  };
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">Deliverables</h3>
        <button
          type="button"
          onClick={addDeliverable}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Add Item
        </button>
      </div>
      
      {deliverables.map((item, index) => (
        <div key={item.id} className="mb-4 border p-4 rounded relative">
          <button
            type="button"
            onClick={() => removeDeliverable(index)}
            className="absolute top-2 right-2 text-red-500 font-bold"
          >
            ×
          </button>
          
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div>
              <label className="block text-sm font-medium mb-1">Item Name</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Item Name"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Rate</label>
                <input
                  type="number"
                  min="0"
                  value={item.rate}
                  onChange={(e) => handleChange(index, 'rate', parseFloat(e.target.value) || 0)}
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="Rate"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value) || 1)}
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="Quantity"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              value={item.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Item Description"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliverablesForm;