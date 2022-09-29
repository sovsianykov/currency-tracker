import {Nullable} from "./general";

export interface AsyncSlice<T> {
  data: Nullable<T>;
  isLoading: boolean;
  error: Nullable<string>;
}

