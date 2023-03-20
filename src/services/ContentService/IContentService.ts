export interface IContentService {
    getSectors(): Promise<any[]>;
    getHomepage(): Promise<any[]>;
}