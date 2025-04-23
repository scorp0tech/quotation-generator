import { QuotationData } from '../types';
import { generateId } from '../utils/helpers';

const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

export const initialData: QuotationData = {
  companyDetails: {
    name: 'SCORP TECH INNOVATIONS PVT. LTD.',
    cin: 'U61290SBR202597C075026',
    supportEmail: 'support@scorptech.co',
    phone: '+91 9534029487',
    address: 'Techna, Bihar, India - 851133',
  },
  
  clientDetails: {
    name: 'Perfeito Business Solution',
    email: 'websperfeito@gmail.com',
    phone: '+91 8130688116',
    address: '387, Block - D, G. No. 58, Mahipal Enclave, Dwarka, New Delhi - 110059',
  },
  
  quoteDetails: {
    quoteNumber: 'SRT-AM-QT-25/01',
    quoteDate: formattedDate,
    subtotal: 32000,
    discountPercentage: 30,
    discountAmount: 9600,
    tax: 0,
    total: 22400,
  },
  
  deliverables: [
    {
      id: generateId(),
      name: 'UI/UX Design',
      description: 'Clean, responsive design with brand styling',
      rate: 5000,
      quantity: 1,
      amount: 5000,
    },
    {
      id: generateId(),
      name: 'Website Development',
      description: 'Fully functional and scalable, responsive site',
      rate: 15000,
      quantity: 1,
      amount: 15000,
    },
    {
      id: generateId(),
      name: 'SEO Optimization',
      description: 'Basic SEO setup, meta tags, schema, image alt texts',
      rate: 12000,
      quantity: 1,
      amount: 12000,
    },
    {
      id: generateId(),
      name: 'Contact Form Integration',
      description: 'Functional and secured contact form',
      rate: 0,
      quantity: 1,
      amount: 0,
    },
    {
      id: generateId(),
      name: 'Deployment & Handover',
      description: 'Website deployed to hosting platform, handover',
      rate: 0,
      quantity: 1,
      amount: 0,
    },
  ],
  
  paymentDetails: {
    accountNumber: '426846497214',
    ifscCode: 'SBIN0646828',
    bankName: 'State Bank of India',
    accountHolderName: 'Om Prakash Bharati',
    amountInWords: 'Twenty Two Thousand and Four Hundred Rupees Only',
  },
  
  termsAndConditions: [
    'The estimated timeline is 1-2 weeks from the date of project commencement.',
    '50% upfront payment to initiate the project.',
    'Upon full payment, the client will own the rights to the website design and content.',
    'If the project is canceled by the client after commencement, the upfront payment is non-refundable.',
  ],
  
  scopeOfWork: {
    description: 'This project involves the complete design and development of a professional business website for Perfeito Business Solutions, featuring:',
    bulletPoints: [
      'A modern, responsive homepage with prominent calls-to-action.',
      'Informative service sections tailored to healthcare professionals and business clients.',
      'Knowledge Hub with searchable FAQs and articles.',
      'Blog-ready structure (optional CMS integration).',
      'Clean, intuitive navigation across Home, Services, FAQs, Blog, and Contact pages.',
      'Contact form integration for inquiries or consultation booking.',
      'Basic SEO optimization for visibility on search engines.',
      'Deployment to a live hosting environment and handover.',
    ],
    techStack: {
      frontend: 'HTML, CSS, JavaScript (React.js / Next.js)',
      cms: 'Headless CMS / Markdown-based blog',
      hosting: 'Vercel',
      forms: 'custom backend',
      seoTools: 'Meta tags, Structured Data for Rich Results, robots.txt, sitemap.xml',
      versionControl: 'Git + GitHub (for development)',
    },
    extendedTerms: [
      'Timeline: Estimated completion within 2-3 weeks from project start, subject to timely content and feedback from the client.',
      'Payment:',
      '50% upfront to begin the project.',
      '50% upon completion, prior to deployment.',
      'Payments are to be made via Bank Transfer / UPI / PayPal.',
      'Revision: Includes 2 rounds of minor revisions.',
      'Content: All text, images, and assets are to be provided by the client before development begins.',
      'Ownership: Client will own all rights to the website upon full payment. Developer retains the right to display the project in their portfolio.',
      'Post-Launch Support: 7-day support period included for bug fixes and basic guidance. Ongoing maintenance can be arranged separately.',
      'Cancellation:',
      'Client-initiated cancellation after work begins forfeits the advance payment.',
      'Developer-initiated cancellation will be followed by a fair refund for incomplete work.',
      'Confidentiality: All business and project information shared will be treated as confidential.',
      'Jurisdiction: This agreement operates under the laws of Bihar, India.',
      'Third-Party Costs: Any third-party services such as hosting, domain names, premium plugins, APIs, or tools that require a subscription or one-time payment will be charged separately and are the responsibility of the client.',
    ],
  },
};