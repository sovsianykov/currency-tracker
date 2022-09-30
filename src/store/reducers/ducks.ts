import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ReduxUtils from "./ReduxUtils";
import { AsyncSlice } from "../redux";
import { fetchCurrency } from "../thunks";

export interface CurrencyRatesSliceState {
  rates: AsyncSlice<CurrencyRatesSliceState[]>;
  baseCurrency:string
}

export const initialState: CurrencyRatesSliceState = {
  rates: ReduxUtils.getAsyncSlice<CurrencyRatesSliceState[]>(),
  baseCurrency: "uah"
};

const currencySlice = createSlice({
  name: "currencyRates",
  initialState,
  reducers: {
    resetState: (state) => {
      state.rates = initialState.rates;
    },
    setBaseCurrency: (state,action:PayloadAction<string>) =>{
      state.baseCurrency = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.pending, (state) => {
      state.rates.isLoading = true;
    });
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.rates.isLoading = false;
      state.rates.error = "";
      state.rates.data = action.payload;
    });
    builder.addCase(fetchCurrency.rejected, (state,{payload}) => {
      state.rates.isLoading = false;
      state.rates.error = payload as string;
    });
  },
});

export default currencySlice.reducer;
