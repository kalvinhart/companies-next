export interface ICompanyService {
    getCompanys(): Promise<any>;
    getCompanyById(): Promise<any>;
}