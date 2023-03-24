export interface ICompanyService {
    getCompanys(): Promise<any>;
    getCompanyById(id: string): Promise<any>;
}