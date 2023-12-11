import { lastValueFrom } from 'rxjs';

import { HttpBase } from '@swfalcon/swdata';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService extends HttpBase {
  constructor(public http: HttpClient) {
    super();
  }

  get<T>(url: string, options?: any): Promise<T> {
    return lastValueFrom(this.http.get<T>(url, options)) as Promise<T>;
  }

  post<T>(url: string, body: any, options?: any): Promise<T> {
    return lastValueFrom(this.http.post<T>(url, body, options)) as Promise<T>;
  }

  put<T>(url: string, body: any, options?: any): Promise<T> {
    return lastValueFrom(this.http.put<T>(url, body, options)) as Promise<T>;
  }

  delete<T>(url: string, options?: any): Promise<T> {
    return lastValueFrom(this.http.delete<T>(url, options)) as Promise<T>;
  }

  patch<T>(url: string, body: any, options?: any): Promise<T> {
    return lastValueFrom(this.http.patch<T>(url, body, options)) as Promise<T>;
  }
}