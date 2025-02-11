import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestContextService {
  private token: string;

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
