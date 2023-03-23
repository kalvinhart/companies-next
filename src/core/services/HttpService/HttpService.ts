import Axios, { AxiosResponse } from "axios";
import { GetOptions, IHttpService, PostOptions } from "./IHttpService";

export class HttpService implements IHttpService {
    async get<T>({ url }: GetOptions): Promise<T> {
        const response: AxiosResponse = await Axios.get(url);
        return response.data;
    }

    async post<D, T>({ url, data, options = {} }: PostOptions<D>): Promise<T> {
        const reponse: AxiosResponse = await Axios.post(url, data, options);
        return reponse.data;
    }
}