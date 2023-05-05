import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import httpConfig from 'src/config/http.config';

@Injectable()
export class WebServiceService {
  constructor(
    private readonly http: HttpService,
    private readonly logger: Logger = new Logger(WebServiceService.name),
  ) {}

  async requestGet(url: string, config?: AxiosRequestConfig) {
    const token = await this.auth();

    if (!config) {
      config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }

    let data: any = <any>[];

    await this.http.get(url, config).forEach((value) => {
      data = value.data;
    });

    this.logger.log('WebService request successfully');

    return data;
  }

  async requestPost(url: string, body: object, config?: AxiosRequestConfig) {
    const token = await this.auth();

    if (!config) {
      config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }

    let data: any = <any>[];

    await this.http.post(url, body, config).forEach((value) => {
      data = value.data;
    });

    this.logger.log('WebService request successfully');

    return data;
  }

  // Privates

  private async auth(): Promise<string> {
    let token = '';

    await this.http
      .post(`${httpConfig().urlWebService}/auth/login`, {
        username: httpConfig().userWebService,
        password: httpConfig().passWebService,
      })
      .forEach((value) => {
        const access_token = value.data['access_token'];
        token = access_token;
      });

    return token;
  }
}
