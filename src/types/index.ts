export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  interest: string;
  message: string;
}

export interface RoiCalculatorState {
  location: 'highway' | 'city';
  investment: number;
  agreement: 5 | 10;
}

export interface RoiCalculationResult {
  investorContribution: number;
  evoltekContribution: number;
  monthlyReturn: number;
  totalReturn: number;
  roiPercentage: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconType: 'fast' | 'location' | 'smart' | 'scalable';
}

export interface InvestmentBenefit {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
}
