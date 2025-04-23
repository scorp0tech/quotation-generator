export interface QuotationData {
  companyDetails: CompanyDetails;
  clientDetails: ClientDetails;
  quoteDetails: QuoteDetails;
  deliverables: DeliverableItem[];
  paymentDetails: PaymentDetails;
  termsAndConditions: string[];
  scopeOfWork: ScopeOfWork;
}

export interface CompanyDetails {
  name: string;
  cin: string;
  supportEmail: string;
  phone: string;
  address: string;
}

export interface ClientDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface QuoteDetails {
  quoteNumber: string;
  quoteDate: string;
  subtotal: number;
  discountPercentage: number;
  discountAmount: number;
  tax: number;
  total: number;
}

export interface DeliverableItem {
  id: string;
  name: string;
  description: string;
  rate: number;
  quantity: number;
  amount: number;
}

export interface PaymentDetails {
  accountNumber: string;
  ifscCode: string;
  bankName: string;
  accountHolderName: string;
  amountInWords: string;
}

export interface ScopeOfWork {
  description: string;
  bulletPoints: string[];
  techStack: TechStack;
  extendedTerms: string[];
}

export interface TechStack {
  frontend: string;
  cms: string;
  hosting: string;
  forms: string;
  seoTools: string;
  versionControl: string;
}