export type FilterParams = Record<string, string>;

export const EMPTY_FILTERS: FilterParams = {};

export interface RequestState<T> {
  error?: string;
  data?: T;
  loading: boolean;
}

export function RS_EMPTY(): RequestState<any> {
  return {
    loading: false,
  };
}

export function RS_LOADING(): RequestState<any> {
  return {
    loading: true,
  };
}

export function RS_ERROR(error: string): RequestState<any> {
  return {
    error,
    loading: false,
  };
}

export function RS_SUCCESS<T>(data: T): RequestState<T> {
  return {
    data,
    loading: false,
  };
}
