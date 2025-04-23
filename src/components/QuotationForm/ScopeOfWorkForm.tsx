import React from 'react';
import { ScopeOfWork, TechStack } from '../../types';

interface ScopeOfWorkFormProps {
  scopeOfWork: ScopeOfWork;
  onChange: (field: keyof ScopeOfWork, value: string | string[] | TechStack) => void;
  onChangeTechStack: (field: keyof TechStack, value: string) => void;
  termsAndConditions: string[];
  onTermsChange: (terms: string[]) => void;
}

const ScopeOfWorkForm: React.FC<ScopeOfWorkFormProps> = ({ 
  scopeOfWork, 
  onChange,
  onChangeTechStack,
  termsAndConditions,
  onTermsChange
}) => {
  const handleBulletPointChange = (index: number, value: string) => {
    const updatedPoints = [...scopeOfWork.bulletPoints];
    updatedPoints[index] = value;
    onChange('bulletPoints', updatedPoints);
  };
  
  const addBulletPoint = () => {
    onChange('bulletPoints', [...scopeOfWork.bulletPoints, '']);
  };
  
  const removeBulletPoint = (index: number) => {
    const updatedPoints = scopeOfWork.bulletPoints.filter((_, i) => i !== index);
    onChange('bulletPoints', updatedPoints);
  };
  
  const handleTermChange = (index: number, value: string) => {
    const updatedTerms = [...termsAndConditions];
    updatedTerms[index] = value;
    onTermsChange(updatedTerms);
  };
  
  const addTerm = () => {
    onTermsChange([...termsAndConditions, '']);
  };
  
  const removeTerm = (index: number) => {
    const updatedTerms = termsAndConditions.filter((_, i) => i !== index);
    onTermsChange(updatedTerms);
  };
  
  return (
    <div>
      <h3 className="text-lg font-bold mb-3">Scope of Work</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={scopeOfWork.description}
          onChange={(e) => onChange('description', e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
          placeholder="Scope of Work Description"
          rows={3}
        />
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Bullet Points</label>
          <button
            type="button"
            onClick={addBulletPoint}
            className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
          >
            Add Point
          </button>
        </div>
        
        {scopeOfWork.bulletPoints.map((point, index) => (
          <div key={index} className="mb-2 flex items-start">
            <textarea
              value={point}
              onChange={(e) => handleBulletPointChange(index, e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Bullet Point"
              rows={2}
            />
            <button
              type="button"
              onClick={() => removeBulletPoint(index)}
              className="ml-2 text-red-500 font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-bold mb-2">Tech Stack</h4>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Frontend</label>
            <input
              type="text"
              value={scopeOfWork.techStack.frontend}
              onChange={(e) => onChangeTechStack('frontend', e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Frontend Technologies"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">CMS (optional)</label>
            <input
              type="text"
              value={scopeOfWork.techStack.cms}
              onChange={(e) => onChangeTechStack('cms', e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="CMS Technologies"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Hosting</label>
            <input
              type="text"
              value={scopeOfWork.techStack.hosting}
              onChange={(e) => onChangeTechStack('hosting', e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Hosting Platform"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Forms</label>
            <input
              type="text"
              value={scopeOfWork.techStack.forms}
              onChange={(e) => onChangeTechStack('forms', e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Forms Technology"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">SEO Tools</label>
            <input
              type="text"
              value={scopeOfWork.techStack.seoTools}
              onChange={(e) => onChangeTechStack('seoTools', e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="SEO Tools"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Version Control</label>
            <input
              type="text"
              value={scopeOfWork.techStack.versionControl}
              onChange={(e) => onChangeTechStack('versionControl', e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Version Control"
            />
          </div>
        </div>
      </div>
      
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
        
        {termsAndConditions.map((term, index) => (
          <div key={index} className="mb-2 flex items-start">
            <textarea
              value={term}
              onChange={(e) => handleTermChange(index, e.target.value)}
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
    </div>
  );
};

export default ScopeOfWorkForm;