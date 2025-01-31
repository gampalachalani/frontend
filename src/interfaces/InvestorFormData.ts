export interface InvestorFormData {
    userId: string;
    investorName: string;
    investorJob: string;
    investorInterest: string;
    otherDetails: string;
    budgetLimit: string;
    address: string;
    telNumber: string;
    imageFile: File | null;
}