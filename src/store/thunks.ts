import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrency = createAsyncThunk(
  "currencyRates/fetchCurrency",
  async  (base: string ='usd') => {
    const response = await axios.get<any>(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2020-11-24/currencies/${base}.json`
    );
    return response.data;
  }
);
