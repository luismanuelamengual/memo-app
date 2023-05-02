import axios, { AxiosInstance } from 'axios';

export class ApiClient {
  private instance: AxiosInstance;

  public constructor(baseURL = '/api/') {
    this.instance = axios.create({ baseURL });
  }

  public async call <T> (endpoint: string, content?: any): Promise<T> {
    const response = await this.instance.post(endpoint, content);
    return response.data.data as T;
  }
}

export const Api = new ApiClient();