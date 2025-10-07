// src/types/common.ts
export type Status = "loading" | "success" | "error";

export interface ApiResponse<T> {
  data: T;
  message: string;
}
