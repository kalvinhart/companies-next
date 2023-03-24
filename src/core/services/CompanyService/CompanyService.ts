import { HttpService } from "../HttpService/HttpService";
import { ICompanyService } from "./ICompanyService";

export class CompanyService implements ICompanyService {
    apiRoot: string = process.env.NEXT_PUBLIC_ODIN_API ? `${process.env.NEXT_PUBLIC_ODIN_API}/eos` : "";

    http: HttpService = new HttpService();

    getCompanys(): Promise<any> {
        return this.http.get<any>({ url: "http://localhost:3000/api/companies" });
    }

    getCompanyById(id: string): Promise<any> {
        return this.http.get<any>({ url: `http://localhost:3000/api/company/${id}` })
    }
}