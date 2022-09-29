import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ReduxUtils from "./ReduxUtils";
import { AsyncSlice } from "../redux";
import { fetchCurrency } from "../thunks";

export interface CurrencyRatesSliceState {
  rates: AsyncSlice<CurrencyRatesSliceState[]>;
}

export const initialState: CurrencyRatesSliceState = {
  rates: ReduxUtils.getAsyncSlice<CurrencyRatesSliceState[]>(),
};

const currencySlice = createSlice({
  name: "currencyRates",
  initialState,
  reducers: {
    resetState: (state) => {
      state.rates = initialState.rates;
    },
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
    builder.addCase(fetchCurrency.rejected, (state) => {
      state.rates.isLoading = false;
      state.rates.error = "something vent wrong";
    });
  },
});

export default currencySlice.reducer;
