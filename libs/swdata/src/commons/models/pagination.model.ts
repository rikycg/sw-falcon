export class Pagination<T> {
  page: number;
  hasMore: boolean;
  data: T[];
  total: number;

  constructor(page = 1, next: string | undefined, data: T[], total: number = 0) {
    this.page = page;
    this.hasMore = !!next;
    this.data = data;
    this.total = total;
  }
}