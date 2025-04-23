import React from 'react';
import { ScopeOfWork } from '../types';
import watermarkImg from '../assets/watermark.png';

interface ScopeOfWorkPageProps {
  scopeOfWork: ScopeOfWork;
}

const ScopeOfWorkPage: React.FC<ScopeOfWorkPageProps> = ({ 
  scopeOfWork
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
          <h2 className="font-bold text-xl">Scope of Work</h2>
        </div>
        
        <div className="mb-6 relative" style={{ zIndex: 10 }}>
          <p className="mb-4">{scopeOfWork.description}</p>
          <ul className="list-disc pl-6 mb-6">
            {scopeOfWork.bulletPoints.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6 relative" style={{ zIndex: 10 }}>
          <h3 className="font-bold mb-2">Tech Stack</h3>
          <ul className="list-disc pl-6">
            <li className="mb-1"><span className="font-bold">Frontend: </span>{scopeOfWork.techStack.frontend}</li>
            <li className="mb-1"><span className="font-bold">CMS (optional): </span>{scopeOfWork.techStack.cms}</li>
            <li className="mb-1"><span className="font-bold">Hosting: </span>{scopeOfWork.techStack.hosting}</li>
            <li className="mb-1"><span className="font-bold">Forms: </span>{scopeOfWork.techStack.forms}</li>
            <li className="mb-1"><span className="font-bold">SEO Tools: </span>{scopeOfWork.techStack.seoTools}</li>
            <li className="mb-1"><span className="font-bold">Version Control: </span>{scopeOfWork.techStack.versionControl}</li>
          </ul>
        </div>
      </div>
      
      <div className="thank-you-message">
        <p>Thank you for your trust in Scorp Tech Innovations</p>
      </div>
    </>
  );
};

export default ScopeOfWorkPage;