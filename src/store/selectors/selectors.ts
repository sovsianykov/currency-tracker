import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RateItem } from "../../shared/models/models";


const getRates = (state:RootState) => state.currencyReducer

export const ratesSelector = createSelector(
       [getRates],
  ({rates,baseCurrency}) =>{
         let ratesData: ({ [s: string]: any; } | ArrayLike<any>)[] = []
         let currencyData: RateItem[] = []
         if (rates.data) {
           ratesData =  Object.values(rates.data)
         }

         if (ratesData[0]) {
          currencyData = Object.entries(ratesData[0]).map(c => {
            return { currency: c[0],rate:c[1] }
          })
         }


     return {
        baseCurrency,
        currencyData
     }
  }
)