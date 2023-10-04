export interface ApiResponse<T> {
  status: number;
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}
