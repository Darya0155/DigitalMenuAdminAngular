import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {
  constructor(public http: HttpClient) {}

  sendPostRequest(url: string, body: any) {
    return this.http.post(url, body);
  }
}
