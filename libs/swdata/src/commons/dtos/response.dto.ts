export class ResponseDto<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}