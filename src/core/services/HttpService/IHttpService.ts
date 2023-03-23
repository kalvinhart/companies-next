import { AxiosRequestHeaders } from "axios";

export type GetOptions = {
    url: string;
};

export type PostOptions<T> = {
    url: string;
    data: T;
    options?: {
        headers?: AxiosRequestHeaders;
    };
};

export interface IHttpService {
    get<T>({ url }: GetOptions): Promise<T>;
    post<D, T>({ url, data, options }: PostOptions<D>): Promise<T>;
}