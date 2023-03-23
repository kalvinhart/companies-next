import { HttpService } from "../HttpService/HttpService";
import { IContentService } from "./IContentService";

interface CockpitModel {
    fields: any;
    entries: any[];
}

export class ContentService implements IContentService {
    cmsRoot: string = process.env.NEXT_PUBLIC_CMS_ROOT ?? "";
    apiRoot: string = `${this.cmsRoot}/api/collections/get`;
    apiSingleton: string = `${this.cmsRoot}/api/singletons/get`;

    http: HttpService = new HttpService();

    async getSectors(): Promise<any[]> {
        const res = await this.http.get<CockpitModel>({ url: `${this.apiRoot}/eossectors` });
        return res.entries;
    }
    async getHomepage(): Promise<any[]> {
        const res = await this.http.get<CockpitModel>({ url: `${this.apiRoot}/eoshomepagecontent` });
        return res.entries;
    }
}