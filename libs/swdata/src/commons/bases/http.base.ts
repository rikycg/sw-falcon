export abstract class HttpBase {
  abstract get<T>(url: string, options?: any): Promise<T>;
  abstract post<T>(url: string, body: any, options?: any): Promise<T>;
  abstract put<T>(url: string, body: any, options?: any): Promise<T>;
  abstract delete<T>(url: string, options?: any): Promise<T>;
  abstract patch<T>(url: string, body: any, options?: any): Promise<T>;
}
