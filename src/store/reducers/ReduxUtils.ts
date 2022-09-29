import {AsyncSlice} from "../redux";
import {Draft} from "@reduxjs/toolkit";


class ReduxUtils {
    static getAsyncSlice<T>(initialData?: T): AsyncSlice<T> {
        return {
            data: initialData || null,
            isLoading : false,
            error: null,
        }
    }
         static defaultPendingActionHandler<T extends Draft<AsyncSlice<unknown>>>(
             slice: T,
         ): void {
           slice.isLoading = true;
           slice.error = null;
         }
    static defaultFulfilledActionHandler<K, T extends Draft<AsyncSlice<K>>>(
        slice: T,
        data: Draft<K>
    ): void {
        slice.isLoading = false;
        slice.data = data;
    }
    static defaultRejectedActionHandler<K, T extends Draft<AsyncSlice<K>>>(
        slice: T,
        error: string,
        data: Draft<K>
    ): void {
        slice.data = data;
        slice.isLoading = true;
        slice.error = null;
    }
}

export default ReduxUtils